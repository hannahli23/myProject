use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS GetAllUsers//

CREATE PROCEDURE GetAllUsers()
	BEGIN
		SELECT * FROM users;
	END //
DELIMITER ;



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


use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS GetAllQuestions//

CREATE PROCEDURE GetAllQuestions()
	BEGIN
		SELECT * FROM questions;
	END //
DELIMITER ;


use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS insertQuestions//
CREATE PROCEDURE insertQuestions(
IN P_questionSetTitle NVARCHAR(300),
IN P_questionSetURL NVARCHAR(300),
IN P_questionTitle NVARCHAR(300),
IN P_questionText NVARCHAR(1000),
IN p_questionURL NVARCHAR(300), 
IN p_questionAnswerKey NVARCHAR(100),
IN p_questionImageLocation NVARCHAR(300),
IN p_questionImage longblob,
IN p_questionContent NVARCHAR(1000),
IN p_questionNumber  NVARCHAR(200),
IN p_questionSol1 NVARCHAR(5000),
IN p_questionSol1Image longblob,
IN p_quSol1Image1Loc NVARCHAR(200) ,
IN p_questionSol2 NVARCHAR(5000) ,
IN p_questionSol2Image longblob,
IN p_quSol1Image2Loc NVARCHAR(200) ,
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
SET p_questionSetTitle  = IFNULL(p_questionSetTitle , '1');
SET p_questionSetURL  = IFNULL(p_questionSetURL , '1');
SET p_questionTitle  = IFNULL(p_questionTitle , '1');
SET p_questionText = IFNULL(p_questionText , '1');
SET p_questionURL  = IFNULL(p_questionURL , '1');
SET p_questionAnswerKey = IFNULL(p_questionAnswerKey , '1');
SET p_questionImageLocation  = IFNULL(p_questionImageLocation, '1');
SET p_questionImage = IFNULL(p_questionImage, '1');
SET p_questionContent  = IFNULL(p_questionContent , '1');
SET p_questionNumber  = IFNULL(p_questionNumber , '1');
SET p_questionSol1 = IFNULL(p_questionSol1 , '1');
SET p_questionSol1Image = IFNULL(p_questionSol1Image , '1');
SET p_quSol1Image1Loc = IFNULL(p_quSol1Image1Loc , '1');
SET p_questionSol2Image = IFNULL(p_questionSol2Image , '1');
SET p_quSol1Image2Loc = IFNULL(p_quSol1Image2Loc , '1');
SET p_questionSol2  = IFNULL(p_questionSol2 , '1');
SET p_questionCat1 = IFNULL(p_questionCat1 , '1');
SET p_questionCat2  = IFNULL(p_questionCat2 , '1');
SET p_questionCat3 = IFNULL(p_questionCat3 , '1');
SET p_questionType = IFNULL(p_questionType , 'MATH');
SET p_questionYear  = IFNULL(p_questionYear , '1');
SET p_questionMonth = IFNULL(p_questionMonth , '1');
SET p_questionSection  = IFNULL(p_questionSection , '1');
SET p_questionDesc = IFNULL(p_questionDesc , '1');

INSERT INTO fpp.questions (
questionSetTitle,
questionSetURL,
questionTitle,
questionText,
questionURL , 
questionAnswerKey,
questionContent,
questionImageLocation,
questionImage,

 questionNumber,
 questionSol1,
 questionSol1Image,
 quSol1Image1Loc,
 questionSol2Image,
 quSol1Image2Loc,
  questionSol2,
  questionCat1,
  questionCat2,
  questionCat3,
  questionType,
  questionYear,
  questionMonth,
  questionSection

) VALUES(
p_questionSetTitle,
p_questionSetURL,
p_questionTitle,
p_questionText,
p_questionURL , 
p_questionAnswerKey,
p_questionContent,
P_questionImageLocation,
p_questionImage,
 p_questionNumber,
 p_questionSol1,
 p_questionSol1Image,
p_quSol1Image1Loc,
p_questionSol2Image,
p_quSol1Image2Loc,
  p_questionSol2,
  p_questionCat1,
  p_questionCat2,
  p_questionCat3,
  p_questionType,
  p_questionYear,
  p_questionMonth,
  p_questionSection
);
END //
DELIMITER ;

