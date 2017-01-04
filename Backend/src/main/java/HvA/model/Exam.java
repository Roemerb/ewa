package HvA.model;

import javax.persistence.*;

/**
 * Project: Backend,
 * Created by Kadir Basturk on 6-10-2016.
 */
@Entity
@Table(name = "exams")
@NamedQueries(value = {
        @NamedQuery(name = "Exam.get", query = "SELECT e FROM Exam e WHERE id = :id"),
        @NamedQuery(name = "Exam.getAll", query = "SELECT e FROM Exam e"),

})
public class Exam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "course_id")
    private int courseId;

    @Column(name = "location")
    private String location;

    @Column(name = "date_and_time")
    private String date_and_time;

    @Column(name = "type")
    private String type;

    public Exam(int courseId, String location, String date_and_time, String type) {
        this.courseId = courseId;
        this.location = location;
        this.date_and_time = date_and_time;
        this.type = type;
    }

    public Exam() {
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDate_and_time() {
        return date_and_time;
    }

    public void setDate_and_time(String date_and_time) {
        this.date_and_time = date_and_time;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
