import { useFilterContext } from "@/context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Wrapper from "./Sort.style";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button type="button" className={`${grid_view ? "active" : null}`}>
          <BsFillGridFill onClick={setGridView} />
        </button>
        <button type="button" className={`${!grid_view ? "active" : null}`}>
          <BsList onClick={setListView} />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sorty by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-hight">price (hight)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;
