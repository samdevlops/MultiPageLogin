import React, { useState } from 'react';

import Stepper from '@mui/material/Stepper';
import logo from '../images/icon.png';

//Importing components
import FirstForm from './forms/FirstForm';
import SecondForm from './forms/SecondForm';
import ThirdForm from './forms/ThirdForm';
import FinalForm from './forms/FinalForm';

function Main() {

  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div class="container-middle">
          <div class="header">
              <img src={logo} alt="logo" />
              <h2>Eden</h2>
          </div>
          <Stepper activeStep={count} alternativeLabel></Stepper>


      </div>
    </React.Fragment>
  );
}

export default Main;
