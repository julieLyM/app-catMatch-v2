import React, { useState, useEffect } from 'react';
import { Cat } from './Cat';
import { getCats, addPointCat } from '../service/catsData';
import {
  ContainerHome,
  ContainerPic,
  ImgPodium,
  DesignLink,
  Title,
  Text,
} from './style/catsMatchStyle';
import podium from './style/podium.png';

export const CatsMatch = () => {
  const [cats, setCats] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCats = async () => {
      const data = await getCats();
      setCats((oldData) => [
        ...oldData,
        ...data.slice(oldData.length === 0 ? 0 : 4),
      ]);
    };
    if (cats.length === 0 || cats.length - index <= 4) {
      fetchCats();
    }
  }, [index]);

  const increment = () => {
    setIndex((oldIndex) => oldIndex + 2);
  };

  const update = (winCatId, lostCatId) => {
    increment();
    addPointCat(winCatId, lostCatId);
  };

  return (
    <ContainerHome>
      <Title>Choose your favorite cat</Title>

      <ContainerPic>
        <div>
          <Cat cats={cats[index]} update={update} catLoser={cats[index + 1]} />
          <Text>Cat 1</Text>
        </div>
        <div>
          <Title>VS</Title>
        </div>
        <div>
          <Cat cats={cats[index + 1]} update={update} catLoser={cats[index]} />
          <Text>Cat 2</Text>
        </div>
      </ContainerPic>
      <DesignLink to="/ScoresCat">
        <ImgPodium src={podium} alt="go to score page" />
      </DesignLink>
    </ContainerHome>
  );
};
