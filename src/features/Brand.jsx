import useSmartPhone from "../hooks/useSmartPhone";
import Displayfeature from "../ui/Displayfeature";

function Brand() {
  const { data } = useSmartPhone();
  if (!data) return null;

  const uniqueProducts = data.filter(
    (item, index, arr) =>
      index === arr.findIndex((product) => product.brand === item.brand)
  );

  const brands = uniqueProducts.map((product) => product.brand);
  return (
    <div>
      <Displayfeature title="brand" items={brands} isSearchBar="true" />
    </div>
  );
}

export default Brand;
