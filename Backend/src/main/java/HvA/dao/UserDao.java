package HvA.dao;

import HvA.model.User;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Project: Backend,
 * Created by Kadir Basturk on 11-10-2016.
 */
@Repository
public class UserDao {

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public List<User> getAllUsers()
    {
        return em.createNamedQuery("User.findAll", User.class).getResultList();
    }

    @Transactional
    public User getUser(int id) {

        return em.createNamedQuery("User.find", User.class).setParameter("id", id).getSingleResult();
    }
}
