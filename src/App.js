import "./App.css"
import anidata from "./components/data";
import Navbar from "./components/navbar";
import Cards from "./components/cards";
import Carousel from "./components/Carousel"


function ncard(val){
  return(
    <>
        <Cards
          card_img={val.card_img}
          card_category={val.card_category}
          card_title={val.card_title}
          card_redirect={val.card_redirect}
        />
    </>
  )
}



function App() {
  return (
    <>
      <Navbar title="AnimNet" />
      <Carousel />
      <div className="title">
        <h1>Best Anima in 2021-2022</h1>
      </div>
      <div className="cards_con">
          {anidata.map(ncard)}
      </div>
    </>
  );
}

export default App;
//
