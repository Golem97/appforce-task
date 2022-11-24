import { createContext } from 'react';

export const UserContext = createContext({
    Users: [],
    delete: () => {},
    update: () => {},
    add   : ()=>{}
});