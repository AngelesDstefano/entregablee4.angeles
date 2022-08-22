import axios from "axios";
import React from "react";

const UsersList = ({ user, getAllUser, setUpdateInfo, handleOpenForm }) => {
  const deleteUsers = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUser();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateClick = () => {
    handleOpenForm();
    setUpdateInfo(user);
  };

  return (
    <article className="card">
      <h2 className="card__title">{user.name}</h2>
      <hr className="card__hr" />
      <ul className="card__list">
        <li className="card__item">
          first_name <span className="card__span">{user["first_name"]}</span>
        </li>
        <li className="card__item">
          Last name <span className="card__span">{user["last_name"]}</span>
        </li>
        <li className="card__item">
          Email <span className="card__span">{user.email}</span>
        </li>
        <li className="card__item">
          Birthday <span className="card__span">{user.birthday}</span>
        </li>
      </ul>
      <footer className="card__footer">
        <button onClick={deleteUsers} className="card__btn">
          Delete
        </button>
        <button onClick={handleUpdateClick} className="card__btn">
          Update
        </button>
      </footer>
    </article>
  );
};

export default UsersList;
