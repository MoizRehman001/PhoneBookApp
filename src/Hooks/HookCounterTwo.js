import { useState } from "react";

export function HookCounterTwo(){

    const [name , setName] = useState({firstName : '' , lastName : ''})

    return (
        <div>
            <input type={'text'} onChange={e => setName( {...name,firstName :  e.target.value})} placeholder={'Enter the first Name'}></input><br></br>
            <input type={'text'} onChange={e => setName( {...name,lastName :  e.target.value})} placeholder={'Enter the last Name'}></input><br></br>
            <h1>{name.firstName}  {name.lastName}</h1>
        </div>
    )


}