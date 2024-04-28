import React from 'react';
import LandingPage from './Pages/Public/LandingPage/LandingPage';
import HomePage from "./pages/portal/home/page";
import WishList from "./pages/portal/myList/page";
import Page from "./pages/portal/search/page";


function App() {
  return (
    <div className="App">
      <LandingPage/>
      <HomePage/>
      <WishList/>
      <Page/> 
    </div>
  );
}

export default App;
