import React, { Component } from 'react'
import TopNavbar from './TopNavbar'
import { Translation } from 'react-i18next';
import './CSS/homepage.css'
import './CSS/contactme.css'
import {AiFillWechat} from 'react-icons/ai'
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
                       <AiFillWechat fontSize="40px"/> : Partington
                       </div>
                       
                       <div className = "footer">{t('footer')}</div>
                   </div>
            )}
            </Translation>
         );
    }
}
 
export default Contactme;