import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { RectButton } from 'react-native-gesture-handler';
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
  margin: 20px;
  flex-direction: column;
  background-color: #999;
  border-radius: 4px;
  height: 70%;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const SnapButton = styled(RectButton)`
  height: 64px;
  width: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Preview = styled(Image)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SubmitButton = styled(Button)`
  margin: 0 20px;
  background-color: #7d40e7;
`;

export const CancelButton = styled(Button)`
  margin: 10px 20px 0;
  background-color: #e74040;
`;
