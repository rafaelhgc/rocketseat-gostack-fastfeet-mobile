import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  border-radius: 4px;
  margin: 0 20px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #7d40e7;
  margin-left: 10px;
`;

export const Status = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const StatusBar = styled.View`
  height: 2px;
  background-color: #7d40e7;
  position: absolute;
  width: 100%;
  top: 25px;
  left: 20px;
`;

export const StatusItem = styled.View`
  width: 33.33%;
  align-items: center;
`;

export const StatusDot = styled.View`
  width: 12px;
  height: 12px;
  border: 1px solid #7d40e7;
  border-radius: 6px;
  background-color: ${(props) => (props.done ? '#7d40e7' : '#fff')};
`;

export const StatusDescription = styled.Text`
  text-align: center;
  color: #999;
`;

export const Details = styled.View`
  margin-top: 20px;
  background-color: #f8f9fd;
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

export const DetailsItem = styled.View`
  padding: 0 10px;
  width: 33.33%;
`;

export const Label = styled.Text`
  font-size: 10px;
  color: #999;
  font-weight: bold;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #444;
  font-weight: bold;
`;

export const Action = styled(RectButton)``;

export const ActionLabel = styled.Text`
  color: #7d40e7;
  font-weight: bold;
`;
