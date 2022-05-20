import './App.css';
import React from 'react'
import uuid from 'react-uuid'
import BasketPage from './Pages/BasketPage/BasketPage.jsx';
import Frontpage from './Pages/Frontpage/Frontpage.jsx';
import ProductPage from './Pages/ProductPage/ProductPage.jsx';
// import SearchResultPage from './Pages/SearchResultPage/SearchResultPage.jsx';

function App(props) {
  var userID = uuid();
  var UserContext = React.createContext(userID);

  return (
    <UserContext.Provider value={userID}>
      <div className="App">
        {props.page === "ProductPage" ? <ProductPage /> : null}
        {props.page === "BasketPage" ? <BasketPage/> : null}
        {/* {props.page === "SearchResultPage" ? <SearchResultPage /> : null} */}
        {/* {this.props.page === "LoginPage" ? <PortfolioPage/> : null} */}
        {props.page === "Frontpage" ? <Frontpage/> : null}
        
          {/* <Toolbar /> */}
      </div>
    
    </UserContext.Provider>
  );
}

export default App;
