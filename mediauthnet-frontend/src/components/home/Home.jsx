// import Companies from "./Companies";
// import Guide from "./Guide";
// import Hero from "./Hero";
// import GetStarted from "./GetStarted";

// const Home = () => {
//     return (
//         <>
//             <Hero />
//             <Companies />
//             <Guide />
//             <GetStarted />
//         </>
//     );
// }

// export default Home;




import Companies from "./Companies";
import Guide from "./Guide";
import Hero from "./Hero";
import GetStarted from "./GetStarted";
import ServicesSection from "./ServicesSection";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Guide />   
      <GetStarted />
      <ServicesSection/>
      <Contact/>
    </>
  );
};

export default Home;
