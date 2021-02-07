import React, { Component } from 'react';
import TopNavbar from './TopNavbar'
import './CSS/homepage.css'
import{useTranslation} from 'react-i18next'
import { Translation } from 'react-i18next';
import Typewriter from 'typewriter-effect';
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      const { t } = this.props;
        return ( 
           <Translation>
      { (t, { i18n }) => (
        <>
            <div className="homebackground">
                 <TopNavbar />
                 <div className ="body">
                   <div className = "border1 text-focus-in-nodelay">
                   <br></br>
                   <Typewriter
  onInit={(typewriter) => {
    typewriter
      .pauseFor(1000)
      .typeString('<h1>Welcome to my Website!!!</h1>')
      .pauseFor(500)
      .deleteAll()
      .typeString('<h1>I am a "future" full-stack developer!')
      .pauseFor(500)
      .deleteAll()
      .typeString('<h1>But currently a student in Mcgill</h1>')
      .pauseFor(500)
      .deleteAll()
      .typeString('<h1>Here is my little story Since 1999</h1>')
      .pauseFor(1000)
      .deleteAll()
      .start();
  }}
/>
                   <br />
                   <p className="tracking-in-contract">
                     {t('HPp1beforeA')}
                   <a href="https://www.mcgill.ca/" style={{color: "snow"}}><span style={{color:"yellow"}}>{t('HPp1A')}</span></a>
                    {t('HPp1afterA')}
                   </p>
                   <p className="tracking-in-contract">
                     {t('HPp2')}
                   </p>
                   <h5 className="tracking-in-contract">{t('HPp3')}</h5>
                   <br></br>
                   <ul className="tracking-in-contract">{t('HPp4')}</ul>
                   <ul className="tracking-in-contract">{t('HPp5')}</ul>
                   <ul className="tracking-in-contract">{t('HPp6')}</ul>
                   <ul className="tracking-in-contract">{t('HPp7')}</ul>
                   <br />
                   </div>
                 </div>
                 <br />
                 <div className = "footer">{t('footer')}</div>
            </div>
              </>
      )
      }
       </Translation>
         );
    }
}
 
export default Homepage;