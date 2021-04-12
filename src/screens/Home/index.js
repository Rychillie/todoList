import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  Keyboard,
  ScrollView,
  useColorScheme,
  Appearance,
} from "react-native";

import Task from "../../components/Task";

import * as S from "./styles";

import themes from "../../components/themes";

export default function Home() {
  // const colorScheme = Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const isLight = colorScheme === "light";

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <S.Container>
      <StatusBar
        hidden={false}
        // backgroundColor={(props) => props.theme.primaryBackground}
        barStyle={isLight ? "light-content" : "dark-content"}
        translucent
      />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <S.TasksWrapper>
          <S.SectionTitle>Today's tasks</S.SectionTitle>
          <S.Items>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </S.Items>
        </S.TasksWrapper>
      </ScrollView>

      {/* Write a task */}
      <S.WriteTaskWrapper
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <S.Input
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <S.AddWrapper>
            <S.AddText>+</S.AddText>
          </S.AddWrapper>
        </TouchableOpacity>
      </S.WriteTaskWrapper>
    </S.Container>
  );
}
