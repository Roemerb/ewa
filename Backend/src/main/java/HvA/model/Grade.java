package HvA.model;

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

    @Column(name = "exam_id")
    private int exam_id;


    public Grade(String gradeType, String grade, int passed, int user_id, int exam_id) {
        this.gradeType = gradeType;
        this.grade = grade;
        this.passed = passed;
        this.user_id = user_id;
        this.exam_id = exam_id;
    }

    public Grade() {
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

    public int getExam_id() {
        return exam_id;
    }

    public void setExam_id(int exam_id) {
        this.exam_id = exam_id;
    }
}
