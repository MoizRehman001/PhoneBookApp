import { useEffect, useState } from "react";

export function CountHook(){
    const initial = 0
    const [count , setCount] = useState(initial);
    const [name , setName] = useState('')

    useEffect( () => {
        document.title = `you clicked ${count} times`
    },[count] ) // component did update this will execute only when count is changes

    useEffect( () => {
        document.title = name;
    },[name])

    return ( <div>
                <h1>Count : {count}</h1>
                <input type={'text'} onChange={e => setName(e.target.value)}></input>
                <button onClick={() => setCount(count+1)}>increment</button>
            </div>)
}
 

