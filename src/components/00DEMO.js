import React, { Component } from 'react';


class Demo extends Component{
    constructor(){
        super()
        this.state = {
            message : ''
        }
    }

    RenderData =  (e) => {
        this.setState({
            message : e.target.value
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <input type={'text'} onChange={this.RenderData}></input>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br><br></br>
                <h1>Name : {this.state.message}</h1>
            </div>             
        );
    }
}

export default Demo;