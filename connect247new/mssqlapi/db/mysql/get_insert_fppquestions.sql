use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS GetAllQuestions//

CREATE PROCEDURE GetAllQuestions()
	BEGIN
		SELECT * FROM questions;
	END //
DELIMITER ;

CALL GetAllQuestions();

use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS insertQuestions//
CREATE PROCEDURE insertQuestions(
IN p_questionURL NVARCHAR(300), 
IN p_questionAnswerKey NVARCHAR(100),
IN  p_questionContent NVARCHAR(1000),
 IN p_questionSol1 NVARCHAR(5000),
  IN p_questionSol2 NVARCHAR(5000) ,
  IN p_questionCat1 NVARCHAR(200) ,
  IN p_questionCat2 NVARCHAR(200) ,
  IN p_questionCat3 NVARCHAR(200) ,
  IN p_questionType NVARCHAR(200),
  IN p_questionYear NVARCHAR(200),
  IN p_questionMonth NVARCHAR(200) ,
  IN p_questionSection NVARCHAR(200) ,
  IN p_questionDesc NVARCHAR(5000)

)
BEGIN

SET p_questionURL  = IFNULL(p_questionURL , '1');
SET p_questionAnswerKey = IFNULL(p_questionAnswerKey , '1');
SET p_questionContent  = IFNULL(p_questionContent , '1');
SET p_questionSol1 = IFNULL(p_questionSol1 , '1');
SET p_questionSol2  = IFNULL(p_questionSol2 , '1');
SET p_questionCat1 = IFNULL(p_questionCat1 , '1');
SET p_questionCat2  = IFNULL(p_questionCat2 , '1');
SET p_questionCat3 = IFNULL(p_questionCat3 , '1');
SET p_questionType = IFNULL(p_questionType , 'MATH');
SET p_questionYear  = IFNULL(p_questionYear , '1');
SET p_questionMonth = IFNULL(p_questionMonth , '1');
SET p_questionSection  = IFNULL(p_questionSection , '1');
SET p_questionDesc = IFNULL(p_questionDesc , '1');
INSERT INTO fpp.questions(questionURL, questionAnswerKey) VALUES(p_questionURL, p_questionAnswerKey);
END //
DELIMITER ;

call insertQuestions('https://artofproblemsolving.com/wiki/index.php?title=2017_AMC_8_Problems/Problem_2','E');
call insertQuestions('https://artofproblemsolving.com/wiki/index.php?title=2017_AMC_8_Problems/Problem_2',null,null,null,null,null,null,null,null,null,null,null,null);

select * from fpp.questions;


 


call insertUsers('alexis','alexis@gmail.com');