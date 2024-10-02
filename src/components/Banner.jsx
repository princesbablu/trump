import { useState, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Container, Row, Col } from 'react-bootstrap'
import bannerheader from '../assets/img/bannerheading.png';
import bannerimg from '../assets/img/banner-img.png'; import audioFile from '../assets/audio/audio.wav';


export default function Banner() {
  const playOn = `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3393_390)">
                      <path d="M12.061 6.99927C12.5376 7.35666 12.9243 7.82009 13.1907 8.35285C13.4571 8.88562 13.5958 9.47309 13.5958 10.0687C13.5958 10.6644 13.4571 11.2519 13.1907 11.7846C12.9243 12.3174 12.5376 12.7808 12.061 13.1382" stroke="white" strokeWidth="1.15105" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.1329 4.69727C14.934 5.34466 15.5802 6.16304 16.0241 7.09247C16.468 8.02191 16.6984 9.03886 16.6984 10.0689C16.6984 11.0988 16.468 12.1158 16.0241 13.0452C15.5802 13.9747 14.934 14.793 14.1329 15.4404" stroke="white" strokeWidth="1.15105" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.15471 12.3707H3.61997C3.41645 12.3707 3.22127 12.2899 3.07736 12.146C2.93345 12.0021 2.8526 11.8069 2.8526 11.6034V8.53389C2.8526 8.33037 2.93345 8.13519 3.07736 7.99128C3.22127 7.84737 3.41645 7.76652 3.61997 7.76652H5.15471L7.8405 4.31336C7.90757 4.18309 8.01903 4.0811 8.15473 4.02582C8.29043 3.97055 8.44143 3.96564 8.58044 4.01197C8.71945 4.05831 8.8373 4.15284 8.91269 4.27848C8.98809 4.40412 9.01606 4.55258 8.99155 4.69705V15.4402C9.01606 15.5847 8.98809 15.7331 8.91269 15.8588C8.8373 15.9844 8.71945 16.079 8.58044 16.1253C8.44143 16.1716 8.29043 16.1667 8.15473 16.1114C8.01903 16.0562 7.90757 15.9542 7.8405 15.8239L5.15471 12.3707Z" stroke="white" stroke-width="1.15105" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3393_390">
                        <rect width="18.4169" height="18.4169" fill="white" transform="translate(0.550537 0.860352)" />
                      </clipPath>
                    </defs>
                  </svg>`
  const playOff = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3393_3160)">
                  <path d="M11.8579 6.48633C12.4321 6.91701 12.8741 7.50013 13.1334 8.16943C13.3928 8.83873 13.4592 9.56737 13.3251 10.2725M12.2685 12.2692C12.1402 12.3975 12.003 12.5164 11.8579 12.6253" stroke="white" stroke-width="1.15105" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.9298 4.18433C15.1614 5.17964 16.0136 6.56794 16.3435 8.11667C16.6735 9.6654 16.4613 11.2805 15.7423 12.6914M14.4562 14.4556C14.2889 14.6218 14.1132 14.7793 13.9298 14.9275" stroke="white" stroke-width="1.15105" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.30664 4.22554L7.63737 3.80042C7.70445 3.67015 7.8159 3.56816 7.9516 3.51288C8.08731 3.45761 8.2383 3.4527 8.37731 3.49903C8.51632 3.54537 8.63417 3.6399 8.70957 3.76554C8.78497 3.89118 8.81294 4.03964 8.78843 4.18411V5.71885M8.78843 8.78832V14.9273C8.81294 15.0717 8.78497 15.2202 8.70957 15.3458C8.63417 15.4715 8.51632 15.566 8.37731 15.6124C8.2383 15.6587 8.08731 15.6538 7.9516 15.5985C7.8159 15.5432 7.70445 15.4412 7.63737 15.311L4.95158 11.8578H3.41684C3.21333 11.8578 3.01814 11.777 2.87423 11.633C2.73032 11.4891 2.64948 11.2939 2.64948 11.0904V8.02095C2.64948 7.81743 2.73032 7.62225 2.87423 7.47834C3.01814 7.33443 3.21333 7.25358 3.41684 7.25358H4.95158L5.94456 5.97668" stroke="white" stroke-width="1.15105" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.64948 2.64941L16.4621 16.4621" stroke="#F8F8F8" stroke-width="1.15105" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_3393_3160">
                  <rect width="18.4169" height="18.4169" fill="white" transform="translate(0.347412 0.347412)"/>
                  </clipPath>
                  </defs>
                  </svg>`

  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const toggleAudio = () => {
    const audio = audioRef.current.audioEl.current;
    if (audioPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setAudioPlaying(!audioPlaying);
  }
  return (
    <div className='banner position-relative z-0'>
      <ReactAudioPlayer ref={audioRef} src={audioFile} controls={audioPlaying} className='d-none' />
      <div className="banner-image d-none d-md-block position-absolute z-1"><img src={bannerimg} alt="" /></div>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={8}  xl={6}>
            <div className="banner-header text-center">
              <div className='position-relative z-0 d-flex justify-content-center'>
                <div className="banner-header-image"><img src={bannerheader} alt="" /></div>
                <h2 className='position-absolute z-1'>Trump for Win</h2>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="banner-btns d-flex justify-content-between">
              <a href="#" className='btn'>Buy Trump coin</a>
              <button className='btn d-flex align-items-center gap-2 text-lowercase' onClick={() => toggleAudio()}>
                <span className='d-flex align-items-center justify-content-center bg-black text-white' dangerouslySetInnerHTML={{ __html: audioPlaying?playOff:playOn }}></span>
                {audioPlaying?'Off':'On'}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="banner-image d-md-none position-absolute z-1"><img src={bannerimg} alt="" /></div>
    </div>
  )
}
