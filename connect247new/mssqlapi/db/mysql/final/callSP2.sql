
use fpp;

call insertUsers('alexis','alexis@gmail.com');
CALL GetAllUsers();




call insertQuestions('AMC8 2017','https://artofproblemsolving.com/wiki/index.php?title=2017_AMC_8_Problems/Problem_2',
null,null,null,null,null,null,null,null,null,null,null,null,null);

 CALL insertPackages(
'Default p_pkgTitle',
'Default https://artofproblemsolving.com/wiki/index.php?title=2017_AMC_8',
  'Default p_pkgType AMC8',
  'Default p_pkgYear 2017',
  'Default p_pkgMonth no month',
  'Default p_pkgDesc'
);

call insertQuestions('Default P_questionTitle AMC8 2017','P_questionText ','Default p_questionURL https://artofproblemsolving.com/wiki/index.php?title=2017_AMC_8_Problems/Problem_2',

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
'p_questionSection ',
'p_questionDesc '
);

CALL GetAllQuestions();

CALL insertPracSession
(
  888,
  888,
  888,
  888,
  888,
  'Default p_analyzeNote'
);


CALL GetAllPracSessions;
CALL GetAllPackages;

CALL insertPractices(
  1,
  NULL,
  1,
  1,
  1,
  'A',
  'wrong',
  'permutation',
  'permutation'
);




select * from fpp.questions;