use learn;
DELIMITER //
DROP PROCEDURE IF EXISTS GetAllCharList//

CREATE PROCEDURE GetAllCharList(
    IN thisChLevel INT,
    IN thisChStair INT
    )
	BEGIN
		SELECT *
        from learn.characters ch
        WHERE ch.chlevel = thisChLevel
        and ch.chstair=thisChStair;
	END //
DELIMITER ;

CALL GetAllCharList(2,3);


