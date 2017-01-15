package HvA.dao;


import HvA.model.Study_Plan;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class StudyPlanDao
{

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public List<Study_Plan> getAllStudyPlan()
    {
        return em.createNamedQuery("Study_Plan.getAll", Study_Plan.class).getResultList();
    }

    @Transactional
    public Study_Plan getStudyPlan(int id)
    {
        return em.createNamedQuery("Study_Plan.get", Study_Plan.class).setParameter("id", id).getSingleResult();
    }

    @Transactional
    public Study_Plan createStudyPlan(Study_Plan studyplan)
    {
        studyplan = em.merge(studyplan);
        em.persist(studyplan);

        return studyplan;
    }
}