CREATE TABLE IF NOT EXISTS `mderndemotable` (
    id INT NOT NULL,
    username VARCHAR(50) NOT NULL
);

ALTER TABLE `mderndemotable`
CHANGE COLUMN id id INT NOT NULL PRIMARY KEY AUTO_INCREMENT;