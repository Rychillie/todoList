import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.primaryBackground};
`;

export const TasksWrapper = styled.View`
  padding-top: 48px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${(props) => props.theme.primaryText};
`;

export const Items = styled.View`
  margin-top: 30px;
`;

export const WriteTaskWrapper = styled.KeyboardAvoidingView`
  position: absolute;
  bottom: 48px;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 56px;
  padding: 16px 24px;
  border-radius: 18px;
  background-color: ${(props) => props.theme.secondaryBackground};
  width: 250px;
  color: ${(props) => props.theme.primaryText};
`;

export const AddWrapper = styled.View`
  width: 60px;
  height: 56px;
  margin-left: 24px;
  background-color: ${(props) => props.theme.secondaryBackground};
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;

export const AddText = styled.Text`
  color: ${(props) => props.theme.primaryText};
`;
