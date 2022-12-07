import React from 'react' ;
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import { useDispatch ,useSelector} from 'react-redux';
import axios from 'axios'
import {Navigate} from 'react-router-dom'
function RoundCard(props){
    return (
        <Card  sx={{
            borderRadius: '10px',

            m : 2,

        }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.round_type=='T' && 
            <div>Test</div>
          }{props.round_type=='I' && 
          <div>Interview</div>
        }
            </Typography>
        <Typography variant="h5" component="div">
          {props.round_name}
        </Typography>
        </CardContent>
        <CardActions>
            <Button>
                Delete
            </Button>
            <Button>
                Edit
            </Button>
        </CardActions>

        </Card>
    )
}

export default RoundCard