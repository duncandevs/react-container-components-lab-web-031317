import React from 'react';
import ReactDOM from 'react-dom';
import LatestMovieReviewsContainer from
  './components/LatestMovieReviewsContainer'
;
import SearchableMovieReviewsContainer from
  './components/SearchableMovieReviewsContainer'
;
ReactDOM.render(
  <div className="app">
    <div className="row">
      <div className="col s6">
        <LatestMovieReviewsContainer />
      </div>
      <div className="col s6">
        <SearchableMovieReviewsContainer />
      </div>

    </div>

  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
