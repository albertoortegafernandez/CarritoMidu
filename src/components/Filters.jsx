import "./Filters.css";
import { useState } from "react";
export const Filters = () => {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  return (
    <section>
      <div>
        <labe htmlFor="price">Precio a partir de:</labe>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <labe htmlFor="category">Categoría</labe>
        <select id="category">
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Móviles</option>
        </select>
      </div>
    </section>
  );
};
