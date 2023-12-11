import React, { useEffect, useState } from "react";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from "react-redux";
import { updateTaskfromList } from "../Slices/taskSlice";
import { Button } from "@mui/material";

const UpdateMessage = (props) => {
    const dispatch = useDispatch();
    const {handleClose} = props;
    const {selectedTask} = useSelector((state)=>state.tasks)
    console.log(selectedTask);
    const [Message, setMessage] = useState("");
    const [id, setId] = useState(0);
   

   
const update =()=>{
   dispatch(updateTaskfromList({id,Message}));
   handleClose()

}

useEffect(()=>{
  debugger
  if(Object.keys(selectedTask).length !== 0)
  {
    setMessage(selectedTask.Message);
    setId(selectedTask.id);
  }

},[selectedTask])
    return (
        <section className="my-5">
            <Box
      sx={{
        width: 700,
        maxWidth: '100%',
      }}
    >
         <FormControl fullWidth sx={{ m: 1 }}>
       <Input
            id="standard-adornment-password"
            type="text"
            value={Message}
            endAdornment={
              <InputAdornment position="end">
                <Button>
               <SendIcon onClick={() => update()} cursor="pointer" />
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

export default UpdateMessage;