
use world;
DELIMITER //
DROP PROCEDURE IF EXISTS postNewCity//
CREATE PROCEDURE postNewCity(
IN cityName char(35), 
IN CountryCode char(3),
IN District char(20),
IN Population int(11)
)
  BEGIN
    INSERT INTO world.city(Name, CountryCode,District,Population)
VALUES(cityName, CountryCode,District,Population);
  END //
DELIMITER ;



