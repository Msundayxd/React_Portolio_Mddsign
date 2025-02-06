import React, { useState } from 'react';
import FirstImgGal from './assets/images/projects/Rectangle 5.png';
import { useEffect } from "react";


//Array where all images and their data are stored

const pictures = [
    { imageSrc: FirstImgGal, text: 'HEEK: A HEALTHY LIFESTYLE SOLUTION', id: '1', uidesign: true, uxdesign: true, graphicdesign: true, programming: false },
    { imageSrc: FirstImgGal, text: 'CREATING A PORTFOLIO WITH REACT', id: '2', uidesign: true, uxdesign: true, graphicdesign: false, programming: true },
    { imageSrc: FirstImgGal, text: 'VINTAGE BILBAO: A SUSTAINABLE APP', id: '3', uidesign: true, uxdesign: true, graphicdesign: false, programming: false},
    { imageSrc: FirstImgGal, text: 'SET OF INSTRUCTIVE CARDS FOR LEFEBVRE', id: '4', uidesign: false, uxdesign: false, graphicdesign: true, programming: false},
    { imageSrc: FirstImgGal, text: 'HEEK: A HEALTHY LIFESTYLE SOLUTION', id: '5', uidesign: true, uxdesign: true, graphicdesign: true, programming: false },
    { imageSrc: FirstImgGal, text: 'CREATING A PORTFOLIO WITH REACT', id: '6', uidesign: true, uxdesign: true, graphicdesign: false, programming: true },
    { imageSrc: FirstImgGal, text: 'VINTAGE BILBAO: A SUSTAINABLE APP', id: '7', uidesign: true, uxdesign: true, graphicdesign: false, programming: false},
    { imageSrc: FirstImgGal, text: 'SET OF INSTRUCTIVE CARDS FOR LEFEBVRE', id: '8', uidesign: false, uxdesign: false, graphicdesign: true, programming: false},
    { imageSrc: FirstImgGal, text: 'HEEK: A HEALTHY LIFESTYLE SOLUTION', id: '9', uidesign: true, uxdesign: true, graphicdesign: true, programming: false },
    { imageSrc: FirstImgGal, text: 'CREATING A PORTFOLIO WITH REACT', id: '10', uidesign: true, uxdesign: true, graphicdesign: false, programming: true },
    { imageSrc: FirstImgGal, text: 'VINTAGE BILBAO: A SUSTAINABLE APP', id: '11', uidesign: true, uxdesign: true, graphicdesign: false, programming: false},
    { imageSrc: FirstImgGal, text: 'SET OF INSTRUCTIVE CARDS FOR LEFEBVRE', id: '12', uidesign: false, uxdesign: false, graphicdesign: true, programming: false},
  ];


// Main gallery component

function HomeGallery() {

  // Filter pictures based on the data displayed in the array

    const [filter, setFilter] = useState("all");
  
    const filteredPictures = pictures.filter(picture => {
      if (filter === "all") return true;
      if (filter === "uxdesign") return picture.uxdesign;
      if (filter === "uidesign") return picture.uidesign;
      if (filter === "graphicdesign") return picture.graphicdesign;
      if (filter === "programming") return picture.programming;
      return true;
  });


  // Sets default visible Images when aplying a new filter on tha gallery and displays the Show all or Show less button depending on the number of pictures displayed

  const [visibleImages, setVisibleImages] = useState(6);
  const [showAll, setShowAll] = useState(false);

  function toggleShowAll () {
    if (showAll) {
      setVisibleImages(6); 
    } else {
      setVisibleImages(filteredPictures.length); 
    } 
    setShowAll(!showAll); 
  };


  // Everytime the filter is changed, the images display from 0, triggering again the transition effect for all of them

  useEffect(() => {
    setVisibleImages(0);
    setTimeout(() => setVisibleImages(6), 6);
  }, [filter]);


  // Creates a smoother transition when images are displayed

  useEffect(() => {

    const images = document.querySelectorAll(".gallery-image");

    images.forEach((image, index) => {
      
      setTimeout(() => {
        image.classList.add("visible");
      }, index * 100); 
    });
  }, [filteredPictures]);


   // Posts tags on each image based on the data present in the array

   function TagUi ({picture}) {
    while (picture.uidesign == true) {
      return (<div className="Ui-tag-small"> </div>);
    } 
  }
  
  function TagUx ({picture}) {
    while (picture.uxdesign == true) {
      return (<div className="Ux-tag-small"> </div>);
    } 
  }
  
  function TagGraphic ({picture}) {
    while (picture.graphicdesign == true) {
      return (<div className="Graphic-tag-small"> </div>);
    } 
  }
  
  function TagProgramming ({picture}) {
    while (picture.programming == true) {
      return (<div className="Programming-tag-small"> </div>);
    } 
  }


  //Renders the gallery component

    return (
        <div className="Hgallery-bg">
            <div className="Margin-control"></div>
            <div className="Hgallery-content">
              {/* Adds an anchor to the top of the gallery component to ensure a smoother transition to the top ONLY when the show less button is activated */}
                <div className="Hgallery-title-nav" id={showAll ? '' : 'anchorgalleryh'}>
                    <h3> BROWSE MORE PROJECTS... </h3>
                    <nav className="Hgallery-nav">
                      {/* Applies a filter in order to render the images with the chosen tag */}
                        <button className={`Hgallery-nav-bttn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}> ALL </button>
                        <button className={`Hgallery-nav-bttn ${filter === "uidesign" ? "activeui" : ""}`} id="bttn-ui" onClick={() => setFilter("uidesign")}> UI DESIGN </button>
                        <button className={`Hgallery-nav-bttn ${filter === "uxdesign" ? "activeux" : ""}`} id="bttn-ux" onClick={() => setFilter("uxdesign")}> UX DESIGN </button>
                        <button className={`Hgallery-nav-bttn ${filter === "graphicdesign" ? "activegraphic" : ""}`} id="bttn-graphic" onClick={() => setFilter("graphicdesign")}> GRAPHIC DESIGN </button>
                        <button className={`Hgallery-nav-bttn ${filter === "programming" ? "activeprogramming" : ""}`} id="bttn-programming" onClick={() => setFilter("programming")}> PROGRAMMING </button>
                    </nav>
                </div>
                    <div className="mid-gallery-container">
                    {/* Renders the gallery images based on the filter applied */}
                    {filteredPictures.slice(0, visibleImages).map((picture, index) => (
                    <div className="mid-gallery-element">
                      <div className="overlay-soft"> </div>
                        <img
                            key={index}
                            src={picture.imageSrc}
                            className="gallery-image"
                        />
                        <div className="gallery-txt-box">
                            <div className="gallery-tags">
                                {/* Renders the image tags based on the filter applied */}
                                <TagUi picture={picture}/>
                                <TagUx picture={picture}/>
                                <TagGraphic picture={picture}/>
                                <TagProgramming picture={picture}/>
                            </div>
                            <h3 className="gallery-img-title">{picture.text}</h3>
                        </div>
                    </div>
                    ))}
                </div>
                {/* Conditional renders the see more/see less button, only appears when there are more than 6 images available */}
                {filteredPictures.length > 6 && (
                <div className="gal-bttn-container">
                  {/* Link to the anchor point */}
                  <a href="#anchorgalleryh">
                 <button onClick={toggleShowAll} className="mid-bttn-default">
                     {showAll ? 'SEE LESS' : 'SEE MORE'}
                 </button>
                 </a>
                </div>
                )}
            </div>
            <div className="Margin-control"></div>
        </div>
    )
}

export default HomeGallery;