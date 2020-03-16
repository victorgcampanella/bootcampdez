import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-color: #c1c1c1;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#1d1538',
})`
  flex: 1;
  height: 40px;
  background: #bfb5e3;
  border-radius: 4px;
  padding: 0 15px;
  border: 2px solid #7159c1;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  height: 40px;
  align-items: center;
  padding: 15px;
  background: #4d3795;
  margin-left: 5px;
  border-radius: 5px;
`;
