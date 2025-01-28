import AboutUs from "../aboutUs/AboutUs";
import Hero from "../hero/Hero";

const Home = () => {
    return (
        <div>
            {/* Hero */}
            <Hero></Hero>
            {/* Hero end */}

            {/* About us */}
            <AboutUs></AboutUs>
            {/* About us end */}
        </div>
    );
};

export default Home;