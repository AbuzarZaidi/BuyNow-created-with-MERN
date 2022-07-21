import React from 'react'

const Signin = () => {
  return (
  <>
  <div class="d-flex justify-content-center">
    <div class="w-25 p-3 " style={{backgroundColor: "#ffffff",color:"black"}}>
    <p class="h3">Sign-In</p>
    
      <div class="mb-3 ">
  <label for="exampleFormControlInput1" class="form-label">Email address*</label>
  {/* <figcaption class="blockquote-footer">
  Emails are collected only for password resets <br/>and are one-way hashed
  at time of collection.
  </figcaption> */}
  {/* <div id="emailHelp" class="form-text">Emails are collected only for password resets <br/>and are one-way hashed
  at time of collection. </div> */}
  <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3 ">
  <label for="exampleFormControlInput1" class="form-label">Password*</label>
 
  <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="At least six characters."/>
</div>
<button className="btn btn-block btn-primary font-weight-bold my-3 py-3">sign in</button>
    </div></div>
  </>
  )
}

export default Signin