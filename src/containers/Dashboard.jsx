import { stepButtonClasses } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import InterviewRoundTable from '../components/InterviewRoundTable2';
import RoundMenu from '../components/RoundMenu'
import Container from '@mui/material/Container';

const  Dashboard=()=>{
    const token = useSelector((state)=>state.token.token)
    const config = {
        headers : {
            'Authorization' : 'Token ' + token ,
        }
    }
    const [openModal,setOpenModal]=React.useState(false);
    return (
    <div>
        <Container fixed>
        <RoundMenu />
        <InterviewRoundTable />
        </Container>
    </div>
    )
}

export default Dashboard