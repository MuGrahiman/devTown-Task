import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  padding: 5px;
  width: 20rem;
  border-radius: 5px;
  border: 1px solid #aaaa;
  transition: border-color 0.3s;
  &:hover {
    border: 2px solid #ffff;
  }
  @media screen and (max-width: ${({ theme }) => theme.Small}) {
    width: auto;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  outline: none;
`;
