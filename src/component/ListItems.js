import React,{ useState } from 'react'
import './style.css';


const ListItems = (props) => {

    const [isEdit , setIsEdit] = useState(false); 

    const editEbable = () => {
        setIsEdit(true);
    }

    const enterTextHandler = () => {
        setIsEdit(false);
    }

    let list = ( <li id={props.id} onClick = {props.click} > {props.itemValue} </li> );
    let enterButton = null;


    if(isEdit === true)
    {
        list =( <li id={props.id}  > <input type = "text" value={props.itemValue} onChange = {props.change}/> </li> );
        enterButton = ( <button onClick={() => enterTextHandler()}>Enter</button> );
    }

    return (
            <>
                {list}

                <button className="buttonClass" onClick={() => editEbable()}>Edit</button> 
                {enterButton}  

            </>
        
    )
}

export default ListItems;