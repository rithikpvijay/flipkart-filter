import useSmartPhone from "../hooks/useSmartPhone";
import Displayfeature from "../ui/Displayfeature";

function Rating() {
  const ratings = [1, 2, 3, 4];
  return <Displayfeature title="customer ratings" items={ratings} />;
}

export default Rating;
