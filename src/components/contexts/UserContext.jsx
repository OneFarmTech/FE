// UserContext.js
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));

  const updateUserRole = (Role) => {
    setUserRole( Role);
  };

  return (
    <UserContext.Provider value={{ userRole, updateUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children prop is present
  };

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  return useContext(UserContext);
};
