import styled from 'styled-components';
import '../App.css';

export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 100vh 150px 600px 600px;
  row-gap: 50px;
  margin-bottom: 50px;
`;

export const MainBackgroundWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const MainBackground = styled.video`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  position: relative;
  @media (max-width: 420px) {
    height: 100vh;
  }
`;

export const SloganWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 421px) {
    height: 90vh;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
  }
  > h1 {
    width: 100%;
    /* height: 150px; */
    line-height: 100px;
    font-size: 40px;
    color: #fff;
    @media (max-width: 767px) {
      font-size: 30px;
    }
    @media (max-width: 420px) {
      font-size: 28px;
      height: auto;
    }
    @media (max-width: 320px) {
      font-size: 25px;
    }
    @media (max-width: 280px) {
      font-size: 20px;
      line-height: 70px;
    }
  }
  > h2 {
    font-size: 25px;
    color: #fff;
    line-height: 50px;
    @media (max-width: 767px) {
      font-size: 20px;
    }
    @media (max-width: 420px) {
      font-size: 17px;
    }
    @media (max-width: 320px) {
      font-size: 14px;
    }
    @media (max-width: 280px) {
      font-size: 11px;
      line-height: 30px;
    }
  }
`;

export const MainSection2Wrap = styled.div`
  display: grid;
  padding: 0 200px;
  > h3 {
    text-align: left;
    font-size: 23px;
  }
  > #cuisineBtnWrap {
    width: 100%;
    height: 80px;
    display: flex;
    > .cuisineBtn {
      width: 100%;
      height: 80px;
      margin-left: 20px;
      border-radius: 10px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        background-color: #603224;
        color: #fff;
      }
      > img {
        width: 50px;
        height: 50px;
      }
      > .cuisineText {
        margin-left: 10px;
        > h4 {
          font-size: 20px;
          text-align: left;
        }
        > p {
          padding-top: 5px;
          font-size: 13px;
        }
      }
    }
    > .cuisineBtn:nth-child(1) {
      margin-left: 0;
    }
  }
`;
