package HvA.Controllers;

import HvA.dao.StudyProgramDao;
import HvA.model.Group;
import HvA.model.Study_Program;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.NoResultException;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
public class StudyProgramController
{
    @Autowired
    private StudyProgramDao dao;

    @RequestMapping(value = "/studyprogram/{id}")
    public ResponseEntity<Study_Program> get(@PathVariable("id") int id)
    {
        Study_Program study_program = null;
        try
        {
            study_program = dao.getStudyProgram(id);
        }
        catch(NoResultException ex)
        {
            study_program = new Study_Program();
        }

        return new ResponseEntity<Study_Program>(study_program, HttpStatus.OK);
    }

    @RequestMapping(value = "/studyprogram/{id}/groups")
    public Set<Group> getGroupsForStudyProgram(@PathVariable("id") int id)
    {
        Study_Program study_program = null;
        try
        {
            study_program = dao.getStudyProgram(id);
        } catch(NoResultException ex)
        {
            study_program = new Study_Program();
        }

        return study_program.getGroups();
    }

    @RequestMapping(value = "/studyprogram", method = RequestMethod.GET)
    public List<Study_Program> getAllStudyPrograms()
    {
        return dao.getAllStudyPrograms();
    }

    @RequestMapping(value = "/studyprogram/create", method = RequestMethod.POST)
    public ResponseEntity<Study_Program> createStudyProgram(@RequestBody Study_Program study_program)
    {
        dao.createStudyProgram(study_program);

        return new ResponseEntity<Study_Program>(study_program, HttpStatus.OK);
    }
}
