/*Please add ; after each select statement*/
CREATE PROCEDURE contestLeaderboard()
BEGIN
	SELECT name
    FROM leaderboard
    ORDER BY score DESC
    LIMIT 3, 5; /*LIMIT 5 OFFSET 3;*/
END