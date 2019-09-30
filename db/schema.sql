drop database burgers_db;
create database IF NOT exists burgers_db;
use burgers_db;
create table burgers( id int not null primary key AUTO_INCREMENT,
burger_name varchar(255) not null, 
devoured boolean not null);


