import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function FinalForm(){
    return (
    <div>
        <div class="message">
            <CheckCircleIcon sx={{ fontSize: 50, color: '#692fef', margin: '50px' }}/>
            <h2>Congratulations, Eren!</h2>
            <p>You have completed the onboarding, you can start using Eden!</p>
        </div>     
    </div>    
    );
}
 
export default FinalForm;