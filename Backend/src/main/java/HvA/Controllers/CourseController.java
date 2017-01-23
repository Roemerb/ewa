package HvA.Controllers;

import HvA.model.Course;
import HvA.model.Course_Teacher;
import HvA.model.Exam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.NoResultException;
import javax.xml.ws.Response;

import HvA.dao.CourseDao;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
public class CourseController
{

    /**
     * We need the course repo for data
     *
     * @var CourseDao dao
     */
    @Autowired
    private CourseDao dao;

    /**
     * Get a course by it's ID
     *
     * @param id
     * @return ResponseEntity<Course>
     */
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

    /**
     * Get all courses
     *
     * @return List<Course>
     */
    @RequestMapping(value = "/course", method = RequestMethod.GET)
    public List<Course> getAllCourses()
    {
        return dao.getAllCourses();
    }

    /**
     * Get the exams for a specific course
     *
     * @param int id
     * @return Set<Exam>
     */
    @RequestMapping(value="/course/{id}/exams")
    public Set<Exam> getExamsForCourses(@PathVariable("id") int id)
    {
        Course course = null;
        try
        {
            course = dao.getCourse(id);
        } catch(NoResultException ex)
        {
            course = new Course();
        }

        return course.getExams();
    }


    /**
     * Create a new course
     *
     * @param Course
     * @return Course
     */
    @RequestMapping(value = "/course/create", method = RequestMethod.POST)
    public ResponseEntity<Course> createCourse(@RequestBody Course course)
    {
        dao.createCourse(course);

        return new ResponseEntity<Course>(course, HttpStatus.OK);
    }

    /**
     * Get the teacher for a specific course
     *
     * @param id
     * @return User
     */
    @RequestMapping(value = "/course/{id}/teacher")
    public Set<Course_Teacher> getCourseTeacher(@PathVariable("id") int id)
    {
        Course course = null;
        try
        {
            course = dao.getCourse(id);
        }
        catch(NoResultException ex)
        {
            course = new Course();
        }

        return course.getCourseTeacher();
    }
}