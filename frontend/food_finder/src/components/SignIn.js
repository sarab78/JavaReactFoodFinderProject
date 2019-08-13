import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import './SignIn.css'


class SignIn extends Component{
constructor(props){
 super(props)
 this.state = {
   redirect: false
 }
 this.handleSubmit = this.handleSubmit.bind(this)
 this.setRedirect = this.setRedirect.bind(this)
 this.renderRedirect = this.renderRedirect.bind(this)
}
handleSubmit(event){
 event.preventDefault()
 const id = event.target.id.value
 this.props.handleSignIn(id);
}
setRedirect(){
 this.setState({
   redirect: true
 })
}
renderRedirect(){
 if (this.state.redirect) {
   return <Link to='/in-out'>
            <button type="button">Go!</button>
         </Link>
 }
}
render(){
 return (
   <div className="sign-in-form">
   <form onSubmit={this.handleSubmit}>
   <input type="number" placeholder="Please enter your user id" name="id" required/>
   <button type="submit" onClick={this.setRedirect}>Sign in</button>
   </form>
   <div className="sign-in-redirect">
    {this.renderRedirect()}
    </div>  
   </div>
 )
}
}
export default SignIn
