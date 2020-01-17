const MongoClient = require('mongodb').MongoClient;
const auth = require('../auth.js');
const url = 'mongodb://localhost:27017';
const imgJson = require('./cats.json');

let db = null;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(url, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('catMash');
};

const addCatCollection = cats => {
  try {
    return db.collection('cats').insertMany(cats);
  } catch (e) {
    console.error(e);
  }
};

const clearCollection = () => {
  try {
    return db.dropDatabase();
  } catch (e) {
    console.error(e);
  }
};

const initialise = async () => {
  await initializeDatabase();
  await clearCollection();
  await addCatCollection(imgJson.images);
};

initialise();
