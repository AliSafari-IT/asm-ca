use asmdb;
SELECT * FROM asmdb.aspnetusers;
-- update asmdb.aspnetusers set asmdb.aspnetusers.EmailConfirmed = 1 where asmdb.aspnetusers.EmailConfirmed = 0;
DELETE FROM asmdb.aspnetusers WHERE UserName = 'ali@asafarim.com';

