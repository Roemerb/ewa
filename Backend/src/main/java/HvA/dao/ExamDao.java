package HvA.dao;

import HvA.model.Exam;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.List;

@Repository
public class ExamDao
{
    @PersistenceContext
    private EntityManager em;

    @Transactional
    public List<Exam> getAllExams()
    {
        return em.createNamedQuery("Exam.getAll", Exam.class).getResultList();
    }

    @Transactional
    public Exam getExam(int id)
    {
        return em.find(Exam.class, id);
    }
}
