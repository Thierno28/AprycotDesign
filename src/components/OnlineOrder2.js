import OnlineOrderItems2 from "./OnlineOrderItems2"
const OnlineOrder2 = () => {
  return (
    <div className="container flex flex-col space-y-2 p-6 rounded-lg border text-sm bg-white">
        <h1>Online Order</h1>
        <OnlineOrderItems2 title="Favourite order" />
        <OnlineOrderItems2 title="Order history"/>
        <OnlineOrderItems2 title="My address"/>
    </div>
  )
}
export default OnlineOrder2