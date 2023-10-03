import { useFilterContext } from "@/context/filter_context";
import { formatPrice, getUniqueValues } from "@/utils/helpers";
import Wrapper from "./Filters.style";

const Filters = () => {
  const {
    filters: { text, company, category, min_price, max_price, price, shipping },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* serach input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end serach input */}

          {/* categories */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={updateFilters}
                  name="category"
                  className={`${
                    category === c.toLowerCase() ? "active" : null
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          {/* end categories */}

          {/* companies */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {companies.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          {/* end companies */}

          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end price */}

          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* end shipping */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          {" "}
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

export default Filters;
