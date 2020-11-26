import React, { useState } from 'react';


function Choose() {

    const [file ,setFile]=useState(null);
    const [error, setError]=useState(null);

    const type=['image/png','image/jpeg'];

    const changed=(evt)=>{
      
        let selected=evt.target.files[0];
        console.log(selected);
        if(selected && type.includes(selected.type))
        {
            setFile(selected);
            setError("");
        }
        else{
            setError("file format is not acceptable choose another");
        }
    }

    return (
        <div>
            <input type="file" onChange={changed}/>
            <div>{error && <div>{error}</div>}</div>
            <img src={file.name}></img>
        
        </div>
            
        
    );
}
export default Choose;