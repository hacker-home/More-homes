import React from 'react';

export default class StarRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: (Math.round((this.props.rating / 5) * 100)).toString() + '%',
    };
  }

  render() {
    return (
      <div className="starsOuter">
        <div className="starsInner" style={{width: this.state.rating}}>
        </div>
      </div>
    );
  }
}
