package HvA.Controllers;

import HvA.dao.StudyPlanDao;
import HvA.model.Study_Plan;
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


    @RequestMapping(value = "/studyplan/create", method = RequestMethod.POST)
    public ResponseEntity<Study_Plan> createStudyPlan(@RequestBody Study_Plan studyplan)
    {
        dao.createStudyPlan(studyplan);

        return new ResponseEntity<Study_Plan>(studyplan, HttpStatus.OK);
    }
}