import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import SeasonCard from '../components/SeasonCard';
import { Box, Button, Grid, IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { YearPicker } from '@mui/x-date-pickers';
import { setSeasonData } from '../app/features/seasonSlice';

const url = 'http://localhost:8000/pursuit_app/season'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
  };

function Season  () {
    const dispatch =useDispatch()
    const activeSeason = useSelector((state)=>state.season.activeSeason);
    const token = useSelector((state) => state.token.token);
    const [open,setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const config = {
        headers : {
            'Authorization' : 'Token ' + token ,
        }
    }
    let [seasonData,setLocalSeasonData] =React.useState([])

    const getSeasonData =()=>{
     axios.get(url,config)
        .then(res=>{ 
            setLocalSeasonData(res.data)
            dispatch(setSeasonData(res.data))
        })
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        getSeasonData()
    },[]);
    // const seasonData = getSeasonState()
    return(
        <div>

        <Box sx={{
            display : 'flex' ,
            flexDirection : 'row' ,
            justifyContent : 'flex-start',
            flexWrap : 'wrap' ,
        }}>
            {seasonData.map((props) =>
                <SeasonCard {...props} onClick={handleClick}/>
            )}
        </Box>
        <Modal
            open = {open}
            onClose = {handleClose}
        >
            
              <Box sx = {style}>
              <Box sx={{
                display : 'flex' ,
                justifyContent : 'flex-end' ,

            }}>
                <IconButton>
                    <CloseIcon onClick={handleClose}/>
                </IconButton>
            </Box>
                <div>
              <TextField id="standard-basic" label="Season" variant="standard" value=''/>
              </div>
              <div>
              <TextField
                    id="standard-select-currency"
                    select
                    label="Role"
                    value='Developer'
                    variant="standard"
                    sx = {{
                        my : 2 ,
                    }}
                >

            <MenuItem id='D' value='Developer' >Developer</MenuItem>
           
            <MenuItem id='d' value='Designer' >Designer</MenuItem> 
            
            
          
   </TextField>
   </div>
   <div>
                    {/* <YearPicker 
                        

                    /> */}
   </div>
                <Box sx={{
                    display : 'flex' ,
                    justifyContent : 'space-evenly'
                }}>
                    <Button variant='outlined' startIcon={<DeleteIcon/> } onClick={handleClose}>Delete</Button>
                    <Button variant='contained' onClick={handleClose}>Save</Button>
                </Box>
              </Box>
        </Modal>
        <Fab color="primary" aria-label="fixed" sx={{ position: 'fixed', bottom: '10%', right: '10%' }}
             onClick={handleClick}
        >
                <AddIcon />
        </Fab>
        </div>
        )
};

export default Season ;