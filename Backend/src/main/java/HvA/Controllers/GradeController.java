package HvA.Controllers;


import HvA.dao.GradeDao;
import HvA.model.Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.NoResultException;
import java.util.List;

@RestController
@CrossOrigin
public class GradeController {

    @Autowired
    private GradeDao dao;

    @RequestMapping(value = "/grade/{id}")
    public ResponseEntity<Grade> get(@PathVariable("id") int id) {

        Grade grade = null;
        try {
            grade = dao.getGrade(id);
        } catch (NoResultException ex) {
            grade = new Grade();
        }

        return new ResponseEntity<Grade>(grade, HttpStatus.OK);
    }

    @RequestMapping(value = "/grade", method = RequestMethod.GET)
    public List<Grade> getAllGrades() {
        List<Grade> grades = dao.getallGrades();

        return grades;
    }

    @RequestMapping(value = "/limitedGrade/{limit}", method = RequestMethod.GET)
    public List<Grade> getLimitedGrades(@PathVariable("limit") int limit) {
        List<Grade> grades = dao.getLimitedGrades(limit);

        return grades;
    }

    @RequestMapping(value = "/grade/create", method = RequestMethod.POST)
    public ResponseEntity<Grade> createGrade(@RequestBody Grade grade) {
        dao.createGrade(grade);

        return new ResponseEntity<Grade>(grade, HttpStatus.OK);
    }
}