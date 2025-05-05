import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
    const images = [
        "/home/inbasdlp14790/Downloads/4.jpg",
        "image2.jpg",
        "image3.jpg",
        "././images/5.png",
        "/home/inbasdlp14790/Code/b2c/kid-portfolio/src/images/5.png"
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Gallery ${index}`} />
                </div>
            ))}
        </Slider>
    );
}

export default Gallery;
