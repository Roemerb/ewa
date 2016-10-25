package HvA.model;

import javax.persistence.*;

@Entity
@Table(name = "courses")
@NamedQueries({
        @NamedQuery(name = "Course.find", query = "SELECT c FROM Course c WHERE id = :id")
})

public class Course
{
    @Id
    @GeneratedValue
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
}
