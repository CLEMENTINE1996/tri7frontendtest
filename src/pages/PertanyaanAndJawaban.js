import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import { OpenTab } from '../assets/js/OpenTab.js';

export const PertanyaanAndJawaban = () => {
	const [tabs, setTabs] = useState([]);

	useEffect(() => {
	      fetch('https://super7tech.com/web_developer_exam_sr/api/pertanyaanAndJawaban')
	         .then((response) => response.json())
	         .then((data) => {
	            setTabs(data);
	         })
	         .catch((err) => {
	            console.log(err.message);
	         });


	        const timer = setInterval(() => {
		      var firstbtn = document.getElementById("defaultOpen1");
		      if (typeof(firstbtn) != 'undefined' && firstbtn != null)
		      {
		        document.getElementById("defaultOpen1").click();
		        clearInterval(timer);
		      }
		    }, 1000);
		    return () => clearInterval(timer);
	   }, []);


	const tabheader = tabs.map((data, i) => {
		return (
			<button id={"defaultOpen" + data.id} className="tablinks" onClick={ event => OpenTab(event, data.id )} >{data.title}</button>
		);
	});

	const tabcontent = tabs.map((data, i) => {
		return (
			<div id={"tab-" + data.id} className="tabcontent">
				{ReactHtmlParser(data.content)}
        	</div>
		);
	});

	return (
		<>
			<div id="tab-info">
        		<div className="container">
        			<div className="tab">
        				{tabheader}
        			</div>
        			{tabcontent}
        		</div>
        	</div>
		</>
	);
}