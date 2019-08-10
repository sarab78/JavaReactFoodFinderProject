import React from 'react';

const SignUpForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      "firstName": event.target.firstname.value,
      "lastName": event.target.lastname.value,
      "location": event.target.location.value,
    }
    props.handleSignUp(user);
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="firstName"/>
        <input type="text" placeholder="Last Name" name="lastName"/>
        <input type="text" placeholder="Location" name="location"/>
        {/* cuisine and ingredient checkbox to be added */}
        <button type="submit">Save</button>
      </form>
    </div>
  )
};

export default SignUpForm;
