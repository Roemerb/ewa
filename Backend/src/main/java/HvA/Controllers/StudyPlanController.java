package HvA.Controllers;

import HvA.dao.StudyPlanDao;
import HvA.dao.UserDao;
import HvA.model.Study_Plan;
import HvA.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.persistence.NoResultException;
import java.util.List;


@RestController
@CrossOrigin
public class StudyPlanController
{

    @Autowired
    private StudyPlanDao dao;

    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "/studyplan/{id}")
    public ResponseEntity<Study_Plan> get(@PathVariable("id") int id) {

        Study_Plan studyplan = null;
        try
        {
            studyplan = dao.getStudyPlan(id);
        } catch(NoResultException ex)
        {
            studyplan = new Study_Plan();
        }

        return new ResponseEntity<Study_Plan>(studyplan, HttpStatus.OK);
    }
    @RequestMapping(value = "/studyplan", method = RequestMethod.GET)
    public List<Study_Plan> getAllStudyPlan()
    {
        return dao.getAllStudyPlan();
    }


    @RequestMapping(value = "/studyplan", method = RequestMethod.POST)
    public ResponseEntity<Study_Plan> createStudyPlan(
            @RequestBody Study_Plan studyplan,
            @RequestParam("user_id") int userId)
    {
        User user = null;
        try
        {
            user = userDao.getUser(userId);
        }
        catch(NoResultException ex)
        {
            System.out.println(ex.getMessage());
        }

        Study_Plan newPlan = new Study_Plan();
        newPlan.setAccepted(true);
        newPlan.setSemester4(studyplan.getSemester4());
        newPlan.setSemester5(studyplan.getSemester5());
        newPlan.setMinor(studyplan.getMinor());
        newPlan.setUser(user);

        dao.createStudyPlan(newPlan);

        return new ResponseEntity<Study_Plan>(newPlan, HttpStatus.OK);
    }

    @RequestMapping(value ="/studyplan/{id}/delete", method = RequestMethod.DELETE)
    public boolean deleteStudyPlan(@PathVariable("id") int id)
    {
        return(dao.deleteStudyPlan(id) == 1);
    }
}