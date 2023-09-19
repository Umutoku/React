import { Component } from 'react';
import './App.css';
import BlogCard from './BlogCard';
import { isArrayEmpty as isMyArrayEmpty } from './Utils';

class App extends Component {

  state = {
    showBlogs: true
  }

   firstName = 'Toto';
   lastName = 'Wolff';
   age = 35;
   job = 'Team Principal';

   getFullName = (firstName,lastName) =>
  `${firstName} ${lastName}`

   blogArr =  [
    {
      id:1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum \
      Lorem Ipsum Lorem Ipsum',
      LikeCount:10
    },
    {
      id:2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum \
      Lorem Ipsum Lorem Ipsum',
      LikeCount:0

    },
    {
      id:3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum \
      Lorem Ipsum Lorem Ipsum',
      LikeCount:0

    }
  ]

  onLikeBtnClick = (pos) => {
    alert('Like Button Clicked pos => ' + pos)
  }

  blogCards = isMyArrayEmpty(this.blogArr) ? [] : this.blogArr.map((item)=>{
    return(
      <BlogCard className={'BlogCard'} key = {item.id} description={item.description} 
      title={item.title} LikeCount={item.LikeCount} onLikeBtnClick={()=>this.onLikeBtnClick()}/>
    //   <div className='BlogCard' key={item.id}>
    //   <h3>{item.title}</h3>
    //   <p>{item.description}</p>
    // </div>
    )
  })

  onHideClickButton = () =>{
    this.setState((prevState, prevProps)=> {
      return {showBlogs:!prevState.showBlogs}
    });
  }

  render(){
    return (
      <div className="App">
        <div className="BlogCard">
          <button onClick={this.onHideClickButton}>{this.state.showBlogs ? 'Hide List': 'Show List'}</button>
          <br/>
          {this.state.showBlogs ? this.blogCards:null}
        {/* <h3>Full name: {getFullName(firstName,lastName)}</h3>
        <p>Age: {age}</p>
        <p>Job: {job}</p>
        </div>
        <div className="BlogCard">
        <h3>Full name: {getFullName(firstName,lastName)}</h3>
        <p>Age: {age}</p>
        <p>Job: {job}</p>
        </div>
        <div className="BlogCard">
        <h3>Full name: {getFullName(firstName,lastName)}</h3>
        <p>Age: {age}</p>
        <p>Job: {job}</p> */}
        </div>
      </div>
    );
  };
}

export default App;
