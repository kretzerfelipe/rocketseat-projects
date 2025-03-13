import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border: none;
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  background-color: ${props => props.theme["blue-500"]};
  color: ${props => props.theme["gray-100"]};

  &:not(:disabled):hover {
    background-color: ${props => props.theme["blue-700"]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`