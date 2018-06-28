import React, { Component, PropTypes} from 'react';
import Star from './star';

class StarRating  extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      starSelected:0
    }
  }
  change(starSelected) {
    this.setState({starSelected})
  }

    render() {
      const {totalStars} =this.props
      const {starsSelected}= this.state
      return (
        <div className="star-rating">

        </div>
      )
    }
  }

  // StarRating.propTypes = {
  //   totalStars:PropTypes.number
  // }

  // StarRating.defaultProps = {
  //  totalStars:5
  // }
