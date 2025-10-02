import useSmartPhone from "../hooks/useSmartPhone";

import Displayfeature from "../ui/Displayfeature";

function FilterItem({ specification, searchBar = false }) {
  const { data } = useSmartPhone();
  if (!data) return null;

  const uniqueProducts = data.filter(
    (item, index, arr) =>
      index ===
      arr.findIndex((product) => product[specification] === item[specification])
  );

  const items = uniqueProducts.map((product) => product[specification]);

  return (
    <Displayfeature items={items} searchBar={searchBar} title={specification} />
  );
}
export default FilterItem;
