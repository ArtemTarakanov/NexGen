import Header from "../components/Header.tsx";
import Hero from "./Home/Hero.tsx";
import Reasons from "./Home/Reasons.tsx";
import Services from "./Home/Services.tsx";
import Work from "./Home/Work.tsx";
import Testimonials from "./Home/Testimonials.tsx";
import FAQ from "./Home/FAQ.tsx";
import Transform from "./Home/Transform.tsx";
import String from "./Home/String.tsx";
import Footer from "../components/Footer.tsx"
export default function Home() {
    return (
        <div>

            <Header />
            <Hero/>
            <Reasons/>
            <Services/>
            <Work/>
            <Testimonials/>
            <FAQ/>
            <Transform/>
            <String/>
            <Footer/>
        </div>
    );
}