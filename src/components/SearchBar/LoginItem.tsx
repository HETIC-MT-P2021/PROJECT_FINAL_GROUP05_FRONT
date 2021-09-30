import { FC } from "react";

const LoginItem: FC = () => {
  return (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="navbar-dropdown.is-right">
            <figure className="image is-48x48">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginItem;
