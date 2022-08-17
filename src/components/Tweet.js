import TopProfil from "../assets/TopProfil.svg";
import Polygone from "../assets/Polygon.svg";
import OptionTweet from "./OptionTweet";
import Like from "../assets/Like.svg";
import Comment from "../assets/Comment.svg";
import Partage from "../assets/Partage.svg";

const Tweet = (props) => {
  return (
    <div className=" flex flex-col p-5 bg-white rounded-lg space-y-3 ">
      {/* top */}
      <div className="flex justify-between px-4">
        {/* left */}
        <div className="flex space-x-3">
          <img src={TopProfil} alt="" className="rounded-full" />
          <div className="flex flex-col space-y-1 justify-center">
            <span className="text-md">{props.name}</span>
            <span className="text-xs">{props.subname}</span>
          </div>
        </div>
        {/* right */}
        <div className="flex justify-between items-center space-x-3">
          <span className="text-sm">29 mins</span>
          <img src={Polygone} alt="" />
        </div>
        {/* Image */}
      </div>
      {/* middle */}
      <div className="flex flex-col space-y-2">
        {props.img && <img src={props.img} alt="" className="w-full" />}
        {/* Options */}
        <div className="flex justify-between">
          {/* Left */}
          <div className="flex items-center space-x-3">
            <OptionTweet img={Like} title="Like" />
            <OptionTweet img={Comment} title="140" />
          </div>
          <OptionTweet img={Partage} title="99 Share" />
        </div>
        <div className=" text-sm font-extralight text-neutral-600 py-5 border-y border-orange-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          molestias laudantium nisi quod odit nemo qui tenetur, neque, dolorum
          deserunt ad eveniet! Minus reiciendis molestias quas delectus vitae
          iusto totam provident, recusandae ipsum iste deleniti nam vel dolore!
          Quis dolore nostrum autem debitis ipsum molestiae magni quae
          doloremque quam officia!
        </div>
      </div>
    </div>
  );
};
export default Tweet;
