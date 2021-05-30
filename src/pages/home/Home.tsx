import { useState } from 'react';
import { Parallax } from 'react-parallax';
import { animated, useTransition } from 'react-spring';
import Typing from 'react-typing-animation';
import Particle from '../../components/Particle/Particle';
import { CenterDiv, NameSpan, StyledHome } from './style';

const Home: React.FC = () => {
  const [isTypingDone, setTypingDone] = useState<boolean>(false);
  const transitions = useTransition(isTypingDone, {
    from: { opacity: 0 },
    enter: { opacity: 0.4 },
    leave: { opacity: 0 },
    reverse: isTypingDone,
    delay: 100
  });

  return (
    <Parallax>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <Particle />
            </animated.div>
          )
      )}
      {!isTypingDone && <StyledHome />}

      <CenterDiv>
        <Typing onFinishedTyping={() => setTypingDone(true)} speed={50}>
          <div>
            Hello! My name is <NameSpan>Esdras Xavier.</NameSpan>
          </div>
          <div>I'm a full-stack developer.</div>
        </Typing>
      </CenterDiv>
    </Parallax>
  );
};

export default Home;