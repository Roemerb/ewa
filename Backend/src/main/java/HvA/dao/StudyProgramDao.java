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
        return em.createNamedQuery("StudyProgram.findAll", Study_Program.class).getResultList();
    }

    @Transactional
    public Study_Program getStudyProgram(int id)
    {
        return em.createNamedQuery("StudyProgram.find", Study_Program.class).setParameter("id", id).getSingleResult();
    }

    @Transactional
    public Study_Program createStudyProgram(Study_Program study_program)
    {
        study_program = em.merge(study_program);
        em.persist(study_program);

        return study_program;
    }

    @Transactional
    public int deleteStudyProgram(int id)
    {
        System.out.println("The ID is " + id);
        return em.createQuery("DELETE Study_Program sg WHERE id = :id").setParameter("id", id).executeUpdate();
    }
}
