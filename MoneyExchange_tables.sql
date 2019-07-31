CREATE DATABASE MONEYEXCHANGE;

USE MONEYEXCHANGE;

CREATE TABLE Users_TB (
	idx_user INT primary key auto_increment,
    name_user VARCHAR(40) not null,
    email_user VARCHAR(40) not null,
    password_user VARCHAR(40) not null,
    salt VARCHAR(200),
    created_at DATETIME default current_timestamp,
    update_at DATETIME,
    role VARCHAR(20) default 'User',
    money_platform INT not null,
    image_path VARCHAR(100)
);

CREATE TABLE NexonInfo_TB (
	idx_nexon_user INT primary key auto_increment,
    idx_user INT not null,
    email_nexon VARCHAR(40) not null,
    foreign key (idx_user) references Users_TB (idx_user)
);

CREATE TABLE Games_TB (
	idx_game INT primary key auto_increment,
    name_game VARCHAR(100) not null,
    image_path VARCHAR(40)
);

CREATE TABLE Characters_TB (
	idx_character INT primary key auto_increment,
    idx_user INT,
    idx_game INT,
    name_character VARCHAR(100) not null,
    money_character INT not null,
    foreign key (idx_user) references Users_TB (idx_user),
    foreign key (idx_game) references GAMES_TB (idx_game)
);

CREATE TABLE ExchangeRate_TB (
	idx_exchang_rate INT primary key auto_increment,
    idx_game INT,
    exchange_rate INT not null,
    foreign key (idx_game) references GAMES_TB (idx_game)
);

CREATE TABLE Exchange_TB (
	idx_exchange INT primary key auto_increment,
    idx_character INT,
    idx_exchang_rate INT,
    fee INT default 100,
    direction VARCHAR(20) not null default 'GP',
    exchang_money INT,
    exchange_time DATETIME default current_timestamp,
    approvalYn VARCHAR(20) not null default 'N',
    foreign key (idx_character) references Characters_TB (idx_character),
    foreign key (idx_exchang_rate) references ExchangeRate_TB (idx_exchang_rate)
);












