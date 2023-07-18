import React from 'react'
import whatapp from '../../assets/Images/whatapp.png'
import { WhatsAppWidget } from 'react-whatsapp-widget';
import './HomeStyle.css'
import arrow from '../../assets/Images/upword_arrow.png'
export default function Whatapp() {
    const handleWhatsAppClick = () => {
        const phoneNumber = '03145807825'; // Replace with your WhatsApp phone number
        const message = 'Hello, I want to chat with you!'; // Optional pre-filled message
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
      };
  return (
    <>
    
    <img src={whatapp} alt="" className='whatapp_img'   onClick={   handleWhatsAppClick }/>

    </>
  )
}
