import React, { useState } from "react";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import { addTasktoList } from "../Slices/taskSlice";
import { Button, TextField } from "@mui/material";

const AddMessage = () => {
    
  const dispatch = useDispatch();
  const [Message, setMessage] = useState("");
  const [filed, setFileld] = useState([]);
 const save =(e)=>{
  e.preventDefault()
  let arr=[1,2,3,4]
  let b=[]
  for(var i=0;i<arr;i++){
    if(arr[i] == 2)
      {
         console.log("f");
      }
     console.log(b);
  }
 }
 const onchange=(e)=>{
  let a = e.target.value;
  console.log(a.length);

  // for(var i=0;i<a.length;i++)
  // {
    var ele = a[1]
 const arr = a.filter((item)=>item !== -1)
  //console.log(a);
  console.log(arr);
 //}
 
}
    const send =(e)=>{
      debugger
    e.preventDefault()
    console.log({Message})
    dispatch(addTasktoList({Message}))
    setMessage("");
    const g='[{"label":"ame","Fieldname":"name"}]'
    const v=JSON.parse(g)
    // var arr =g[0]
    // const b=[];
//     for(var i=0;i<arr.length;i++){
//       if(i%2==0)
//       {
//       b[i]=arr[i]
//       }
     
//   }
 
//   let c=[]
//   b?.map((item)=>{
//     c.push({label:item.label})

// })
console.log(v)
   }
   
    return (
        <section className="my-5">
            <Box
      sx={{
        width: 1000,
        maxWidth: '100%',
        marginLeft:"250px",
        marginTop:"520px"
        
      }}
    >
      <TextField onChange={(e)=>onchange(e)}/>
      <Button onClick={(e) => save(e)}>Save</Button>
         <FormControl fullWidth sx={{ m: 1 }}>
       <Input
            id="standard-adornment-password"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <Button>
               <SendIcon onClick={(e) => send(e)} cursor="pointer" />
               </Button>
              </InputAdornment>
            }
            onChange={(e)=>setMessage(e.target.value)}
          />
          </FormControl>
    </Box>
        </section>
    );
};

export default AddMessage;