import React, { Component } from 'react';
import Moviegallery from './Moviegallery';
const movies = require('../MovieIDs.json');

export class Movies extends Component {
  enlarge(imgSrc, title, director, rating, plot) {
    document.body.style.overflow = 'hidden';
    var mov = document.createElement('img');
    mov.className = 'mlb-content';
    mov.src = imgSrc;
    mov.id = 'mov';
    var movInfo = document.createElement('div');
    movInfo.className = 'mlb-info';
    movInfo.id = 'movInfo';
    movInfo.innerHTML = '<span class=\'title\'>'+title+'</span><br/><span class=\'director\'>'+director+'</span><br/><br/><span class=\'rating\'>IMDb Rating: '+rating+'</span><p>'+plot+'</p>';
    var Movie = document.createElement('div');
    Movie.id = 'Movie';
    Movie.className = 'mlb-container';
    var lightbox = document.createElement('div');
    lightbox.id = 'mov';
    lightbox.className = 'mlb';
    document.body.appendChild(lightbox);  
    document.getElementById('mov').appendChild(Movie);
    document.getElementById('Movie').appendChild(mov);
    document.getElementById('Movie').appendChild(movInfo);
    document.getElementById('mov').addEventListener('click', function(event) {
      if(event.target.className === 'mlb') {
        document.getElementById('mov').removeChild(document.getElementById('Movie'));
        document.body.removeChild(document.getElementById('mov'));
        document.body.style.overflow = 'auto';
      }
    });
  }

  retrieveIds() {
    let movieList = [];
    for (let movie of movies) {
      movieList.push(movie.id);
    }
    return movieList;
  }
  
  render() {
    let movieList = this.retrieveIds();
    return (
      <div>
        <div className='content'>
          <div className='movcontainer'>
            <Moviegallery movieList={movieList} enlarge={this.enlarge} />
          </div>
        </div>
      </div>
    );
  }
}
export default Movies;