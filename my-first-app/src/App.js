import logo from './logo.svg';
import './App.css';
import {Comment} from './components/Post';

function App() {
  let comment1 = {
    text: "Hi there",
    profile: {
      name: "Allena Willson",
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761'
    },
    likes: 40,
    loves: 19
  }

  let comment2 = {
    text: "Hello everyone",
    profile: {
      name: "Robert White",
      imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160"
    },
    likes: 37,
    loves: 11
  }


  return(
  
    <div style={{margin: "20px", backgroundColor: "black", opacity: "0.8", width: "400px", borderRadius: "10px", border: "2px solid grey"}}>
      <h2 style={{marginLeft: "20px", color: 'cornflowerblue'}}>React App from React tool kit</h2>
      <Comment comment = {comment1}/>
      <Comment comment = {comment2}/>
    </div>
    
  );
  }

export default App;
