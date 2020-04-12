import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  position: relative;
`;

export const Header = styled.View`
  height: 100px;
  background-color: #7d40e7;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.View`
  margin: 10px 20px 0;
  background-color: #fff;
  border-radius: 4px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,.6)',
})`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px;
  height: 240px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Field = styled.View`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background-color: #7d40e7;
`;
