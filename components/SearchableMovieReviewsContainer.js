import React from 'react'
import MovieReviews from './MovieReviews'


export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      search: '',
      reviews: []
    }
    this.getSearchedReviews = this.getSearchedReviews.bind(this)
  }

  handleInput(e){
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.getSearchedReviews(this.state.search)
    this.setState({
      search: ''
    })
  }

  getSearchedReviews(search){
    const url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    const api = 'api-key='
    const query = '&query=' + search

    fetch(url + api + query, {mode: 'cors'}).then(function(response) {
      return response.json()
    }).then( (data) => { console.log(data); this.setState({ reviews: data.results })
    })
  }

  render() { return (
    <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.search} onChange={this.handleInput.bind(this)}/>
        <input type="submit"/>
      </form>
      <MovieReviews reviews={this.state.reviews}/>
    </div>
  )
  }
}
