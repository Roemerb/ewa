package HvA.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "exams")
public class Exam
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @Column(name = "location")
    private String location;

    @Column(name = "date_and_time")
    private Date dateAndTime;

    @Column(name = "type")
    private String type;

    public Exam(int id, Course course, String location, Date dateAndTime, String type)
    {
        setId(id);
        setCourse(course);
        setLocation(location);
        setDateAndTime(dateAndTime);
        setType(type);
    }

    public Exam()
    {

    }

    public Course getCourse()
    {
        return course;
    }

    public void setCourse(Course course)
    {
        this.course = course;
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }


    public String getLocation()
    {
        return location;
    }

    public void setLocation(String location)
    {
        this.location = location;
    }

    public Date getDateAndTime()
    {
        return dateAndTime;
    }

    public void setDateAndTime(Date dateAndTime)
    {
        this.dateAndTime = dateAndTime;
    }

    public String getType()
    {
        return type;
    }

    public void setType(String type)
    {
        this.type = type;
    }
}
