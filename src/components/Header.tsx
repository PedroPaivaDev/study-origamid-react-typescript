import React from "react";
import { useUi } from "../contexts/UiContext";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { setDark } = useUi();
  const user = React.useContext(UserContext);

  return (
    <div>
      {user?.data && <h2>{user.data.nome}</h2>}
      <button onClick={() => setDark((d) => !d)}>Modo</button>
    </div>
  );
};

export default Header;
