import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser'; 

export const HomePage = () => {

	const [offers, setOffers] = useState([]);
	const [content, setContent] = useState();
	const [services, setServices] = useState([]);


	   useEffect(() => {
	      fetch('https://super7tech.com/web_developer_exam_sr/api/homePage')
	         .then((response) => response.json())
	         .then((data) => {
	         	//console.log(data.offers);
	            setOffers(data.offers);
	            setContent(data.content);
	            setServices(data.services);
	         })
	         .catch((err) => {
	            console.log(err.message);
	         });
	   }, []);

	   const offers_mobile = offers.map((image, i) => {
           return (
           <a href="#">
           <img key={"image_offer"+i} src={image.img} />
           </a>
           )
        });

        const offers_images = offers.map((image, i) => {
           return (
           <div key={"div_offer"+i} className="text-center col-3">
           <img key={"image_offer"+i} src={image.img} />
           </div>
           )
        });

        const services_data = services.map((image, i) => {
           return (
           
           	<div key={"div_service"+i} className="text-center col-4 first">
                <img key={"image_service"+i} src={image.img} alt="" />
                <h2 key={"image_h2"+i}>{image.title}</h2>
                <p key={"image_p"+i}>
                    {image.description}
                </p>
            </div>
            
           )
        });

	return (
		<>
			<div id="banner">
		        <img src="https://kongsiole777.com/images/affiliate_banner.webp" alt="Banner" />
		    </div>
		    <div id="mobile-slider">
		        { offers_mobile }}
		    </div>
		    <div id="cta">
		        <div className="container">
		           { offers_images }
		        </div>
		    </div>

		    <div id="services">
		        <div className="container">
		            <div className="col-1">
		                
		                    {ReactHtmlParser(content)}
		                
		            </div>
		            <div className="col-1">

		            </div>
		            {services_data}
		        </div>
		    </div>

		</>
	);
}