import {Container, Row, Col} from 'react-bootstrap';
import aboutImg from "../assets/img/about-img.png"

export default function About() {
  return (
    <div className='about position-relative z-0'>
        <div className="about-img position-absolute z-1"><img src={aboutImg} alt="" /></div>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12}>
             <div className="about-content text-center">
                   <h4 className='mb-3 mb-md-4 mb-lg-5'>ABOUT US</h4>
                   <p>Trump Coin is a meme coin inspired by the 45th President of the United States, Donald J. Trump. This coin represents the bold, unapologetic spirit of Trump, with the aim to shake up the crypto world just like he did with politics."</p>
             </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
