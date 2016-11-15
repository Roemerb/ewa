USE `sis`;

CREATE TABLE IF NOT EXISTS `sis`.`auth_tokens` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `valid_until` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `token_UNIQUE` (`token` ASC),
  CONSTRAINT `fk_users_user_id1`
    FOREIGN KEY (`user_id`)
    REFERENCES `sis`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `sis`.`token_actions` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `token_id` INT UNSIGNED NOT NULL,
  `action` VARCHAR(255) NOT NULL,
  `client_ip` VARCHAR(15),
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_auth_tokens_token1`
  FOREIGN KEY(`token_id`)
  REFERENCES `auth_tokens` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;