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
    
		SELECT * FROM fpp.questions;
	END //
DELIMITER ;

use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS insertPackages//
CREATE PROCEDURE insertPackages(
IN P_pkgTitle NVARCHAR(300),
IN P_pkgURL NVARCHAR(300),
IN p_pkgType NVARCHAR(200),
IN p_pkgYear NVARCHAR(200),
IN p_pkgMonth NVARCHAR(200) ,
IN p_pkgDesc NVARCHAR(5000)

)
BEGIN
SET p_pkgTitle  = IFNULL(p_pkgTitle, '1');
SET p_pkgURL = IFNULL(p_pkgURL , '1');
SET p_pkgType = IFNULL(p_pkgType , 'MATH');
SET p_pkgYear  = IFNULL(p_pkgYear , '1');
SET p_pkgMonth = IFNULL(p_pkgMonth , '1');
SET p_pkgDesc = IFNULL(p_pkgDesc , '1');

INSERT INTO fpp.packages (
 pkgTitle,
pkgURL,
pkgType,
pkgYear,
pkgMonth,
pkgDesc

) VALUES(
p_pkgTitle,
p_pkgURL,
  p_pkgType,
  p_pkgYear,
  p_pkgMonth,
  p_pkgDesc
);
END //
DELIMITER ;

use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS GetAllPackages//

CREATE PROCEDURE GetAllPackages()
	BEGIN
		SELECT * FROM fpp.packages;
	END //
DELIMITER ;



use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS insertQuestions//
CREATE PROCEDURE insertQuestions(
IN p_pkgID int,
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
IN p_questionSection NVARCHAR(200) ,
IN p_questionDesc NVARCHAR(5000)

)
BEGIN
SET p_pkgID  = IFNULL(p_pkgID , '1');
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
SET p_questionSection  = IFNULL(p_questionSection , '1');
SET p_questionDesc = IFNULL(p_questionDesc , '1');

INSERT INTO fpp.questions (
pkgID,
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
  questionSection,
  questionDesc

) VALUES(
p_pkgID,
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
  p_questionSection,
  p_questionDesc
);
END //
DELIMITER ;



use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS insertPracSession//
CREATE PROCEDURE insertPracSession(
IN p_pkgID INT(11),
IN p_userID INT(11),
IN p_RelGroupUserID   INT(11),
IN p_coachID   INT(11),
IN p_score INT(11),
IN p_analyzeNote NVARCHAR(5000)

)
BEGIN
SET p_pkgID  = IFNULL(p_pkgID, 1);
SET p_userID = IFNULL(p_userID , 1);
SET p_RelGroupUserID = IFNULL(p_RelGroupUserID , 1);
SET p_coachID  = IFNULL(p_coachID , 1);
SET p_score = IFNULL(p_score , 88);
SET p_analyzeNote = IFNULL(p_analyzeNote , '1');

INSERT INTO fpp.pracSessions(
 pkgID,
 userID,
 RelGroupUserID,
 coachID,
 score,
 analyzeNote

) VALUES(
  p_pkgID,
  p_userID,
  p_RelGroupUserID,
  p_coachID,
  p_score,
  p_analyzeNote
);
END //
DELIMITER ;

use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS GetAllPracSessions//

CREATE PROCEDURE GetAllPracSessions()
	BEGIN
		SELECT * FROM pracSessions;
	END //
DELIMITER ;


use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS insertPractices//
CREATE PROCEDURE insertPractices(
IN p_questionID INT(11),
IN p_sessionID INT(11),
IN p_userID INT(11),
IN p_RelGroupUserID   INT(11),
IN p_coachID   INT(11),
IN p_userAnswer NVARCHAR(1000),
IN p_questionAnswerJudge NVARCHAR(100),
IN p_mistakeTypeCode NVARCHAR(100),
IN p_analyzeNote NVARCHAR(5000)

)
BEGIN
SET p_questionID  = IFNULL(p_questionID, 1);
SET p_sessionID  = IFNULL(p_sessionID, 1);
SET p_userID = IFNULL(p_userID , 1);
SET p_RelGroupUserID = IFNULL(p_RelGroupUserID , 1);
SET p_coachID  = IFNULL(p_coachID , 1);
SET p_userAnswer = IFNULL(p_userAnswer , 'A');
SET p_questionAnswerJudge = IFNULL(p_questionAnswerJudge, 'Y');
SET p_mistakeTypeCode = IFNULL(p_mistakeTypeCode, 'M-A-Linear');
SET p_analyzeNote = IFNULL(p_analyzeNote , '1');

INSERT INTO fpp.practice(
 questionID,
 sessionID,
 userID,
 RelGroupUserID,
 coachID,
 userAnswer,
 questionAnswerJudge,
 mistakeTypeCode,
 analyzeNote

) VALUES(
  p_questionID,
  p_sessionID,
  p_userID,
  p_RelGroupUserID,
  p_coachID,
  p_userAnswer,
  p_questionAnswerJudge,
  p_mistakeTypeCode,
  p_analyzeNote
);
END //
DELIMITER ;

use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS GetAllPractices//

CREATE PROCEDURE GetAllPractices()
	BEGIN
		SELECT * FROM practice;
	END //
DELIMITER ;



use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS insertKlgType//
CREATE PROCEDURE insertKlgType(

IN p_knowledgeTypeCode NVARCHAR(100),
IN p_knowledgeTypeTitle NVARCHAR(300),
IN p_knowledgeTypeDesc NVARCHAR(5000),
IN p_knowledgeTypeCreatedByUserID INT(11),   
IN p_klgAccessControl NVARCHAR(300),
IN p_analyzeNote NVARCHAR(5000)

)
BEGIN

SET p_knowledgeTypeCode = IFNULL(p_knowledgeTypeCode, 'Default M-A-L');
SET p_knowledgeTypeTitle= IFNULL(p_knowledgeTypeTitle , 'Default Math-Algebra-Line');
SET p_knowledgeTypeDesc = IFNULL(p_knowledgeTypeDesc , 'Default Math-Algebra-Line');
SET p_knowledgeTypeCreatedByUserID  = IFNULL(p_knowledgeTypeCreatedByUserID , 1);
SET p_klgAccessControl = IFNULL(p_klgAccessControl , 88);
SET p_analyzeNote = IFNULL(p_analyzeNote , '1');

INSERT INTO fpp.knowledgetype(
 
 knowledgeTypeCode,
 knowledgeTypeTitle,
 knowledgeTypeDesc,
 knowledgeTypeCreatedByUserID,
 klgAccessControl,
 analyzeNote

) VALUES(
 
  p_knowledgeTypeCode,
  p_knowledgeTypeTitle,
  p_knowledgeTypeDesc,
  p_knowledgeTypeCreatedByUserID,
  p_klgAccessControl,
  p_analyzeNote
);
END //
DELIMITER ;

use fpp;
DELIMITER //
DROP PROCEDURE IF EXISTS GetAllKLGtype//

CREATE PROCEDURE GetAllKLGtype()
	BEGIN
		SELECT * FROM knowledgetype;
	END //
DELIMITER ;




