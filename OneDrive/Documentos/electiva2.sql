USE [master]
GO
/****** Object:  Database [electiva2]    Script Date: 22/10/2024 17:46:09 ******/
CREATE DATABASE [electiva2]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'electiva2', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\electiva2.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'electiva2_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\electiva2_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [electiva2] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [electiva2].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [electiva2] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [electiva2] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [electiva2] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [electiva2] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [electiva2] SET ARITHABORT OFF 
GO
ALTER DATABASE [electiva2] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [electiva2] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [electiva2] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [electiva2] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [electiva2] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [electiva2] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [electiva2] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [electiva2] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [electiva2] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [electiva2] SET  DISABLE_BROKER 
GO
ALTER DATABASE [electiva2] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [electiva2] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [electiva2] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [electiva2] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [electiva2] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [electiva2] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [electiva2] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [electiva2] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [electiva2] SET  MULTI_USER 
GO
ALTER DATABASE [electiva2] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [electiva2] SET DB_CHAINING OFF 
GO
ALTER DATABASE [electiva2] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [electiva2] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [electiva2] SET DELAYED_DURABILITY = DISABLED 
GO
USE [electiva2]
GO
/****** Object:  Table [dbo].[Categoria]    Script Date: 22/10/2024 17:46:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Categoria](
	[id_categoria] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_categoria] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 22/10/2024 17:46:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente](
	[id_cliente] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id_cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Configuracion]    Script Date: 22/10/2024 17:46:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Configuracion](
	[id_configuracion] [int] IDENTITY(1,1) NOT NULL,
	[ID_cliente] [int] NULL,
	[tamanio_letra] [varchar](30) NULL,
	[contraste] [varchar](30) NULL,
	[tipo_voz] [varchar](30) NULL,
	[velocidad_voz] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_configuracion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Detalle_pedido]    Script Date: 22/10/2024 17:46:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Detalle_pedido](
	[id_detallePedido] [int] IDENTITY(1,1) NOT NULL,
	[ID_producto] [int] NULL,
	[cantidad] [int] NULL,
	[tamanio] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_detallePedido] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Ingrediente]    Script Date: 22/10/2024 17:46:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Ingrediente](
	[id_ingrediente] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NULL,
	[cantidad] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_ingrediente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Pedido]    Script Date: 22/10/2024 17:46:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Pedido](
	[id_pedido] [int] IDENTITY(1,1) NOT NULL,
	[ID_cliente] [int] NULL,
	[modalidad] [varchar](30) NULL,
	[fecha] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_pedido] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Producto]    Script Date: 22/10/2024 17:46:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Producto](
	[id_producto] [int] IDENTITY(1,1) NOT NULL,
	[ID_categoria] [int] NULL,
	[precio] [decimal](10, 2) NULL,
	[nombre] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_producto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Producto_Ingrediente]    Script Date: 22/10/2024 17:46:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Producto_Ingrediente](
	[ID_producto] [int] NULL,
	[ID_ingrediente] [int] NULL
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Categoria] ON 

INSERT [dbo].[Categoria] ([id_categoria], [nombre]) VALUES (1, N'Menu del dia')
INSERT [dbo].[Categoria] ([id_categoria], [nombre]) VALUES (2, N'Entrada')
INSERT [dbo].[Categoria] ([id_categoria], [nombre]) VALUES (3, N'Plato principal')
INSERT [dbo].[Categoria] ([id_categoria], [nombre]) VALUES (4, N'Postres')
INSERT [dbo].[Categoria] ([id_categoria], [nombre]) VALUES (5, N'Bebidas')
INSERT [dbo].[Categoria] ([id_categoria], [nombre]) VALUES (6, N'Guarnicion')
SET IDENTITY_INSERT [dbo].[Categoria] OFF
SET IDENTITY_INSERT [dbo].[Ingrediente] ON 

INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (1, N'Tomate', NULL)
INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (2, N'Lechuga', NULL)
INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (3, N'Papas', NULL)
INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (4, N'Mayonesa', NULL)
INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (5, N'Ketchup', NULL)
INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (6, N'Dulce de leche', NULL)
INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (7, N'Salsa de chocolate', NULL)
INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (8, N'Crema', NULL)
INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (9, N'Cheddar', NULL)
INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (10, N'Guacamole', NULL)
INSERT [dbo].[Ingrediente] ([id_ingrediente], [nombre], [cantidad]) VALUES (11, N'Picante', NULL)
SET IDENTITY_INSERT [dbo].[Ingrediente] OFF
SET IDENTITY_INSERT [dbo].[Producto] ON 

INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (1, 1, CAST(150.00 AS Decimal(10, 2)), N'Hamburguesa')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (2, 4, CAST(130.00 AS Decimal(10, 2)), N'Alfajor')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (3, 3, CAST(300.00 AS Decimal(10, 2)), N'Asado')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (4, 5, CAST(100.00 AS Decimal(10, 2)), N'Agua')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (5, 5, CAST(150.00 AS Decimal(10, 2)), N'Cafe')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (6, 5, CAST(200.00 AS Decimal(10, 2)), N'Cerveza')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (7, 4, CAST(200.00 AS Decimal(10, 2)), N'Chocotorta')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (8, 4, CAST(150.00 AS Decimal(10, 2)), N'Cono de helado')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (9, 6, CAST(100.00 AS Decimal(10, 2)), N'Empanadas')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (10, 6, CAST(160.00 AS Decimal(10, 2)), N'Ensalada completa')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (11, 6, CAST(160.00 AS Decimal(10, 2)), N'Ensalada rusa')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (12, 6, CAST(130.00 AS Decimal(10, 2)), N'Ensalada simple')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (13, 4, CAST(120.00 AS Decimal(10, 2)), N'Flan')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (14, 3, CAST(250.00 AS Decimal(10, 2)), N'Hamburguesa completa')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (15, 3, CAST(300.00 AS Decimal(10, 2)), N'Milanesa con fritas')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (16, 2, CAST(150.00 AS Decimal(10, 2)), N'Nachos')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (17, 2, CAST(150.00 AS Decimal(10, 2)), N'Nuggets')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (18, 4, CAST(150.00 AS Decimal(10, 2)), N'Panqueques')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (19, 6, CAST(150.00 AS Decimal(10, 2)), N'Papas')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (20, 3, CAST(300.00 AS Decimal(10, 2)), N'Pasta bolognesa')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (21, 3, CAST(350.00 AS Decimal(10, 2)), N'Pastel de papa')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (22, 2, CAST(200.00 AS Decimal(10, 2)), N'Picada')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (23, 1, CAST(250.00 AS Decimal(10, 2)), N'Pizza')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (24, 3, CAST(150.00 AS Decimal(10, 2)), N'Pure')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (25, 4, CAST(250.00 AS Decimal(10, 2)), N'Torta rogel')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (26, 3, CAST(200.00 AS Decimal(10, 2)), N'Verduras salteadas')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (27, 5, CAST(300.00 AS Decimal(10, 2)), N'Vino')
INSERT [dbo].[Producto] ([id_producto], [ID_categoria], [precio], [nombre]) VALUES (28, 3, CAST(250.00 AS Decimal(10, 2)), N'Vitel tone')
SET IDENTITY_INSERT [dbo].[Producto] OFF
ALTER TABLE [dbo].[Configuracion]  WITH CHECK ADD FOREIGN KEY([ID_cliente])
REFERENCES [dbo].[Cliente] ([id_cliente])
GO
ALTER TABLE [dbo].[Detalle_pedido]  WITH CHECK ADD FOREIGN KEY([ID_producto])
REFERENCES [dbo].[Producto] ([id_producto])
GO
ALTER TABLE [dbo].[Pedido]  WITH CHECK ADD FOREIGN KEY([ID_cliente])
REFERENCES [dbo].[Cliente] ([id_cliente])
GO
ALTER TABLE [dbo].[Producto]  WITH CHECK ADD FOREIGN KEY([ID_categoria])
REFERENCES [dbo].[Categoria] ([id_categoria])
GO
ALTER TABLE [dbo].[Producto_Ingrediente]  WITH CHECK ADD FOREIGN KEY([ID_ingrediente])
REFERENCES [dbo].[Ingrediente] ([id_ingrediente])
GO
ALTER TABLE [dbo].[Producto_Ingrediente]  WITH CHECK ADD FOREIGN KEY([ID_producto])
REFERENCES [dbo].[Producto] ([id_producto])
GO
USE [master]
GO
ALTER DATABASE [electiva2] SET  READ_WRITE 
GO
