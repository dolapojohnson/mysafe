import React, {Component} from 'react';
import Particles from 'react-particles-js';
import SignIn from './component/signin/Signin.component';
import CreateAccount from './component/signup/Signup.component';
import Homepage from './component/homepage/Homepage.component';
import 'tachyons';
import './App.css';



const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
}


class App extends Component{
  constructor(){
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      // user: {
      //   id: '',
      //   name: '',
      //   email: '',
      //   joined: ' '
      // }
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  // loadUser = (data) => {
  //   this.setState({user: {
  //     id: data.id,
  //     name: data.name,
  //     email: data.email,
  //     joined: data.joined
  //   }})
  // }

  render(){
    return(
      <div>
        <Particles className='particles'
          params ={particlesOptions}
        />
        {
          (this.state.route === 'signin') ? <SignIn onRouteChange={this.onRouteChange}/>
        : (this.state.route === 'register') ? <CreateAccount onRouteChange={this.onRouteChange}/>
        : (this.state.route === 'home') ? <Homepage onRouteChange={this.onRouteChange}/>
        : <div>What are you looking for? Let me help you.</div>
        }
      </div>
    );
  }
}

export default App;
