package HvA.Controllers;

import HvA.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;

import HvA.dao.CourseDao;

import java.util.List;

@RestController
public class CourseController
{

    @Autowired
    private CourseDao dao;

    @RequestMapping(value = "/course/{id}", method = RequestMethod.GET)
    public Course getCourse(@PathVariable("id") int id)
    {
        Course course = null;
        try
        {
            course = dao.getCourse(id);
        } catch(NoResultException ex)
        {
            course = new Course();
        }
        return course;
    }

    @RequestMapping(value = "/course", method = RequestMethod.GET)
    public List<Course> getAllCourses()
    {
        List<Course> courses = dao.getAllCourses();

        return courses;
    }
}