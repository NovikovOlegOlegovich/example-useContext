import { MainTitle } from './Title.styled';
import { useUser } from '../userContext/UserContext';

const Title = ({ children }) => {
  const { name } = useUser();
  return (
    <MainTitle>
      {children}
      <p>{name}</p>
    </MainTitle>
  );
};

export default Title;
