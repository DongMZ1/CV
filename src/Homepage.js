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
                   <h1 className ="text-focus-in" style={{paddingTop: "3%"}}>{t('HPp1beforeA')}
                      </h1>
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