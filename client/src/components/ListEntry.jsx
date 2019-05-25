import React from 'react';
import StarRating from './StarRating';

export default class ListEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <a href={`/MoreHomes?key=${this.props.entry.id}`} className="individualPic">
        <div>
          <img className="img" src={this.props.entry.img}/>
          <p className="location">{this.props.entry.house_type} · {this.props.entry.location}</p>
          <p className="description">{this.props.entry.description}</p>
          <p className="price">${this.props.entry.cost_per_night} per night</p>
          <StarRating rating={this.props.entry.rating} />
          <span className="votes">{this.props.entry.votes}</span>
        </div>
      </a>
    )
  }
}
