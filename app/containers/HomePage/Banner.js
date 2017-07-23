import styled from 'styled-components';
import bannerImg from './banner-lm.jpg';

const Wrapper = styled.div`
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  height: 300px;
  width: 100%;
  background-size: cover;
`;

export default Wrapper;