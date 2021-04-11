import styled from "styled-components/native";

export const Item = styled.View`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ItemLeft = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const Square = styled.View`
  width: 24px;
  height: 24px;
  background-color: #55bcf6;
  opacity: 0.4;
  border-radius: 5px;
  margin-right: 15px;
`;

export const ItemText = styled.Text`
  max-width: 80%;
`;

export const Circular = styled.View`
  width: 12px;
  height: 12px;
  border-color: #55bcf6;
  border-width: 2px;
  border-radius: 5px;
`;
