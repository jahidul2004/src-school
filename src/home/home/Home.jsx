import AboutUs from "../aboutUs/AboutUs";
import Academics from "../principleMessage/PrincipleMessage";
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

            {/* Academics */}
            <Academics></Academics>
            {/* Academics end */}
        </div>
    );
};

export default Home;