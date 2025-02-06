import AboutSmall from "./About_small";
import Carrousel from "./Home_carrousel_big";
import HomeGallery from "./Home_gallery";

function Homepage (props) {

    return (
        <div className='Home-main'>
            <Carrousel />
            <HomeGallery />
            <AboutSmall />
        </div>
        
    );
}

export default Homepage;