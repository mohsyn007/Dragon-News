import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-2 py-1">Latest</p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis, deserunt voluptatum reprehenderit nobis pariatur inventore veritatis voluptates .</p> */}
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to={'/news'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis, enim quos iure vitae pariatur magnam error iusto totam repudiandae similique 
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;