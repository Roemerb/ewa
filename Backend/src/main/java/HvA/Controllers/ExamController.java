package HvA.Controllers;


import HvA.dao.ExamDao;
import HvA.model.Exam;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.NoResultException;
import java.util.List;

@RestController
@CrossOrigin
public class ExamController
{
    @Autowired
    private ExamDao dao;

    @RequestMapping(value = "/exam")
    public List<Exam> getAllExams()
    {
        List<Exam> exams = dao.getAllExams();

        return exams;
    }

    @RequestMapping
    public ResponseEntity<Exam> get(@PathVariable("id") int id)
    {
        Exam exam = null;
        try
        {
            exam = dao.getExam(id);
        }
        catch(NoResultException ex)
        {
            exam = new Exam();
        }

        return new ResponseEntity<Exam>(exam, HttpStatus.OK);
    }
}
