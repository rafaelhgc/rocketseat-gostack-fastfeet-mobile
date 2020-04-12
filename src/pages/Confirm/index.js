import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RNCamera } from 'react-native-camera';

import api from '../../services/api';

import {
  Container,
  Header,
  Content,
  Camera,
  SnapButton,
  Preview,
  SubmitButton,
  CancelButton,
} from './styles';

export default function Confirm({ route, navigation }) {
  const { profile } = useSelector((state) => state.user);
  const { order } = route.params;
  const [picture, setPicture] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Confirmar entrega',
      headerLeft: () => (
        <TouchableOpacity>
          <Icon
            name="chevron-left"
            size={24}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  async function takePicture(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    setPicture(data);
  }

  async function handleSubmit() {
    const fd = new FormData();
    fd.append('file', {
      uri: picture.uri,
      name: `${new Date().getTime()}.jpg`,
      type: 'image/jpg',
    });

    await api.post(`deliverymen/${profile.id}/orders/${order.id}/deliver`, fd);
    navigation.navigate('Main');
  }

  return (
    <Container>
      <Header />
      <Content>
        {picture ? (
          <Preview source={picture} />
        ) : (
          <Camera
            captureAudio={false}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}>
            {({ camera }) => (
              <SnapButton onPress={() => takePicture(camera)}>
                <Icon name="camera-alt" size={32} color="#eee" />
              </SnapButton>
            )}
          </Camera>
        )}
      </Content>

      {picture && (
        <>
          <SubmitButton onPress={() => handleSubmit()}>Enviar</SubmitButton>
          <CancelButton onPress={() => setPicture(null)}>
            Alterar Foto
          </CancelButton>
        </>
      )}
    </Container>
  );
}
