import React, { Component } from 'react'
import TopNavbar from './TopNavbar'
import { Translation } from 'react-i18next';
import './CSS/homepage.css'
import './CSS/contactme.css'
class Contactme extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
               <Translation>
            { (t, { i18n }) => (
                   <div className="contactbackground">
                       <TopNavbar />
                       <div className="body">
                           Hello
                       </div>
                       
                       <div className = "footer">{t('footer')}</div>
                   </div>
            )}
            </Translation>
         );
    }
}
 
export default Contactme;