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

})
public class Grade
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "course_id")
    private int courseId;

    @Column(name = "type")
    private String gradeType;

    @Column(name = "grade")
    private String grade;

    @Column(name = "passed")
    private int passed;

    public Grade(int id, int courseId, String gradeType, String grade, int passed) {
        this.id = id;
        this.courseId = courseId;
        this.gradeType = gradeType;
        this.grade = grade;
        this.passed = passed;
    }

    public Grade() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
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
}
