import React, { Component } from 'react';
import TopNavbar from './TopNavbar'
import './CSS/degree.css'
import './CSS/homepage.css'
import { Translation } from 'react-i18next';
class Degreepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Translation>
            { (t, { i18n }) => (
            <>
            <div className="degreebackground">
            <TopNavbar />
            <div className="degreebody">
            <div className = "border1 text-focus-in-nodelay">
                <br />
                <br />
                <h5 className="text-focus-in-nodelay">{t('DP1')}</h5>
                <br></br>
                <ul className="focus-in-contract-bck">{t('DP2')}</ul>
                <ul className="focus-in-contract-bck">{t('DP3')} (<a href="http://minueto.cs.mcgill.ca/"><span style={{color:"yellow"}}>Minueto FrameWork.</span></a>)</ul>
                <ul className="focus-in-contract-bck">{t('DP4')}</ul>
                <ul className="focus-in-contract-bck">{t('DP5')}</ul>
                <ul className="focus-in-contract-bck">{t('DP6')}</ul>

                <h5 className="tracking-in-contract">{t('DP7')}</h5>
                <h5 className="tracking-in-contract">{t('DP8')}</h5>
                <br />
                <br />
                </div>
            </div>
            <br />
            <div className="footer">{t('footer')}</div>
            </div>
            </>
            )
    }
    </Translation>
         );
    }
}
 
export default Degreepage;