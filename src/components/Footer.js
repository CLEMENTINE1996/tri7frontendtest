import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser'; 

export const Footer = () => {

	const [contacts, setContacts] = useState([]);
	const [download_img, setDownloadIMG] = useState([]);
	const [footers, setFooters] = useState([]);

	useEffect(() => {
	      fetch('https://super7tech.com/web_developer_exam_sr/api/global')
	         .then((response) => response.json())
	         .then((data) => {
	            setContacts(data.contact);
	            setDownloadIMG(data.download_app);
	            setFooters(data.footer);
	         })
	         .catch((err) => {
	            console.log(err.message);
	         });
	   }, []);

	const contact_list = contacts.map((image, i) => {
		           return (
		           	<div key={"contact_div"+i} className="col-4">
		                <img key={"image_contact"+i} src={image.img} alt="" />
		                <span>
		                {image.label}: <a hrefs="#"><span className="__cf_email__" ></span>{image.value}</a>
		            </span>
		            </div>
		           )
		      });

	const footer_list = footers.map((image, i) => {
		           return (
		           	<div key={"footer_div"+i} className="col-4">
		                <a href={image.link} target="_blank">
		                    <img src={image.img} />
		                </a>
		            </div>
		           )
		      });

	return (
		<>
		<div id="sticker-app">
	        <div className="container hidden-m">
	            <div className="col-12">
	                <a href="https://bit.ly/stikerdownload" target="_blank">
	                    <img src={download_img.img} alt="" />
	                </a>
	            </div>
	        </div>

	        <div className="visible-m">
	            <div className="col-12">
	                <a href="https://bit.ly/stikerdownload" target="_blank">
	                    <img src="https://kongsiole777.com/images/Sticker WhatsApp Gratis - Kongsi OLE777(600x100).gif" alt="Sticker WhatsApp Gratis - Kongsi OLE777" />
	                </a>
	            </div>
	        </div>
	    </div>


	    <div id="contact">
	    	<div className="container">
	            {contact_list}
	        </div>
	    </div>

	    <div id="footer">
	        <div className="container">
	            <div className="col-4 logo-mobile">
	                <a href="https://bit.ly/3GAX5bU" target="_blank">
	                    <img width="auto" src="https://kongsiole777.com/images/ole777-white2.png" alt="OLE 777" />'
	                </a>
	            </div>
	            {footer_list}
	        </div>
	    </div>
	    <div id="floating_watsapp"></div>
		</>
	);
}