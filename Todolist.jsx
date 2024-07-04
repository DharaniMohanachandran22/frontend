import { useState } from "react"

export default function Todo(){
    const[arr,setArr]=useState([]);
    const[inputvalue,setInputvalue]=useState("");
    function handleClick(){
       if(inputvalue!==""){
        setArr([...arr,inputvalue]);
       }
       setInputvalue("");
    }
    function handledelete(idx){
        let res=arr.filter((value,index)=>{
            return idx!==index;
        })
        setArr(res);
    }
    function handleedit(idx){
       let update=prompt("enter your name");
       if(update!==""){
        arr[idx]=update;
        setArr([...arr]);
       }
      
    }
    return(
        <>
        <lable>TODO LIST</lable><br/>
        <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}/><br/>
        <button onClick={handleClick}>add</button>
        <ol>{
        arr.map((value,index)=>{
            return(
            <div key={index}>
            <li>{value}</li>
            <button onClick={()=>handledelete(index)}>delete</button>
            <button onClick={()=>handleedit(index)}>edit</button>
            </div>
            );
        })
        }
        </ol>
        </>
    )
}