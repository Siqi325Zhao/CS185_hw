import React, { Component } from 'react';
import Movie from './Movie';

export class Moviegallery extends Component {  
  render() {
    return this.props.movieList.map((movie) => (
      <Movie movie={movie} enlarge={this.props.enlarge} />
    ));
  }
}
export default Moviegallery;