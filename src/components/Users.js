import axios from "axios";
import { useEffect, useState } from "react";

function Users(){
    let url = 'https://jsonplaceholder.typicode.com/posts'
    const [users , setUsers] = useState([]);

    useEffect(() => {
        var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4){
            let responseFromServer = xhr.responseText;
            let Users = JSON.parse(responseFromServer);
            setUsers(Users)
        }
    }
    xhr.open("GET" , url);
    xhr.send();
    console.log(users)
    },[])
    

    return <h1>Hello</h1>
}
export default Users;