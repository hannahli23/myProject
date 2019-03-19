
use fpp;

call insertUsers('alexis','alexis@gmail.com');
CALL GetAllUsers();




call insertQuestions('https://artofproblemsolving.com/wiki/index.php?title=2017_AMC_8_Problems/Problem_2',
null,null,null,null,null,null,null,null,null,null,null,null,null);

call insertQuestions('https://artofproblemsolving.com/wiki/index.php?title=2017_AMC_8_Problems/Problem_2',
'P_questionSetURL',
'P_questionTitle ',
'P_questionText ',
'p_questionURL',
'p_questionAnswerKey',
'p_questionImageLocation',
'p_questionImage',
'p_questionContent',
'p_questionNumber',
'p_questionSol1',
'p_questionSol1Image',
'p_quSol1Image1Loc',
'p_questionSol2',
'p_questionSol2Image',
'p_quSol1Image2Loc',
'p_questionCat1 ',
'p_questionCat2',
'p_questionCat3 ',
'p_questionType',
'p_questionYear',
'p_questionMonth ',
'p_questionSection ',
'p_questionDesc '
);

CALL GetAllQuestions();



select * from fpp.questions;