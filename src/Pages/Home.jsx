
import CategorySection from "../Components/CategorySection";
import CraftContainer from "../Components/CraftContainer";
import CustomOrder from "../Components/CustomOrder";
import Faq from "../Components/Faq";
import HomeBanner from "../Components/HomeBanner";

// 



const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CraftContainer></CraftContainer>
            <CategorySection></CategorySection>
            <CustomOrder></CustomOrder>
            <Faq></Faq>
        </div>
    );
};

export default Home;