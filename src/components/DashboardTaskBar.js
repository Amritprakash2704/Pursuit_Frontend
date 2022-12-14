import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { pink } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';

const DashboardSearch = (props) => {

    const [searchText, setSearchText] = React.useState('')

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', }}
        >
            <InputBase
                value={searchText}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search throught fields' }}
            />

            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}


const CheckboxAction = (props) => {
    const open = props.open
    const selectedStudent=props.selectedStudent
    return (
        <div>
            {open ? 
            <div>
                <Tooltip title="Disqualify">
                <IconButton
                label="disqualify"

                >
                    <CloseIcon sx={{ color: pink[500] }}/>
                </IconButton>
                </Tooltip>
                <Tooltip title="Send to Next Round">
                <IconButton>
                    <ArrowForwardIcon color="success"/>
                </IconButton>
                </Tooltip>
             </div>
            : ''}
        </div>
    );
}

const DashboardTaskBar = (props) => {

    return (
        <div style={{
            width: '100%',
        }}>

            <Grid container={2} sx={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 5,
                mb: 1,
            }}>
                <Grid Item xs={4}>
                    <DashboardSearch />
                </Grid>
                <Grid Item xs={4} style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <CheckboxAction open={props.openCheckboxActions} selectedStudent={props.selectedStudent}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default DashboardTaskBar;