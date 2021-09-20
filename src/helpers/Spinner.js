import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 0 auto;
  width: 100%;
  // height: 2px;
  background-image: linear-gradient(
    to right,
    rgb(76, 217, 100),
    rgb(90, 200, 250),
    rgb(0, 122, 255),
    rgb(52, 170, 220),
    rgb(88, 86, 214),
    rgb(255, 45, 85)
  );
`;

function Spinner() {
  return (
    <div className="sweet-loading">
      <BarLoader loading={true} color="purple" css={override} size={150} />
    </div>
  );
}

export default Spinner;
