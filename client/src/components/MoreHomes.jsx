import React from 'react';
import axios from 'axios';
import ListOfHomes from './ListOfHomes.jsx';

class MoreHomes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      roomId: 0
    }

    this.generateRandomRoomId = this.generateRandomRoomId.bind(this);
  }

  generateRandomRoomId() {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    let key = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({ roomId: key });
  }
  
  componentDidMount(e) {
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
        <ListOfHomes data={this.state.data} />
      </div>
    )
  }
}

export default MoreHomes;