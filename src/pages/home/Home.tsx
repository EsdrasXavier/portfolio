import Typing from 'react-typing-animation';

const Home: React.FC = () => {
  return (
    <div>
      <Typing speed={20}>
        <div>
          Hi, welcome to my website! My name is Esdras Xavier and I'm a full
          stack developer.
        </div>
        <div>
          One of my 2021 goals is to become expert in Java with Spring Boot and
          microservices.
        </div>
      </Typing>
    </div>
  );
};

export default Home;
