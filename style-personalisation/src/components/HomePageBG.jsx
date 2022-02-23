import React from "react";
import '../App.css';

/* import background image */
import backgroundImage from '../assests/home_page_bg.png'

export default class HomePageBG extends React.Component {
    render() {
        return (
            <div> 
                <img className='backgroundImageStyle' src={backgroundImage}/>
            </div>
          );
    }
}