package HvA.dao;

import HvA.model.Group;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class GroupDao
{
    @PersistenceContext
    private EntityManager em;

    @Transactional
    public List<Group> getAllGroups()
    {
        return em.createNamedQuery("Group.findAll", Group.class).getResultList();
    }

    @Transactional
    public Group getGroup(int id)
    {
        return em.createNamedQuery("Group.find", Group.class).setParameter("id", id).getSingleResult();
    }

    @Transactional
    public Group createGroup(Group group)
    {
        group = em.merge(group);
        em.persist(group);

        return group;
    }
}
