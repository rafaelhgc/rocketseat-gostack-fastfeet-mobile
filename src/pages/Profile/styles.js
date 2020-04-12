import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  margin-top: 80px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  margin: 40px;
`;

export const Avatar = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 14px;
  margin-top: 20px;
`;

export const Field = styled.Text`
  color: #444;
  font-size: 24px;
  margin-top: 5px;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  margin-top: 40px;
  background-color: #e74040;
`;
