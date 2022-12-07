import { stepButtonClasses } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import InterviewRoundTable from '../components/InterviewRoundTable2';
import RoundMenu from '../components/RoundMenu'
const  Dashboard=()=>{
    const token = useSelector((state)=>state.token.token)
    const config = {
        headers : {
            'Authorization' : 'Token ' + token ,
        }
    }
    
    return (
    <div>
        dashboard
        <RoundMenu />
        <InterviewRoundTable />
    </div>
    )
}

export default Dashboard