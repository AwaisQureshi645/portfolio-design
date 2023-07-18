import React,{useState,useRef} from 'react'
import './contactStyle.css'
import emailjs from 'emailjs-com';
import { BiRightArrowAlt } from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'
import {SiMinutemailer} from 'react-icons/si'
import {BiMessageRoundedDetail} from 'react-icons/bi'
export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      'service_nlfh21t',
      'template_y0hk6ug',
      form.current, 
      'FjbcBqAs2FYs2-pat'
    )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Email failed to send.', error);
      });
  };
  // handle whatapp application
  const handleWhatsAppClick = () => {
    const phoneNumber = '03145807825'; // Replace with your WhatsApp phone number
    const message = 'Hello, I want to chat with you!'; // Optional pre-filled message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // handle click on the messanger
  const openMessengerChat = () => {
    const pageID = 'awais.qureshi.14'; // Replace with your Facebook Page ID

    const url = `https://www.messenger.com/t/${pageID}`;
    window.open(url,'_blank');
  };

  return (
    <div>

      <div className="contact_container" id='ContactPage'>
        <h2>Contact me </h2>
        <p style={{ fontSize: '1.5rem' }}>Get in touch </p>
      </div>
      <div className="contactBoxContainer">
        <div className="box1">
          <div className="container_content">

            <p style={{ textAlign: 'center' }}> <BiMessageRoundedDetail />  Talk to me </p>
            <h4>E-mail</h4>
            <p>awaisqureshi645@gmail.com </p>
            <h4>Whatapp</h4>

            <p>+92 3145807825  </p>
            <div className="arrow_icon" onClick={handleWhatsAppClick} style={{ display: 'flex' }}>

              <p >Write me</p>
              <BiRightArrowAlt />
            </div>
            <h4>Messanger</h4>
            <p>AwaisQureshi</p>
            <div className="arrow_icon" style={{ display: 'flex' }} onClick={openMessengerChat} >
              <p >write me </p>
              <BiRightArrowAlt />
            </div>

          </div>
        </div>
        <div
          className="boxForm">
          <div className="form_heading" style={{display:'flex'}}>
            <SiMinutemailer style={{marginRight:'0.5rem'}}/>
            <p>Write me your Project </p>
          </div>
          <form className="form_container_data" onSubmit={handleSubmit} ref={form}>
            <label for="inputField">User Name :</label>
            <input type="text" id="inputField" required  value={formData.name} onChange={handleInputChange} name="name" placeholder='Write your name ' />
            <label for="inputField1">E-Mail:</label>
            <input type="email" id="inputField1" required value={formData.email} onChange={handleInputChange} name="email" placeholder='Write your E-mail Address' />
            <label for="inputField2">Message :</label>
            <textarea id="inputField2" name="message" required value={formData.message} onChange={handleInputChange} placeholder='Write your Message ' rows="4" cols="50"></textarea>
            <div style={{ display: 'flex', cursor: 'pointer', marginTop: '0.5rem', justifyContent: 'center' }}>
              <input type="submit" id='submit' style={{cursor:'pointer'}} />
              <FiArrowUpRight className="contentboxx" />
            </div>
          </form>
        </div>
      </div>
    </div>

    // </div >
  )
}









