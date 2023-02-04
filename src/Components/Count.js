import React, { Component } from 'react'

export default class Count extends Component {

    constructor(props){
        super(props);
        this.state={
            count : 10
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({count:this.state.count-1});
        }, 1000);
    }

    componentDidUpdate(){
        if (this.state.count === 0) {
            clearInterval();
        }
    }



  render() {
    return (
      <div>
        {/* <h1>{this.state.count}</h1> */}
        <h3>{Date().toLocaleString()}</h3>
        {/* <h3>{currentDate.getHours()}</h3> */}
      </div>
    )
  }
}
