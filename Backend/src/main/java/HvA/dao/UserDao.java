package HvA.dao;

import HvA.model.User;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Project: Backend,
 * Created by Kadir Basturk on 11-10-2016.
 */
@Repository
public class UserDao {

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public User getUser(int id) {

        return em.createNamedQuery("User.find", User.class).setParameter("id", id).getSingleResult();
    }

//    @Transactional
//    public void saveUser(User user) {
//        em.persist(user);
//        em.flush();
//    }

}
