import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from './mediaQueries';

export const ContainerHome = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400%;
  background-position: 0 100%;
  animation: anim 10s infinite;

  @keyframes anim {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const ContainerPic = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 80%;
  margin: 0 auto;
`;

export const DesignLink = styled(Link)`
  font-size: 26px;
  margin: 10px;
  font-weight: 900;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 900;
  color: #ebb434;
  text-transform: uppercase;
  font-family: 'Fredoka one';
  @media (${device.mobileL}) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 900;
  font-family: 'Pacifico';
`;

export const ImgPodium = styled.img`
  width: 100px;
`;

////////// cat.js

export const ContainerCatPage = styled.div`
  display: flex;
`;

export const CatFlex = styled.div`
  flex:  1 150px;
`;

export const CatImg = styled.img`
  width: 70%;
  border-radius: 50px;
`;
////////// score.js

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'Pacifico';
`;
