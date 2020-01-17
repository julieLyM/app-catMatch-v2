import React, { Component } from 'react';
import getCats from '../service/catsData';
import { Cat } from './Cat.js';

export default class CatsMatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    this.fetchCats();
  }

  fetchCats = async () => {
    const cats = await getCats();
    this.setState({
      cats: cats,
    });
  };

  getPoints = () => {
    console.log('A');
  };

  render() {
    const { cats } = this.state;
    return (
      <div style={{ display: 'flex' }}>
        {cats.map(cat => (
          <div>
            <img
              src={cat.url}
              style={{ width: '80%', height: '80%' }}
              onClick={this.getPoints}
            />
            <Cat cat={cat} />
          </div>
        ))}
      </div>
    );
  }
}
