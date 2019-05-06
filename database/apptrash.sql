-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-05-06 13:14:18.238

-- tables
-- Table: reporte
CREATE TABLE Reporte (
    id_reporte int  NOT NULL,
    latitud decimal(15,3)  NOT NULL,
    longitud decimal(15,3)  NOT NULL,
    detalle varchar(255)  NULL,
    rutaImagen varchar(255)  NULL,
    rutaVideo varchar(255)  NULL,
    fechaCreacion date  NOT NULL,
    fechaFinalizada date  NULL,
    patente int  NULL,
    fk_id_usuario int  NOT NULL,
    CONSTRAINT reporte_pk PRIMARY KEY (id_reporte)
);

-- Table: usuario
CREATE TABLE usuario (
    id_usuario int  NOT NULL,
    dni int  NULL,
    nombre varchar(30)  NOT NULL,
    apellido varchar(30)  NOT NULL,
    email varchar(50)  NOT NULL,
    contraseña varchar(50)  NOT NULL,
    rol int  NOT NULL,
    direccionUsuario varchar(50)  NULL,
    CONSTRAINT usuario_pk PRIMARY KEY (id_usuario)
);

-- foreign keys
-- Reference: reporte_usuario (table: reporte)
ALTER TABLE reporte ADD CONSTRAINT reporte_usuario
    FOREIGN KEY (fk_id_usuario)
    REFERENCES usuario (id_usuario)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

