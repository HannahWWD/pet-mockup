import React, { useState,createRef} from "react";
import "./Card.scss";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { IconButton } from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';

export default function Card(props) {
  const [value, setValue] = useState(null);
  //const [showError,setShowError] = useState(false)
  const errorMessage = createRef()

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const useStyles = makeStyles({
    next: {
    //   visibility:
    //     props.step + 1 < props.numQuestions ? "visible" : "hidden",
      background: props.step + 1 < props.numQuestions ? "#F2C94C": "#74BC51",
      "&:hover": {
        background: props.step + 1 < props.numQuestions ? "#DAB546" : "#5E9743",
      },
    },
    prev: {
      visibility: props.step - 1 >= 0 ? "visible" : "hidden",
      background: "rgba(0,0,0,0.1)",
    },
  });
  const classes = useStyles();

  const theme = createMuiTheme({
    overrides: {
      MuiFormControlLabel: {
        root: {
          fontSize: 17,
          lineHeight: 1,
          fontFamily: "'Mulish', sans-serif",
          textTransform:"capitalize",
        },
      },
      MuiTypography: {
        body1: {
          fontFamily: "inherit",
        },
      },
    },
  });

  const question = props.question;
  const options = props.options;



  const handleNextIsClicked = () => {
    if(props.getStep && value !== null){
        props.getStep(props.step + 1);
        errorMessage.current.style.visibility = "hidden"
        
    } else{
       errorMessage.current.style.visibility = "visible"
    }
    props.updateAnswers && props.updateAnswers(props.step, value)
    props.answers && setValue(props.answers[props.step + 1])

  }

  return (
    <div className="card-wrapper">
      <h3>{question}</h3>
      <div className="label">
        <RadioGroup
          aria-label={`step ${props.step}`}
          name={`step ${props.step}`}
          value={value}
          onChange={handleChange}
        >
          <ThemeProvider theme={theme}>
            {/* TODO UPDATE VALUE SETTING  */}
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={index.toString()}
                control={<Radio />}
                label={option}
                disabled={props.disabled ? true : false}
              />
            ))}
          </ThemeProvider>
        </RadioGroup>
      </div>
      <div className="err-msg" ref={errorMessage}><p>* Please select an option</p></div>
      <div className="prev-next-buttons">
      {/* previous */}
        <IconButton
          aria-label="previous question"
          className={classes.prev}
          onClick={() => {
            props.getStep && props.getStep(props.step - 1);
            props.answers && setValue(props.answers[props.step - 1])
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>

    {/* next */}
        <IconButton
          aria-label="next question"
          className={classes.next}
          onClick={handleNextIsClicked}
        >
          {props.step === props.numQuestions-1 ? <DoneIcon />:<NavigateNextIcon />}
        </IconButton>
      </div>
    </div>
  );
}
