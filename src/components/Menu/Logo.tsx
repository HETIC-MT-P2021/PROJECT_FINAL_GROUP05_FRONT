import { FC } from "react";

import CarlosLogo from "../../assets/images/carlos_logo.png";

const Logo: FC = () => {
	return (
		<>
			<div className="columns">
				<img src={CarlosLogo} alt="logo_carlos" />
			</div>
		</>
	);
};

export default Logo;
