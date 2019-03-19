use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS GetAllUsers//

CREATE PROCEDURE GetAllUsers()
	BEGIN
		SELECT * FROM users;
	END //
DELIMITER ;

CALL GetAllUsers();

use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS insertUsers//
CREATE PROCEDURE insertUsers(
IN p_userName VARCHAR(80), 
IN p_email VARCHAR(80)
)
BEGIN
INSERT INTO fpp.users(userName, email) VALUES(p_userName, p_email);
END //
DELIMITER ;


call insertUsers('alexis','alexis@gmail.com');