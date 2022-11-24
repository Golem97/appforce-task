import React from 'react';
import UserCard from '../components/UserCard';
import LoadingSpinner from '../UIElement/LoadingSpinner';

import './Users.css';

const Users = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
          <h2>No users found.</h2>
        <LoadingSpinner/>

      </div>
    );
  }

  return (
      <>
        <div className="user_section">
                {props.items.map(user => (
                <UserCard
                user={user}
                />
            ))}
        </div>
      
      </>
  );
};

export default Users;
