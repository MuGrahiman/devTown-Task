import React, { useEffect, useState } from "react";
import HeaderComponent from "./Components/Header";
import { Container, Wrapper } from "./Styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Manipulator from "./Components/Manipulator";
import Card from "./Components/Card";
import products from "./Assets/data/products";
const Theme = {
  Medium: "1000px",
  Small: "800px",
};
const App = () => {
  const [SortedProduct, setSortedProduct] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);
  const [sortOption, setSortOption] = useState([]);
  useEffect(() => {
    setSortedProduct(products);
  }, []);

  const searchFilter = (searchTerm) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();

    const filteredProducts = products.filter((product) => {
      const lowercaseProductName = product.productName.toLowerCase();
      const lowercaseCategory = product.category.toLowerCase();
      return (
        lowercaseProductName.includes(lowercaseSearchTerm) ||
        lowercaseCategory.includes(lowercaseSearchTerm)
      );
    });

    setSortedProduct(filteredProducts);
  };

  const handleFilter = (options) => {
    console.log(options);
    if (options[0])
      setSortedProduct(
        products.filter((product) => options.includes(product.category))
      );
    else setSortedProduct(products);
  };

  const handleSort = (option) => {
    console.log(option);
    if (option === "Low") {
      console.log(SortedProduct.sort((a, b) => a.price - b.price));
      setSortedProduct([...SortedProduct].sort((a, b) => a.price - b.price));
    } else if (option === "High")
      setSortedProduct([...SortedProduct].sort((a, b) => b.price - a.price));
  };

  return (
    <ThemeProvider theme={Theme}>
      <HeaderComponent onSearch={(value) => searchFilter(value)} />
      <Container>
        <Manipulator
          onSelectSort={handleSort}
          onSelectFilter={handleFilter}
          categories={["Sofa", "chair", "stool", "chaise", "classic"]}
        />
        <Wrapper>
          {SortedProduct[0]
            ? SortedProduct?.map((data) => (
                <Card
                  key={data.id}
                  title={data.productName}
                  image={data.imgUrl}
                  category={data.category}
                  description={data.shortDesc}
                  price={data.price}
                />
              ))
            : "No Items"}
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
