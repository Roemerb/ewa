package HvA.model;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name="auth_tokens")
public class AuthToken
{
    private SimpleDateFormat sdf;

    public SimpleDateFormat getSdf()
    {
        return sdf;
    }

    public void setSdf(SimpleDateFormat sdf)
    {
        this.sdf = sdf;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="user_id")
    private int userId;

    @Column(name="token")
    private String token;

    @Column(name="created_at")
    private Date createdAt;

    @Column(name="valid_until")
    private Date validUntil;

    public AuthToken(int id, int userId, String token, Date createdAt, Date validUntil)
    {
        this.id = id;
        this.userId = userId;
        this.token = token;
        this.createdAt = createdAt;
        this.validUntil = validUntil;
    }

    public AuthToken()
    {
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public int getUserId()
    {
        return userId;
    }

    public void setUserId(int userId)
    {
        this.userId = userId;
    }

    public String getToken()
    {
        return token;
    }

    public void setToken(String token)
    {
        this.token = token;
    }

    public Date getCreatedAt()
    {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt)
    {
        this.createdAt = createdAt;
    }

    public Date getValidUntil()
    {
        return validUntil;
    }

    public void setValidUntil(Date validUntil)
    {
        this.validUntil = validUntil;
    }
}
