import React from "react";

import { useUi } from "../contexts/UiContext";
import { UserContext } from "../contexts/UserContext";

const Content = () => {
  const { dark } = useUi();
  const user = React.useContext(UserContext);

  return (
    <div
      style={{
        height: '400px',
        color: dark ? '#fff' : '#222',
        backgroundColor: dark ? '#222' : '#fff',
      }}
    >
      {user?.data && <ul>
        <li>playback: {user.data.preferencias.playback}</li>
        <li>qualidade: {user.data.preferencias.qualidade}</li>
        <li>volume: {user.data.preferencias.volume}</li>
      </ul>}
    </div>
  );
};

export default Content;
