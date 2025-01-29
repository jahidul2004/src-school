import AboutUs from "../aboutUs/AboutUs";
import Academics from "../principleMessage/PrincipleMessage";
import Hero from "../hero/Hero";
import Teachers from "../teachers/Teachers";
import Events from "../events/Events";
import Gallery from "../gallery/Gallery";
import GuardiansComment from "../guardiansComment/GuardiansComment";

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

            {/* Events */}
            <Events></Events>
            {/* Events end */}

            {/* Gallery */}
            <Gallery></Gallery>
            {/* Gallery end */}

            {/* Guardians comment */}
            <GuardiansComment></GuardiansComment>
            {/* Guardians comment end */}
        </div>
    );
};

export default Home;