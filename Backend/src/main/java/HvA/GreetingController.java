package HvA;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import HvA.dao.UserDao;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import HvA.model.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @PersistenceContext
    private EntityManager factory;

    @Autowired
    private UserDao dao;


    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {

//        User user = dao.getUser(1);
//        System.out.println(user.getId() + ", " + user.getFullName() + ",  IT WORKS!");

        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    }
}
