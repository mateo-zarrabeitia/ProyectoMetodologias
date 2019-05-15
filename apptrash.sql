-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-05-06 13:14:18.238

-- tables
-- Table: reporte
CREATE TABLE Reporte (
    id_reporte int NOT NULL AUTO_INCREMENT,
    latitud real  NOT NULL,
    longitud real  NOT NULL,
    direcciondelHecho varchar(50)  NOT NULL,
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
CREATE TABLE Usuario (
    id_usuario int NOT NULL AUTO_INCREMENT,
    dni int  NULL,
    nombre varchar(30)  NOT NULL,
    apellido varchar(30)  NOT NULL,
    email varchar(50)  NOT NULL,
    contraseña varchar(255)  NOT NULL,
    rol int  NOT NULL,
    direccionUsuario varchar(50)  NULL,
    CONSTRAINT usuario_pk PRIMARY KEY (id_usuario)
);

-- foreign keys
-- Reference: reporte_usuario (table: reporte)
ALTER TABLE Reporte ADD CONSTRAINT reporte_usuario
    FOREIGN KEY (fk_id_usuario)
    REFERENCES usuario (id_usuario)

;

INSERT INTO 'reporte' ('latitud', 'longitud', 'direcciondelHecho', 'detalle', 'rutaImagen', 'rutaVideo', 'fechaCreacion', 'fechaFinalizada', 'patente', 'fk_id_usuario') VALUES
(-37.3229293823, -59.1214103699, NULL, NULL, NULL, NULL, '2019-05-07', NULL, NULL, 1),
(3, -37.3240550026, -59.1302813474, NULL, NULL, NULL, NULL, '2019-05-08', NULL, NULL, 1);

INSERT INTO 'usuario' ('id_usuario', 'dni', 'nombre', 'apellido', 'email', 'contraseña', 'rol', 'direccionUsuario') VALUES
(1, NULL, 'juan', 'perez', 'juan@gmail.com', '1234', 1, NULL);

-- End of file.
