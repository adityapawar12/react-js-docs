const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: {
  filterText: string;
  inStockOnly: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFilterTextChange: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInStockOnlyChange: any;
}) => {
  return (
    <form>
      <input
        type="text"
        className="border placeholder:text-gray-500 text-black py-1 px-2 mb-2"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />

      <div>
        <label>
          <input
            type="checkbox"
            className="border text-gray-200 mr-2"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          Only show products in stock
        </label>
      </div>
    </form>
  );
};

export default SearchBar;
