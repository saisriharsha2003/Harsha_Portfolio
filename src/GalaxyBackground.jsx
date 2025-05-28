import React from "react";
import styled, { keyframes, css } from "styled-components";

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
`;

const ellipticalOrbit = (rx, ry, phase = 0) => keyframes`
  0% {
    transform: translate(${rx}px, 0px) rotate(${phase}deg);
  }
  25% {
    transform: translate(0px, ${ry}px) rotate(${phase + 90}deg);
  }
  50% {
    transform: translate(-${rx}px, 0px) rotate(${phase + 180}deg);
  }
  75% {
    transform: translate(0px, -${ry}px) rotate(${phase + 270}deg);
  }
  100% {
    transform: translate(${rx}px, 0px) rotate(${phase + 360}deg);
  }
`;

const Galaxy = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.gradient};
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`;

const StarWrapper = styled.div.attrs((props) => ({
  style: {
    top: `${props.$top}%`,
    left: `${props.$left}%`,
  },
}))`
  position: absolute;
  ${({ $rx, $ry, $phase, $duration }) => css`
    animation: ${ellipticalOrbit($rx, $ry, $phase)} ${$duration}s linear infinite;
  `}
`;

const Star = styled.div`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: ${twinkle} ${(props) => props.$twinkleDuration}s ease-in-out infinite;
`;

const GalaxyBackground = () => {
  const stars = React.useMemo(
    () =>
      Array.from({ length: 400 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        twinkleDuration: Math.random() * 2 + 1,
        duration: Math.random() * 40 + 20,
        rx: Math.random() * 60 + 20,
        ry: Math.random() * 20 + 10,
        phase: Math.random() * 360,
      })),
    []
  );

  return (
    <Galaxy>
      {stars.map((star) => (
        <StarWrapper
          key={star.id}
          $top={star.top}
          $left={star.left}
          $rx={star.rx}
          $ry={star.ry}
          $duration={star.duration}
          $phase={star.phase}
        >
          <Star
            $size={star.size}
            $twinkleDuration={star.twinkleDuration}
          />
        </StarWrapper>
      ))}
    </Galaxy>
  );
};

export default GalaxyBackground;
