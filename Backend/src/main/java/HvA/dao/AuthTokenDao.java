package HvA.dao;

import HvA.model.AuthToken;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class AuthTokenDao
{

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public AuthToken createAuthToken(AuthToken token)
    {
        token = em.merge(token);
        em.persist(token);

        return token;
    }

}
