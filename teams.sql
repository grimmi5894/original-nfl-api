CREATE DATABASE nfl;

USE nfl;

CREATE TABLE teams (
  id INT auto_increment,
  location VARCHAR(255),
  mascot VARCHAR(255),
  abbreviation VARCHAR(255),
  conference VARCHAR(255),
  division VARCHAR(255),
  PRIMARY KEY(id)
);

USE nfl;

INSERT INTO teams (location, mascot, abbreviation, conference, division) VALUES ('Buffalo', 'Bills', 'BUF', 'AFC', 'EAST');

USE nfl;

INSERT INTO teams (location, mascot, abbreviation, conference, division) VALUES ('Miami', 'Dolphins', 'MIA', 'AFC', 'EAST'),
	('New England', 'Patriots', 'NE', 'AFC', 'EAST'),
    ('New York', 'Jets', 'NYJ', 'AFC', 'EAST'),
    ('Baltimore', 'Ravens', 'BAL', 'AFC', 'NORTH'),
    ('Cincinnati', 'Bengals', 'CIN', 'AFC', 'NORTH'),
    ('Cleveland', 'Browns', 'CLE', 'AFC', 'NORTH'),
    ('Pittsburg', 'Steelers', 'PIT', 'AFC', 'NORTH'),
    ('Houston', 'Texans', 'HOU', 'AFC', 'SOUTH'),
    ('Indianapolis', 'Colts', 'IND', 'AFC', 'NORTH'),
    ('Jacksonville', 'Jaguars', 'JAX', 'AFC', 'NORTH'),
    ('Tennessee', 'Titans', 'TEN', 'AFC', 'NORTH'),
    ('Denver', 'Broncos', 'DEN', 'AFC', 'WEST'),
    ('Kansas City', 'Chiefs', 'KC', 'AFC', 'WEST'),
    ('Los Angeles', 'Chargers', 'LAC', 'AFC', 'WEST'),
    ('Oakland', 'Raiders', 'OAK', 'AFC', 'WEST'),
    ('Dallas', 'Cowboys', 'DAL', 'NFC', 'EAST'),
    ('New York', 'Giants', 'NYG', 'NFC', 'EAST'),
    ('Philadelphia', 'Eagles', 'PHI', 'NFC', 'EAST'),
    ('Washington', 'Redskins', 'WSH', 'NFC', 'EAST'),
    ('Chicago', 'Bears', 'CHI', 'NFC', 'NORTH'),
    ('Detroit', 'Lions', 'DET', 'NFC', 'NORTH'),
    ('Green Bay', 'Packers', 'GB', 'NFC', 'NORTH'),
    ('Minnesota', 'Vikings', 'MIN', 'NFC', 'NORTH'),
    ('Atlanta', 'Falcons', 'ATL', 'NFC', 'SOUTH'),
    ('Carolina', 'Panthers', 'CAR', 'NFC', 'SOUTH'),
    ('New Orleans', 'Saints', 'NO', 'NFC', 'SOUTH'),
    ('Tampa Bay', 'Buccaneers', 'TB', 'NFC', 'SOUTH'),
    ('Arizona', 'Cardinals', 'ARI', 'NFC', 'WEST'),
    ('Los Angeles', 'Rams', 'LAR', 'NFC', 'WEST'),
    ('San Francisco', '49ers', 'SF', 'NFC', 'WEST'),
    ('Seattle', 'Seahawks', 'SEA', 'NFC', 'WEST');
    