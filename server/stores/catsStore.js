const MongoClient = require('mongodb').MongoClient;
const auth = require('../auth.js');
const ObjectID = require('mongodb').ObjectID;

let db = null;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('catMash');
};

const getCat = count => {
  const data = db
    .collection('cats')
    .find()
    .sort({ nbParty: 1 })
    .limit(Number(count))
    .toArray();
  return data;
};

const getScores = count => {
  const data = db
    .collection('cats')
    .find()
    .sort({ catWon: -1 })
    .limit(Number(count))
    .toArray();
  return data;
};

const matchScores = async (catWonId, catLostId) => {
  try {
    const winnerScore = await db
      .collection('cats')
      .updateOne(
        { _id: ObjectID(catWonId) },
        { $inc: { catWon: +1, nbParty: +1 } }
      );
    const loserScore = await db
      .collection('cats')
      .updateOne(
        { _id: ObjectID(catLostId) },
        { $inc: { catLost: +1, nbParty: +1 } }
      );

    const result = { winnerScore, loserScore };
    return result;
  } catch (e) {
    console.error(e, 'error in store');
  }
};

const initialise = async () => {
  await initializeDatabase();
};

initialise();

module.exports = {
  getCat,
  getScores,
  matchScores,
};
