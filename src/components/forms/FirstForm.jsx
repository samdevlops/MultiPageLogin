import React from "react";

function FirstForm(){
   
    return (
    <div>
        <div class="message">
            <h2>Welcome! First things first...</h2>
            <p>You can always change them later.</p>
        </div>
        <form class="form-container">
        <div class="mb-3">
          <label for="name" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="name" placeholder="Steve Jobs"/>
        </div>
        <div class="mb-3">
          <label for="displayname" class="form-label">Display Name</label>
          <input type="text" class="form-control" id="displayname" placeholder="Steve"/>
        </div>
      </form>
    </div>    
    );
}
 
export default FirstForm;