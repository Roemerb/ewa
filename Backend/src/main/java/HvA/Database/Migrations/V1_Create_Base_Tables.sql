CREATE SCHEMA `SIS`;

-- -----------------------------------------------------
-- Table `SIS`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `active` TINYINT(1) NOT NULL DEFAULT 1,
  `deleted_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `created_at` TIMESTAMP NULL,
  `hva_id` VARCHAR(255) NULL UNIQUE,
  `student_nr` VARCHAR(50) NULL UNIQUE);

-- -----------------------------------------------------
-- Table `SIS`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL UNIQUE);

-- -----------------------------------------------------
-- Table `SIS`.`privileges`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`privileges` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `system_name` VARCHAR(255) NULL,
  `name` VARCHAR(255) NULL);

-- -----------------------------------------------------
-- Table `SIS`.`study_programs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`study_programs` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(45) NOT NULL UNIQUE,
  `group_prefix` VARCHAR(45) NOT NULL UNIQUE,
  `duration_years` INT UNSIGNED NOT NULL);

-- -----------------------------------------------------
-- Table `SIS`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`courses` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `study_program_id` INT UNSIGNED NOT NULL,
  `semester` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL UNIQUE,
  `ECTS` INT NOT NULL,
  `type` VARCHAR(50) NOT NULL);

ALTER TABLE `SIS`.`COURSES`
    ADD FOREIGN KEY (`study_program_id`)
    REFERENCES `SIS`.`STUDY_PROGRAMS`(`id`);


-- -----------------------------------------------------
-- Table `SIS`.`grades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`grades` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `course_id` INT UNSIGNED NOT NULL,
  `type` VARCHAR(45) NULL,
  `grade` VARCHAR(45) NULL,
  `passed` TINYINT(1) NULL);

ALTER TABLE `SIS`.`GRADES`
    ADD FOREIGN KEY (`course_id`)
    REFERENCES `SIS`.`COURSES`(`id`);


-- -----------------------------------------------------
-- Table `SIS`.`groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`groups` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY,
  `graduation_year` YEAR NOT NULL);


-- -----------------------------------------------------
-- Table `SIS`.`group_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`group_user` (
  `group_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL);

ALTER TABLE `SIS`.`GROUP_USER`
    ADD FOREIGN KEY (`group_id`)
    REFERENCES `SIS`.`GROUPS`(`id`);

ALTER TABLE `SIS`.`GROUP_USER`
    ADD FOREIGN KEY (`user_id`)
    REFERENCES `SIS`.`users`(`id`);


-- -----------------------------------------------------
-- Table `SIS`.`privilege_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`privilege_role` (
  `privilege_id` INT UNSIGNED NOT NULL,
  `role_id` INT UNSIGNED NULL);

ALTER TABLE `SIS`.`PRIVILEGE_ROLE`
    ADD FOREIGN KEY (`privilege_id`)
    REFERENCES `SIS`.`PRIVILEGES`(`id`);

ALTER TABLE `SIS`.`PRIVILEGE_ROLE`
    ADD FOREIGN KEY (`role_id`)
    REFERENCES `SIS`.`ROLES`(`id`);


-- -----------------------------------------------------
-- Table `SIS`.`role_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`role_user` (
  `role_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL);

ALTER TABLE `SIS`.`ROLE_USER`
    ADD FOREIGN KEY (`role_id`)
    REFERENCES `SIS`.`ROLES`(`id`);

ALTER TABLE `SIS`.`ROLE_USER`
    ADD FOREIGN KEY (`user_id`)
    REFERENCES `SIS`.`USERS`(`id`);

-- -----------------------------------------------------
-- Table `SIS`.`course_teacher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`course_teacher` (
  `course_id` INT UNSIGNED NOT NULL,
  `teacher_id` INT UNSIGNED NOT NULL);

ALTER TABLE `SIS`.`COURSE_TEACHER`
    ADD FOREIGN KEY (`course_id`)
    REFERENCES `SIS`.`COURSES`(`id`);

ALTER TABLE `SIS`.`COURSE_TEACHER`
    ADD FOREIGN KEY (`teacher_id`)
    REFERENCES `SIS`.`USERS`(`id`);

-- -----------------------------------------------------
-- Table `SIS`.`exams`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIS`.`exams` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `course_id` INT UNSIGNED NOT NULL,
  `location` TEXT NULL,
  `date_and_time` DATETIME NULL,
  `type` VARCHAR(50) NOT NULL);

ALTER TABLE `SIS`.`EXAMS`
    ADD FOREIGN KEY (`course_id`)
    REFERENCES `SIS`.`COURSES`(`id`);