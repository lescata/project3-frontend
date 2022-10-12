import "../Sass/contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="contactLogo">
        <h1>Contact</h1>
        <img
          src="https://res.cloudinary.com/dq7egs1s7/image/upload/v1665600893/unknown_7_ktgwxo.png"
          alt="imgTelephone"
        />
        <img
          src="https://res.cloudinary.com/dq7egs1s7/image/upload/v1665600893/unknown_5_lidrkj.png"
          alt="imgMail"
        />
        <img
          src="https://res.cloudinary.com/dq7egs1s7/image/upload/v1665600893/unknown_6_vhujbd.png"
          alt="imgGps"
        />
        <div className="socialLogo">
          <img
            className="left"
            src="https://res.cloudinary.com/dq7egs1s7/image/upload/v1665600997/Fichier_1_mt9fon.png"
            alt="imgFacebook"
          />
          <img
            className="mid"
            src="https://res.cloudinary.com/dq7egs1s7/image/upload/v1665600893/unknown_4_bowf9u.png"
            alt="imgTweeter"
          />
          <img
            className="right"
            src="https://res.cloudinary.com/dq7egs1s7/image/upload/v1665600893/unknown_gj6px5.png"
            alt="ImgInstagram"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
