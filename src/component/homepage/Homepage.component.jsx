import React, {Component} from 'react';
import SignOut from '../signout/Signout.component.jsx';
import CardList from '../card/CardList.component.jsx';
import { credentials } from '../credentials.js';



class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      credential: credentials,
      searchfield: '',
      // database: data,
    }
  }

  onInputChange = (event) => {
    this.setState({searchfield: event.target.value})
    // console.log(event.target.value);
  }

  // async componentDidMount(){
  //   console.log(this.state)
  //    await fetch('http://localhost:3001/credentials')
  //   .then(response => response.json())
  //   .then(data =>
  //     this.setState({
  //       database: data,
  //     })
  //   )
  //   .catch(error => console.log(error))
  // }

  render(){
    const {onRouteChange} = this.props;

    const filteredCredentials = this.state.credential.filter(item => {
      return item.platform.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    let display;
    (this.state.searchfield.length === 0) ?
    display = <p></p>
    : display = <CardList credentials={filteredCredentials} />

    return(
      <div className="mt1">
        <SignOut style={{paddingRight: '20px'}} onRouteChange={onRouteChange} />
        <input onChange={this.onInputChange} style={{marginLeft: '10%'}} className="br3 w-40 pa2" type="text" placeholder="Search" />
        {display}
      </div>
    );
  }
}


export default Homepage;
