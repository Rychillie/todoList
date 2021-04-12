import React from "react";
import { useColorScheme } from "react-native";

import * as S from "./styles";

const Task = (props) => {
  const colorScheme = useColorScheme();
  const isLight = colorScheme === "light";

  return (
    <S.Item theme={isLight}>
      <S.ItemLeft>
        <S.Square></S.Square>
        <S.ItemText theme={isLight}>{props.text}</S.ItemText>
      </S.ItemLeft>
      <S.Circular></S.Circular>
    </S.Item>
  );
};

export default Task;
