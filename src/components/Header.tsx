import { useUi } from "../contexts/UiContext";

const Header = () => {
  const { setDark } = useUi();

  return <button onClick={() => setDark((d) => !d)}>Modo</button>;
};

export default Header;
