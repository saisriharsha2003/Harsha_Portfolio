import React from 'react'
import { HeroContainer, HeroLeftContainer, Img, HeroInnerContainer,HeroInnerContainer1, TextLoop, Title, Span, SubTitle,Title1, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroInnerContainer1>
                    <Img src={HeroImg} alt="hero-image" />
                </HeroInnerContainer1>
                <HeroInnerContainer >
                    
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> </Title>
                        <Title1>{Bio.name}</Title1>
                        <TextLoop>
                            <p style={{color:"#ffffff"}}>I am a</p>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'><span style={{"color":"white"}}>Check Resume</span></ResumeButton>
                    </HeroLeftContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection