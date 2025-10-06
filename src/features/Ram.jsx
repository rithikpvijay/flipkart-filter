import useSmartPhone from "../hooks/useSmartPhone";
import Displayfeature from "../ui/Displayfeature";

function Ram() {
  const { data } = useSmartPhone();
  if (!data) return null;

  const uniqueProducts = data.filter(
    (item, index, arr) =>
      index === arr.findIndex((product) => product.ram === item.ram)
  );

  const rams = uniqueProducts.map((product) => product.ram);
  return (
    <div>
      <Displayfeature title="ram" items={rams} />
    </div>
  );
}

export default Ram;
