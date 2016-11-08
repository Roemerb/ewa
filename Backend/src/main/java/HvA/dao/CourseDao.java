package HvA.dao;


import HvA.model.Course;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class CourseDao
{

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public List<Course> getAllCourses()
    {
        return em.createNamedQuery("Course.getAll", Course.class).getResultList();
    }

    @Transactional
    public Course getCourse(int id)
    {
        return em.createNamedQuery("Course.get", Course.class).setParameter("id", id).getSingleResult();
    }

//    @Transactional
//    public Course createCourse(Course course)
//    {
//        return em.createNamedQuery("Course.create", Course.class)
//                .setParameter("studyProgramId", course.getStudyProgramId())
//                .setParameter("semester", course.getSemester())
//                .setParameter("name", course.getName())
//                .setParameter("ECTS", course.getECTS())
//                .setParameter("c.type", course.getType()).getSingleResult();
//    }
}