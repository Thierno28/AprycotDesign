import FirstImage from "../assets/FirstImage.svg"
import Tweet from "./Tweet"
const MiddleSide = () => {
  return (
    <div className="container flex flex-col w-1/2 space-y-4">
        <Tweet name="Wade Warren" subname="colleages" img={FirstImage}/>
        <Tweet name="Wade Warren" subname="colleages" img={FirstImage}/>
        
    </div>
  )
}
export default MiddleSide