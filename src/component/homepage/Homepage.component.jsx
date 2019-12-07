import React, {Component} from 'react';
import CardList from '../card/CardList.component';
import Navigation from '../navigation/navigation.component';
import SearchBox from '../searchbox/Searchbox.component';
import './homepage.style.scss';



class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchfield: '',
    }
  }

  onInputChange = (event) => {
    this.setState({searchfield: event.target.value})
  }


  render(){

    // const filteredCredentials = this.state.credential.filter(item => {
    //   return item.platform.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })

    let display;
    (this.state.searchfield.length === 0) ?
    display = <p></p>
    : display = <CardList 
    // credentials={filteredCredentials}
    />

    return(
      <div className="mt0">
        <Navigation username={this.props.loaduser} onRouteChange={this.props.onRouteChange} style={{opacity: '0.7'}} className="mt0"/>
        <SearchBox style={{marginTop: '60'}} className="" />
        {display}
      </div>
    );
  }
}


export default Homepage;
