import Circles from "../../ui/circles/Circles";
import AboutMe from "@/app/components/screens/home/about-me/AboutMe";
import Skills from "@/app/components/screens/home/skills/Skills";
import Examples from "@/app/components/screens/home/examples/Examples";

const Home = () => {
    return (
        <div className='min-h-screen relative overflow-hidden'>
            <div className='mx-auto relative z-10 max-w-[1100px] px-3'>
                <AboutMe/>
                <Skills />
                <Examples />
            </div>
            <Circles/>
        </div>
    );
};

export default Home;