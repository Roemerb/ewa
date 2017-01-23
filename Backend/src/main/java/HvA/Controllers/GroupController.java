package HvA.Controllers;

import HvA.dao.GroupDao;
import HvA.model.Group;
import HvA.model.Study_Program;
import HvA.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.NoResultException;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
public class GroupController
{

    /**
     * We need the group repo for data
     *
     * @var GroupDao dao
     */
    @Autowired
    private GroupDao dao;

    /**
     * Get a specific group
     *
     * @param int id
     * @return
     */
    @RequestMapping(value = "/group/{id}")
    public ResponseEntity<Group> get(@PathVariable("id") int id)
    {
        Group group = null;
        try
        {
            group = dao.getGroup(id);
        }
        catch(NoResultException ex)
        {
            group = new Group();
        }

        return new ResponseEntity<Group>(group, HttpStatus.OK);
    }

    /**
     * Get all groups
     *
     * @return List<Group>
     */
    @RequestMapping(value = "/group", method = RequestMethod.GET)
    public List<Group> getAllGroups()
    {
        return dao.getAllGroups();
    }

    /**
     * Get the study program for a specific group
     *
     * @param int id
     * @return ResponseEntity<Group>
     */
    @RequestMapping(value = "/group/{id}/program")
    public ResponseEntity<Study_Program> getProgramForGroup(@PathVariable("id") int id)
    {
        Group group = null;
        try
        {
            group = dao.getGroup(id);
        }
        catch(NoResultException ex)
        {
            group = new Group();
        }

        return new ResponseEntity<Study_Program>(group.getStudy_program(), HttpStatus.OK);
    }

    /**
     * Get a list of users in a specific group
     *
     * @param int id
     * @return Set<User>
     */
    @RequestMapping(value = "/group/{id}/users")
    public Set<User> getUsersForGroup(@PathVariable("id") int id)
    {
        Group group = null;
        try
        {
            group = dao.getGroup(id);
        }
        catch(NoResultException ex)
        {
            group = new Group();
        }

        return group.getUsers();
    }
}
