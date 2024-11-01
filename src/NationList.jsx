import { useEffect, useState } from "react"
import styled from 'styled-components'

const Item = styled.div`
    margin: 60px auto;
    
    ul{
        padding: 10px;
    }
    li {
        border: 1px solid #e4e4e4;
        padding: 10px;
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 10px
        margin: 20px 0;
    }

    button{
        float: right;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid black;
        margin-left: 10px
        background-color: #fff;
    }
`

export default function NationList() {

    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState('http://localhost:3001/nations');

    useEffect(() =>{
        fetch(url)
        .then(response =>{
            if(!response.ok){
                throw new Error("Network Error.");
            }
            return response.json()
        }).then(json => setNations(json))
        .catch(error => console.error('Error retrieving data: ', error));
    }, [url]);

    return (
        <Item>
        <h2>Countries:</h2>
        <ul>
            {
                nations.map(nations => (
                    <li key={nations.id}>
                        <h3>{nations.title}</h3>
                        <p>{nations.continent}</p>
                    </li>
                ))
            }
        </ul>
        <div>
            <button onClick={()=> setUrl('http://local:3001/nations?continent=europe')}>European Countries</button>
            <button onClick={()=> setUrl('http://local:3001/nations')}>All Countries</button>
        </div>
        </Item>
    )
}