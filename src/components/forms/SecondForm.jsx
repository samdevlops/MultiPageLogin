import React from "react";

function SecondForm(){
    return (
    <div>
        <div class="message">
            <h2>Let's set up a home for all your work</h2>
            <p class="text-muted">You can always create another workspace later.</p>
        </div>
        <form class="form-container">
        <div class="mb-3">
          <label for="workspacename" class="form-label">Workspace Name</label>
          <input type="text" class="form-control" id="workspacename" placeholder="Eden"/>
        </div>
        <div class="mb-3">
          <label for="displayname" class="form-label">Workspace URL<span class="text-muted">(Optional)</span></label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">www.eden.com/</span>
                </div>
                <input type="text" class="form-control" id="basic-url" placeholder="Example"/>
            </div>
        </div>
      </form>
    </div>    
    );
}
 
export default SecondForm;