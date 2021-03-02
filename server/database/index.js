const mysql = require('mysql');

let connection;

const handleDisconnect = () => {
   connection = mysql.createConnection({
    // host: 'localhost',
    // user: 'student',
    // password: 'student',
    // database: 'ha',
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'bc54a977f04a98',
    password: '9866e82b',
    database: 'heroku_04094f2fa96e716',
    multipleStatements: true
  });

  connection.connect((err) => {
    if (err) {
      console.log('error connecting to db:', err);
      setTimeout(handleDisconnect, 2000)
    } else {
      console.log('Connected to MySQL!')
    }
  });

  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}
handleDisconnect();

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

const sortReviews = (id, sort, category, callback) => {
  let query;
  if (category === 'null') {
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
        callback(err);
      } else {
        callback(err, data);
      }
    })
  } else {
    let categoryLike = `%${category}%`;
    if (sort === 'recent') {
      query = `SELECT * FROM reviews WHERE airport_code=? AND categories LIKE ? ORDER BY date DESC`
    }
    if (sort === 'highestrated') {
      query = `SELECT * FROM reviews WHERE airport_code=? AND categories LIKE ? ORDER BY upvotes DESC`
    }
    if (sort === 'oldest') {
      query = `SELECT * FROM reviews WHERE airport_code=? AND categories LIKE ? ORDER BY date ASC`
    }
    connection.query(query, [id, categoryLike], (err, data) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        callback(err, data);
      }
    })
  }
}

const postReview = (id, reviewData, callback) => {
  let { name, fa_id, date, categories, review } = reviewData;
  if (typeof categories === 'string') {
    categories = [categories];
  }
  connection.query('INSERT INTO reviews (airport_code, fa_name, fa_id, date, categories, review_text, upvotes) VALUES (?, ?, ?, ?, ?, ?, ?)', [id, name, fa_id, date, JSON.stringify(categories), review, 0], (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(err, data);
    }
  })
}

const editReview = (id, editData, callback) => {
  let { name, categories, text } = editData;
  if (typeof categories === 'string') {
    categories = [categories];
  }
  connection.query('UPDATE reviews SET fa_name=?, categories=?, review_text=? WHERE id=?', [name, JSON.stringify(categories), text, id], (err, data) => {
    if (err) {
      callback(err);
    } else {
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

const deleteReview = (id, callback) => {
  connection.query('DELETE FROM reviews WHERE id=?', [id], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data);
    }
  })
}

const getUser = (empNumber, password, callback) => {
  connection.query('SELECT emp_number, first_name, last_name from users WHERE emp_number=? AND password=?', [empNumber, password], (err, data) => {
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
  deleteReview,
  sortReviews,
  getUser,
  editReview
}