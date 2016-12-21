package HvA.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "courses")
@NamedQueries({
        @NamedQuery(name = "Course.get", query = "SELECT c FROM Course c WHERE id = :id"),
        @NamedQuery(name = "Course.getAll", query = "SELECT c FROM Course c"),
})

public class Course
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "study_program_id")
    private int studyProgramId;

    @Column(name = "semester")
    private int semester;

    @Column(name = "name")
    private String name;

    @Column(name = "ECTS")
    private int ECTS;

    @Column(name = "type")
    private String type;

    @JsonIgnore
    @OneToMany(mappedBy = "course")
    public Set<Exam> exams;

    public Set<Exam> getExams()
    {
        return exams;
    }

    public Course(int id, int studyProgramId, int semester, String name, int ECTS, String type)
    {
        this.id = id;
        this.studyProgramId = studyProgramId;
        this.semester = semester;
        this.name = name;
        this.ECTS = ECTS;
        this.type = type;
    }

    public Course()
    {
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public int getStudyProgramId()
    {
        return studyProgramId;
    }

    public void setStudyProgramId(int studyProgramId)
    {
        this.studyProgramId = studyProgramId;
    }

    public int getSemester()
    {
        return semester;
    }

    public void setSemester(int semester)
    {
        this.semester = semester;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public int getECTS()
    {
        return ECTS;
    }

    public void setECTS(int ECTS)
    {
        this.ECTS = ECTS;
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
