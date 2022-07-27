import React, { Component } from 'react';
import Header from './Header';
import '../Styles/Phonecatelog.css'

class Phone extends Component{
    constructor(){
        let counter = 14;
        super()
        this.state =  {
        subscibers : [
            { no : 11 , name : 'Moiz' , phone : 123123 },
            { no : 12 , name : 'Ravi' , phone : 2321 },
            { no : 13 , name : 'Divya' , phone : 23452 },
            { no : 14 , name : 'Nitish' , phone : 98098 }
            ],
            subssciberToBeAdded : {no:0 , name: '' , phone : 0} 
                        }
        }
    
        onNumberChanged = (e) => {
            console.log(e.target.value);
            this.setState({
                subssciberToBeAdded : {...this.state.subssciberToBeAdded , phone : e.target.value}
            })
        }

        onNameChanged = (e) => {
            console.log(e.target.value)
            this.setState({
                subssciberToBeAdded : {...this.state.subssciberToBeAdded , name : e.target.value }
            })
        }
        
        AddSubscriber = () => {
            if((this.state.subssciberToBeAdded.name === '') && (this.state.subssciberToBeAdded.phone === 0 )){
                alert("enter the data");
                return;
            }
            this.counter = this.counter + 1;
            let copyofsubscribers = [...this.state.subscibers];
            
            this.setState({
                subssciberToBeAdded : {...this.state.subssciberToBeAdded , no : this.counter}
            })

            copyofsubscribers.push(this.state.subssciberToBeAdded);
            this.setState({
                subscibers : copyofsubscribers
            })
        }

        DeleteData = (e) => {
            console.log(e.target.value)
        }

    render(){
        return (
             <div  className='input-container'>
                <Header></Header>
                <div>
                <br></br>
                <div id='input-Name'>
                    Enter the subscriber Name : <input type={'text'} placeholder={'Enter the Name'}  onChange={this.onNameChanged}>
                    </input>
                </div>
                <div id='input-Phone'>Enter the subscriber Name : <input type={'text'} placeholder={"Enter the  PhoneNumber"} onChange={this.onNumberChanged}></input>
                </div>
                    <div id='button-Container'>
                        <button onClick={this.AddSubscriber}>Add Subscriber</button>
                    </div>
                </div>             
                <br></br>
                <div>{
                    this.state.subscibers.map( (subssciber) => {
                        return <div key={subssciber.no} className='subscriber-container'>
                                <h3>Name : {subssciber.name}</h3>
                                <h3>Phone Number : {subssciber.phone}</h3>
                                <button id='del-button' value={this.state.subscibers.no} onClick={this.DeleteData}>Delete</button>
                        </div>
                    } )
                }</div>   
             </div>
        );
    }
}
export default Phone;