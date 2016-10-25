package HvA.dao;


import HvA.model.Course;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class CourseDao
{

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public Course getCourse(int id)
    {
        return em.createNamedQuery("Course.find", Course.class).setParameter("id", id).getSingleResult();
    }
}