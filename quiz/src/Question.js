import React, { useState } from 'react';
import ErrorMessage from "./ErrorMassage";
import './Question.css';

const Question = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    score,
    setScore,

}) => {
     
   const [selected, setSelected] = useState();
   const [error , setError] = useState(false);

   const handleSelect=(i)=> {
    if(selected === i && selected === correct) {
        return `select`;
    }
    else if(selected===i && selected!==correct) {
        return "wrong";

    }else if(i===correct){
      return "select";   
    }
};
     
     const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false)
     };

     const history = useHistory(); 

   const handleNext= () => {
    if(currQues>8) {
        history.push('/result');
    }else if  (selected) {
        setCurrQues(currQues + 1);
        setSelected();
    }else {
        setError("please select an option firist")
    }
    };
  

    const handleQuit = () => {}; 

  return (
    <div className='"question'>
       <h1>Question {currQues +1}</h1>

<div className='singleQuestion'>
    <h2>{questions[currQues].Question}</h2>
    <div className='options'>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {options && options.map((i) =>( <button
        onClick={() => {}
    }

    className={`singleOption ${selected && handleSelect(i)}`}
    key={i}
    disabled={selected}


        >{i}
        </button>
       ))}
    </div>
  <div className='controls'>
    <Button
    variant="controls"
    color="secondry"
    size="large"
    style={{width:185}}
    harv="/"
    onClick={handleQuit}
    >
        
        Quit</Button>
    <Button
    variant="controls"
    color="primary"
    size="large"
    style={{width:185}}
    onClick={handleNext}
      
    >Next Question</Button>

  </div>
</div>

        </div>
  )
}

export default Question