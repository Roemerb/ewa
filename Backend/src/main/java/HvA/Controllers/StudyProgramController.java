package HvA.Controllers;

import HvA.dao.StudyProgramDao;
import HvA.model.Course;
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

    /**
     * We need the repo to retreive data
     */
    @Autowired
    private StudyProgramDao dao;

    /**
     * Get all study plans
     *
     * @return List<Study_Program>
     */
    @RequestMapping(value = "/studyprogram")
    public List<Study_Program> getAllStudyPrograms()
    {
        List<Study_Program> studyPrograms = dao.getAllStudyPrograms();

        return studyPrograms;
    }

    /**
     * Get a specific study program
     *
     * @param int id
     * @return ResponseEntity<Study_Program>
     */
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

    /**
     * Get the groups belonging to a study program
     *
     * @param id
     * @return
     */
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

    /**
     * Get the groups belonging to a study program
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/studyprogram/{id}/courses")
    public Set<Course> getCoursesForStudyProgram(@PathVariable("id") int id)
    {
        Study_Program study_program = null;
        try
        {
            study_program = dao.getStudyProgram(id);
        } catch(NoResultException ex)
        {
            study_program = new Study_Program();
        }

        return study_program.getCourses();
    }

    @RequestMapping(value = "/studyprogram", method = RequestMethod.POST)
    public ResponseEntity<Study_Program> createStudyProgram(@RequestBody Study_Program study_program)
    {
        dao.createStudyProgram(study_program);

        return new ResponseEntity<Study_Program>(study_program, HttpStatus.OK);
    }

    @RequestMapping(value = "/studyprogram/{id}/delete", method = RequestMethod.DELETE)
    public boolean deleteStudyProgram(@PathVariable("id") int id)
    {
        return (dao.deleteStudyProgram(id) == 1);
    }
}
