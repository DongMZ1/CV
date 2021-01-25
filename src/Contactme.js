import React, { Component } from 'react'
import TopNavbar from './TopNavbar'
import { Translation } from 'react-i18next';
import './CSS/homepage.css'
import './CSS/contactme.css'
import {AiFillWechat} from 'react-icons/ai'
import emailjs from 'emailjs-com';
class Contactme extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
    
    
    render() { 
        return ( 
            
               <Translation>
            { (t, { i18n }) => (
                   <div className="contactbackground">
                       <TopNavbar />
                       <div className="body">
                           <div className="text-shadow-pop-top-2-1">
                       <AiFillWechat fontSize="40px"/> : Partington
                       </div>
                       
                       <form className="" onSubmit={this.sendEmail}>
                         <label>Your Name</label>
                         <input type="text" name="user_name" />
                         <label>Email</label>
                         <input type="email" name="user_email" />
                         <label>Message</label>
                         <textarea name="message" />
                     <input type="submit" value="Submit" />
    </form>
                       </div>
                       
                       <div className = "footer">{t('footer')}</div>
                   </div>
            )}
            </Translation>
         );
    }
}
 
export default Contactme;