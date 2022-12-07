import React from 'react'

import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
// import { useDemoData } from '@mui/x-data-grid-generator';
import Box from '@mui/material/Box';
const InterviewRoundTable=()=>{
    const studentState = useSelector((state)=>state.student)
    console.log(studentState.studentData)
    const [rows,setRows]=React.useState([{
        id : 1,
        enrollment_no : 575858,

    }])

    const columns=[
        {
            field : 'enrollment_no',
            headerName : 'Enrollment Number',
            width : '150',
        },
        {
            field : 'student_name',
            headerName : 'Student Name',
            type : 'string',
            width : '125',
        },
        {
            field : 'mobile_number',
            headerName : 'Mobile Number',
            type : 'number',
            width : '125',
            editable : true ,

        },
        {
            field : 'email',
            headerName : 'Email',
            width : '125',
            editable : true,
        },
        {
            field : 'interview_time',
            headerName : 'Interview Time',
            type : 'dateTime',
            width : '200',
        },
        {
            field : 'interview_status',
            headerName : 'Status',
            width : '125',
        },
        {
            field : 'interview_location',
            headerName : 'Location',
            width : '125',
        }
    ]
    const interview_time = (millisecond)=>{
        console.log(millisecond)
        const d = new Date(millisecond)
        console.log(d)
        return d;
    }
    const createRows=()=>{
        const arr = [];
        studentState.studentData.map((props)=>{
            const item = {
                id : props.enrollment_no,
                enrollment_no : props.enrollment_no,
                mobile_number : props.mobile_number,
                student_name : props.student_name,
                email : props.email,
                interview_time : interview_time(props.interviews[0].start_time),
                selection_status : 'P',
                interview_status : (props.interviews[0].panel.status ? 'Done' :'Pending'),
                interview_location : props.interviews[0].panel.location,
            }
            arr.push(item);
        })

        return arr;
    }
    React.useEffect(()=>{
        setRows(createRows())
    },[studentState.studentData])
    return (
          <Box sx={{
            height : 400,
            width : '100%',
          }}>
            <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            pagination
            rowsPerPageOptions={[10, 15, 20]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    )
}

export default InterviewRoundTable