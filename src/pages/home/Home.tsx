import { useState } from 'react';
import { Parallax } from 'react-parallax';
import { animateScroll as scroll } from 'react-scroll';
import { animated, useTransition } from 'react-spring';
import Typing from 'react-typing-animation';
import Button from '../../components/Button/Button';
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

  const onViewWorkClick = () => {
    const heigth = window.innerHeight + 20;
    scroll.scrollTo(heigth, { smooth: true, ignoreCancelEvents: true });
  };

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

        <Button onClick={onViewWorkClick} style={{ marginTop: '2vh' }}>
          View my work
        </Button>
      </CenterDiv>
    </Parallax>
  );
};

export default Home;
