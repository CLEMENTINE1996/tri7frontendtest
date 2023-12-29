
export const MobileComponents = () => {

	function dropToggle() {
	    var x = document.getElementById("mobile-dropdown");
	    var y = document.getElementById("menu-icon");
	    if (x.style.display === "block") {
	        x.style.display = "none";
	        y.src = "images/icon-hamburger.svg";
	    } else {
	        x.style.display = "block";
	        y.src = "images/icon-close.svg";
	    }
	}

	return (
		<>
	    <div id="mobile-header">
	        <div className="container">
	            <div className="mobile-branding">
	                <a href="/">
	                    <img src="https://kongsiole777.com/images/logo-ole-affiliate.svg" alt="Kongsi OLE777 Affiliate Bola" />
	                </a>
	            </div>
	            <div className="mobile-menu">
	                <button className="hamburger" onClick={ event => dropToggle()}>
	                <img src="https://kongsiole777.com/images/icon-hamburger.svg" id="menu-icon" alt="Menu" />
	            </button>
	            </div>
	        </div>
	    </div>
	    <div id="mobile-dropdown">
	        <div className="container">
	            <ul>
	                <li><a href="/">Tentang OLE777</a></li>
	                <li><a href="/Komisi">Komisi</a></li>
	                <li><a href="/Peraturan">Peraturan</a></li>
	                <li><a href="/PertanyaanAndJawaban">Pertanyaan & Jawaban</a></li>
	                <li><a href="contact-info.html">Kontak</a></li>
	                <li><a className="main-label" href="https://bit.ly/3GAX5bU" target="_blank">OLE777 Official</a></li>
	                <li><a href="https://bit.ly/48h8QA5" className="login-btn" target="_blank">Login</a></li>
	                <li><a className="register-btn" href="https://aff.oleafiliasi.com/affiliate/register/92337024" target="_blank">Daftar sekarang</a></li>
	            </ul>
	        </div>
	    </div>


	    

		</>
	);
}