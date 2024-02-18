create table RegistrationPage(
CustomerID INT IDENTITY(1,1)PRIMARY KEY ,
CustomerName VARCHAR(100) UNIQUE,
PhoneNo VARCHAR(100),
Address VARCHAR(100),
PetName VARCHAR(255) NOT NULL,
PetGender VARCHAR(10) NOT NULL,
Breed VARCHAR(50) NOT NULL,
PetAge VARCHAR(5) NOT NULL,
health_status VARCHAR(20) NOT NULL,
description TEXT,
Password VARCHAR(50),
IsActive INT
)

delete  RegistrationPage where CustomerId='1';

select * from RegistrationPage;

CREATE PROCEDURE page_Registration
    @CustomerName VARCHAR(100),
    @PhoneNo VARCHAR(100),
    @Address VARCHAR(100),
    @PetName VARCHAR(255),
    @PetGender VARCHAR(10),
    @Breed VARCHAR(50),
    @Age VARCHAR(5),
    @health_status VARCHAR(20),
    @description TEXT,
	@Password VARCHAR(50),
    @IsActive INT
AS
BEGIN
    INSERT INTO RegistrationPage (CustomerName, PhoneNo, Address, PetName, PetGender, Breed, Age, health_status, description, Password, IsActive)
    VALUES (@CustomerName, @PhoneNo, @Address, @PetName, @PetGender, @Breed, @Age, @health_status, @description, @Password, @IsActive);
END;


CREATE PROCEDURE LoginPage(@CustomerName VARCHAR(100),@Password VARCHAR(100))
AS
BEGIN
	SELECT * FROM RegistrationPage WHERE CustomerName=@CustomerName AND Password=@Password;
END


-- Example: Update your stored procedure to fetch PetGender and Breed
CREATE PROCEDURE Page_Login
    @CustomerName NVARCHAR(255),
    @Password NVARCHAR(255)
AS
BEGIN
    SELECT 
        CustomerName,
        PhoneNo,
        Address,
        PetName,
        PetGender,
        Breed,
        Age,
        health_status,
        description,
        IsActive

    FROM RegistrationPage
    WHERE CustomerName = @CustomerName AND Password = @Password;
END
