import Header from "../components/Header.tsx";
import Hero from "./Projects/Hero.tsx"
import Features from "./Projects/Features.tsx";
import Showcase from "./Projects/Showcase.tsx";
import Testimonials from "./Home/Testimonials.tsx";
import FAQ from "./Home/FAQ.tsx";
import Transform from "./Home/Transform.tsx";
import String from "./Home/String.tsx";
import Footer from "../components/Footer.tsx";
export default function Projects() {
    return (
        <div>

            <Header />
            <Hero/>
            <Features/>
            <Showcase/>
            <Testimonials/>
            <FAQ/>
            <Transform/>
            <String/>
            <Footer/>

        </div>
    );
}