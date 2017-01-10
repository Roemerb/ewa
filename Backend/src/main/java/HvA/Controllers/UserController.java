package HvA.Controllers;

import HvA.dao.UserDao;
import HvA.model.Grade;
import HvA.model.Group;
import HvA.model.Study_Program;
import HvA.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.NoResultException;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
public class UserController
{

    @Autowired
    private UserDao dao;

    @RequestMapping(value = "/user")
    public List<User> getAllUsers()
    {
        List<User> users = dao.getAllUsers();

        return users;
    }

    @RequestMapping(value = "/user/{id}")
    public ResponseEntity<User> get(@PathVariable("id") int id)
    {
        User user = null;
        try
        {
            user = dao.getUser(id);
        }
        catch(NoResultException ex)
        {
            user = new User();
        }

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/user/{id}/group")
    public ResponseEntity<Group> getGroupForUser(@PathVariable("id") int id)
    {
        User user = null;
        try
        {
            user = dao.getUser(id);
        }
        catch(NoResultException ex)
        {
            user = new User();
        }

        Group group = user.getGroup();

        return new ResponseEntity<Group>(group, HttpStatus.OK);
    }

    @RequestMapping(value = "/user/{id}/group/program")
    public ResponseEntity<Study_Program> getProgramForGroupForUser(@PathVariable("id") int id)
    {
        User user = null;
        try
        {
            user = dao.getUser(id);
        }
        catch(NoResultException ex)
        {
            user = new User();
        }

        Study_Program study_program = user.getGroup().getStudy_program();

        return new ResponseEntity<Study_Program>(study_program, HttpStatus.OK);
    }

    @RequestMapping(value = "/user/{id}/grades")
    public Set<Grade> getUserGrades(@PathVariable("id") int id)
    {
        User user = null;
        try
        {
            user = dao.getUser(id);
        }
        catch(NoResultException ex)
        {
            user = new User();
        }

        return user.getGrades();
    }
}
