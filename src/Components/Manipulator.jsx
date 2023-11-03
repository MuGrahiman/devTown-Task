import React, { useState } from "react";
import { Aligner } from "../Styles/manipulatorStyles";
import DropDown from "./DropDown";
import SelectedOptions from "./SelectedOptions";

const Manipulator = ({ categories, onSelectSort, onSelectFilter }) => {
  const [filterOptions, setFilterOptions] = useState([]);
  const handleFilter = (option) => {
    console.log(option, filterOptions);
    if(!filterOptions.includes(option))
    setFilterOptions((data) => [...data, option]);
  
    onSelectFilter([...filterOptions, option]);
  };
  const handleRemove = (option) => {
    const updatedFilter = filterOptions.filter((data) => data !== option);
    setFilterOptions(updatedFilter);
    onSelectFilter(updatedFilter);
  };
  return (
    <div>
      <Aligner>
        <div>
          <DropDown
            onSelect={(option) => handleFilter(option)}
            options={categories}
            BtnName={"Filter"}
          />
        </div>
        <div>
          <DropDown
            onSelect={(option) => onSelectSort(option)}
            options={["Low", "High"]}
            BtnName={"Sort"}
          />
        </div>
      </Aligner>
      {filterOptions[0] && (
        <SelectedOptions
          onOptionDelete={handleRemove}
          selectedOptions={filterOptions}
        />
      )}
    </div>
  );
};

export default Manipulator;
