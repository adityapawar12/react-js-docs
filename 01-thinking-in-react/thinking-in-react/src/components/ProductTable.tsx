import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({
  products,
  filterText,
  inStockOnly,
}: {
  filterText: string;
  inStockOnly: boolean;
  products: Array<{
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  }>;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rows: Array<any> = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows} </tbody>
    </table>
  );
};

export default ProductTable;
