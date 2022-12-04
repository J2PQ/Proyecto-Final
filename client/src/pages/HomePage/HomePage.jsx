import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.casasordesa.com/documentos_web/documentos/Casa%20ordesa%20pano%20horizontal%20bis.jpg"
                    alt="First slide"
                />
                <input type="text" />
                <Carousel.Caption>
                    <input type="text" />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/57/c9/f5/nomading-camp-andorra.jpg?w=700&h=-1&s=1"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <input type="text" />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media-magazine.trivago.com/wp-content/uploads/sites/3/2016/08/17120409/hoteles-7-estrellas-Laucala-Island-Resort-piscina.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <input type="text" />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default HomePage