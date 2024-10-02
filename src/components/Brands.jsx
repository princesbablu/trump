import { Container, Row, Col } from 'react-bootstrap';
import icon1 from '../assets/img/pimg1.png';
import icon2 from '../assets/img/pimg2.png';
import icon3 from '../assets/img/pimg3.png';
import icon4 from '../assets/img/pimg4.png';
export default function Brands() {
  const barands = [
    {
      image: icon1,
      url: ""
    },
    {
      image: icon2,
      url: ""
    },
    {
      image: icon3,
      url: ""
    },
    {
      image: icon4,
      url: ""
    },
  ]
  return (
    <div className='brands'>
      <Container>
        <Row className='justify-content-center' >
          <Col xs={12} md={7}>
            <div className="brands-heading text-center">
              <h3>OUR PARTNERS</h3>
            </div>
          </Col>
        </Row>
        <div className="brands-icons-item">
        <Row>
          {
            barands.map((item, idx) => (
              <Col xs={12} md={6} lg={3} key={idx} className='mb-3 mb-lg-0'>
                <a href={`${item.url}`} target='_blank'>
                  <div className="brands-icon">
                    <img src={item.image} alt="brand-icon" />
                  </div>
                </a>
              </Col>
            ))
          }
        </Row>
        </div>
      </Container>
    </div>
  )
}
