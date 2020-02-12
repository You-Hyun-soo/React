import React, {Component} from 'react';
import Form from '.\/components/Form.js'

class App extends Component {

  getData = (data) => {
    console.log(data);
  }

  render(){
    return(
      
      <Form func={this.getData} />

      )
  }
}



export default App;
