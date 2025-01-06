import Banner from "../HomePage/Banner/Banner";
import CategorySwipper from "../HomePage/CategorySwipper/CategorySwipper";
import PopularMenu from "../HomePage/PopularMenu/PopularMenu";
import Featureds from "../HomePage/Featured/Featureds";
import Testimonials from "../HomePage/Testimonials/Testimonials";


const Home = () => {
    return (
        <>
          <Banner></Banner>  
          <CategorySwipper></CategorySwipper>
          <PopularMenu></PopularMenu>
          <Featureds></Featureds>
          <Testimonials></Testimonials>
        </>
    );
};

export default Home;