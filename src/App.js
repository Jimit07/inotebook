import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
// import Signup from './components/Signup';
// import Login from './components/Login';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="This is amazing React course" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/about" element={<About />} />


              {/* <Route exact path="/login" element={<Login />} /> */}


              {/* <Route exact path="/signup" element={<Signup />} /> */}


            </Routes>
          </div>
        </BrowserRouter>
      </NoteState >
    </>
  );
}

export default App;




// import './App.css';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar.js';
// import Home from './components/Home.js';
// import About from './components/About.js';
// import NoteState from './Context/NoteStates.js';
// import { Alert } from './components/Alert.js';



// function App() {
//   return (
//     <>
//       <NoteState>
//         <BrowserRouter>
//           <Navbar />
//           <Alert message="this is amazing react course" />
//           <div className="container">
//             <Routes>
//               <Route exact path="/" element={<Home />} />

//               <Route exact path="/about" element={<About />} />

//             </Routes>
//           </div>
//         </BrowserRouter>
//       </NoteState>


//     </>
//   );
// }

// export default App;

