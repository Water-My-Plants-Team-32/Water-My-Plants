import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const HeroImage = styled.div`
    background-image: url('http://theveggielady.com/wp-content/uploads/2012/10/watering-can-old-man.jpg');
    background-size: auto;
    height: 80vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:flex-end;
`;

const HeroContent = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    height:60vh;
    justify-content:space-around;
`;

const Slogan = styled.h1`
    font-size: 3rem;
    font-style: italic;
    color: orange;
`;

const StyledButton = styled.button`
    font-size:1.2rem;
    color: black;
    padding:10% 75%;
    background-color: white;
    border: 2px solid black;
`;

export default function Home (props) {
    return (
        <div className='home-wrapper'>
            <HeroImage>
                <HeroContent>
                    <Slogan>Never forget to water your plants again!</Slogan>
                    <Link to='/'>
                        <StyledButton>Plants</StyledButton>
                    </Link>
                </HeroContent>
            </HeroImage>
        </div>
    )
}