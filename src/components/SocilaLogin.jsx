import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocilaLogin = () => {
    return (
        <div className="">
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className=" *:w-full space-y-2">
                <button className="btn"><FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn"><FaGithub></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default SocilaLogin;