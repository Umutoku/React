import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state={images: []};

    }

   onSearchSubmit = async (entry)=>{
     const response=  await  axios.get
        (`https://pixabay.com/api/?key=39479726-bfbdf9c3543a05ae73c3ab104&q=${entry}&image_type=photo`)
        this.setState({images: response.data.hits});
    }

    render(){
        return(
            <div className='ui container' style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
                </div>
        )
    }


}

export default App;