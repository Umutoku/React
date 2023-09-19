import React from 'react';
import { createRoot } from 'react-dom/client';
import HemisphereDisplay from './HemisphereDisplay';



class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={latitude: null, longitude:null, errorMessage:''}
    }
    //state ={latitude: null, longitude:null, errorMessage:''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                this.setState({latitude:position.coords.latitude, longitude:position.coords.longitude})
            },
            (error) => this.setState({errorMessage:error.message}));
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    render(){
        if(this.state.errorMessage && !this.state.latitude)
        return <div>{this.state.errorMessage}</div>
        else if(!this.state.errorMessage && this.state.latitude)
        return <div><HemisphereDisplay latitude={this.state.latitude}/></div>
        else{
            return <div>Loading...</div>
        }
    }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);