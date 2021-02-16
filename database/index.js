const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'ha',
  multipleStatements: true
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

const getCities = (callback) => {
  connection.query('SELECT * FROM cities', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data);
    }
  })
}

const getReviews = (id, callback) => {
  connection.query('SELECT * FROM cities WHERE airport_code=?; SELECT * FROM reviews WHERE airport_code=? ORDER BY date DESC; SELECT * FROM hotels WHERE airport_code=?', [id, id, id], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data);
    }
  })
}

const sortReviews = (id, sort, callback) => {
  let query;
  if (sort === 'recent') {
    query = `SELECT * FROM reviews WHERE airport_code=? ORDER BY date DESC`
  }
  if (sort === 'highestrated') {
    query = `SELECT * FROM reviews WHERE airport_code=? ORDER BY upvotes DESC`
  }
  if (sort === 'oldest') {
    query = `SELECT * FROM reviews WHERE airport_code=? ORDER BY date ASC`
  }
  connection.query(query, [id], (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(err, data);
    }
  })
}

const postReview = (id, reviewData, callback) => {
  let { name, date, categories, review } = reviewData;
  if (typeof categories === 'string') {
    categories = [categories];
  }
  connection.query('INSERT INTO reviews (airport_code, fa_name, date, categories, review_text, upvotes) VALUES (?, ?, ?, ?, ?, ?)', [id, name, date, JSON.stringify(categories), review, 0], (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(data);
      callback(err, data);
    }
  })
}

const upVote = (id, callback) => {
  connection.query('UPDATE reviews SET upvotes = upvotes + 1 WHERE id = ?', [id], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data);
    }
  })
}

module.exports = {
  getCities,
  getReviews,
  postReview,
  upVote,
  sortReviews
}