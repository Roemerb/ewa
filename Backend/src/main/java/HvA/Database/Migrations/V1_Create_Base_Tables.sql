-- MySQL Script generated by MySQL Workbench
-- Tue Dec 13 13:41:07 2016
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET FOREIGN_KEY_CHECKS=1;

CREATE TABLE IF NOT EXISTS `sis`.`study_programs` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `group_prefix` VARCHAR(45) NOT NULL,
  `duration_years` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`))
  ENGINE = InnoDB;

CREATE UNIQUE INDEX `name_UNIQUE` ON `sis`.`study_programs` (`name` ASC);

CREATE UNIQUE INDEX `group_prefix_UNIQUE` ON `sis`.`study_programs` (`group_prefix` ASC);

DROP TABLE IF EXISTS `sis`.`groups` ;

CREATE TABLE IF NOT EXISTS `sis`.`groups` (
  `id` INT UNSIGNED NOT NULL,
  `graduation_year` YEAR NOT NULL,
  `study_program_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `study_program_id`),
  CONSTRAINT `fk_groups_study_programs1`
  FOREIGN KEY (`study_program_id`)
  REFERENCES `sis`.`study_programs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;

CREATE INDEX `fk_groups_study_programs1_idx` ON `sis`.`groups` (`study_program_id` ASC);

DROP TABLE IF EXISTS `sis`.`users` ;

CREATE TABLE IF NOT EXISTS `sis`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `group_id` INT UNSIGNED NULL,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `active` TINYINT(1) NOT NULL DEFAULT 1,
  `deleted_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `created_at` TIMESTAMP NULL,
  `hva_id` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_users_groups1`
  FOREIGN KEY (`group_id`)
  REFERENCES `sis`.`groups` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;

CREATE UNIQUE INDEX `email_UNIQUE` ON `sis`.`users` (`email` ASC);

CREATE UNIQUE INDEX `hva_id_UNIQUE` ON `sis`.`users` (`hva_id` ASC);

CREATE INDEX `fk_users_groups1_idx` ON `sis`.`users` (`group_id` ASC);

DROP TABLE IF EXISTS `sis`.`roles` ;

CREATE TABLE IF NOT EXISTS `sis`.`roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
  ENGINE = InnoDB;

CREATE UNIQUE INDEX `name_UNIQUE` ON `sis`.`roles` (`name` ASC);

DROP TABLE IF EXISTS `sis`.`courses` ;

CREATE TABLE IF NOT EXISTS `sis`.`courses` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `study_program_id` INT UNSIGNED NOT NULL,
  `semester` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `ECTS` INT NOT NULL,
  `type` ENUM('regular', 'project') NOT NULL,
  PRIMARY KEY (`id`, `study_program_id`),
  CONSTRAINT `fk_courses_study_programs1`
  FOREIGN KEY (`study_program_id`)
  REFERENCES `sis`.`study_programs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;

CREATE UNIQUE INDEX `name_UNIQUE` ON `sis`.`courses` (`name` ASC);

CREATE INDEX `fk_courses_study_programs1_idx` ON `sis`.`courses` (`study_program_id` ASC);

DROP TABLE IF EXISTS `sis`.`exams` ;

CREATE TABLE IF NOT EXISTS `sis`.`exams` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `course_id` INT UNSIGNED NOT NULL,
  `location` TEXT NULL,
  `date_and_time` DATETIME NULL,
  `type` ENUM('regular', 're-exam') NOT NULL,
  PRIMARY KEY (`id`, `course_id`),
  CONSTRAINT `fk_exams_courses1`
  FOREIGN KEY (`course_id`)
  REFERENCES `sis`.`courses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;

CREATE INDEX `fk_exams_courses1_idx` ON `sis`.`exams` (`course_id` ASC);

DROP TABLE IF EXISTS `sis`.`grades` ;

CREATE TABLE IF NOT EXISTS `sis`.`grades` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `grade` VARCHAR(45) NULL,
  `passed` TINYINT(1) NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `exam_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `exam_id`),
  CONSTRAINT `fk_grades_users1`
  FOREIGN KEY (`user_id`)
  REFERENCES `sis`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grades_exams1`
  FOREIGN KEY (`exam_id`)
  REFERENCES `sis`.`exams` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;

CREATE INDEX `fk_grades_users1_idx` ON `sis`.`grades` (`user_id` ASC);

CREATE INDEX `fk_grades_exams1_idx` ON `sis`.`grades` (`exam_id` ASC);

DROP TABLE IF EXISTS `sis`.`role_user` ;

CREATE TABLE IF NOT EXISTS `sis`.`role_user` (
  `role_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  CONSTRAINT `fk_role_user_users`
  FOREIGN KEY (`user_id`)
  REFERENCES `sis`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_user_roles1`
  FOREIGN KEY (`role_id`)
  REFERENCES `sis`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;

CREATE INDEX `fk_role_user_users_idx` ON `sis`.`role_user` (`user_id` ASC);

DROP TABLE IF EXISTS `sis`.`course_teacher` ;

CREATE TABLE IF NOT EXISTS `sis`.`course_teacher` (
  `course_id` INT UNSIGNED NOT NULL,
  `teacher_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`course_id`),
  CONSTRAINT `fk_course_teacher_courses1`
  FOREIGN KEY (`course_id`)
  REFERENCES `sis`.`courses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_teacher_users1`
  FOREIGN KEY (`teacher_id`)
  REFERENCES `sis`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `sis`.`study_plan` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `choice_1` ENUM('internship', 'theme', 'minor') NOT NULL,
  `choice_2` ENUM('internship', 'theme', 'minor') NOT NULL,
  `choice_3` ENUM('internship', 'theme', 'minor') NOT NULL,
  `accepted` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`, `user_id`),
  CONSTRAINT `fk_study_plan_users`
  FOREIGN KEY (`user_id`)
  REFERENCES `sis`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;

DROP TABLE IF EXISTS `sis`.`auth_tokens` ;

CREATE TABLE IF NOT EXISTS `sis`.`auth_tokens` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `token` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `valid_until` DATETIME NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  CONSTRAINT `fk_auth_tokens_users1`
  FOREIGN KEY (`user_id`)
  REFERENCES `sis`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;

CREATE UNIQUE INDEX `token_UNIQUE` ON `sis`.`auth_tokens` (`token` ASC);

CREATE INDEX `fk_auth_tokens_users1_idx` ON `sis`.`auth_tokens` (`user_id` ASC);

DROP TABLE IF EXISTS `sis`.`token_actions` ;

CREATE TABLE IF NOT EXISTS `sis`.`token_actions` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `action` TEXT NOT NULL,
  `client_ip` VARCHAR(45) NULL,
  `created_at` DATETIME NOT NULL,
  `auth_token_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `auth_token_id`),
  CONSTRAINT `fk_token_actions_auth_tokens1`
  FOREIGN KEY (`auth_token_id`)
  REFERENCES `sis`.`auth_tokens` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;

CREATE INDEX `fk_token_actions_auth_tokens1_idx` ON `sis`.`token_actions` (`auth_token_id` ASC);