import './style.css'
import Worksvg from '../../assets/work-maintaince.svg'

const MaintaincePage = () => {


  return (
    
    <div className="maintaince-page">
      <div className="maintaince-page-wrap">
        <div className="maintaince-page-content">
          <h1 className="maintaince-page-title">We are currently down for maintenance</h1>
          <div className="maintaince-page-icon">
            <img src={Worksvg} alt="work" />
          </div>
          <p className="maintaince-page-text">
            We are currently performing scheduled maintenance. We should be back shortly. Thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MaintaincePage