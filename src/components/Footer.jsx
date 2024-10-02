import {Container, Row, Col} from 'react-bootstrap'
import Social from './Social'
import FooterLogo from '../assets/img/footer-logo.png'

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className='text-center justify-content-center'>
            <Col md={8}>
              <div className="footer-logo">
                <img src={FooterLogo} alt="" />
              </div>
              <div className="buttons pt-3 mt-1">
                <a href="#" className="btn text-black text-uppercase bg-white border border-2 border-black">Privacy policy</a>
                <div className="footer-mail pt-2 pb-2 mt-1 mb-1">
                  <a href="mailto:contact@trumpwin.qbc" className="footer-mails text-white">contact@trumpwin.qbc</a>
                </div>
                <div className="footer-social d-flex justify-content-center pb-4">
                  <Social />
                </div>
                <div className="footer-content">
                  <p className='text-white'>Fight For Trump ($TRUMPCOIN) is a memecoin created purely for entertainment and satire. It is not affiliated with, endorsed by, or approved by Donald J. Trump or any of his associates. Any references to Trump are incidental and meant for humorous purposes only.</p>
                </div>
              </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
