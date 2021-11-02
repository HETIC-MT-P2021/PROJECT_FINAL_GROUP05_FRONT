import { FC, useState } from "react";
import styled from "styled-components";
import { User } from "../../Auth"

const ProfileButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const DropdownMenu = styled.div`
  left: -5rem;
`

const ProfilePicture = styled.img`
  border: #fafafa 1px solid;
  border-radius: 50%;
  min-width: 40px!important;
  min-height: 40px!important;
`
type ProfileDropdownPropsInterface = {
  user?: User,
}

const ProfileDropdown: FC<ProfileDropdownPropsInterface> = ({ user }) => {

  const [isOpen, toggleOpen] = useState(false);
  const formatAvatarUrl = ((user: { userId?: number; profilePicture?: string; }) => {
    const baseUrl = "http://cdn.discordapp.com/avatars/"
    const fallback = "https://www.handiclubnimois.fr/wp-content/uploads/2020/10/blank-profile-picture-973460_1280.png"

    if(user){
      return baseUrl + user.userId + "/" + user.profilePicture + ".png"
    } else {
      return fallback
    }
  })

  return (
    <div className={`dropdown ${isOpen ? "is-active" : ""} is-normal is-fullwidth mr-6`}>
        <ProfileButton className="button has-background-black-ter" aria-haspopup="true" aria-controls="dropdown-menu2"
                onClick={() => toggleOpen(!isOpen)}>
          <ProfilePicture src={formatAvatarUrl({userId: user?.userId, profilePicture: user?.profilePicture})} alt="Profile Picture"/>
        </ProfileButton>
      <DropdownMenu className="dropdown-menu" id="dropdown-menu2" role="menu">
        <div className="dropdown-content has-text-centered has-background-black-ter">
          <div className="dropdown-item">
            <p className={"has-text-white"}>{user?.username}</p>
          </div>
          <hr className="dropdown-divider"/>
          <div className="dropdown-item">
            <a href="#" className="has-text-danger">
              Se déconnecter
            </a>
          </div>
        </div>
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
