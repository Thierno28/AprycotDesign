import MenuNews from "./MenuNews";
import Pizza from "../assets/pizza.svg";
import Burger from "../assets/Burger.svg";
import Pasta from "../assets/Pasta.svg";
const News = () => {
  return (
    // Menu
    
    <div className="container flex flex-col space-y-2 p-6 rounded-lg border bg-white ">
      <h1>News</h1>
      <MenuNews
        img={Pizza}
        title="Pizza"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />
      <MenuNews
        img={Burger}
        title="Burger"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit.."
      />
      <MenuNews
        img={Pasta}
        title="Pasta"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />
      
      
    </div>
  );
};
export default News;
