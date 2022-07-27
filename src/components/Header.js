import React, { Component } from 'react';
import '../Styles/HeaderStyle.css'
class Header extends Component{
    constructor(){
        super()
        this.state = {
            Title : 'Phone Book App'
        }
    }

    render() {
        return (
             <div className='container'>
                <h2>{this.state.Title}</h2>
             </div>
        );
    }
}

export default Header;