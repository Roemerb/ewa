package HvA.Controllers;

import HvA.dao.ExamDao;
import HvA.dao.GradeDao;
import HvA.dao.UserDao;
import HvA.model.Course;
import HvA.model.Exam;
import HvA.model.Grade;
import HvA.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.NoResultException;
import java.util.List;

@RestController
@CrossOrigin
public class GradeController {

    @Autowired
    private GradeDao dao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private ExamDao examDao;

    @RequestMapping(value = "/grade/{id}")
    public ResponseEntity<Grade> get(@PathVariable("id") int id) {

        Grade grade = null;
        try {
            grade = dao.getGrade(id);
        } catch (NoResultException ex) {
            grade = new Grade();
        }

        return new ResponseEntity<Grade>(grade, HttpStatus.OK);
    }

    @RequestMapping(value = "/grade/{id}/exam")
    public ResponseEntity<Exam> getExamForGrade(@PathVariable("id") int id)
    {
        Grade grade = null;
        try {
            grade = dao.getGrade(id);
        } catch (NoResultException ex) {
            grade = new Grade();
        }

        Exam exam = grade.getExam();

        return new ResponseEntity<Exam>(exam, HttpStatus.OK);
    }

    @RequestMapping(value = "/grade/{id}/exam/course")
    public ResponseEntity<Course> getCourseForExamForGrade(@PathVariable("id") int id)
    {
        Grade grade = null;
        try {
            grade = dao.getGrade(id);
        } catch (NoResultException ex) {
            grade = new Grade();
        }

        Course course = grade.getExam().getCourse();

        return new ResponseEntity<Course>(course, HttpStatus.OK);
    }


    @RequestMapping(value = "/grade", method = RequestMethod.GET)
    public List<Grade> getAllGrades() {
        List<Grade> grades = dao.getallGrades();

        return grades;
    }

    @RequestMapping(value = "/limitedPersonal/{limit}/{id}", method = RequestMethod.GET)
    public List<Grade> getLimitedGrades(@PathVariable("limit") int limit, @PathVariable("id") int id) {
        List<Grade> grades = dao.getLimitedGradesByUser(limit, id );

        return grades;
    }

    @RequestMapping(value = "/grade/create", method = RequestMethod.POST)
    public ResponseEntity<Grade> createGrade(
            @RequestBody Grade grade,
            @RequestParam("user_id") int userId,
            @RequestParam("exam_id") int examId)
    {

        User user = null;
        Exam exam = null;
        try {
            user = userDao.getUser(userId);
            exam = examDao.getExam(examId);
        }
        catch(NoResultException ex)
        {
            System.out.println(ex.getMessage());
        }

        Grade newGrade = new Grade();
        newGrade.setExam(exam);
        newGrade.setUser(user);
        newGrade.setGradeType(grade.getGradeType());
        newGrade.setGrade(grade.getGrade());
        newGrade.setPassed(grade.getPassed());

        dao.createGrade(newGrade);
        return new ResponseEntity<Grade>(newGrade, HttpStatus.OK);
    }
}