import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e8eaed;
`;
export const TasksWrapper = styled.View`
  padding-top: 32px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
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
  background-color: #fff;
  border-radius: 60px;
  border-color: #c0c0c0;
  border-width: 1px;
  width: 250px;
`;
export const AddWrapper = styled.View`
  width: 48px;
  height: 48px;
  margin-left: 8px;
  background-color: #fff;
  border-radius: 48px;
  justify-content: center;
  align-items: center;
  border-color: #c0c0c0;
  border-width: 1px;
`;
export const AddText = styled.Text``;
