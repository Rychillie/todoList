import styled from "styled-components/native";

import { DarkTheme } from "../../components/themes/DarkTheme";
import { LightTheme } from "../../components/themes/LigthTheme";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) =>
    props.theme.isLight
      ? LightTheme.primaryBackground
      : DarkTheme.primaryBackground};
`;

export const TasksWrapper = styled.View`
  padding-top: 32px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) =>
    props.theme.isLight ? LightTheme.primaryText : DarkTheme.primaryText};
`;

export const Items = styled.View`
  margin-top: 30px;
`;

export const WriteTaskWrapper = styled.KeyboardAvoidingView`
  position: absolute;
  bottom: 48px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 48px;
  padding: 15px;
  border-radius: 60px;
  background-color: ${(props) =>
    props.theme.isLight
      ? LightTheme.secondaryBackground
      : DarkTheme.secondaryBackground};
  width: 250px;
  color: ${(props) =>
    props.theme.isLight ? LightTheme.primaryText : DarkTheme.primaryText};
`;

export const AddWrapper = styled.View`
  width: 48px;
  height: 48px;
  margin-left: 8px;
  background-color: ${(props) =>
    props.theme.isLight
      ? LightTheme.secondaryBackground
      : DarkTheme.secondaryBackground};
  border-radius: 48px;
  justify-content: center;
  align-items: center;
`;

export const AddText = styled.Text`
  color: ${(props) =>
    props.theme.isLight ? LightTheme.primaryText : DarkTheme.primaryText};
`;
