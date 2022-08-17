const OnlineOrderItems1 = (props) => {
  return (
    <div className="flex justify-between p-4 pl-0 border-t items-center border-t-orange-100">
        <span className=" font-light">{props.title}</span>
        <span className="p-2 px-5 rounded-full bg-orange-500 text-white">{props.num}</span>
    </div>
  )
}
export default OnlineOrderItems1