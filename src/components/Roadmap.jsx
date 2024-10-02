import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import shap from '../assets/img/roadmap-shap.png';
import carimg from '../assets/img/car.png';

export default function Roadmap() {
  const carImgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const carImg = carImgRef.current;
      const roadmapSection = carImg.parentElement.parentElement; // roadmap-shap's parent, which is the .roadmap div
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = roadmapSection.offsetTop;
      const sectionHeight = roadmapSection.offsetHeight;

      // Calculate the maximum scroll distance for the car image
      const maxScroll = sectionHeight - carImg.offsetHeight - 200; // Stop 200px before the bottom

      // Calculate the new position of the car image based on scroll
      let newScrollPos = scrollTop - sectionTop;
      if (newScrollPos > maxScroll) {
        newScrollPos = maxScroll;
      }

      if (scrollTop >= sectionTop && scrollTop <= sectionTop + sectionHeight) {
        carImg.style.transform = `translateY(${newScrollPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const roadmapCard = [
    {
      title: "Phase",
      subtitle: "Launch and Initial Distribution",
      des: "We’ll launch Trump Coin with fair distribution and a strong foundation, including liquidity setup and token allocation."
    },
    {
      title: "Phase",
      subtitle: "Community Building and Marketing",
      des: "We’ll grow our community through targeted marketing, making Trump Coin a recognized name in crypto."
    },
    {
      title: "Phase",
      subtitle: "Partnerships and Exchange Listings",
      des: "We’ll form strategic partnerships and work to list Trump Coin on major exchanges to increase accessibility."
    },
    {
      title: "Phase",
      subtitle: "Trump Coin Merchandise and NFTs",
      des: "We’ll introduce Trump Coin merchandise and NFTs to boost brand recognition and community engagement."
    },
  ]
  return (
    <div className='roadmap position-relative z-0'>
      <div className="roadmap-shap position-absolute z-1">
        <img src={shap} alt="" />
        <img ref={carImgRef} className='carimg' src={carimg} alt="" />
      </div>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={6} lg={4} >
            <div className="roadmap-title text-center">
              <h3>Roadmap</h3>
            </div>
          </Col>
        </Row>
        <div className="roadmap-items">
          <Row className=' justify-content-center justify-content-lg-between'>
            {
              roadmapCard.map((item, idx) => (
                <Col xs={12} md={6} key={idx} className='card-margin' >
                  <div className={`${idx % 2 == 1 ? "ms-lg-auto" : ""} roadmap-cards text-center`}>
                    <div className="card-body">
                      <span className='mb-4 pb-md-2'>{item.title} {idx + 1}</span>
                      <h6 className='mb-3 mb-md-4'>{item.subtitle}</h6>
                      <p>{item.des}</p>
                    </div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </div>
      </Container>
    </div>
  )
}
