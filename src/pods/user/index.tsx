import * as React from 'react';

interface UserHeaderProps {
  user: {
    name: string,
  };
}

export const UserHeader = ({user}: UserHeaderProps) => <h1>{user.name}</h1>;
