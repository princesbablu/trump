import {Container, Row, Col} from 'react-bootstrap'
import ProfileImg from '../assets/img/team-profile.png'
import FlagImg from '../assets/img/usa-flag.png'

export default function Team() {
  const team = [
    {
      profile: ProfileImg,
      title: 'Mr Murad',
      desc: 'Founder & CEO - With a decade of experience in blockchain technology and project management,',
    },
    {
      profile: ProfileImg,
      title: 'Mr RahMan',
      desc: 'Founder & CEO - With a decade of experience in blockchain technology and project management,',
    },
    {
      profile: ProfileImg,
      title: 'Mr Jogo',
      desc: 'Founder & CEO - With a decade of experience in blockchain technology and project management,',
    },
    {
      profile: ProfileImg,
      title: 'Mr Farid',
      desc: 'Founder & CEO - With a decade of experience in blockchain technology and project management,',
    }
  ]
  return (
    <div className="team">
      <Container>
        <Row className='g-3'>
        {team.map((item, index) =>(
          <Col sm={12} md={6} lg={3}>
            <div className="team-card pb-5">
              <div className="team-top_img">
                <img src={FlagImg} alt="" />
              </div>
              <div className="team-profile text-center">
                <img src={item.profile} alt="" />
              </div>
              <div className="team-cotent pt-3 mt-1">
                <h3 className='text-white'>{item.title}</h3>
                <p className='text-white pt-2'>{item.desc}</p>
              </div>
            </div>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
