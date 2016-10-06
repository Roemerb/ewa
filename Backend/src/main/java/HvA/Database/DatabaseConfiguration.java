package HvA.Database;

import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

/**
 * Project: Backend,
 * Created by Kadir Basturk on 4-10-2016.
 */
@Configuration
@EnableTransactionManagement
public class DatabaseConfiguration {

    // dataSource = Database configuratie
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/sis");
        dataSource.setUsername("root");
        dataSource.setPassword("root");
        return dataSource;
    }

    // sessionFactory zorgt voor de connectie en zegt dat het enkel in de model moet kijken aangezien de database 'classes' in model staan.
    @Bean
    public LocalSessionFactoryBean sessionFactory() {
        LocalSessionFactoryBean factory = new LocalSessionFactoryBean();
        factory.setDataSource(dataSource());
        factory.setPackagesToScan("HvA.model");
        return factory;
    }

}
