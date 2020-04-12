import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const Welcome = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 14px;
`;

export const Name = styled.Text`
  color: #444;
  font-weight: bold;
  font-size: 24px;
`;
export const LogoutButton = styled(RectButton)`
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
`;

export const DeliveriesList = styled.View``;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #444;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Action = styled(RectButton)`
  margin-left: 10px;
`;

export const ActionLabel = styled.Text`
  color: ${(props) => (props.active ? '#7D40E7' : '#999')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  font-weight: bold;
`;

export const List = styled.FlatList.attrs``;
