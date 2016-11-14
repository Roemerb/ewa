package HvA.dao;


import HvA.model.Course;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
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

    @Transactional
    public Course createCourse(Course course)
    {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("MyPersisntenceUnit");
        EntityManager r = emf.createEntityManager();
        r.getTransaction().begin();

        r.persist(course);
        r.getTransaction().commit();
        r.close();
        emf.close();

        return course;
    }
}