package HvA.Controllers;

import HvA.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

    @RequestMapping("/course/{id}")
    public Course getCourse(@RequestParam(value = "id", required = true) @PathVariable("id") int id)
    {
        return dao.getCourse(id);
    }
}
