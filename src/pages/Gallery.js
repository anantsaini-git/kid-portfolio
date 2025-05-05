import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../common/galleryImage.css";

function Gallery() {
    const images = [
        require("./../images/1.jpeg"),
        require("./../images/2.jpeg"),
        require("./../images/3.jpeg"),
        require("./../images/4.jpeg")
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false
    };


    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="image-container">
                    {<img src={image} alt={`Gallery ${index}`}/>}

                </div>
            ))}
        </Slider>
    );
}

export default Gallery;
