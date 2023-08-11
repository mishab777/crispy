import React from 'react'
function Footer() {
    return ( 
        <div className='footer'>
            <img src="https://wallpapers.com/images/hd/4k-kitchen-background-3840-x-2160-rlx6vlourom52xe0.jpg" alt="" />
            <div className='footer-1'>
                <div className='crispy'>
                    <h1>Crispy Kitchen</h1>

                </div>
                <div className="footer-2">
                    <div className="location">
                        <h3>Location</h3>
                        <span>121 Einstein Loop N, Bronx, NY 10475, United States</span>
                        <a href="">Directions</a>

                    </div>
                    <div className='opening'>
                        <h3>Opening Hours</h3>
                        <span>Monday - Friday</span>
                        <span>10:00 AM - 08:00 PM</span>
                        <span>Tel: 010-02-0340</span>

                    </div>
                    <div className='social'>
                        <h3>Social</h3>
                        <span>Copyright © 2022 Crispy Kitchen Co., Ltd.Design: Tooplate</span>

                    </div>

                </div>

            </div>

        </div>
     );
}

export default Footer;