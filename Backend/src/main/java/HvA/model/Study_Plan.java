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

    @Column(name = "choice_1")
    private String choice_1;

    @Column(name = "choice_2")
    private String choice_2;

    @Column(name = "choice_3")
    private String choice_3;

    @Column(name = "accepted")
    private boolean accepted;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;



    public Study_Plan(int id, User user_id, String choice_1, String choice_2, String choice_3)
    {
        setId(id);
        setUser(user_id);
        setChoice_1(choice_1);
        setChoice_2(choice_2);
        setChoice_3(choice_3);
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

    public String getChoice_1() {
        return choice_1;
    }

    public void setChoice_1(String choice_1) {
        this.choice_1 = choice_1;
    }

    public String getChoice_2() {
        return choice_2;
    }

    public void setChoice_2(String choice_2) {
        this.choice_2 = choice_2;
    }

    public String getChoice_3() {
        return choice_3;
    }

    public void setChoice_3(String choice_3) {
        this.choice_3 = choice_3;
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
}
