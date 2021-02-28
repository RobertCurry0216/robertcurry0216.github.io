// componants
import Splash from "../componants/Splash";
import About from "../componants/About";
import Portfolio from "../componants/Portfolio";
import Experience from "../componants/Experience";
import Contact from "../componants/Contact";
import SideNav from "../componants/SideNav";

function Home() {
  return (
    <div>
      <SideNav />
      <Splash />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default Home;
