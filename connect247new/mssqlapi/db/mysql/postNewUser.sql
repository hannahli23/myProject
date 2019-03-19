use world;
DELIMITER //
DROP PROCEDURE IF EXISTS postNewUser//
CREATE PROCEDURE postNewUser(
IN p_userName VARCHAR(80), 
IN p_email VARCHAR(80)
)
BEGIN
INSERT INTO world.users(userName, email) VALUES(p_userName, p_email);
END //
DELIMITER ;


call postNewUser('alexis','alexis@gmail.com');