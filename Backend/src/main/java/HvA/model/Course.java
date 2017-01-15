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

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "study_program_id")
    private Study_Program study_program;

    @JsonIgnore
    @OneToMany(mappedBy = "course")
    private Set<Course_Teacher> course_teacher;

    public Set<Exam> getExams()
    {
        return exams;
    }

    public Course(int id, Study_Program study_program, int semester, String name, int ECTS, String type)
    {
        setId(id);
        setStudy_program(study_program);
        setSemester(semester);
        setName(name);
        setECTS(ECTS);
        setType(type);
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

    public Study_Program getStudy_program()
    {
        return study_program;
    }

    public void setStudy_program(Study_Program study_program)
    {
        this.study_program = study_program;
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

    public Set<Course_Teacher> getCourseTeacher()
    {
        return course_teacher;
    }
}
