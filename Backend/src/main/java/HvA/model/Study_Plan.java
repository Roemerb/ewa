package HvA.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "study_plan")
@NamedQueries({
        @NamedQuery(name = "Study_Plan.get", query = "SELECT s FROM Study_Plan s WHERE id = :id"),
        @NamedQuery(name = "Study_Plan.getAll", query = "SELECT s FROM Study_Plan s"),
})

public class Study_Plan
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "semester4")
    private String semester4;

    @Column(name = "semester5")
    private String semester5;

    @Column(name = "minor")
    private String minor;

    @Column(name = "accepted")
    private boolean accepted;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;



    public Study_Plan(int id, User user_id, String semester4, String semester5, String minor)
    {
        setId(id);
        setUser(user_id);
        setSemester4(semester4);
        setSemester5(semester5);
        setMinor(minor);
    }

    public Study_Plan()
    {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSemester4() { return semester4;}

    public String getSemester5() {
        return semester5;
    }

    public String getMinor() {
        return minor;
    }

    public boolean isAccepted() {
        return accepted;
    }

    public void setAccepted(boolean accepted) {
        this.accepted = accepted;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setSemester4(String semester4)
    {
        this.semester4 = semester4;
    }

    public void setSemester5(String semester5)
    {
        this.semester5 = semester5;
    }

    public void setMinor(String minor)
    {
        this.minor = minor;
    }
}
