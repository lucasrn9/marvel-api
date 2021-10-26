import React from 'react';
import styled from 'styled-components';
import cardBackground from '../../images/cardBackground.png'
import PropTypes from 'prop-types';

const Card = ({name,imgSrc,desc})=>{
    return(
        <Wrapper className="card">
        <Name className="name" > {name} </Name>
        <Img src={imgSrc} alt={name+" picture"} />
        <Description className="infos"> {desc===""?"Description not found":desc}</Description>
        </Wrapper>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}

export default Card;

const Wrapper = styled.div`
width: 250px;
height: 360px;
display: flex;
flex-direction: column;
padding: 8px 16px;
margin-bottom: 16px;
background-color:white;
align-items: center;
border: solid 3px gold;
background-image: radial-gradient(rgba(0, 0, 0, 0.574),rgba(0, 0, 0, 0.414),rgba(0, 0, 0, 0.574)), url(${cardBackground});
background-size: auto;
`

const Name = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 24px;
font-weight: bold;
`

const Img = styled.img`
width: 100%;
height: 200px;
margin: 16px 0;
`

const Description = styled.div`
width:100%;
height:100px;
padding: 4px;
font-size: 12px;
font-family: 'Roboto', sans-serif;
text-align: justify;
border: solid 1px #d1b202;
`