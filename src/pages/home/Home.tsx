import { Parallax } from 'react-parallax';
import Typing from 'react-typing-animation';
import { CenterDiv, NameSpan, StyledHome } from './style';

const Home: React.FC = () => {
  return (
    <Parallax>
      <StyledHome>
        <CenterDiv>
          <Typing speed={20}>
            <div>
              Hello! My name is <NameSpan>Esdras Xavier.</NameSpan>
            </div>
            <div>I'm a full-stack developer.</div>
          </Typing>
        </CenterDiv>
      </StyledHome>
    </Parallax>
  );
};

export default Home;
