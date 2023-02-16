import aboutData from '../../mocks/aboutData'
import Collapse from '../../components/Collapse'
import imageBanner from '../../assets/aboutbannerDesktop.png'

const About = () => {
  const content = (title) => {
    switch (title) {
      case 'fiability':
        return aboutData.fiability
      case 'respect':
        return aboutData.respect
      case 'service':
        return aboutData.service
      case 'sécurity':
        return aboutData.security
      default:
        console.log('default')
        break
    }
  }

  return (
    <div className="about">
      <div className="banner">
        <img src={imageBanner} alt="" className="banner_img" />
        <div className="banner_overlay"></div>
      </div>
      <div className="about_dropdowns">
        <div className="about_collapse">
          <Collapse title="Fiabilité" content={content('fiability')} />
        </div>
        <div className="about_collapse">
          <Collapse title="Respect" content={content('respect')} />
        </div>
        <div className="about_collapse">
          <Collapse title="Service" content={content('service')} />
        </div>
        <div className="about_collapse">
          <Collapse title="Sécurité" content={content('sécurity')} />
        </div>
      </div>
    </div>
  )
}

export default About
