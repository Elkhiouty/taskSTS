USE [master]
GO
/****** Object:  Database [task]    Script Date: 18/08/2024 06:38:05 ص ******/
CREATE DATABASE [task]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'task', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\task.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'task_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\task_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [task] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [task].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [task] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [task] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [task] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [task] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [task] SET ARITHABORT OFF 
GO
ALTER DATABASE [task] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [task] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [task] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [task] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [task] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [task] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [task] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [task] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [task] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [task] SET  DISABLE_BROKER 
GO
ALTER DATABASE [task] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [task] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [task] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [task] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [task] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [task] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [task] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [task] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [task] SET  MULTI_USER 
GO
ALTER DATABASE [task] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [task] SET DB_CHAINING OFF 
GO
ALTER DATABASE [task] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [task] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [task] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [task] SET QUERY_STORE = OFF
GO
USE [task]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 18/08/2024 06:38:05 ص ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[categories]    Script Date: 18/08/2024 06:38:05 ص ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categories](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_categories] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 18/08/2024 06:38:05 ص ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](max) NOT NULL,
	[price] [float] NOT NULL,
	[image] [nvarchar](max) NULL,
	[categoryid] [int] NOT NULL,
 CONSTRAINT [PK_products] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240816001218_Initial', N'7.0.20')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240816132430_priceDataType', N'7.0.20')
SET IDENTITY_INSERT [dbo].[categories] ON 

INSERT [dbo].[categories] ([id], [title]) VALUES (1, N'electronics')
INSERT [dbo].[categories] ([id], [title]) VALUES (2, N'jewelery')
INSERT [dbo].[categories] ([id], [title]) VALUES (3, N'men''s clothing')
INSERT [dbo].[categories] ([id], [title]) VALUES (4, N'women''s clothing')
SET IDENTITY_INSERT [dbo].[categories] OFF
SET IDENTITY_INSERT [dbo].[products] ON 

INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (1, N'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 109.95, N'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', 3)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (2, N'Mens Casual Premium Slim Fit T-Shirts', 22.3, N'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', 3)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (3, N'Mens Cotton Jacket', 55.99, N'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', 3)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (4, N'Mens Casual Slim Fit', 15.99, N'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', 3)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (5, N'John Hardy Women''s Legends Naga Gold & Silver Dragon Station Chain Bracelet', 695, N'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', 2)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (7, N'Solid Gold Petite Micropave', 168, N'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg', 2)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (8, N'White Gold Plated Princess', 9.99, N'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg', 2)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (11, N'Pierced Owl Rose Gold Plated Stainless Steel Double', 10.99, N'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg', 2)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (12, N'WD 2TB Elements Portable External Hard Drive - USB 3.0', 64, N'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', 1)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (13, N'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', 109, N'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg', 1)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (14, N'NULLSamsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED', 999.99, N'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg', 1)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (15, N'BIYLACLESEN Women''s 3-in-1 Snowboard Jacket Winter Coats', 56.99, N'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg', 4)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (16, N'Lock and Love Women''s Removable Hooded Faux Leather Moto Biker Jacket', 29.9, N'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg', 4)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (17, N'DANVOUY Womens T Shirt Casual Cotton Short', 12.99, N'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg', 4)
INSERT [dbo].[products] ([id], [title], [price], [image], [categoryid]) VALUES (18, N'MBJ Women''s Solid Short Sleeve Boat Neck V', 9.85, N'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg', 4)
SET IDENTITY_INSERT [dbo].[products] OFF
/****** Object:  Index [IX_products_categoryid]    Script Date: 18/08/2024 06:38:05 ص ******/
CREATE NONCLUSTERED INDEX [IX_products_categoryid] ON [dbo].[products]
(
	[categoryid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK_products_categories_categoryid] FOREIGN KEY([categoryid])
REFERENCES [dbo].[categories] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK_products_categories_categoryid]
GO
USE [master]
GO
ALTER DATABASE [task] SET  READ_WRITE 
GO
