package HvA.Controllers;

import HvA.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import HvA.dao.CourseDao;

@RestController
public class CourseController
{

    @PersistenceContext
    private EntityManager factory;

    @Autowired
    private CourseDao dao;

    @RequestMapping(value = "/course/{id}", method = RequestMethod.GET)
    public Course getCourse(@PathVariable("id") int id)
    {
        return dao.getCourse(id);
    }
}
