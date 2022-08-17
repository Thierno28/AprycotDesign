import TopProfil from "../assets/TopProfil.svg";
import OptionTweet from "./OptionTweet";
import Like from "../assets/Like.svg"
const Comments = (props) => {
  return (
    <div className="flex justify-between px-4">
      {/* left */}
      <div className="flex space-x-3">
        <img src={TopProfil} alt="" className="rounded-full" />
        <div className="flex flex-col  justify-center">
          <span className="text-md">{props.name}</span>
          <span className="text-xs">{props.comment}</span>
          <div>
            <OptionTweet img={Like} title="Like"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
