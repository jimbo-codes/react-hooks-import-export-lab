import React from "react";
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
// import username from '../user'


// const username = "Liza";
// const city = "New York";

// const image = "https://i.imgur.com/mV8PQxj.gif";
function App() {
  return (
    <div>
      <NavBar />
      <Home 
      // username={username}
      // city={city}
      />
      <About 
      // image={image}
      />
    </div>
  );
}

export default App;
