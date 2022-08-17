import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
const Blog = () => {
  return (
    <div className="flex flex-row space-x-6">
      <LeftSide />
      <MiddleSide />
    </div>
  );
};
export default Blog;
