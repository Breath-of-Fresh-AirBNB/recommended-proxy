import React from 'react';
import Intro from './Intro.js';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostName: {
        first: null        
      }
    }
  }
  renderView() {
  // console.log('details, this.props: ', this.props);

    if (this.props.hostName) {
      return <Intro hostName={this.props.hostName} roomInfo={this.props.roomInfo}/>
    } else {
      return <Intro />
    }
  }
  render() {
    return(
      <div className="details-inner">
        {this.renderView()}
      </div>
    )
  }
}

export default Details;