import Header from "../components/Header.tsx";
import Hero from "./Home/Hero.tsx";
import Reasons from "./Home/Reasons.tsx";
import Services from "./Home/Services.tsx";
import Work from "./Home/Work.tsx";
export default function Home() {
    return (
        <div>

            <Header />
            <Hero/>
            <Reasons/>
            <Services/>
            <Work/>
        </div>
    );
}