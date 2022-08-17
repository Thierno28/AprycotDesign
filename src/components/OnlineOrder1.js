import OnlineOrderItems from "./OnlineOrderItems1"
const OnlineOrder1 = () => {
  return (
    <div className="container flex flex-col space-y-2 p-6 rounded-lg border text-sm bg-[#FFFFFF]">
        <h1>Online Order</h1>
        <OnlineOrderItems title="Dineline" num="1"/>
        <OnlineOrderItems title="Reviews" num="1"/>
        <OnlineOrderItems title="Followers" num="1"/>
        <OnlineOrderItems title="Bookmarks" num="1"/>
        <OnlineOrderItems title="Been there" num="1"/>
        <OnlineOrderItems title="Achievements" num="1"/>
        <OnlineOrderItems title="Blogs" num="1"/>
    </div>
  )
}
export default OnlineOrder1