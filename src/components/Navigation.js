import { OpenTab } from '../assets/css/PopUp.css';

export const Navigation = () => {

	function setActiveTab(e) {
		var elements = document.getElementsByClassName("mainmenuitem");
	 	elements.classList.remove("selected")
      //alert(e.target);
  }

  function openForm() {
        document.getElementById("popupForm").style.display = "block";
      }
      function closeForm() {
        document.getElementById("popupForm").style.display = "none";
      }

     function submitMessage(){
     	const data = new FormData();

     	const fullname = document.getElementById("fullname");
     	const email = document.getElementById("email");
     	const subject = document.getElementById("subject");
     	const message = document.getElementById("message");

		data.append("fullname", fullname.value);
		data.append("email", email.value);
		data.append("subject", subject.value);
		data.append("message", message.value);


		fetch("https://super7tech.com/web_developer_exam_sr/api/sendMessage", {
		    method: "POST",
		    body: data
		})
		 .then((response) => response.json())
	         .then((data) => {
	         	if(data.status == 422){
	         		alert(data.errors.message);
	         	}
	         	else{
	         		alert(data.message);
		            document.getElementById("contactclosebtn").click();

		            fullname.value = "";
		            email.value = "";
		            subject.value = "";
		            message.value = "";
	         	}
	            
	         })
	         .catch((err) => {
	            console.log(err.message);
	         });
     }

	return (
		<>
		<div id="navigation">
	        <div className="container">
	            <ul>
	                <li><a onClick={event => setActiveTab(event)} href="/" className="mainmenuitem">Tentang OLE777</a></li>
	                <li><a onClick={event => setActiveTab(event)} className="mainmenuitem" href="/Komisi">Komisi</a></li>
	                <li><a className="mainmenuitem" href="/Peraturan">Peraturan</a></li>
	                <li><a className="mainmenuitem" href="/PertanyaanAndJawaban">Pertanyaan & Jawaban</a></li>
	                <li><a onClick={event => openForm()} className="mainmenuitem" className="main-label" >OLE777 Official</a></li>
	            </ul>
	        </div>
	    </div>


	    <div className="loginPopup">
	      <div className="formPopup" id="popupForm">
	        <form id="formContainer" className="formContainer">
	          <h2>Contact Us</h2>
	          <br />
	          <label for="fullname">
	            <strong>Full Name</strong>
	          </label>
	          <input type="text" id="fullname" placeholder="Your Fullname" name="fullname" required />

	          <label for="email">
	            <strong>Email</strong>
	          </label>
	          <input type="text" id="email" placeholder="Your Email" name="email" required />

	          <label for="subject">
	            <strong>Subject</strong>
	          </label>
	          <input type="text" id="subject" placeholder="Your Subject" name="subject" required />

	          <label for="message">
	            <strong>Subject</strong>
	          </label>
	          <input type="text" id="message" placeholder="Your Mesage" name="message" required />

	          <button type="button" onClick={event => submitMessage()} id="savebtn" className="btn">Submit</button>
	          <button type="button" id="contactclosebtn" className="btn cancel" onClick={event => closeForm()}>Close</button>
	        </form>
	      </div>
	    </div>
		</>
	);
}