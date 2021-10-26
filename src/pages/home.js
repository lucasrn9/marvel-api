import React, { useState } from 'react';
import styled from 'styled-components'
import { useContext } from 'react';
import { Card, Modal } from '../components'
import { MarvelContext } from '../providers/marvel-provider';


const Home =()=>{
   
    const [modalVisibility,setModalVisibility] = useState(true)
    const { character } = useContext(MarvelContext)
    
    const CloseModal = ()=>{
        setModalVisibility(false)
    }

    return (
        <>
        {modalVisibility? (
        <Modal CloseModal={CloseModal}> 
            <ModalTitle>Learning pruporses only</ModalTitle> 
            <ModalText>
                This website was made for learning pruporses only,
                here i'm training concepts like: http resquests, Context API, Modals, Portal and Styled Components
            </ModalText>
            </Modal> ): null} 
        {character.length>0 ? (
              <Wrapper>
              {character.map((arr)=><Card key={arr.id} name={arr.name} imgSrc={`${arr.thumbnail.path}.${arr.thumbnail.extension}`} desc={arr.description}/>)}
             </Wrapper>
        ) : (
            <Error> Unable to connect to the API, please follow all the 
             <Link href="#">GitHub</Link>  instructions correctly
            </Error>
        )}
      
        </>
    )
}

export default Home;

const Wrapper = styled.main`
display:flex;
justify-content: space-evenly;
flex-flow: wrap;
padding: 16px;
position: absolute;
top: 0;
z-index: 1;
`

const ModalTitle = styled.h1`
font-size: 32px;
`

const ModalText = styled.p`
font-size: 16px;
text-align: justify;
padding: 0 8px;
margin-top: 16px;
`

const Error = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
margin: auto;
font-weight: bold;
font-size: 20px;
`

const Link = styled.a`
margin: 0 4px;
`