package HvA.Controllers;

import HvA.dao.StudyProgramDao;
import HvA.model.Course;
import HvA.model.Course_Teacher;
import HvA.model.Exam;
import HvA.model.Study_Program;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.NoResultException;
import javax.xml.ws.Response;

import HvA.dao.CourseDao;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
public class CourseController
{

    /**
     * We need the course repo for data
     *
     * @var CourseDao dao
     */
    @Autowired
    private CourseDao dao;

    @Autowired
    StudyProgramDao programDao;

    /**
     * Get a course by it's ID
     *
     * @param id
     * @return ResponseEntity<Course>
     */
    @RequestMapping(value = "/course/{id}")
    public ResponseEntity<Course> get(@PathVariable("id") int id) {

        Course course = null;
        try
        {
            course = dao.getCourse(id);
        } catch(NoResultException ex)
        {
            course = new Course();
        }

        return new ResponseEntity<Course>(course, HttpStatus.OK);
    }

    /**
     * Get all courses
     *
     * @return List<Course>
     */
    @RequestMapping(value = "/course", method = RequestMethod.GET)
    public List<Course> getAllCourses()
    {
        return dao.getAllCourses();
    }

    /**
     * Get the exams for a specific course
     *
     * @param int id
     * @return Set<Exam>
     */
    @RequestMapping(value="/course/{id}/exams")
    public Set<Exam> getExamsForCourses(@PathVariable("id") int id)
    {
        Course course = null;
        try
        {
            course = dao.getCourse(id);
        } catch(NoResultException ex)
        {
            course = new Course();
        }

        return course.getExams();
    }


    /**
     * Create a new course
     *
     * @param Course
     * @return Course
     */
    @RequestMapping(value = "/course", method = RequestMethod.POST)
    public ResponseEntity<Course> createCourse(
            @RequestBody Course course,
            @RequestParam("program_id") int programId)
    {

        Study_Program program = null;
        try
        {
            program = programDao.getStudyProgram(programId);
        }
        catch(NoResultException ex)
        {
            System.out.println(ex.getMessage());
        }

        Course newCourse = new Course();
        newCourse.setSemester(course.getSemester());
        newCourse.setType(course.getType());
        newCourse.setECTS(course.getECTS());
        newCourse.setName(course.getName());
        newCourse.setStudy_program(program);

        dao.createCourse(newCourse);

        return new ResponseEntity<Course>(newCourse, HttpStatus.OK);
    }

    /**
     * Get the teacher for a specific course
     *
     * @param id
     * @return User
     */
    @RequestMapping(value = "/course/{id}/teacher")
    public Set<Course_Teacher> getCourseTeacher(@PathVariable("id") int id)
    {
        Course course = null;
        try
        {
            course = dao.getCourse(id);
        }
        catch(NoResultException ex)
        {
            course = new Course();
        }

        return course.getCourseTeacher();
    }

    @RequestMapping(value = "/course/{id}/delete", method = RequestMethod.DELETE)
    public boolean deleteCourse(@PathVariable("id") int id)
    {
        return (dao.deleteCourse(id) == 1);
    }
}