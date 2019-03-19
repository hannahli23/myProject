use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS GetQuestionPrac//

CREATE PROCEDURE GetQuestionPrac()
	BEGIN
		SELECT * FROM fpp.questions;
	END //
DELIMITER ;