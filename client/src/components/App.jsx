import React from 'react';
import axios from 'axios';
import ListOfHomes from './ListOfHomes.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount(e) {
    var that = this;
    axios.get('/more-homes')
      .then(function (response) {
        that.setState({ data: response.data })
      })
      .catch(function (error) {
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

export default App;