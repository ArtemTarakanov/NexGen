import Hero from "./Services/Hero.tsx";
import Header from "../components/Header.tsx";
import Ourservices from "./Services/Ourservices.tsx";
import Success_sories from "./Services/Success_sories.tsx";
import Testimonials from "./Home/Testimonials.tsx";
import Questions from "./Services/Questions.tsx";
import String from "./Services/String.tsx";
import Footer from "../components/Footer.tsx";
export default function Services() {
    return (
        <div>

            <Header/>
            <Hero />
            <Ourservices />
            <Success_sories />
            <Testimonials/>
            <Questions/>
            <String />
            <Footer/>


        </div>
    );
}