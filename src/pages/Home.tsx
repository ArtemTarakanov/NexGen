import Header from "../components/Header.tsx";
import Hero from "./Home/Hero.tsx";
import Reasons from "./Home/Reasons.tsx";
export default function Home() {
    return (
        <div>

            <Header />
            <Hero/>
            <Reasons/>
        </div>
    );
}