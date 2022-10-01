import { Carousel } from 'react-responsive-carousel';
import json from '../Slider/carousel.json'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../Slider/carousel.scss'

function Slider(){
    return(
        <div>
            <Carousel autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false} showStatus={false}>
                {
                    json.map(el => (
                        <div key={el.id} className="previewCarousel">
                            <a href={el.href}><img src={el.backgroundImage} alt=""/></a>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Slider