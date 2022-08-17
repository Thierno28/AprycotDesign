import UserProfile from "./UserProfile"
import Blog from "./Blog"
const Hero = () => {
  return (
    <div className="container flex flex-col  p-6 space-y-4 bg-[#FCEDE3]">
        <UserProfile/>
        <Blog/>
    </div>
  )
}
export default Hero