import React, {Component} from 'react';
import Article from './Article.component';
import './card.style.scss';


class Card extends Component{
  constructor(props){
    super(props);
    this.state = {
      isHidden: true,
    }
  }

  toggleHidden = () => {
    this.setState({isHidden: !this.state.isHidden})
  }


  render(){
    return(
        <div>
          <div style={{marginLeft: '10%'}} className="search_container w-80">
            <div onClick={this.toggleHidden.bind(this)} style={{height: '100px', opacity: '0.8'}} className="shadow-5 pointer grow br3 pa2 w-50 mt2 bg-white">
                <p style={{textAlign: 'center', fontSize: '25px'}}>
                  {this.props.platform}
                </p>
            </div>
            <div className='w-40 dim'>
              {
                !this.state.isHidden &&
                <Article
                  username={this.props.username}
                  email={this.props.email}
                  password={this.props.password}
                  className="shadow-4"
                />
              }
            </div>
          </div>
        </div>
    );
  }
}

export default Card;
