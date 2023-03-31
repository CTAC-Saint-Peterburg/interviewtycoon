import { GameHeader } from "../secondaryСomponents/GameHeader";
import { Questions } from "../secondaryСomponents/Questions";
import { useSelector } from "react-redux";

export default function Game() {
  const data = useSelector((state) => state.gamestats.data.questions);
  return (
    <div>
      <GameHeader data={data} />
      <Questions data={data} />
    </div>
  );
}
