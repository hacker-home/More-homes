import React from 'react';
import ListEntry from './ListEntry.jsx';

export default class ListOfHomes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxWidth: 1160,
      minWidth: 670,
      beginIndex: 0,
    }

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.numberOfImages = this.numberOfImages.bind(this);
  }

  handleLeftClick(e) {
    this.setState({
      beginIndex: this.state.beginIndex - 1,
    });
  }

  handleRightClick(e) {
    this.setState({
      beginIndex: this.state.beginIndex + 1,
    });
  }

  numberOfImages() {
    if (this.props.width > this.state.maxWidth) {
      return 3;
    } else if (this.props.width > this.state.minWidth) {
      return 2;
    } else {
      return 1;
    }
  }

  render() {
    const endIndex = this.state.beginIndex + this.numberOfImages();
    const leftVisible = this.state.beginIndex > 0 ? 'visible' : 'hidden';
    const rightVisible = endIndex < this.props.data.length ? 'visible' : 'hidden';
    return (
      <div className="flex-container">
        <button className="leftScroll" onClick={this.handleLeftClick} style={{ visibility: leftVisible }}>&lt;</button>
        {this.props.data.slice(this.state.beginIndex, endIndex).map((entry) => <ListEntry entry={entry} key={entry.id} />)}
        <button className="rightScroll" onClick={this.handleRightClick} style={{ visibility: rightVisible }}>&gt;</button>
      </div>
    )
  }
}
