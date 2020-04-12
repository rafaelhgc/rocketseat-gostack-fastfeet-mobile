import styled from 'styled-components/native';

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

export const Order = styled.Text`
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin: 30px 0 10px 0;
  font-size: 20px;
`;

export const NoProblem = styled.View`
  padding: 20px;
  background-color: #fff;
  margin: 0 20px 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const NoProblemText = styled.Text`
  font-weight: bold;
  color: #999;
  text-align: center;
`;

export const Problem = styled.View`
  padding: 20px;
  background-color: #fff;
  margin: 0 20px 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: row;
`;

export const ProblemDescription = styled.Text`
  font-size: 16px;
  color: #444;
  flex: 1;
`;

export const ProblemDate = styled.Text`
  font-weight: bold;
  color: #999;
`;
