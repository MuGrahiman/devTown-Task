import styled from "styled-components";

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0.5rem;
  background-color: ${({ bg }) => bg || "transparent"};
`;

export const Button = styled.button`
  background-color: ${({ bg }) => bg || "#fff"};
  width: ${({ w }) => w || "auto"};
  color: ${({ c }) => c || '#000'};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ h_bg }) => h_bg || "#fff"} ;
    color: ${({ h_c }) => h_c || '#000'};
  }
`;

export const Wrapper =styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 1rem;
margin: 5rem 0;
`