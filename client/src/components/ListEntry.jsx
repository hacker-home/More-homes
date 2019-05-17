import React from 'react';

export default class ListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: this.props.entry.img,
      house_type: this.props.entry.house_type,
      location: this.props.entry.location,
      description: this.props.entry.description,
      cost_per_night: this.props.entry.cost_per_night,
      rating: this.props.entry.rating,
      votes: this.props.entry.votes
    }
  }

  render() {
    console.log("img", this.props);
    return (
      <div>
        <img src={this.state.img} height="40" width="40" />
      </div>
    )
  }
}
