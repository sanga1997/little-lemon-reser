// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import TopContainer from './components/TopContainer';
// import MenuContainer from './components/MenuContainer'
// import ReservationForm from './components/Reservation/ReservationForm';
// import ConfirmationContainer from './components/Reservation/ConfirmationContainer';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <TopContainer />
//         <Routes>
//           <Route path="/reservation" component={ReservationForm} />
//           <Route path="/confirmation" component={ConfirmationContainer} />
//         </Routes>
//         <MenuContainer />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopContainer from './components/TopContainer';
import MenuContainer from './components/MenuContainer'
import ReservationForm from './components/Reservation/ReservationForm';
import ConfirmationContainer from './components/Reservation/ConfirmationContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <TopContainer />
        <Routes>
          <Route path="/reservation" component={ReservationForm} />
          <Route path="/confirmation" component={ConfirmationContainer} />
        </Routes>
        <MenuContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

