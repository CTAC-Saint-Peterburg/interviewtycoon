import { GameHeader } from "../secondaryСomponents/GameHeader";
import { Questions } from "../secondaryСomponents/Questions";
import dataTest from "../assets/questions";
console.log(dataTest);
export default function Game() {
  return (
    <div>
      <GameHeader data={dataTest} />
      <Questions data={dataTest} />
    </div>
  );
}
