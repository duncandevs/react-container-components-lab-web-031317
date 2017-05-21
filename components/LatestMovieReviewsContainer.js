// in charge of taking care of data..reviews
import React from 'react'
import MovieReviews from './MovieReviews'
import "isomorphic-fetch"
export default class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  getLatestReviews(){
     fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=', {mode: 'cors'}).then(function(response) {
       return response.json()
     }).then( (data) => {
       this.setState({
         reviews: data.results
       })
     })
   }

  componentDidMount(){
    this.getLatestReviews()
  }

  render(){
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
