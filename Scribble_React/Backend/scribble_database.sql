-- Creating Schema to store tables in.
create schema `scribble`;

-- Using the Schema 
use `scribble`;

-- Creating table to store data in.
create table details(
id int not null auto_increment,
username varchar(40)not null, 
password varchar(40)not null,
email varchar(60)not null,
mobile varchar(10)not null, 
primary key (id));

-- Insert operation Query
insert into details (id, username, password, email, mobile) values
(null, 'User Name','12345678','demo@gmail.com','9123456879');

-- Query to display Table data
select * from details; 

-- Query to Update specific row
update details
set username = 'New User'
where id = 1;

-- Query to delete all data at once from table
truncate details;

-- Query to delete Specific Row
delete from details where id = 1;

