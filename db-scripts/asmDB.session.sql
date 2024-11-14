-- dotnet ef migrations add InitialCreate --context AppDbContext
-- dotnet ef migrations add InitialCreate --context AppDbContext --project "E:\asm-ca\ASafariM\Infrastructure" --startup-project "E:\asm-ca\WebAppMVC"

-- dotnet ef database update --context AppDbContext
-- dotnet ef database update --context AppDbContext --project "E:\asm-ca\ASafariM\Infrastructure" --startup-project "E:\asm-ca\WebAppMVC"


-- dotnet ef migrations add InitialIdentityMigration --context WebAppMVCContext
-- dotnet ef migrations add InitialIdentityMigration --context WebAppMVCContext --project "E:\asm-ca\WebAppMVC" --startup-project "E:\asm-ca\WebAppMVC"

-- dotnet ef database update --context WebAppMVCContext
-- dotnet ef database update --context WebAppMVCContext --project "E:\asm-ca\WebAppMVC" --startup-project "E:\asm-ca\WebAppMVC"


use asmdb;

-- SHow tables
-- show tables;

-- DROP TABLE Accounts;

INSERT INTO `Accounts` (`Id`, `Email`, `FirstName`, `LastName`, `Password`) VALUES
(1, 'r8BdI@example.com', 'joe', 'smith', 'password'),
(2, 'mzK0t@example.com', 'jane', 'doe', 'password'),
(3, 'QvV0X@example.com', 'jane', 'doe', 'password'),
(4, 'QvVsX@example.com', 'melaene', 'doekezo', 'password');


UPDATE aspnetusers SET EmailConfirmed = 1 WHERE EmailConfirmed = 0;
