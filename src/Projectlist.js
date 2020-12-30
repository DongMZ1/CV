import React, { Component } from 'react';
import TopNavbar from './TopNavbar'
import { Translation } from 'react-i18next';
import './CSS/projectlist.css'
import CountUp from 'react-countup';
import {FiExternalLink} from 'react-icons/fi'
import {BiGitRepoForked} from 'react-icons/bi'
import "./CSS/topnavbar.css";
import {Card} from 'react-bootstrap'
class Projectlist extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Translation>
            { (t, { i18n }) => (
                <>
            <div className="pjbackground">
               <TopNavbar />
               <div className ="plbody">
                <h1 className="text-focus-in-1">
                    {t('PL1')}
                <span style={{fontSize: "1.5em", fontWeight:"bold"}}><CountUp delay={2} start={999} duration={5} end={2} /></span>
                    {t('PL2')}
                </h1>
                <br />
                <br />
                    <h5 className="text-focus-in-6" style={{color:"yellow"}}>
                    <a href="https://dongmz1.github.io/DepolyReact/" style={{color:"yellow", paddingRight:"0.5em"}}><FiExternalLink fontSize="40px" /></a>
                    <a href="https://github.com/DongMZ1/307final" style={{color:"yellow", paddingRight:"0.5em"}} ><BiGitRepoForked fontSize="40px" /></a>  
                    {t('PL3')} </h5>
                    <h5 className="text-focus-in-6" style={{color:"yellow"}}>
                    <a href="https://dongmz1.github.io/CV/" style={{color:"yellow", paddingRight:"0.5em"}}><FiExternalLink fontSize="40px" /></a>
                    <a href="" style={{color:"yellow", paddingRight:"0.5em"}} ><BiGitRepoForked fontSize="40px" /></a>  
                    {t('PL4')} </h5>

               </div>
               <div className = "footer">{t('footer')}</div>
            </div>
            </>
            )}
          </Translation>
         );
    }
}
 
export default Projectlist;