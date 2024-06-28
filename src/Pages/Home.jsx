import CategorySection from "../Components/CategorySection";
import CraftContainer from "../Components/CraftContainer";
import CustomerInteraction from "../Components/CustomerInteraction";
import HomeBanner from "../Components/HomeBanner";



const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CraftContainer></CraftContainer>
            <CategorySection></CategorySection>
            <CustomerInteraction></CustomerInteraction>
        </div>
    );
};

export default Home;