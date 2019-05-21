import React from 'react';
import axios from 'axios';
import ListOfHomes from './ListOfHomes.jsx';

class MoreHomes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      data: [],
      roomId: 0,
    }

    this.generateRandomRoomId = this.generateRandomRoomId.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  generateRandomRoomId() {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    let key = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({ roomId: key });
  }

  componentDidMount(e) {
    window.addEventListener("resize", this.handleResize);
    this.generateRandomRoomId();
    axios.get(`/MoreHomes?key=${this.state.roomId}`)
      .then((response) => {
        this.setState({ data: response.data })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="module">
        <div className="moduleTitle">
          <span>More homes you may like</span>
        </div>
        <ListOfHomes data={this.state.data}
          beginIndex={this.state.imgBegin}
          endIndex={this.state.imgEnd}
          height={this.state.height}
          width={this.state.width}
        />
      </div>
    )
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
}

export default MoreHomes;
