import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import * as S from "./styles";

const Task = (props) => {
  return (
    <S.Item>
      <S.ItemLeft>
        <S.Square></S.Square>
        <S.ItemText>{props.text}</S.ItemText>
      </S.ItemLeft>
      <S.Circular></S.Circular>
    </S.Item>
  );
};

export default Task;
