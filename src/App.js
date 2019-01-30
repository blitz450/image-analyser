import React, { Component } from 'react';
import Particles from 'react-particles-js';
import 'tachyons';
import './App.css';
import welcome from './components/ImageShow/welcome.png'
import url from './components/ImageShow/url.png'
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLink from './components/ImageLink/ImageLink';
import ImageShow from './components/ImageShow/ImageShow';

const particlesOptions = {
  particles: {
    number: {
      value: 35,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
const initialState={
      input: '',
      imageUrl: welcome,
      faceBoxes:[],
      route:'signin' ,
      isSignedIn: false,
      user: {
        id:'',
        name: '',
        email: '',
        entries:0,
        joined: ''
      }
    } 

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser=(data)=>{
    this.setState({user: {
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined
      }
    });
  }

  calculateFaceBoxes = (response)=>{
    const clarifaiFace = response.outputs[0].data.regions.map(region=>region.region_info.bounding_box);
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const faceBoxes= clarifaiFace.map(bounding_box => {
     return {
      leftCol: bounding_box.left_col * width,
      topRow: bounding_box.top_row * height,
      rightCol: width - (bounding_box.right_col * width),
      bottomRow: height - (bounding_box.bottom_row * height)
    }
    });
    return faceBoxes;
  }

  setFaceBoxes = (faceBoxes) => {
    this.setState({faceBoxes:faceBoxes});
  }

  onPictureSubmit = () => {
  	 if(!this.state.input.length)
  	 	this.setState({imageUrl: url});
  	 else
    	this.setState({imageUrl: this.state.input});
    if(this.state.input!==this.state.imageUrl)
    this.setState({faceBoxes: []});
    if(this.state.input.length&&this.state.input!==this.state.imageUrl){
      console.log('fetching');
      fetch('https://image-analyser-api.herokuapp.com/imageurl', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input
          })
        })
        .then(response => response.json())
        .then(response=>{
          if(response.outputs){
            fetch('https://image-analyser-api.herokuapp.com/image', {
              method:'put',
              headers:{ 'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id
              })
             })
            .then(response=>response.json())
            .then(newentries=>this.setState(Object.assign(this.state.user,{entries:newentries})))
            .catch(console.log);
             if(response.outputs[0].data.regions){
              this.setFaceBoxes(this.calculateFaceBoxes(response))
            }
          }
        })
        .catch(console.log);
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange=(route)=>{
    if(route==='signout'){
      this.setState(initialState);
    } else if(route==='home'){
        this.setState({isSignedIn:true});
      }
    this.setState({route: route});
  }


  render() {
    const { imageUrl, faceBoxes, route, isSignedIn, user} = this.state;
    return (
      <div className="App">
          <Particles className='particles'
          params={particlesOptions}
          />
          <Navigation isSignedIn={isSignedIn}
                       onRouteChange={this.onRouteChange} />
          {route==='home'
          ?
          <div>
            <div className='mt3' style={{display: 'flex',justifyContent: 'center'}}>
              <Logo />
              <Rank name={user.name}
                    entries={user.entries} />
            </div>
            <ImageLink onInputChange={this.onInputChange}
                       onPictureSubmit={this.onPictureSubmit} />
            <ImageShow imageUrl={imageUrl}
                       faceBoxes={faceBoxes}/>
          </div>
            :(route==='signin'
              ?
              <Signin onRouteChange={this.onRouteChange} 
                       loadUser={this.loadUser}/>
              :(route==='about'
                ?
                <About onRouteChange={this.onRouteChange}/>
                :<Register onRouteChange={this.onRouteChange}
                           loadUser={this.loadUser} />
                )
            )
          }
      </div>
    );
  }
}

export default App;
