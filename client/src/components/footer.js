import {React } from "react"
import { Link } from 'react-router-dom'
import insta from '../images/insta.svg'
import spoty from '../images/spoty.svg'
import youtube from '../images/youtube.svg'
import './albums.css'

const Footer = () => {

    return (
    
            <footer id="contact">
                <p className="contacto">Contacto</p>
                <div className="logos">
                    <a className="insta" href="https://www.instagram.com/jeidimel"><img src={insta} alt="insta" /></a>
                    <a className="spoty"
                        href="https://open.spotify.com/artist/06Y53jv5EGijaGt7okZjWz?si=-di2as4UTbSWPw43NlK8FQ"><img
                            src={spoty} alt="spoty" /></a>
                    <a className="youtube" href="https://www.youtube.com/channel/UCTGi9hOdZMJUesc0s86lkOw"><img
                        src={youtube} alt="youtube" /></a>
                </div>
                <span>+34 630 18 52 35</span>
                <span>jeidi.mel@gmail.com</span>

            </footer>
     

    )
}

export default Footer
