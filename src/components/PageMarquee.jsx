import favicon from '../assets/img/favicon.png'
import Marquee from "react-fast-marquee"

export default function PageMarquee() {
  return (
    <div className="common-marquee bg-white border-black border border-4 border-start-0 border-end-0 py-2 py-md-3">
      <Marquee autoFill={true} speed={60}>
        <div className="common-marquee-item d-flex align-items-center gap-2 me-2 pe-1">
          <img src={favicon} alt="" />
          <h4 className="mb-0 text-uppercase text-black text-uppercase ms-1">$Trumpcoin</h4>
        </div>
      </Marquee>
    </div>
  )
}
