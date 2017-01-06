package HvA.Controllers;

import HvA.model.Course;
import HvA.model.Exam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.persistence.NoResultException;

import HvA.dao.CourseDao;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
public class CourseController
{

    @Autowired
    private CourseDao dao;

    @RequestMapping(value = "/course/{id}")
    public ResponseEntity<Course> get(@PathVariable("id") int id) {

        Course course = null;
        try
        {
            course = dao.getCourse(id);
        } catch(NoResultException ex)
        {
            course = new Course();
        }

        return new ResponseEntity<Course>(course, HttpStatus.OK);
    }

    @RequestMapping(value = "/course/{id}/exams")
    public ResponseEntity<Set<Exam>> getExamsForCourse(@PathVariable("id") int id)
    {
        Course course = null;
        Set<Exam> exams = new HashSet<Exam>();
        try
        {
            course = dao.getCourse(id);
            exams = course.getExams();
        }
        catch (NoResultException ex)
        {
            course = new Course();
        }

        return new ResponseEntity<Set<Exam>>(exams, HttpStatus.OK);
    }

    @RequestMapping(value = "/course", method = RequestMethod.GET)
    public List<Course> getAllCourses()
    {
        List<Course> courses = dao.getAllCourses();

        return courses;
    }

    @RequestMapping(value = "/course/create", method = RequestMethod.POST)
    public ResponseEntity<Course> createCourse(@RequestBody Course course)
    {
        dao.createCourse(course);

        return new ResponseEntity<Course>(course, HttpStatus.OK);
    }
}