import AboutUs from "../aboutUs/AboutUs";
import Academics from "../principleMessage/PrincipleMessage";
import Hero from "../hero/Hero";
import Teachers from "../teachers/Teachers";

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

            {/* Teachers */}
            <Teachers></Teachers>
            {/* Teachers end */}
        </div>
    );
};

export default Home;