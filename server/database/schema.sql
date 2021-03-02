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
  fa_id INT NOT NULL,
  date DATETIME NOT NULL,
  categories VARCHAR(100) NOT NULL,
  review_text TEXT NOT NULL,
  upvotes INT NOT NULL,
  FOREIGN KEY (airport_code) REFERENCES cities(airport_code)
);

CREATE TABLE IF NOT EXISTS hotels (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  airport_code CHAR(3) NOT NULL,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(200) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  microwave VARCHAR(20),
  fridge VARCHAR(20),
  gym VARCHAR(20),
  breakfast VARCHAR(20),
  shuttle VARCHAR(100),
  pickup VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS users (
  emp_number INT NOT NULL PRIMARY KEY,
  password VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL
);

INSERT INTO users (emp_number, password, first_name, last_name)
VALUES (19899, 'password', 'Jeremy', 'Fujimoto'),
(1, 'password', 'Tracy', 'Nguyen'),
(0, 0, 'Guest', 'User');

INSERT INTO hotels (airport_code, name, address, phone, microwave, fridge, gym, breakfast, shuttle, pickup) VALUES
('ICN', 'Sheraton Grand Incheon Hotel', 'South Korea, Incheon, Yeonsu-gu, Songdo 1(il)-dong, 153 Convensia-road', '+82 32-835-1000', 'No', 'Yes', 'Free', 'No', 'Hotel Shuttle', '2:00'),
('KIX', 'Swissotel Nankai Osaka', '5 chome-1-60 Nanba, Chuo Ward, Osaka, 542-0076, Japan', '+81 6-6646-1111', 'No', 'Yes', 'Paid', 'No', 'Cab Station Company', '2:15'),
('OAK', 'Hilton Oakland Airport', '1 Hegenberger Rd, Oakland, CA 94621', '(510) 635-5000', 'No', 'Yes', 'Free', 'No', 'Hotel Shuttle', 'N/A'),
('PDX', 'Radisson Hotel Portland Airport', '6233 NE 78th Ct, Portland, OR 97218', '(971) 361-3971', 'No', 'Yes', 'No', 'Free', 'Hotel Shuttle', '1:30'),
('PHX', 'Hyatt Regency Phoenix', '122 N 2nd St, Phoenix, AZ 85004', '(602) 252-1234', 'Yes', 'Yes', 'Free', 'No', 'Desert Coach', '1:30'),
('SAN', 'The Westin San Diego Gaslamp Quarter', '910 Broadway Cir, San Diego, CA 92101', '(619) 239-2200', 'Yes', 'Yes', 'Free', 'No', 'Better Business Connection', '1:35'),
('SEA', 'Coast Gateway Hotel', '18415 International Blvd, SeaTac, WA 98188', '(206) 248-8200', 'Yes', 'Yes', 'No', 'Free', 'Hotel Shuttle/Walk', 'N/A'),
('SJC', 'Fairmont San Jose', '170 S Market St, San Jose, CA 95113', '(408) 998-1900', 'Yes', 'Can order to room', 'Yes', 'No', 'Airline Coach Service', '1:30'),
('SMF', 'Hyatt Regency Sacramento', '1209 L St, Sacramento, CA 95814', '(916) 443-1234', 'Yes', 'Yes', 'Free', 'No', 'Neumann Transportation', '1:40');

INSERT INTO cities (airport_code, city, state_or_country, img) VALUES
('AKL', 'Auckland', 'New Zealand', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/AKL.jpg'),
('AUS', 'Austin', 'Texas', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/AUS.webp'),
('BNE', 'Brisbane', 'Australia', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/BNE.jpg'),
('BOS', 'Boston', 'Massachusetts', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/BOS.jpg'),
('CTS', 'Chitose', 'Japan', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/CTS.jpeg'),
('FUK', 'Fukuoka', 'Japan', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/FUK.jpeg'),
('HND', 'Tokyo-Haneda', 'Japan', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/HND.jpeg'),
('ICN', 'Incheon', 'South Korea', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/ICN.jpg'),
('JFK', 'New York', 'New York', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/JFK.jpg'),
('KIX', 'Osaka', 'Japan', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/KIX.jpg'),
('LAS', 'Las Vegas', 'Nevada', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/LAS.jpg'),
('LAX', 'Los Angeles', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/LAX.jpg'),
('LGB', 'Long Beach', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/LGB.webp'),
('MCO', 'Orlando', 'Florida', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/MCO.jpg'),
('NRT', 'Tokyo-Narita', 'Japan', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/NRT.jpeg'),
('OAK', 'Oakland', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/OAK.jpg'),
('ONT', 'Ontario', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/ONT.jpg'),
('PHX', 'Phoenix', 'Arizona', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/PHX.webp'),
('SAN', 'San Diego', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SAN.jpeg'),
('SEA', 'Seattle', 'Washington', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SEA.jpg'),
('SFO', 'San Francisco', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SFO.jpg'),
('SJC', 'San Jose', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SJC.jpg'),
('SMF', 'Sacramento', 'California', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SMF.jpg'),
('SYD', 'Sydney', 'Australia', 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/MVPimages/SYD.jpg');