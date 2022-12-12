import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InfoIcon from '@mui/icons-material/Info';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import TextField from '@mui/material/TextField';

const InterveiwDate=(props)=>{
    const[time,setTime]=React.useState(props.time)
    const handleChange=(newvalue)=>{
        const d = new Date(newvalue);
        const t = d.getTime();
        setTime(newvalue);
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>

<MobileDateTimePicker
          value={time}
          onChange={(newvalue)=>{handleChange(newvalue)}}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    );
}

const InterviewRoundTable=(props)=>{
    const studentState = useSelector((state)=>state.student)
    const [rows,setRows]=React.useState([{
        id : 1,
        enrollment_no : 575858,

    }])
    const [pageSize, setPageSize] = React.useState(5);
    
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
            width : '250',
            renderCell : InterveiwDate ,
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
        },
        {
            field : 'info',
            headerName : 'Info',
            type : 'actions',
            width : '100',
            getActions : (params)=>[
                <GridActionsCellItem
                    icon={<InfoIcon/>}
                    label="info"

                />

            ],
        },
    ]
    const interview_time = (millisecond)=>{
        const d = new Date(millisecond)
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
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 15, 20]}
            pagination
            rows={rows}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={itm => console.log(itm)}
            />
        </Box>
    )
}

export default InterviewRoundTable