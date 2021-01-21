import React, { useState,useEffect } from "react";
import questions from "../data/questions";
import Card from "../components/Card";
import "./Questions.scss";
import CardLoading from "../components/CardLoading";

export default function Questions(props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const getStep = (newStep) => {
    setStep(newStep);
  };

  const updateAnswers = (index, value) => {
    setAnswers((prev) => {
      prev[index] = value;
      return prev;
    });
  };


  useEffect(()=>{
    if (step === questions.length) {
        props.getFinalAnswer(answers);
        //console.log("final answers has been sent");
      }
  },[step,answers,props])

  

  //console.log(answers)

  return (
    <div className="main-container-questions">
      <div className="questions-wrapper">
        {step - 1 >= 0 ? (
          <Card
            question={questions[step - 1].question}
            options={questions[step - 1].options}
            step={step - 1}
            numQuestions={questions.length}
            disabled
          />
        ) : (
          <div className="placeholder"></div>
        )}

        {step !== questions.length ? (
          <Card
            question={questions[step].question}
            options={questions[step].options}
            step={step}
            getStep={getStep}
            numQuestions={questions.length}
            answers={answers}
            updateAnswers={updateAnswers}
          />
        ) : (
          <CardLoading history={props.history} />
        )}

        {step + 1 < questions.length ? (
          <Card
            question={questions[step + 1].question}
            options={questions[step + 1].options}
            step={step + 1}
            numQuestions={questions.length}
            disabled
          />
        ) : (
          <div className="placeholder"></div>
        )}
      </div>
    </div>
  );
}
