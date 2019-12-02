import React, {Component} from 'react';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(response => {
      (response === 'true') ? this.props.onRouteChange('home')
      : this.props.onRouteChange('signin')
    })
  }

  render(){
    const {onRouteChange} = this.props;
    return(
      <div className="mt6">
          <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center bg-white fw6">
              <main className="pa4 black-80">
                  <form className="measure">
                      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                          <legend className="center f3 fw6 ph0 mh0 calisto">Sign In</legend>
                          <div className="mt3">
                              <label className="db fw6 lh-copy f6">Email</label>
                              <input
                                className="pa2 input-reset ba bg-transparent w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                                onChange={this.onEmailChange}
                              />
                          </div>
                          <div className="mv3">
                              <label className="db fw6 lh-copy f6">Password</label>
                              <input
                                className="b pa2 input-reset ba bg-transparent w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={this.onPasswordChange}
                              />
                          </div>
                      </fieldset>
                      <div className="">
                          <input
                            style={{background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)'}}
                            className="b ph3 pv2 ba w-100 bg-transparent grow pointer f6 br2"
                            type="button"
                            value="Sign in"
                            onClick={this.onSubmitSignIn}
                          />
                      </div>
                      <div className="lh-copy mt3">
                          <p style={{textAlign: 'center'}} className="center f6 pointer link dim black db">Forgot your password?</p>
                          <p onClick={() => onRouteChange('register')} style={{textAlign: 'center'}} className="center blue f6 link pointer dim black db">Create an account</p>
                      </div>
                  </form>
              </main>
          </article>
      </div>
    );
  }
}



export default SignIn;
