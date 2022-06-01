import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../../Album/ListHT.scss';
import HoahoetSlide from './HoahoetSlide';
import QuatangSlide from './QuatangSlide';
import AnhCheSlide from './AnhCheSlide';



function ListAlbum() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (

    <div>
        <div className="list-album">
        <Button variant="outline-primary"
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}> Hoa Hoét </Button>
        <Button variant="outline-success"
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}> Quà tặng của Trường</Button>
        <Button variant="outline-danger"
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}> Ảnh chế vui nè </Button>
        </div>
      

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
            <div className="container"> 
            <h2>Hoa Hoét</h2>
            </div> <hr />
        <HoahoetSlide />
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
            <div className="container"> 
            <h2>Quà tặng của Trường </h2>
            </div> <hr />
            <QuatangSlide />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
            <div className="container"> 
            <h2> Ảnh chế vui nè </h2>
            </div> <hr />
            <AnhCheSlide />
        </div>
     
       

        
      </div>
    </div>
  );
}

export default ListAlbum;