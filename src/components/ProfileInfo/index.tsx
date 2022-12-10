import { useContext } from 'react';

import { UserContext } from "../../contexts/UserContext";
import { DataTypes } from '../../interfaces/DataTypes';
import { Avatar } from '../UI/Avatar';
import { Bio, BioContainer, Data, Statics, UserInfo } from './styles';
import { ProfileInfoProps } from './types';

export function ProfileInfo({ data }: ProfileInfoProps) {
  const { name, avatar_url, email, location, followers, following, public_repos, bio } = data;

  return (
    <BioContainer>
      <UserInfo>
        <Avatar src={avatar_url} alt="avatar" />
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{location}</p>
      </UserInfo>
      <Statics>
        <Data>
          <h2>{followers}</h2>
          <p>Seguidores</p>
        </Data>
        <Data>
          <h2>{following}</h2>
          <p>Seguindo</p>
        </Data>
        <Data>
          <h2>{public_repos}</h2>
          <p>Repos</p>
        </Data>
      </Statics>
      <Bio>
        <h2>Bio</h2>
        {bio && <p>{bio}</p>}
      </Bio>
    </BioContainer>
  );
}