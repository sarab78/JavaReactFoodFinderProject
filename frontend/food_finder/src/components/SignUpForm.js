import React from 'react';

const SignUpForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "location": event.target.location.value,
    }
    props.signUpContainer(user);
  }

  // const cuisineOptions = props.cuisineTypes.map((cuisine, key) => {
  //   return <li><input type="checkbox" name="cusines" value={key}>{cuisine.name}</input></li>
  // })




  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="firstName"/>
        <input type="text" placeholder="Last Name" name="lastName"/>
        <input type="text" placeholder="Location" name="location"/>
        <br/>
        <label>Choose your favourite ingredients</label>
        <br/>
        <input type="checkbox" name="cuisine" value="2"/>Chicken
        <input type="checkbox" name="cuisine" value="6"/>Eggs
        <input type="checkbox" name="cuisine" value="3"/>Cheese
        <input type="checkbox" name="cuisine" value="4"/>Pasta
        <br/>
        <label>Choose your favourite Cuisines</label>
        <br/>
        <input type="checkbox" name="cuisine" value="2"/>Italian
        <input type="checkbox" name="cuisine" value="1"/>Chinese
        <input type="checkbox" name="cuisine" value="3"/>Indian
        <input type="checkbox" name="cuisine" value="10"/>Thai
        <br/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
};

export default SignUpForm;
