create database if not exists fgl character set = "UTF8";

use fgl;

create or replace TABLE Tournament (
    TournamentID int not null primary key,
    Name varchar(255) not null,
    StartDate date not null,
    EndDate date not null,
    Season int not null,
    Multiplier decimal(10,2) not null    
);

create or replace TABLE User (
    UserID int not null primary key auto_increment,
    Name varchar(50),
    Email varchar(50)
);

create or replace TABLE Golfer (
    GolferID int not null primary key,
    Name varchar(50) not null,
    Points int not null,
    TopTenCount int not null,
    TopFiveCount int not null,
    WinCount int not null
);

create or replace TABLE Team (
    TeamID int not null primary key auto_increment,
    TeamName varchar(50) not null
);

create or replace TABLE User_Team (
    UserID int not null,
    TeamID int not null,
    PRIMARY KEY(UserID, TeamID),
    foreign key (UserID) references User(UserID),
    foreign key (TeamID) references Team(TeamID)
);

create or replace TABLE Golfer_Team (
    GolferID int not null,
    TeamID int not null,
    PRIMARY KEY(GolferID, TeamID),
    foreign key (GolferID) references Golfer(GolferID),
    foreign key (TeamID) references Team(TeamID) 
);