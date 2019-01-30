import React from 'react';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state={
			registerName:'',
			registerEmail:'',
			registerPassword:'',
		}
	}

	onNameChange=(event)=>{
		this.setState({registerName:event.target.value})
	}

	onEmailChange=(event)=>{
		this.setState({registerEmail:event.target.value})
	}

	onPasswordChange=(event)=>{
		this.setState({registerPassword:event.target.value})
	}

	onSubmitRegister=()=>{
		const {registerName, registerEmail,registerPassword}=this.state;
		const {loadUser, onRouteChange}=this.props;
		fetch('https://image-analyser-api.herokuapp.com/register', {
			method:'post',
			headers:{ 'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: registerName ,
				email: registerEmail ,
				password: registerPassword
			})
		})
		.then(response=>response.json())
		.then(user=>{
				if(user.id){
					loadUser(user)
					onRouteChange('home');
				}
			})
		.catch(console.log);
	}

	render(){
	const {onRouteChange}=this.props;
	return (
	    <div>
	      <article className="mw6 center  br3 pa2 mv4 ba b--black-10 shadow-5 bg-light-blue">
		      <main className="pa3 pb2 black-80">
				  <div method='post' className="measure">
				    <fieldset id="register" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" 
				        			type="name" 
				        			name="name"  
				        			id="name"
				        			onChange={this.onNameChange} />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        			type="email" 
				        			name="email-address"  
				        			id="email-address" 
				        			onChange={this.onEmailChange} />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        			type="password" 
				        			name="password"  
				        			id="password"
				        			onChange={this.onPasswordChange} />
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
				    </div>
				    <div className="lh-copy flex center">
				    	<p >Already Registered?</p>
				      <p onClick={()=>onRouteChange('signin')} className="f5 underline pointer link dim black db ph2">Sign In</p> 
				    </div>
				  </div>
				</main>
			</article>
	    </div>
	  );
	}
}

export default Register;