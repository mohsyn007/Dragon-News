import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3 *:bg-base-100">Find Us On</h2>
      <div className="join flex join-vertical">
        <button className="btn join-item justify-start"><FaFacebook></FaFacebook> FaceBook</button>
       
        <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
       
        <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
       
      </div>
    </div>
  );
};

export default FindUs;
