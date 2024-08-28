import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = ({
  products,
}: {
  products: Array<{
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  }>;
}) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="p-6">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
