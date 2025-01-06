import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import menuImg from '../../../assets/home/featured.jpg';
import './featured.css';

const Featureds = () => {
    return (
        <>
        <div className="featured-img-bg bg-fixed py-8 text-white my-24">
        <SectionTitle
        heading='FEATURED ITEM'
        subHeading='Check it out'
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-8   px-36 py-20">
         <div>
            <img src={menuImg} alt="" />
         </div>
         <div className="space-y-4">
            <h5 className="text-lg">March 20, 2023</h5>
            <h4 className="text-xl font-semibold uppercase">WHERE CAN I GET SOME?</h4>
            <p>At Bistro Boss, we believe in crafting unforgettable dining experiences. From handpicked ingredients to expertly curated recipes, every dish tells a story of passion and flavor. Indulge in our signature creations, where tradition meets innovation, and every bite is a celebration of culinary excellence."</p>

            <button className=" btn btn-outline border-0 border-b-4 border-b-white text-lg text-white font-bold uppercase">Read More</button>
         </div>
        </div>
        </div>
            
        </>
    );
};

export default Featureds;