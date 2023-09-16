import React from "react";
import { createRoot } from 'react-dom/client';
import SingleComment from './SingleComment';
import images from './image/re.jpg';
import UserCard from './UserCard';

const App = () => {
  return(  
  <div className="ui comments">
    <UserCard>
    <SingleComment name='Alex' date='Today at 3:00pm' text='It is amazing' image ={images}/>
    </UserCard>
    <UserCard>
    <SingleComment name='Jack' date='Today at 5:00pm' text='It is so beautiful' image ={images}/>
    </UserCard>
    <UserCard>
    <SingleComment name='Sarah' date='Yesterday at 5:00pm' text='Thanks.' image ={images}/>
    </UserCard>

  </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);