-- CREATE DATABASE IF NOT EXISTS HA;

-- USE HA;

CREATE TABLE IF NOT EXISTS cities (
  airport_code CHAR(3) PRIMARY KEY,
  city VARCHAR(30) NOT NULL,
  state_or_country VARCHAR(30) NOT NULL,
  img VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  airport_code CHAR(3) NOT NULL,
  fa_name VARCHAR (100) NOT NULL,
  date DATE NOT NULL,
  categories JSON NOT NULL,
  review_text TEXT NOT NULL,
  upvotes INT NOT NULL,
  FOREIGN KEY (airport_code) REFERENCES cities(airport_code)
);

-- INSERT INTO cities (airport_code, city, state_or_country, img) VALUES
-- ('AKL', 'Auckland', 'New Zealand', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/AKL.jpg'),
-- ('AUS', 'Austin', 'Texas', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/AUS.webp'),
-- ('BNE', 'Brisbane', 'Australia', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/BNE.jpg'),
-- ('BOS', 'Boston', 'Massachusetts', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/BOS.jpg'),
-- ('CTS', 'Chitose', 'Japan', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/CTS.jpeg'),
-- ('FUK', 'Fukuoka', 'Japan', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/FUK.jpeg'),
-- ('HND', 'Tokyo-Haneda', 'Japan', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/HND.jpeg'),
-- ('ICN', 'Incheon', 'South Korea', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/ICN.jpg'),
-- ('JFK', 'New York', 'New York', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/JFK.jpg'),
-- ('KIX', 'Osaka', 'Japan', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/KIX.jpg'),
-- ('LAS', 'Las Vegas', 'Nevada', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/LAS.jpg'),
-- ('LAX', 'Los Angeles', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/LAX.jpg'),
-- ('LGB', 'Long Beach', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/LGB.webp'),
-- ('MCO', 'Orlando', 'Florida', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/MCO.jpg'),
-- ('NRT', 'Tokyo-Narita', 'Japan', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/NRT.jpeg'),
-- ('OAK', 'Oakland', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/OAK.jpg'),
-- ('ONT', 'Ontario', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/ONT.jpg'),
-- ('PHX', 'Phoenix', 'Arizona', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/PHX.webp'),
-- ('SAN', 'San Diego', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SAN.jpeg'),
-- ('SEA', 'Seattle', 'Washington', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SEA.jpg'),
-- ('SFO', 'San Francisco', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SFO.jpg'),
-- ('SJC', 'San Jose', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SJC.jpg'),
-- ('SMF', 'Sacramento', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SMF.jpg'),
-- ('SYD', 'Sydney', 'Australia', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SYD.jpg');