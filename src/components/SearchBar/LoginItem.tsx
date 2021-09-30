import { FC } from "react";
import styled from 'styled-components';

const AvatarImage = styled.img`
  max-height: 6rem!important;
`;

const LoginItem: FC = () => {
  return (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href="#" className="navbar-dropdown.is-right">
            <figure className="image is-48x48">
              <AvatarImage className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginItem;
