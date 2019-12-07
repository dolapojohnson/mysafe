import React, {Component} from 'react';
import police from '../../police.jpg';
import './saveit.style.scss';


class SaveIt extends Component{
    constructor(props){
        super(props);
        this.state= {
            platform: '',
            email: '',
            password: '',
            phone: ''
        }
    }

    onPlatformChange = (event) => {
        this.setState({platform: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onPhoneChange = (event) => {
        this.setState({phone: event.target.value});
    }

    onSubmitSave = () => {
        let id = this.props.userid;
        console.log('id');
        fetch('http://localhost:3001/store', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                platform: this.state.platform,
                userId: id,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone
            })
        })
        .then(response => response.json())
        .then(user => {
            console.log(user)
            if (user.userId){
                this.props.onRouteChange('home')
            } else{
                alert('Please try again! Ensure there is an active internet connection')
            }
        })
    }

    render(){
        return(
            <div className="mt5">
                <div className="flexform">
                    <div>
                        <img style={{width: '550px', height: '550px'}} src={police} alt="security" />
                    </div>
                    <div className="pa4">
                        <form className="measure">
                            <fieldset id="saveit" className="ba b--transparent ph0 mh0">
                                <legend style={{fontSize: '50px'}} className="skyblue fw6 ph0 mh0 lobster">
                                    <span id="green">Save The Stress</span> <span id="grey"> of</span> 
                                    <span id="tomorrow"> Today</span></legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6">Platform</label>
                                    <input
                                        onChange = {this.onPlatformChange}
                                        className="pa2 input-reset ba bg-transparent w-100 search"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="ex. facebook"
                                        required
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6">Email</label>
                                    <input
                                        onChange = {this.onEmailChange}
                                        className="pa2 input-reset ba bg-transparent w-100 search"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        required
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6">Password</label>
                                    <input
                                        onChange = {this.onPasswordChange}
                                        className="b pa2 input-reset ba bg-transparent w-100 search"
                                        type="password"
                                        name="password"
                                        id="password"
                                        required
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6">Phone Number</label>
                                    <input
                                        onChange = {this.onPhoneChange}
                                        className="b pa2 input-reset ba bg-transparent w-100 search"
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        required
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick = {this.onSubmitSave}
                                    className="lightgreen b ph3 pv2 ba bg-transparent grow pointer f6 br2 w-100"
                                    type="button"
                                    value="SAVE"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default SaveIt;