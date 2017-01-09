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
        @NamedQuery(name = "Grade.getAllByUser", query = "SELECT c FROM Grade c WHERE user_id = :id"),

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

    @Column(name = "user_id")
    private int user_id;


    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "exam_id")
    public Exam exam;


    public Grade(int id, String gradeType, String grade, int passed, int user_id, Exam exam)
    {
        setId(id);
        setGradeType(gradeType);
        setGrade(grade);
        setPassed(passed);
        setUser_id(user_id);
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

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public void setExam(Exam exam)
    {
        this.exam = exam;
    }
}
