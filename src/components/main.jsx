import * as React from 'react';
import logo from '../images/icon.png';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import FirstForm from "./forms/FirstForm";
import SecondForm from "./forms/SecondForm";
import ThirdForm from "./forms/ThirdForm";
import FinalForm from "./forms/FinalForm";

//to define the number
const steps = ['', '', '', ''];

export default function Main() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const renderLogic =(activeStep)=>{
    switch(activeStep){
      case 1:
        return <FirstForm />
        break;
      case 2:
        return <SecondForm />
        break;
      case 3: return <ThirdForm />
        break;
      default: 
        return <FinalForm />            
    }
  }

  return (
    <React.Fragment>
          <div class="header">
              <img src={logo} alt="logo" />
              <h2>Eden</h2>
          </div>
          <div class="body-content stepper-box">
              <Stepper activeStep={activeStep} sx={{ color: 'red'}}>
                {steps.map((label) => {
                  return (
                    <Step key={label} >
                      <StepLabel />
                    </Step>
                  );
                })}
              </Stepper>
          </div>
          <div class="body-content">
            {renderLogic(activeStep+1)}
          </div>
          <div class="body-content">
          <button 
              onClick={handleNext}
              type="submit">
              {activeStep === steps.length - 1 ? 'Launch Eden' : 'Create Workspace'}
            </button>
          </div>
    </React.Fragment>
  );
}