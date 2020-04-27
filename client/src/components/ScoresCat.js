import React, { useState, useEffect } from 'react';
import { getScores } from '../service/catsData';
import {
  ContainerHome,
  SubTitle,
  DesignLink,
  Title,
} from './style/catsMatchStyle';
import arrow from './style/arrow.png';

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
    <ContainerHome>
      <Title>TOP 5 cats</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginLeft: '40px',
        }}
      >
        <SubTitle>cats</SubTitle>
        <SubTitle>points</SubTitle>
      </div>

      {scores.map((score, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <div>
            {' '}
            <img
              src={score.image}
              alt="cat on list"
              style={{ width: '100px' }}
            />
          </div>
          <Title>{score.catWon}</Title>
        </div>
      ))}
      <DesignLink to="/">
        <img
          src={arrow}
          style={{ marginTop: '20px', width: '50px' }}
          alt="back to choose a cat"
        />
      </DesignLink>
    </ContainerHome>
  );
};
