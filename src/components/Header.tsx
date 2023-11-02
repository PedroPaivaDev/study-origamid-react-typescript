import { useUi } from "../contexts/UiContext";
import { useUser } from "../contexts/UserContext";

const Header = () => {
  const { setDark } = useUi();
  const {data} = useUser();

  return (
    <div>
      {data && <h2>{data.nome}</h2>}
      <button onClick={() => setDark((d) => !d)}>Modo</button>
    </div>
  );
};

export default Header;
