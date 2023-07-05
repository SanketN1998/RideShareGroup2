import React from 'react';

interface UserContextType {
  userID: string | null;
  setUserID: (userID: string | null) => void;
}

const UserContext = React.createContext<UserContextType>({
  userID: null,
  setUserID: () => {},
});

export { UserContext };
