/*Please add ; after each select statement*/
CREATE PROCEDURE projectList()
BEGIN
    SELECT A.project_name, A.team_lead, A.income
    FROM Projects A
    ORDER BY A.internal_id;
END