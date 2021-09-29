import { FC, useState } from "react";

const Dropdown: FC = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <div className="">
      <div
        className={`dropdown ${isOpen ? "is-active" : ""} has-background-dark`}
      >
        <div className="dropdown-trigger">
          <button
            className="button has-background-black-ter"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => toggleOpen(!isOpen)}
          >
            <span className="has-text-white">Risitar</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content has-background-black-ter">
            <a
              href="#"
              className="dropdown-item has-background-black-ter has-text-white"
              onClick={() => toggleOpen(!isOpen)}
            >
              Risitar
            </a>
            <a
              href="#"
              className="dropdown-item has-background-black-ter has-text-white"
              onClick={() => toggleOpen(!isOpen)}
            >
              Serveur 2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
