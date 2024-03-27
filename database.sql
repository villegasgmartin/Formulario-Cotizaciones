CREATE DATABASE IF NOT EXISTS planB;

USE planB;

CREATE TABLE cotizaciones (
    id INT PRIMARY KEY AUTOINCREMENT,
    plan varchar(50) NOT NULL,
    Tipo_Individuo VARCHAR(50) NOT NULL,
    Rango_Edad INT,
    Rango_Edad_min INT,
    Cotizacion DECIMAL(10,2) NOT NULL,
    Nombreplan varchar(50) NOT NULL,
    tributo varchar(100) NOT NULL,
)

