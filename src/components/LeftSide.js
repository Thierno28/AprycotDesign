import News from "./News";
import OnlineOrder1 from "./OnlineOrder1";
import OnlineOrder2 from "./OnlineOrder2";
const LeftSide = () => {
  return (
    <div className="flex flex-col  w-3/12 space-y-4 ">
      <News />
      <OnlineOrder1 />
      <OnlineOrder2 />
    </div>
  );
};
export default LeftSide;
