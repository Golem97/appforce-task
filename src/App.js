import React, {useState, useEffect } from 'react';
import { UserContext } from './shared/context/UserContext';
import Users from './shared/pages/Users';
import Nav from './shared/components/Nav'
import './App.css';
function App() {
  const [usersdata, setUsersdata] = useState([]);
  const [users, setUsers] = useState([])

  const deleteUser = id => {
    const newUser = usersdata.filter(u => id !== u.id);
    setUsersdata(newUser)
  }

  const addUser = user => {
    const newUser = [...users];
    newUser.push(user);
    setUsers(newUser)
  }

  const updateUser = user => {
    const newUser = users.filter(u => user.id !== u.id);
    newUser.push(user);
    setUsers(newUser)
  }

  useEffect(() => {
    (async () => {
      const res = await fetch('https://randomuser.me/api/?results=10');
      const data = await res.json();
      setUsersdata(data.results.map(user => (
        {
          id: user.login.uuid,
          name: {
            title: user.name.title,
            first: user.name.first,
            last: user.name.last
          },
          email: user.email,
          location: {
            country: user.location.country,
            city: user.location.city,
            street: `${user.location.street.name} ${user.location.street.number}`
          },
          image: user.picture.medium
        }
      )))
    })();
  }, [])
  return (
    <>
    <Nav/>
      <UserContext.Provider value={{ Users: usersdata, delete: deleteUser ,add: addUser, update:updateUser }}>
        <div className="body">
            <Users items={usersdata} />
        </div>
      </UserContext.Provider>

    </>
    
  );
}

export default App;
