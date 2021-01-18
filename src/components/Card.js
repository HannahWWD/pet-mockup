import React from 'react';
import './Card.scss';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeProvider, createMuiTheme,makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { IconButton } from '@material-ui/core';

export default function Card() {

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const useStyles = makeStyles({
   next:{
       background:'#F2C94C',
       '&:hover': {
        background: "#DAB546",
     },
   },
   prev:{
       background:'rgba(0,0,0,0.1)'
   }
})
const classes = useStyles();

const theme = createMuiTheme({
    overrides:{
        MuiFormControlLabel:{
            root:{
                fontSize:17,
                lineHeight:1,
                fontFamily: "'Mulish', sans-serif",
            }
        },
        MuiTypography:{
            body1:{
                fontFamily:'inherit'
            }
        }
    }
  });
  
    return (
        <div className="card-wrapper">
        <h3>On a typical day, how many hours will the cat be alone?</h3>
        <div className="label">
        <RadioGroup aria-label="question1" name="step1" value={value} onChange={handleChange}>
        <ThemeProvider theme={theme}>
            <FormControlLabel value="1" control={<Radio />} label="Less than 3" />
            <FormControlLabel value="2" control={<Radio />} label="3-5 hours" />
            <FormControlLabel value="3" control={<Radio />} label="6-8 hours" />
            <FormControlLabel value="4" control={<Radio />} label="More than 8 hours" />
            <FormControlLabel value="0" control={<Radio />} label="Prefer not to answer" />
        </ThemeProvider>
        </RadioGroup>
        </div>
        <div className="prev-next-buttons">
            <IconButton aria-label="next question" className={classes.prev}><NavigateBeforeIcon /></IconButton>
           <IconButton aria-label="previous question" className={classes.next}><NavigateNextIcon /></IconButton>
           
        </div>
            
        </div>
    )
}
