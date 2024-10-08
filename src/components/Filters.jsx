import "./Filters.css";
import { useState, useId } from "react";

export const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    onChange((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Móviles</option>
        </select>
      </div>
    </section>
  );
};
