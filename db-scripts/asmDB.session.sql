-- dotnet ef migrations add InitialCreate --context AppDbContext
-- dotnet ef migrations add InitialCreate --context AppDbContext --project "E:\asm-ca\ASafariM\Infrastructure" --startup-project "E:\asm-ca\WebAppMVC"

-- dotnet ef database update --context AppDbContext
-- dotnet ef database update --context AppDbContext --project "E:\asm-ca\ASafariM\Infrastructure" --startup-project "E:\asm-ca\WebAppMVC"


-- dotnet ef migrations add InitialIdentityMigration --context WebAppMVCContext
-- dotnet ef migrations add InitialIdentityMigration --context WebAppMVCContext --project "E:\asm-ca\WebAppMVC" --startup-project "E:\asm-ca\WebAppMVC"

-- dotnet ef database update --context WebAppMVCContext
-- dotnet ef database update --context WebAppMVCContext --project "E:\asm-ca\WebAppMVC" --startup-project "E:\asm-ca\WebAppMVC"


use asmdb;
DELETE FROM `asmdb`.`aspnetusers` WHERE (`Id` = '08dd035e-7a93-4855-8e94-94eeed367dc8');
DELETE FROM `asmdb`.`aspnetusers` WHERE (`Id` = '08dd035c-6644-4b9d-8cac-4bbb821d0453');

UPDATE `asmdb`.`aspnetusers` SET `EmailConfirmed` = 1 WHERE (`EmailConfirmed` = 0);

show databases;
show tables;

select * from aspnetusers;

-- Delete all items from the table Accounts
DELETE FROM `Accounts`;
Delete from `aspnetusers`;

-- DROP TABLE Accounts;

-- INSERT INTO `Accounts` (`Id`, `Email`, `FirstName`, `LastName`, `Password`) VALUES
-- (1, 'r8BdI@example.com', 'joe', 'smith', 'password'),
-- (2, 'mzK0t@example.com', 'jane', 'doe', 'password'),
-- (3, 'QvV0X@example.com', 'jane', 'doe', 'password'),
-- (4, 'QvVsX@example.com', 'melaene', 'doekezo', 'password');
