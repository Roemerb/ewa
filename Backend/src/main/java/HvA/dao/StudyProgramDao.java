package HvA.dao;

import HvA.model.Study_Program;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;

@Repository
public class StudyProgramDao
{
    @PersistenceContext
    private EntityManager em;

    @Transactional
    public List<Study_Program> getAllStudyPrograms()
    {
        Query query = em.createQuery("SELECT sg FROM Group sg");
        return new ArrayList<Study_Program>(query.getResultList());
    }

    @Transactional
    public Study_Program getStudyProgram(int id)
    {
        Query query = em.createQuery("SELECT sg FROM Group sg WHERE id  = :id", Study_Program.class);

        return (Study_Program) query.getSingleResult();
    }

    @Transactional
    public Study_Program createStudyProgram(Study_Program study_program)
    {
        study_program = em.merge(study_program);
        em.persist(study_program);

        return study_program;
    }
}
