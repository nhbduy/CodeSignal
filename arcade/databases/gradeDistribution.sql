/*Please add ; after each select statement*/
CREATE PROCEDURE gradeDistribution()
BEGIN
	SELECT A.Name AS Name, A.ID AS ID
    FROM (  SELECT  Name, ID,
                    0.25*Midterm1+0.25*Midterm2+0.5*Final AS option_1, 
                    0.5*Midterm1+0.5*Midterm2 AS option_2, 
                    Final AS option_3
            FROM Grades) A
    WHERE A.option_3 > A.option_1 AND A.option_3 > A.option_2
    ORDER BY LEFT(NAME, 3) ASC, ID ASC;
END