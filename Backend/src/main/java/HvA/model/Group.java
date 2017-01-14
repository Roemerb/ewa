package HvA.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "groups")
@NamedQueries({
        @NamedQuery(name = "Group.findAll", query="SELECT g FROM Group g"),
        @NamedQuery(name = "Group.find", query="SELECT g FROM Group g WHERE id = :id")
})
public class Group
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "graduation_year")
    private Date year;

    @ManyToOne
    @JoinColumn(name = "study_program_id")
    private Study_Program study_program;

    @JsonIgnore
    @OneToMany(mappedBy = "group")
    public Set<User> users;


    public Group()
    {

    }

    public Group(int id, Date year, Study_Program study_program)
    {
        setId(id);
        setYear(year);
        setStudy_program(study_program);
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public Date getYear()
    {
        return year;
    }

    public void setYear(Date year)
    {
        this.year = year;
    }

    public Study_Program getStudy_program()
    {
        return study_program;
    }

    public void setStudy_program(Study_Program study_program)
    {
        this.study_program = study_program;
    }

    public Set<User> getUsers()
    {
        return users;
    }
}
