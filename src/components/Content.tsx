import { useUi } from "../contexts/UiContext";
import { useUser } from "../contexts/UserContext";

const Content = () => {
  const { dark } = useUi();
  const {data} = useUser();

  return (
    <div
      style={{
        height: '400px',
        color: dark ? '#fff' : '#222',
        backgroundColor: dark ? '#222' : '#fff',
      }}
    >
      {data && <ul>
        <li>playback: {data.preferencias.playback}</li>
        <li>qualidade: {data.preferencias.qualidade}</li>
        <li>volume: {data.preferencias.volume}</li>
      </ul>}
    </div>
  );
};

export default Content;
