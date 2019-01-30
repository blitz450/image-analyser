import React from 'react';

class Signin extends React.Component{
	constructor(props){
		super(props);
		this.state={
			signInEmail:'',
			signInPassword:'',
		}
	}

	onEmailChange=(event)=>{
		this.setState({signInEmail:event.target.value})
	}

	onPasswordChange=(event)=>{
		this.setState({signInPassword:event.target.value})
	}

	onSubmitSignin=()=>{
		const {signInEmail,signInPassword}=this.state;
		fetch('https://image-analyser-api.herokuapp.com/signin', {
			method:'post',
			headers:{ 'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: signInEmail ,
				password: signInPassword
			})
		}).then(response=>response.json())
			.then(user=>{
				if(user.id){
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				} else {alert("Invalid email and password");}
			})
		}
	render(){
		const {onRouteChange}=this.props;
		return (
	    <article className="mw6 center br3 pa3 mv4 ba  b--black-10 bg-light-blue shadow-5">
		      <main className="pa2 pv3 black-80 ">
				  <div method='post' className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        				type="email" 
				        				name="email-address"  
				        				id="email-address"
				        				onChange={this.onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        				type="password" 
				        				name="password"  
				        				id="password"
				        				onChange={this.onPasswordChange}/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick={this.onSubmitSignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
				    </div>
				    <div className="lh-copy flex center">
				    	<p >New user?</p>
				      <p onClick={()=>onRouteChange('register')} className="f5 underline pointer link dim black db ph2">Register</p> 
				    </div>
				  </div>
				</main>
			</article>
	  );
	}
	 
}

export default Signin;