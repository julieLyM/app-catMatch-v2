require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const auth = require('../auth.js');

const imgCats = require('./cats.json');

let db = null;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  db = client.db('catMash');
  console.log(db);
};

const { images } = imgCats;
const cats = images.map(({ url: image }) => {
  return { image, catWon: 0, catLost: 0, nbParty: 0 };
});

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
  await addCatCollection(cats);
};

initialise();
