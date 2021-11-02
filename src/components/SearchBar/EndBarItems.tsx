import { FC } from "react";
import AuthButton from "./AuthButtons"

const EndBarItems: FC = () => {

  return (
      <div className="navbar-item column is-flex is-flex-direction-row is-justify-content-space-around mr-6">
        <AuthButton/>
			</div>
  );
};

export default EndBarItems;
