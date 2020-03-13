import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cat } from './Cat';
import { getCats, addPointCat } from '../service/catsData';
import {
  ContainerHome,
  ContainerBloc,
  CatPicture,
} from './style/catsMatchStyle';

export const CatsMatch = () => {
  const [cats, setCats] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCats = async () => {
      const data = await getCats();
      setCats(oldData => [
        ...oldData,
        ...data.slice(oldData.length === 0 ? 0 : 4),
      ]);
    };
    if (cats.length === 0 || cats.length - index <= 4) {
      fetchCats();
    }
  }, [index]);

  const increment = () => {
    setIndex(oldIndex => oldIndex + 2);
  };

  const update = (winCatId, lostCatId) => {
    increment();
    addPointCat(winCatId, lostCatId);
  };

  console.log(index);
  return (
    <ContainerHome>
      <h1>Choose your favorite cat</h1>
      <ContainerBloc>
        <CatPicture>
          <Cat cats={cats[index]} update={update} catLoser={cats[index + 1]} />
        </CatPicture>

        <CatPicture>
          <Cat cats={cats[index + 1]} update={update} catLoser={cats[index]} />
        </CatPicture>
      </ContainerBloc>
      <div>
        <Link to="/ScoresCat">
          <h4>classement</h4>
        </Link>
      </div>
    </ContainerHome>
  );
};
