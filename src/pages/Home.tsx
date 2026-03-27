import Header from "../components/Header.tsx";
import Hero from "./Home/Hero.tsx";
import Reasons from "./Home/Reasons.tsx";
import Services from "./Home/Services.tsx";
export default function Home() {
    return (
        <div>

            <Header />
            <Hero/>
            <Reasons/>
            <Services/>
        </div>
    );
}