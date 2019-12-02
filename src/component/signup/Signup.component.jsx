import React, {Component} from 'react';


class CreateAccount extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }


  onInputName = (event) => {
    console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  onInputEmail = (event) => {
    this.setState({email: event.target.value})
  }

  onInputPassword = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignUp = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    this.props.onRouteChange('signin')
  }


  render(){
    const {onRouteChange} = this.props;
    return(
      <div className="mt5">
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center bg-white">
              <main className="pa4 black-80">
                  <form className="measure">
                      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                          <legend className="center fw6 ph0 mh0 f3 calisto">Create Account</legend>
                          <div className="mt3">
                              <label className="db fw6 lh-copy f6">Fullname</label>
                              <input
                                className="pa2 input-reset ba bg-transparent w-100"
                                type="text"
                                name="name"
                                id="name"
                                onChange={this.onInputName}
                                required
                              />
                          </div>
                          <div className="mt3">
                              <label className="db fw6 lh-copy f6">Email</label>
                              <input
                                className="pa2 input-reset ba bg-transparent w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                                onChange={this.onInputEmail}
                                required
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
                                required
                              />
                          </div>
                      </fieldset>
                      <div className="">
                          <input
                            onClick={this.onSubmitSignUp}
                            style={{background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)'}}
                            className="b ph3 pv2 ba bg-transparent grow pointer f6 br2 w-100"
                            type="button"
                            value="Create Account"
                          />
                      </div>
                      <div className="lh-copy mt3">
                          <p style={{textAlign: 'center'}} className="fw6 center f6 black">Already have an account?<p onClick={()=> onRouteChange('signin')} className="fw6 pointer blue f6 dim black"> Sign in</p></p>
                      </div>
                  </form>
              </main>
          </article>
      </div>
    );
  }
}

export default CreateAccount;
