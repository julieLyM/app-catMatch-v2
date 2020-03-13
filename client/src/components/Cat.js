import React from 'react';

export const Cat = ({ cats = {}, update, catLoser = {} }) => {
  return (
    <div onClick={update.bind(null, cats._id, catLoser._id)}>
      <img src={cats.image} style={{ width: '250px' }} alt="cat" />
    </div>
  );
};
