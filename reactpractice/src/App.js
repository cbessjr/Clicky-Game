import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"

//image imports
import PeanutsCharlieBrownTree from "./images/PeanutsCharlieBrownTree.jpeg"
import PeanutsChristmasTree from "./images/PeanutsChristmasTree.jpeg"
import PeanutsDancing from "./images/PeanutsDancing.jpeg"
import PeanutsHalloween from "./images/PeanutsHalloween.jpeg"
import PeanutsHappyNewYear from "./images/PeanutsHappyNewYear.jpeg"
import PeanutsSallyLove from "./images/PeanutsSallyLove.jpeg"
import PeanutsSkating from "./images/PeanutsSkating.jpeg"
import PeanutsThanksgiving from "./images/PeanutsThanksgiving.jpeg"
import PeanutsJazz from "./images/PeanutsJazz.jpeg"
import PeanutsEaster from "./images/PeanutsEaster.jpeg"
import PeanutsHistory from "./images/PeanutsHistory.jpeg"
import PeanutsSleep from "./images/PeanutsSleep.jpeg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

//Shuffle Array
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Already Selected Game Over, Replay?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "PeanutsCharlieBrownTree":
        return `${PeanutsCharlieBrownTree}`
      case "PeanutsChristmasTree":
        return `${PeanutsChristmasTree}`
      case "PeanutsDancing":
        return `${PeanutsDancing}`
      case "PeanutsHalloween":
        return `${PeanutsHalloween}`
      case "PeanutsHappyNewYear":
        return `${PeanutsHappyNewYear}`
      case "PeanutsSallyLove":
        return `${PeanutsSallyLove}`
      case "PeanutsSkating":
        return `${PeanutsSkating}`
      case "PeanutsThanksgiving":
        return `${PeanutsThanksgiving}`
      case "PeanutsJazz":
        return `${PeanutsJazz}`
      case "PeanutsEaster":
        return `${PeanutsEaster}`
      case "PeanutsHistory":
        return `${PeanutsHistory}`
      case "PeanutsSleep":
        return `${PeanutsSleep}`
      default:
        return `${PeanutsSleep}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;



// auto-generated code for React.js

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
            
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
