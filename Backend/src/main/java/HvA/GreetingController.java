package HvA;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import HvA.model.User;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @Autowired
    private SessionFactory factory;

    @Transactional
    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {

        // EVEN EEN SNELLE MANIER OM TE TESTEN OF WE EEN USER TERUGKRIJGEN, LATER DUS NIET ZO OP DEZE MANIER DOEN !! :)
        User user = (User) factory.getCurrentSession().createSQLQuery("SELECT * FROM users").addEntity(User.class).uniqueResult();
        System.out.println(user.getId() + ", " + user.getFullName());

        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    }
}
