import styled from "styled-components";

export const greyBg = styled.div`
    transform: rotate(-13deg) translateY(-120px);
    width: 500px;
    height: 300px;
    background: rgb(167, 167, 175);
    border-right: 20px solid  rgb(51, 50, 50);
`;

export const PlaceOfPublication = styled.div`
    position: relative;
    top: -300px;
    height: 20px;
    width: 80%;
    background: #890E4F;
    color: white;
    padding: 12px 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
`;

export const Title = styled.div`
    z-index: 100;
    padding-bottom: 2px;
    padding-left: 10px;
    position: relative;
    color: white;
`;

export const Wrapper = styled.div`
    height: 80px;
    width: 740px;
    background: rgb(88, 87, 87);
    border-radius: 10px;
    margin: 10px auto;
    overflow: hidden;
`;
