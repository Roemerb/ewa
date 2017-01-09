package HvA.Controllers;

import HvA.dao.GroupDao;
import HvA.model.Group;
import HvA.model.Study_Program;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.NoResultException;
import java.util.List;

@RestController
@CrossOrigin
public class GroupController
{
    @Autowired
    private GroupDao dao;

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

    @RequestMapping(value = "/group", method = RequestMethod.GET)
    public List<Group> getAllGroups()
    {
        return dao.getAllGroups();
    }

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
}
