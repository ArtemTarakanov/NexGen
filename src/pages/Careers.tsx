import Header from "../components/Header.tsx";
import Hero from "./Careers/Hero.tsx"
import Join from "./Careers/Join.tsx"
import Apply from "./Careers/Apply.tsx";
import Testimonials from "./Home/Testimonials.tsx";
import FAQ from "./Home/FAQ.tsx";
import Transform from "./Home/Transform.tsx";
import String from "./Home/String.tsx";
import Footer from "../components/Footer.tsx";

export default function Careers() {
    return (
        <div>

            <Header />
            <Hero/>
            <Join/>
            <Apply/>
            <Testimonials/>
            <FAQ/>
            <Transform/>
            <String/>
            <Footer/>

        </div>
    );
}