const MenuNews = (props) => {
  console.log(props);
  return (
    <div className="flex  space-x-3 p-4 pl-0 border-t border-t-orange-100 text-gray-600 ">
      <img src={props.img} alt="" className="w-10" />
      <div className="flex flex-col space-y-1 ">
        <span  className="text-gray-800 font-semibold">{props.title}</span>
        <span className="text-sm">{props.desc}</span>
      </div>
    </div>
  );
};
export default MenuNews;
