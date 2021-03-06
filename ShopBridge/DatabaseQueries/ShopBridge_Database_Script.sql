USE [master]
GO
/****** Object:  Database [ShopBridge]    Script Date: 22-07-2020 22:09:58 ******/
CREATE DATABASE [ShopBridge];

USE [ShopBridge]
GO
/****** Object:  Table [dbo].[Inventory]    Script Date: 22-07-2020 22:09:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inventory](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Description] [nvarchar](1000) NULL,
	[Price] [decimal](6, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  StoredProcedure [dbo].[spDeleteInventoryWhereIdIs]    Script Date: 22-07-2020 22:09:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[spDeleteInventoryWhereIdIs]  
	@Id INT
AS 
BEGIN 
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DELETE FROM [dbo].[Inventory] WHERE Id=@Id;

END

GO
/****** Object:  StoredProcedure [dbo].[spGetAllInventories]    Script Date: 22-07-2020 22:09:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[spGetAllInventories]  
AS 
BEGIN 
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT Id, Name, [Description], Price FROM [dbo].[Inventory];

END

GO
/****** Object:  StoredProcedure [dbo].[spGetInventoryDetailsForId]    Script Date: 22-07-2020 22:09:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[spGetInventoryDetailsForId]  
	@Id INT
AS 
BEGIN 
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT Id, Name, [Description], Price FROM [dbo].[Inventory] WHERE Id= @Id;

END
GO
/****** Object:  StoredProcedure [dbo].[spInsertInventory]    Script Date: 22-07-2020 22:09:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[spInsertInventory]
	-- Add the parameters for the stored procedure here
	@Name NVARCHAR(150),
	@Description NVARCHAR(1000),
	@Price DECIMAL(6,2)
AS
BEGIN

	DECLARE @Id AS INT;
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO [dbo].[Inventory] VALUES (@Name, @Description, @Price)

	SELECT Id, Name, [Description], Price FROM [dbo].[Inventory] WHERE Id = SCOPE_IDENTITY();

END

GO
USE [master]
GO
ALTER DATABASE [ShopBridge] SET  READ_WRITE 
GO
