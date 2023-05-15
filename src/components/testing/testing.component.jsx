// import React, { useEffect, useState } from 'react';
// import styled, { keyframes } from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const Item = styled.div`
//   flex: 0 0 50%;
//   opacity: 0;
//   animation: ${fadeIn} 0.5s ease-out forwards;
//   animation-delay: ${(props) => props.delay}s;
// `;

// const StaggeredFadeInAnimation = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Simulated async data fetching
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       const data = [<h1>Hello my name is Endri</h1>, '', <h2>I am a front-end</h2>, ''];
//       setItems(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <Container>
//       {items.map((item, index) => (
//         <Item key={index} delay={index * 0.2}>
//           {item}
//         </Item>
//       ))}
//     </Container>
//   );
// };

// export default StaggeredFadeInAnimation;
// import React, { useEffect, useRef } from 'react';
// import styled, { keyframes } from 'styled-components';

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const fadeOut = keyframes`
//   from {
//     opacity: 1;
//     transform: translateY(0);
//   }
//   to {
//     opacity: 0;
//     transform: translateY(-50px);
//   }
// `;

// const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Text = styled.div`
//   font-size: 24px;
//   font-weight: bold;
//   opacity: 0;
//   animation: ${(props) => (props.fadeIn ? fadeIn : fadeOut)} 1s forwards;
//   animation-delay: ${(props) => (props.fadeIn ? '0.5s' : '0s')};
// `;

// const SuperComplexAnimation = () => {
//   const hiRef = useRef(null);
//   const nameRef = useRef(null);

//   useEffect(() => {
//     const fadeInAnimation = setTimeout(() => {
//       hiRef.current.style.opacity = '1';
//       hiRef.current.style.transform = 'translateY(0)';
//       nameRef.current.style.opacity = '1';
//       nameRef.current.style.transform = 'translateY(0)';
//     }, 1000);

//     const fadeOutAnimation = setTimeout(() => {
//       hiRef.current.style.opacity = '0';
//       hiRef.current.style.transform = 'translateY(-50px)';
//       nameRef.current.style.opacity = '0';
//       nameRef.current.style.transform = 'translateY(-50px)';
//     }, 4000);

//     return () => {
//       clearTimeout(fadeInAnimation);
//       clearTimeout(fadeOutAnimation);
//     };
//   }, []);

//   return (
//     <Container>
//       <TextContainer>
//         <Text ref={hiRef} fadeIn>
//           Hi my Name is Endri
//         </Text>
//         <Text ref={nameRef} fadeIn>
//           I am a Front-End Dev
//         </Text>
//       </TextContainer>
//     </Container>
//   );
// };

// export default SuperComplexAnimation;

// import React, { useEffect, useRef } from 'react';
// import styled, { keyframes } from 'styled-components';

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   perspective: 800px;
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(50px) rotateX(-90deg);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0) rotateX(0);
//   }
// `;

// const fadeOut = keyframes`
//   from {
//     opacity: 1;
//     transform: translateY(0) rotateX(0);
//   }
//   to {
//     opacity: 0;
//     transform: translateY(-50px) rotateX(-90deg);
//   }
// `;

// const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   transform-style: preserve-3d;
// `;

// const Text = styled.div`
//   font-size: 60px;
//   font-weight: bold;
//   opacity: 0;
//   animation: ${(props) => (props.fadeIn ? fadeIn : fadeOut)} 1s forwards;
//   animation-delay: ${(props) => (props.fadeIn ? '0.5s' : '0s')};
//   transform-origin: center center;
// `;

// const SuperComplex3DAnimation = () => {
//   const hiRef = useRef(null);
//   const nameRef = useRef(null);

//   useEffect(() => {
//     const fadeInAnimation = setTimeout(() => {
//       hiRef.current.style.opacity = '1';
//       hiRef.current.style.transform = 'translateY(0) rotateX(0)';
//       nameRef.current.style.opacity = '1';
//       nameRef.current.style.transform = 'translateY(0) rotateX(0)';
//     }, 1000);

//     const fadeOutAnimation = setTimeout(() => {
//       hiRef.current.style.opacity = '0';
//       hiRef.current.style.transform = 'translateY(-50px) rotateX(-90deg)';
//       nameRef.current.style.opacity = '0';
//       nameRef.current.style.transform = 'translateY(-50px) rotateX(-90deg)';
//     }, 4000);

//     return () => {
//       clearTimeout(fadeInAnimation);
//       clearTimeout(fadeOutAnimation);
//     };
//   }, []);

//   return (
//     <Container>
//       <TextContainer>
//         <Text ref={hiRef} fadeIn>
//           Hi
//         </Text>
//         <Text ref={nameRef} fadeIn>
//           My name is Endri
//         </Text>
//       </TextContainer>
//     </Container>
//   );
// };

// export default SuperComplex3DAnimation;


// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const fadeSlide = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateX(-50px);
//   }
//   50% {
//     opacity: 1;
//     transform: translateX(0);
//   }
//   100% {
//     opacity: 0;
//     transform: translateX(50px);
//   }
// `;

// const GradientBackground = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   background: linear-gradient(45deg, #ff0066, #6600ff);
//   opacity: 0.8;
// `;

// const AnimatedText = styled.h1`
//   font-size: 48px;
//   font-weight: bold;
//   color: white;
//   opacity: 0;
//   animation: ${fadeSlide} 5s infinite;
// `;

// const ComplexAnimation = () => {
//   return (
//     <Container>
//       <GradientBackground />
//       <AnimatedText>Beautiful Animation</AnimatedText>
//     </Container>
//   );
// };

// export default ComplexAnimation;

import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const AnimatedBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff0066;
  animation: ${pulse} 2s infinite;
`;

const PulseAnimation = () => {
  return (
    <Container>
      <AnimatedBox />
    </Container>
  );
};

export default PulseAnimation;
