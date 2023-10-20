import React, { useRef } from "react";
import './contact.css';
import Castley from '../../Assets/CASTLEE.jpeg';
import Bfree from '../../Assets/BFree-logo-correct-1.webp';
import Facebook from '../../Assets/facebook.jpg';
import Semicolon from '../../Assets/semicolon.png';
import FacebookIcon from '../../Assets/icons8-facebook-circled-94.png';
import InstagramIcon from '../../Assets/icons8-instagram-94.png';
import GmailIcon from '../../Assets/icons8-gmail-logo-94.png';
import YoutubeIcon from '../../Assets/icons8-youtube-logo-94.png'
import emailjs, { send } from '@emailjs/browser';


const Contact = () => {
    const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_654u9pq', 'template_adp30dq', form.current, 'VoqLc3lUI_SO1px0S67Oi')
            .then((result) => {
               console.log(result.text);
               
               alert("Email sent !");
           },  (error) => {
               console.log(error.text);
             });
      }; 
    return (
        <section className="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    some of the notable companies i have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Castley} alt="Client" className="clientImg1" />
                    <img src={Bfree} alt="Client" className="clientImg2" />
                    <img src={Facebook} alt="Client" className="clientImg3" />
                    <img src={Semicolon} alt="Client" className="clientImg4" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle1">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className="msg" name="message" rows="s" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="facebook" className="link" />
                        <img src={InstagramIcon} alt="instagram" className="link" />
                        <img src={GmailIcon} alt="gmail" className="link" />
                        <img src={YoutubeIcon} alt="youtube" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;