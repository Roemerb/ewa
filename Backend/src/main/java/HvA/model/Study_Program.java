package HvA.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "study_programs")
@NamedQueries({
        @NamedQuery(name = "StudyProgram.findAll", query="SELECT sg FROM Study_Group sg"),
        @NamedQuery(name = "StudyProgram.find", query="SELECT sg FROM Study_Group sg WHERE id = :id")
})
public class Study_Program
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    String name;

    @Column(name = "group_prefix")
    String groupPrefix;

    @Column(name = "duration_years")
    int durationYears;

    @JsonIgnore
    @OneToMany(mappedBy = "study_program")
    Set<Group> groups;

    public Study_Program()
    {

    }

    public Study_Program(int id, String name, String groupPrefix, int durationYears)
    {
        setId(id);
        setName(name);
        setGroupPrefix(groupPrefix);
        setDurationYears(durationYears);
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getGroupPrefix()
    {
        return groupPrefix;
    }

    public void setGroupPrefix(String groupPrefix)
    {
        this.groupPrefix = groupPrefix;
    }

    public int getDurationYears()
    {
        return durationYears;
    }

    public void setDurationYears(int durationYears)
    {
        this.durationYears = durationYears;
    }

    public Set<Group> getGroups()
    {
        return groups;
    }
}
