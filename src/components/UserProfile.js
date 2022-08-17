import OptionProfies from "./OptionProfies";
import Userprofilebanner from "../assets/Userprofilebannerimage.png";
import DescriptionLogo from "../assets/DescriptionLogo.svg";
const UserProfile = () => {
  return (
    <div className="container  flex flex-col ">
      <img src={Userprofilebanner} alt="" className="rounded-3xl" />
      {/* Profil description */}
      <div className="container flex justify-between items-center pt-6 pb-2 pl-6 -mt-28 rounded-b-3xl backdrop-blur-sm backdrop-brightness-110 bg-white/30 ">
        <div className="flex  space-x-3 items-baseline ">
          <img
            src={DescriptionLogo}
            alt=""
            className="self-start w-24 -mt-16"
          />
          <div className="flex flex-col">
            <span className=" text-orange-500 font-serif font-bold">
              Thierno DIOP
            </span>
            <span className="">
              <img src="" alt="" /> Dakar,Senegal
            </span>
          </div>
          <div className="flex flex-col space-y-2 ">
            <span> Software Engineer</span>
            <div className="flex flex-col">
              <span className=""> thiernodiop@esp.sn </span>
              <span> Email </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-1 ">
          <OptionProfies />
          <OptionProfies />
          <OptionProfies />
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
