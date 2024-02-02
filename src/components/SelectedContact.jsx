import {useEffect} from 'react'
import { useState } from "react";

 export default function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function fetchSelectedContact(){
            try{
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const results = await response.json();
                setContact(results);
            }catch(error) {
                console.error(error);
            }
        }
        fetchSelectedContact()
    },[])
    return (<div>{contact&&
    <p>{contact.name}</p>
        // <p>{contact.email}</p>
        // <p>{contact.phone}</p>

        
     } </div>
        );
    
}