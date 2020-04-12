import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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

export const Card = styled.View`
  margin: 10px 20px 0;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardInfo = styled.View``;

export const Label = styled.Text`
  text-transform: uppercase;
  color: #999;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Info = styled.Text`
  color: #444;
  margin-bottom: 10px;
`;

export const Actions = styled.View`
  margin: 10px 20px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fd;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Action = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ActionLabel = styled.Text`
  text-align: center;
  color: #999;
`;
