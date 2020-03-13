import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getScores } from '../service/catsData';

export const ScoresCat = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const response = await getScores();
      setScores(response);
    };
    fetchScores();
  }, []);

  return (
    <div>
      <h1>TOP 5 cats</h1>
      {scores.map((score, i) => (
        <div key={i}>
          <img src={score.image} alt="cat on list" style={{ width: '100px' }} />{' '}
          {''}
          {score.catWon}
        </div>
      ))}
      <Link to="/">
        <h1>return</h1>
      </Link>
    </div>
  );
};
