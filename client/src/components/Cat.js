import React from 'react';
import { CatImg } from './style/catsMatchStyle';
import { ContainerCatPage, CatFlex } from './style/catsMatchStyle';

export const Cat = ({ cats = {}, update, catLoser = {} }) => {
  return (
    <ContainerCatPage onClick={update.bind(null, cats._id, catLoser._id)}>
      <CatFlex>
        <CatImg src={cats.image} alt="cat" />
      </CatFlex>
    </ContainerCatPage>
  );
};
