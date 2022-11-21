import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

function Home(){
        return (
            <div id="elements">
            <Carousel id="carousel">
      <Carousel.Item>
        <img id="crouselImg"
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/486516.jpg"
          alt="Best Car Models"
        />
        <Carousel.Caption>
          <h3 className="carouselLine">Best Car Models</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="crouselImg"
          className="d-block w-100"
          src="https://www.babelquest.co.uk/hubfs/shutterstock_400222735.jpg"
          alt="Best Car Prices"
        />

        <Carousel.Caption>
          <h3 className="carouselLine">Best Car Prices</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="crouselImg"
          className="d-block w-100"
          src="https://wrench.com/blog/content/images/2019/07/new-car.jpg"
          alt="Shortest Waiting Time"
        />

        <Carousel.Caption>
          <h3 className="carouselLine">Shortest Waiting Time</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        <span class="container">
        <img id="background" alt="img" src="https://media.istockphoto.com/id/184660076/photo/open-garage-door.jpg?s=612x612&w=0&k=20&c=FYPIe-6TLaVRZ_u3o5J-X8Y21dNRQKAdwJ6CecqMfI8=">
        </img>
        <button class="centered">Buy Your New Car</button>
        </span>
        
        </div>
        );
}
export default Home