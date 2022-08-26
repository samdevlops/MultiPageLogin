import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';

function ThirdForm(){
    return (
    <div>
        <div class="message">
            <h2>How are you planning to use Eden?</h2>
            <p class="text-muted">We'll streamline your setup accordingly.</p>
        </div>
        <form class="form-container">
        <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6">
                <label>
                    <input type="radio" name="using_for" class="card-input-element" />
                    <div class="panel card-input">
                        <PersonIcon sx={{ color: '#692fef', margin:'15px 0px'}}/>
                        <h5 class="card-title">For myself</h5>
                        <p class="card-text">
                            Write better. Think more clearly. Stay organized.
                        </p>
                    </div>
                </label>    
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6">
                <label>
                    <input type="radio" name="using_for" class="card-input-element" />
                    <div class="panel card-input">
                        <PeopleIcon sx={{ color: '#692fef', margin:'15px 0px' }}/>
                        <h5 class="card-title">With my team</h5>
                        <p class="card-text">
                            Wikis, docs, tasks, & projects, all in one place.
                        </p>
                    </div>
                </label>    
            </div>
        </div>
      </form>
    </div>    
    );
}
 
export default ThirdForm;