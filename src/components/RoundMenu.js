import React from 'react' ;
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradeIcon from '@mui/icons-material/Grade';
import IconButton from '@mui/material/IconButton';
import ExpandIcon from '@mui/icons-material/Expand';
import { styled, alpha } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

const RoundMenu = () =>{
    const roundData = useSelector((state)=>state.round.roundData)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    console.log(roundData)
    console.log('hello')
    const menu_item = roundData.map((props)=>
    <div>
        <MenuItem key={props.id}>
        {props.round_type =='T' && 
            <GradeIcon/>
        }
        {props.round_type =='I' && 
            <CalendarMonthIcon/>
        }

        {props.round_name}
        </MenuItem>
        </div>
    )

    return(
        <div>
        <Fab color="primary" aria-label="fixed" sx={{ position: 'fixed', bottom: '10%', right: '10%' }}
        onClick={handleClick}
   >
    <ExpandIcon/>
    </Fab>
         <StyledMenu
         id="round-menu"
         MenuListProps={{
           'aria-labelledby': 'round-menu',
         }}
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
     >
       
         {menu_item}
     </StyledMenu>
     </div>
    )
}

export default RoundMenu