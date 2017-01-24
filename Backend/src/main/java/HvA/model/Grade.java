package HvA.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "grades")
@NamedQueries(value = {
        @NamedQuery(name = "Grade.get", query = "SELECT c FROM Grade c WHERE id = :id"),
        @NamedQuery(name = "Grade.getAll", query = "SELECT c FROM Grade c"),
        @NamedQuery(name = "Grade.getAllByUser", query = "SELECT g FROM Grade g INNER JOIN Exam e ON g.exam.id = e.id INNER JOIN Course c ON e.course.id = c.id WHERE g.user.id = :id"),

})
public class Grade {

    /**
     * The ID in the database. Identifying
     *
     * @var int id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    /**
     * The type of the grade, can be PROJECT or REGULAR
     *
     * @var String gradeType
     */
    @Column(name = "type")
    private String gradeType;

    /**
     * The actual grade
     *
     * @String grade
     */
    @Column(name = "grade")
    private String grade;

    /**
     * A boolean stating if the user past the exam
     *
     * @var int passed
     */
    @Column(name = "passed")
    private int passed;

    /**
     * The user that owns this grade. Foreign key joining user_id to a User
     *
     * @var User user
     */
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    /**
     * The exam in question. Foreign key joining exam_id to an Exam
     *
     * @var Exam exam
     */
    @ManyToOne
    @JoinColumn(name = "exam_id")
    private Exam exam;

    /**
     * Constructor for grade
     *
     * @param id
     * @param gradeType
     * @param grade
     * @param passed
     * @param user
     * @param exam
     */
    public Grade(int id, String gradeType, String grade, int passed, User user, Exam exam)
    {
        setId(id);
        setGradeType(gradeType);
        setGrade(grade);
        setPassed(passed);
        setUser(user);
        setExam(exam);
    }

    /**
     * Empty contructor for Spring
     */
    public Grade() {
    }


    public Exam getExam()
    {
        return exam;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGradeType() {
        return gradeType;
    }

    public void setGradeType(String gradeType) {
        this.gradeType = gradeType;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public int getPassed() {
        return passed;
    }

    public void setPassed(int passed) {
        this.passed = passed;
    }

    public User getUser()
    {
        return user;
    }

    public void setUser(User user)
    {
        this.user = user;
    }

    public void setExam(Exam exam)
    {
        this.exam = exam;
    }

    public int getECTS() { return exam.getCourse().getECTS(); }

}
