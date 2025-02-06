import React, { useState } from 'react';
import FirstImgCar from './assets/images/projects/Grad_Heek_Cover.png';
import SecondImgCar from './assets/images/projects/Grad_Portfolio_Cover.png';
import ThirdImgCar from './assets/images/projects/Grad_VintageB_Cover.png';
import FourthImgCar from './assets/images/projects/Grad_Cards_Cover.png';

function Carrousel () {


  // Array in which the carrousel images are stored with their corresponding data

  const items = [
    { imageSrc: SecondImgCar, text: 'CREATING A PORTFOLIO WITH REACT', id: 'imgcar1', uidesign: true, uxdesign: true, graphicdesign: false, programming: true },
    { imageSrc: FirstImgCar, text: 'HEEK: A HEALTHY LIFESTYLE SOLUTION', id: 'imgcar2', uidesign: true, uxdesign: true, graphicdesign: true, programming: false},
    { imageSrc: ThirdImgCar, text: 'VINTAGE BILBAO: A SUSTAINABLE APP', id: 'imgcar3', uidesign: true, uxdesign: true, graphicdesign: false, programming: false},
    { imageSrc: FourthImgCar, text: 'SET OF INSTRUCTIVE CARDS FOR LEFEBVRE', id: 'imgcar4', uidesign: false, uxdesign: false, graphicdesign: true, programming: false}
  ];


  // Sets the carrousel arrow functionality, so it can go to the next and previous image using the image index

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };


  // Renders Tags for each image based on the data stored in the array

  function TagUi () {
  while (items[currentIndex].uidesign == true) {
    return (<button className="Ui-tag"> UI DESIGN </button>);
  } 
}

function TagUx () {
  while (items[currentIndex].uxdesign == true) {
    return (<button className="Ux-tag"> UX DESIGN </button>);
  } 
}

function TagGraphic () {
  while (items[currentIndex].graphicdesign == true) {
    return (<button className="Graphic-tag"> GRAPHIC DESIGN </button>);
  } 
}

function TagProgramming () {
  while (items[currentIndex].programming == true) {
    return (<button className="Programming-tag"> PROGRAMMING </button>);
  } 
}

// Adds a read more button with a different link depending on the image displayed

function BttnRedirectCar () {
 
  if (items[currentIndex].id == 'imgcar1') {
    return (<button className="carrouselbttn"> READ MORE <span class="material-icons-round md-light-bttn">preview</span></button>);
  } else if (items[currentIndex].id == 'imgcar2') {
    return (<button className="carrouselbttn"> READ MORE <span class="material-icons-round md-light-bttn">preview</span></button>);
  } else if (items[currentIndex].id == 'imgcar3') {
    return (<button className="carrouselbttn"> READ MORE <span class="material-icons-round md-light-bttn">preview</span></button>);
  } else if (items[currentIndex].id == 'imgcar4') {
    return (<button className="carrouselbttn"> READ MORE <span class="material-icons-round md-light-bttn">preview</span></button>);
  } else {
    return (<p> Error, no link attached to this project</p>)
  }
}

// Renders the Carrousel component

  return (
    <div className="car-box">

      {/* Button to show the previous slide */}
      <div> 
        <button onClick={prevImage} className="restart-button-default"><span class="material-icons-round md-dark">arrow_back_ios</span></button>
      </div>

    <div className="box-bttn">
    {/* Displays a button with the link of that image */}
    <BttnRedirectCar />
      <div className="img-car-box" id={items[currentIndex].id}>
        <div className="car-box-info"> 
          {/* Renders the text attached to the current index number */}
          <h1 className="carrousel-title">{items[currentIndex].text}</h1>
          <div className="tags-car-big"> 
                <TagUi />
                <TagUx />
                <TagGraphic />
                <TagProgramming />
          </div>
        </div>
        {/* Renders the image attached to the current index number */}
        <img src={items[currentIndex].imageSrc} alt={`Image ${currentIndex + 1}`} className="img-carrousel-big" />
        <div class="overlay"></div>
      </div>
      
      </div>

      {/* Button to show the next slide */}
      <div>
        <button onClick={nextImage} className="restart-button-default"><span class="material-icons-round md-dark">arrow_forward_ios</span></button>
      </div>
    </div>
  );
};

export default Carrousel;