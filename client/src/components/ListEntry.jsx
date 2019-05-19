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
    return (
      <div className="individualPic">
        <img className="img" src={this.state.img}/>
        <p className="location">{this.state.house_type} · {this.state.location}</p>
        <p className="description">{this.state.description}</p>
        <p className="price">${this.state.cost_per_night} per night</p>
        <p className="votes">{this.state.votes}</p>
      </div>
    )
  }
}
