
import "./Footer.css";


export default function Footer(){




return <div>




<>
  {/* Footer */}
  <footer
  style={{
    backgroundImage: "url('https://www.dawateislamiusa.com/wp-content/uploads/2020/07/Footer_background.png')",
    backgroundSize: "contain", // Adjust this to make the image smaller
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#629cb2",
  }}
  className="text-center text-lg-start bg-body-tertiary text-muted mt-5 py-3"
>
  <section className="d-flex justify-content-center justify-content-lg-between p-4">
    {/* Social media section (if any) */}
  </section>

  <section>
    <div className="container text-center text-md-start">
      <div className="row mt-3">
        {/* Company Info */}
        <div className="col-12 col-md-6 col-lg-4 mb-4 border-bottom-0 mb-5  ">
          <div className="d-md-flex justify-content-center">
            <img
              className="img-fluid"
              src="https://www.dawateislamiusa.com/wp-content/uploads/2020/07/Footer_-logo.png"
              alt="Dawat e Islami USA Logo"
            />
          </div>
          <h5 className="mt-3 text-center text-white">Dawat e Islami USA</h5>
          <div className="d-flex align-items-center justify-content-center">
            <i className="fas fa-envelope pt-1 me-3 text-white"></i>
            <p className="text-white mb-0">Email: bilalqari453@gmail.com</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <i className="fas fa-phone pt-1 me-3 text-white"></i>
            <p className="text-white mb-0">Phone: +923037476832</p>
          </div>
        </div>

        {/* Mobile Apps */}
        <div className="col-6 col-md-3 col-lg-2 mb-4" style={{ borderBottom: "none" }}>
          <h5 className="text-uppercase fw-bold text-center mt-5 pt-3 text-white">MOBILE APPS</h5>
          <ul className="list-unstyled text-center">
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Al Quran</a>
            </li>
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Prayer Times</a>
            </li>
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Madani Inamaat</a>
            </li>
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Roohani Ilaj</a>
            </li>
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Hajj and Umrah</a>
            </li>
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Hayat-e-Raza</a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="col-6 col-md-3 col-lg-3 mb-4 border-bottom-0 mb-4">
          <h6 className="text-uppercase fw-bold text-center mt-5 pt-3 text-white">OUR SERVICES</h6>
          <ul className="list-unstyled text-center">
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Media Library</a>
            </li>
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Books Library</a>
            </li>
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Roohani Ilaj</a>
            </li>
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Prayer Times</a>
            </li>
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Image Gallery</a>
            </li>
            <li style={{ color: "white" }}>
              <a href="#!" className="text-reset text-white">Downloads</a>
            </li>
          </ul>
        </div>

        {/* Our Websites */}
        <div className="col-12 col-lg-3 mb-md-0 mb-4 border-bottom-0">
          <h6 className="text-uppercase fw-bold text-center mt-5 pt-3 text-white">OUR WEBSITES</h6>
          <ul className="list-unstyled text-center">
            <li className="text-white">About Muhammad</li>
            <li className="text-white">About Ghaus-e-Azam</li>
            <li className="text-white">Faizan-e-Ala Hazrat</li>
            <li className="text-white">Ameer-e-Ahle Sunnat</li>
          </ul>
          <div className="d-flex justify-content-center gap-3">
            <i className="fab fa-facebook text-white"></i>
            <i className="fab fa-twitter text-white"></i>
            <i className="fab fa-instagram text-white"></i>
            <i className="fab fa-youtube text-white"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</footer>

<div>
    
<div
  className="text-center p-1 align-middle"
  style={{
    backgroundColor: "black",
    color: "white",
    height: "auto",              // Use auto height to fit content
    minHeight: "30px",           // Minimum height for the footer
    position: "relative",        // Keeps it in the flow of the document
    width: "100%",               // Full-width to adapt to screen size
    boxSizing: "border-box",     // Includes padding and borders in the element's total width and height
    fontSize: "0.875rem",        // Adjust font size for better readability on smaller screens
    padding: "0.5rem",           // Padding to ensure content doesn't touch edges
    overflow: "hidden"           // Prevents any content from overflowing
  }}
>
  Dawateislami USA ©2022 Site By IT Department Madrasa Husain ibne Ali razi Allah thala Anhu Centers
</div>

</div>

  {/* Footer */}
</>



</div>



}

