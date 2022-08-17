const OptionTweet = (props) => {
  return (
    <div className="flex  items-center font-extralight ">
        <img src={props.img} alt="" />
        <p>{props.title}</p>
    </div>
  )
}
export default OptionTweet