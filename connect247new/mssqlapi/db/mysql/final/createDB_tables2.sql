CREATE SCHEMA IF NOT EXISTS fpp;

use fpp;

DROP TABLE IF EXISTS `fpp`.`users`;

CREATE TABLE IF NOT EXISTS `fpp`.`users` (
  `useID` INT(11) NOT NULL AUTO_INCREMENT primary key,
  `username`  NVARCHAR(50)  NOT NULL DEFAULT 'Sandnes',
    `email`  NVARCHAR(100)  NOT NULL DEFAULT 'email@email.com',
  `member_status` NVARCHAR(45) NULL DEFAULT 'active',
   `addr_state` NVARCHAR(45) NULL DEFAULT 'Arizona',
     `addr_city` NVARCHAR(45) NULL DEFAULT 'Phoenix',
       `addr_zip` NVARCHAR(45) NULL DEFAULT '85226',
  `phone` NVARCHAR(80) NULL  DEFAULT '602-3726578',
   `gender` NVARCHAR(80) NULL DEFAULT 'Female',
     `userType` NVARCHAR(80) NULL DEFAULT 'student',
   `birthyearmonth` NVARCHAR(80) NULL DEFAULT 'yyyy-mm',
  `userDesc` NVARCHAR(1000) NULL DEFAULT 'fast learner',
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
  
DROP TABLE IF EXISTS `fpp`.`groups`;

CREATE TABLE IF NOT EXISTS `fpp`.`groups` (
  `groupID` INT(11) NOT NULL AUTO_INCREMENT primary key,
  `groupname`  NVARCHAR(50)  NOT NULL DEFAULT 'Basis Chandler',
  `group_status` NVARCHAR(45) NULL DEFAULT 'active',
  `addr_state` NVARCHAR(45) NULL DEFAULT 'Arizona',
     `addr_city` NVARCHAR(45) NULL DEFAULT 'Phoenix',
       `addr_zip` NVARCHAR(45) NULL DEFAULT '85226',
        `addr_street` NVARCHAR(45) NULL DEFAULT '765 chandler blvd',
  `phone` NVARCHAR(80) NULL  DEFAULT '602-3726578',
   `gender` NVARCHAR(80) NULL DEFAULT 'Female',
     `groupType` NVARCHAR(80) NULL DEFAULT 'elementarySchool',
  `groupDesc` NVARCHAR(1000) NULL DEFAULT 'fast learner',
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
  DROP TABLE IF EXISTS `fpp`.`RelGroupUser`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`RelGroupUser` (
  `RelGroupUserID` INT(11) NOT NULL AUTO_INCREMENT primary key,
  `groupID`   INT(11)  NULL DEFAULT 11,
   `userID`   INT(11)  NULL DEFAULT 11,
  `userRole` NVARCHAR(45) NULL DEFAULT 'Student',
  `userRoleDESC` NVARCHAR(45) NULL DEFAULT 'Student',
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
  DROP TABLE IF EXISTS `fpp`.`packages`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`packages` (
  `pkgID` INT(11) NOT NULL AUTO_INCREMENT primary key,
  `pkgTitle` NVARCHAR(300) NULL DEFAULT 'Default 2017 AMC8 ',
  `pkgURL` NVARCHAR(300) NULL DEFAULT 'https://artofproblemsolving.com/wiki/index.php?title=AMC_8_Problems_and_Solutions',
	`pkgType` NVARCHAR(200) NULL DEFAULT 'AMC8',
	`pkgYear` NVARCHAR(200) NULL DEFAULT '2017',
	`pkgMonth` NVARCHAR(200) NULL DEFAULT 'March',
	`pkgDesc` NVARCHAR(5000) NULL DEFAULT 'Desc',
      `pkgCreateByUserID` INT(11) null default 1,
     `pkgAccessControl` NVARCHAR(300) NULL DEFAULT 'Default public',
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
DROP TABLE IF EXISTS `fpp`.`questions`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`questions` (
  `questionID` INT(11) NOT NULL AUTO_INCREMENT primary key,
   `pkgID` INT(11) null default 1,
   `questionTitle` NVARCHAR(300) NULL DEFAULT 'Default 2017 AMC8 Problem 1',
   `questionText` NVARCHAR(1000) NULL DEFAULT 'Default Which of the following values is largest?',
   `questionSection` NVARCHAR(200) NULL DEFAULT 'Spring',
    `questionNumber` NVARCHAR(100) NULL DEFAULT 'Default 1',
   `questionImageLocation` NVARCHAR(300) NULL DEFAULT 'Default C:\alexis\math\mcstate',
   `questionImage` longblob NULL ,
  `questionContent` NVARCHAR(1000) NULL DEFAULT 'Student',
  `questionURL` NVARCHAR(300) NULL DEFAULT 'https://artofproblemsolving.com/wiki/index.php?title=2017_AMC_8_Problems/Problem_1',
   `questionAnswerKey` NVARCHAR(100) NULL DEFAULT 'A',
    `questionSol1` NVARCHAR(5000) NULL DEFAULT 'A',
     `questionSol1Image` longblob NULL ,
      `quSol1Image1Loc` NVARCHAR(300) NULL DEFAULT 'DEFAULT C:\alexis\math\mcstate',
    `questionSol2` NVARCHAR(5000) NULL DEFAULT 'A',
     `questionSol2Image` longblob NULL ,
      `quSol1Image2Loc` NVARCHAR(200) NULL DEFAULT 'DEFAULT C:\alexis\math\mcstate',
    `questionCat1` NVARCHAR(200) NULL DEFAULT 'Algebra',
	`questionCat2` NVARCHAR(200) NULL DEFAULT 'Variable',
	`questionCat3` NVARCHAR(200) NULL DEFAULT 'simplify',
	`questionType` NVARCHAR(200) NULL DEFAULT 'AMC8',
	`questionYear` NVARCHAR(200) NULL DEFAULT '2017',
	`questionMonth` NVARCHAR(200) NULL DEFAULT 'March',
    `questionCreateByUserID` INT(11) null default 1,
     `questionAccessControl` NVARCHAR(300) NULL DEFAULT 'Default public',
	`questionDesc` NVARCHAR(5000) NULL DEFAULT 'Desc',
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
   DROP TABLE IF EXISTS `fpp`.`pracSessions`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`pracSessions` (
  `pSessionID` INT(11) NOT NULL AUTO_INCREMENT primary key,
    `pkgID`   INT(11)  NULL DEFAULT 11,
   `userID`   INT(11)  NULL DEFAULT 11,
    `RelGroupUserID`   INT(11)  NULL DEFAULT 11,
    `coachID`   INT(11)  NULL DEFAULT 11,
   `score` INT(11)  NULL DEFAULT 11,
    `analyzeNote` NVARCHAR(5000) NULL DEFAULT 'A',
           
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
  
  DROP TABLE IF EXISTS `fpp`.`practice`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`practice` (
  `practiceID` INT(11) NOT NULL AUTO_INCREMENT primary key,
    `questionID`   INT(11)  NULL DEFAULT 11,
     `sessionID`   INT(11)  NULL DEFAULT 11,
   `userID`   INT(11)  NULL DEFAULT 11,
    `RelGroupUserID`   INT(11)  NULL DEFAULT 11,
    `coachID`   INT(11)  NULL DEFAULT 11,
   `userAnswer` NVARCHAR(1000) NULL DEFAULT 'A',
    `questionAnswerJudge` NVARCHAR(100) NULL DEFAULT 'right',
     `mistakeTypeCode` NVARCHAR(100) NULL DEFAULT 'WRONGREAD',
       `analyzeNote` NVARCHAR(5000) NULL DEFAULT 'WRONGREAD',
   
 
           
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
  DROP TABLE IF EXISTS `fpp`.`mistakeType`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`mistakeType` (
  `mistakeTypeID` INT(11) NOT NULL AUTO_INCREMENT primary key,
   `mistakeTypeCode` NVARCHAR(100) NULL DEFAULT 'WRONGREAD',
   `knowledgeTypeCode` NVARCHAR(100) NULL DEFAULT 'Default M-A-V',
   `mistakeTitle` NVARCHAR(300) NULL DEFAULT 'A',
   `mistakeSolution` NVARCHAR(5000) NULL DEFAULT 'A',
    `mistakeNote` NVARCHAR(5000) NULL DEFAULT 'right',
       `analyzeNote` NVARCHAR(5000) NULL DEFAULT 'WRONGREAD',
     `mistakeTypeCreatedByUserID` INT(11),   
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
   DROP TABLE IF EXISTS `fpp`.`knowledgeType`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`knowledgeType` (
  `knowledgeTypeID` INT(11) NOT NULL AUTO_INCREMENT primary key,
   `knowledgeTypeCode` NVARCHAR(100) NULL DEFAULT 'WRONGREAD',
   `knowledgeLevel` NVARCHAR(100) NULL DEFAULT 'Default 1',
   `knowledgeTypeTitle` NVARCHAR(300) NULL DEFAULT 'A',
    `knowledgeTypeDesc` NVARCHAR(5000) NULL DEFAULT 'right',
       `analyzeNote` NVARCHAR(5000) NULL DEFAULT 'WRONGREAD',
     `knowledgeTypeCreatedByUserID` INT(11),   
     `klgAccessControl` NVARCHAR(300) NULL DEFAULT 'Default public',
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
DROP TABLE IF EXISTS `fpp`.`events`;

   DROP TABLE IF EXISTS `fpp`.`treasureACntl`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`treasureACntl` (
  `treasureACntlID` INT(11) NOT NULL AUTO_INCREMENT primary key,
   `treasureCode` NVARCHAR(100) NULL DEFAULT 'question',
   `knowledgeLevel` NVARCHAR(100) NULL DEFAULT 'Default 1',
   `knowledgeTypeTitle` NVARCHAR(300) NULL DEFAULT 'A',
    `knowledgeTypeDesc` NVARCHAR(5000) NULL DEFAULT 'right',
       `analyzeNote` NVARCHAR(5000) NULL DEFAULT 'WRONGREAD',
        `treasureID` INT(11) NULL DEFAULT '1',
     `treasureCreatedByUserID` INT(11) NULL DEFAULT '1',  
     `treasureAllowedUserID` INT(11) NULL DEFAULT '1', 
     `treasureAllowedtype` NVARCHAR(100) NULL DEFAULT 'group',
     `treasureAccessControlDesc` NVARCHAR(300) NULL DEFAULT 'Default public',
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
DROP TABLE IF EXISTS `fpp`.`events`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`events` (
  `eventID` INT(11) NOT NULL AUTO_INCREMENT primary key,
    `eventName`   INT(11)  NULL DEFAULT 11,
     `addr_state` NVARCHAR(45) NULL DEFAULT 'Arizona',
     `addr_city` NVARCHAR(45) NULL DEFAULT 'Phoenix',
       `addr_zip` NVARCHAR(45) NULL DEFAULT '85226',
  `phone` NVARCHAR(80) NULL  DEFAULT '602-3726578',
   `eventCreator` NVARCHAR(200) NULL DEFAULT 'AMC',
    `eventHost` NVARCHAR(200) NULL DEFAULT 'BasisChandler',
     `eventCat1` NVARCHAR(80) NULL DEFAULT 'math Competition',
      `eventCat2` NVARCHAR(80) NULL DEFAULT 'math count',
	`eventLevel` NVARCHAR(80) NULL DEFAULT 'state',
   `eventMonth` NVARCHAR(80) NULL DEFAULT 'yyyy-mm',
    `eventYear` NVARCHAR(80) NULL DEFAULT 'yyyy-mm',
     `eventURL` NVARCHAR(80) NULL DEFAULT 'https://www.mathcounts.org/',
  `eventDesc` NVARCHAR(1000) NULL DEFAULT 'fast learner',
    `eventRegisterStart_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
     `eventRegisterDeadline_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
       `eventStart_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
         `eventEnd_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          `eventResult_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
           
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
    
  
DROP TABLE IF EXISTS `fpp`.`achievements`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`achievements` (
  `achievementID` INT(11) NOT NULL AUTO_INCREMENT primary key,
    `eventID`   INT(11)  NULL DEFAULT 11,
   `userID`   INT(11)  NULL DEFAULT 11,
    `RelGroupUserID`   INT(11)  NULL DEFAULT 11,
    `coachID`   INT(11)  NULL DEFAULT 11,
    `groupID`   INT(11)  NULL DEFAULT 11,
     `awardID`   INT(11)  NULL DEFAULT 11,
    `awardDesc` NVARCHAR(5000) NULL DEFAULT 'A',
           
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
 
  DROP TABLE IF EXISTS `fpp`.`RelEventAttendee`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`RelEventAttendee` (
  `RelEventAttendeeID` INT(11) NOT NULL AUTO_INCREMENT primary key,
  `attendeeID`   INT(11)  NULL DEFAULT 11,
   `attendeeType`    NVARCHAR(45) NULL DEFAULT 'Student',
    `attendeeStatus`    NVARCHAR(45) NULL DEFAULT 'Registered',
  `RelEventAttendeeDESC` NVARCHAR(45) NULL DEFAULT 'Student',
  `register_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
   DROP TABLE IF EXISTS `fpp`.`RelAwardAttendee`;
  
  CREATE TABLE IF NOT EXISTS `fpp`.`RelAwardAttendee` (
  `RelAwardAttendeeID` INT(11) NOT NULL AUTO_INCREMENT primary key,
  `attendeeID`   INT(11)  NULL DEFAULT 11,
  `awardID`   INT(11)  NULL DEFAULT 11,
  `winAwardStatus` NVARCHAR(45) NULL DEFAULT 'Granted',
  `RelAwardAttendeeDESC` NVARCHAR(45) NULL DEFAULT 'Student',
  `winAward_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  
  
  
  
DROP TABLE IF EXISTS `fpp`.`images`; 
  CREATE TABLE IF NOT EXISTS `fpp`.`images` (
  `imageID` INT(11) NOT NULL AUTO_INCREMENT primary key,
    `eventID`   INT(11)  NULL DEFAULT 11,
   `userID`   INT(11)  NULL DEFAULT 11,
    `RelGroupUserID`   INT(11)  NULL DEFAULT 11,
    `coachID`   INT(11)  NULL DEFAULT 11,
    `groupID`   INT(11)  NULL DEFAULT 11,
     `awardID`   INT(11)  NULL DEFAULT 11,
    `imageDesc` NVARCHAR(5000) NULL DEFAULT 'A',
     `caption` NVARCHAR(200) NULL DEFAULT 'A',
      `imageLocation` NVARCHAR(200) NULL DEFAULT 'A',
	`imageContent` longblob NULL ,
           
  `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);