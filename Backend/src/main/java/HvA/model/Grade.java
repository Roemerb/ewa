package HvA.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Project: Backend,
 * Created by Kadir Basturk on 6-10-2016.
 * Help by René Sasbrink
 */
@Entity
@Table(name = "grades")
@NamedQueries(value = {
        @NamedQuery(name = "Grade.get", query = "SELECT c FROM Grade c WHERE id = :id"),
        @NamedQuery(name = "Grade.getAll", query = "SELECT c FROM Grade c"),
        @NamedQuery(name = "Grade.getAllByUser", query = "SELECT g FROM Grade g INNER JOIN Exam e ON g.exam.id = e.id INNER JOIN Course c ON e.course.id = c.id WHERE g.user.id = :id"),

})
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "type")
    private String gradeType;

    @Column(name = "grade")
    private String grade;

    @Column(name = "passed")
    private int passed;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "exam_id")
    private Exam exam;

    public Grade(int id, String gradeType, String grade, int passed, User user, Exam exam)
    {
        setId(id);
        setGradeType(gradeType);
        setGrade(grade);
        setPassed(passed);
        setUser(user);
        setExam(exam);
    }

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
