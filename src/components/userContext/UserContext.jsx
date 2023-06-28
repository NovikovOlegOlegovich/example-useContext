import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      return [];
    }
    return JSON.parse(contacts);
  });
  const [filter, setFilter] = useState('');

  return (
    <UserContext.Provider value={{ contacts, setContacts, filter, setFilter }}>
      {children}
    </UserContext.Provider>
  );
};
