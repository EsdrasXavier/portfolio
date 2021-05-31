import IButton from '../../interfaces/Button/IButton';
import { ButtonDiv } from './style';

const Button: React.FC<IButton> = ({ onClick, style, children }) => {
  return (
    <ButtonDiv onClick={onClick} style={style}>
      {children}
    </ButtonDiv>
  );
};

export default Button;
