import React, { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from "react-redux";
import FilledInput from '@mui/material/FilledInput';
import { setSelectedTask,removeTaskfromList} from "../Slices/taskSlice";
import UpdateMessage from "./UpdateMessage";
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";

// const StyledPaper = styled(Paper)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     // ...theme.typography.body2,
//     // padding: theme.spacing(2),
//     // maxWidth: 400,
//     // color: theme.palette.text.primary,
//   }));

const MessageField = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
 
const {taskList} = useSelector((state)=>state.tasks)

const edit =(task)=>{
    console.log(task);
    setOpen(true);
    dispatch(setSelectedTask(task))
    
}
const Delete =(task)=>{
  dispatch(removeTaskfromList(task))
    
}
   

    return (
        <>
 
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
         
        </Grid>
        <Grid item xs={4}>
        {taskList && taskList.map((task)=>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" key={task.id}>
         <FilledInput
          value={task.Message}
       endAdornment={
        <InputAdornment position="end">
          <Button>
         <EditIcon onClick={() => edit(task)} cursor="pointer"/>
         </Button>
         <Button>
         <DeleteIcon onClick={() => Delete(task)} cursor="pointer"/>
         </Button>
        

        </InputAdornment>
      }
      />

       </FormControl>
        )}
        </Grid>
      </Grid>
    </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
        <UpdateMessage handleClose={handleClose}/>
        </DialogContent>
      </Dialog>
        </>
    
    );
};
export default MessageField;