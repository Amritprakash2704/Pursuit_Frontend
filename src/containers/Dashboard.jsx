import { stepButtonClasses } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import InterviewRoundTable from '../components/InterviewRoundTable2';
import DashboardTaskBar from '../components/DashboardTaskBar';
// import RoundMenu from '../components/RoundMenu'
import RoundMenu from '../components/RoundMenu2';
import Container from '@mui/material/Container';
const  Dashboard=()=>{
    const token = useSelector((state)=>state.token.token)
    const config = {
        headers : {
            'Authorization' : 'Token ' + token ,
        }
    }


    const [openCheckboxSelection,setOpenCheckboxSelection]=React.useState(false)
    const [selectedStudent,setSelectedStudent]=React.useState([]);
    const handleSelectedStudent=(itm)=>{
        setSelectedStudent(itm)
    }
    const handleCheckboxSelection=(item)=>{
        setOpenCheckboxSelection(item)
    }
    const [openModal,setOpenModal]=React.useState(false);
    return (
    <div>
        <Container fixed>
        <RoundMenu />
        <DashboardTaskBar openCheckboxActions={openCheckboxSelection} selectedStudent={selectedStudent}/>
        <InterviewRoundTable    openCheckboxSelection={handleCheckboxSelection} handleSelectedStudent={handleSelectedStudent}/>
        </Container>
    </div>
    )
}

export default Dashboard