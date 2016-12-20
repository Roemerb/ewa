package HvA.dao;


import HvA.model.Grade;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class GradeDao
{

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public List<Grade> getallGrades()
    {
        return em.createNamedQuery("Grade.getAll", Grade.class).getResultList();
    }

    @Transactional
    public Grade getGrade(int id)
    {
        return em.createNamedQuery("Grade.get", Grade.class).setParameter("id", id).getSingleResult();
    }

    @Transactional
    public Grade createGrade(Grade grade)
    {
        grade = em.merge(grade);
        em.persist(grade);

        return grade;
    }
}