import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValue = {
  first_name: "",
  last_name: "",
  password: "",
  email: "",
  birthday: "",
};

const UsersForm = ({
  getAllUsers,
  updateInfo,
  setUpdateInfo,
  handleCloseForm,
}) => {
  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const createUsers = (data) => {
    const URL = "https://users-crud1.herokuapp.com/users/";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const updateUsers = (data) => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const { register, reset, handleSubmit } = useForm();

  const submit = (data) => {
    if (updateInfo) {
      // Update Movie
      updateUsers(data);
      setUpdateInfo();
    } else {
      // Create New Movie
      createUsers(data);
    }
    reset(defaultValue);
    handleCloseForm();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <div onClick={handleCloseForm} className="form__equis">
        x
      </div>
      <h2 className="form__title">
        {updateInfo ? "Update User Information" : "Create New User"}
      </h2>
      <ul className="form__list">
        <li className="form__item">
          <label htmlFor="first_name">First name </label>
          <input
            {...register("first_name")}
            type="text"
            id="first_name"
            className="form__text"
          />
        </li>
        <li className="form__item">
          <label htmlFor="last_name">Last name </label>
          <input
            {...register("last_name")}
            type="text"
            id="last_name"
            className="form__text"
          />
        </li>
        <li className="form__item">
          <label htmlFor="email">Email </label>
          <input
            {...register("email")}
            type="form__text"
            id="email"
            className="form__text"
          />
        </li>
        <li className="form__item">
          <label htmlFor="password">Password </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="form__text"
          />
        </li>
        <li className="form__item">
          <label htmlFor="birthday">birthday </label>
          <input
            {...register("birthday")}
            type="date"
            id="birthday"
            className="form__text"
          />
        </li>
      </ul>
      <button className="form__btn">{updateInfo ? "Update" : "Create"}</button>
    </form>
  );
};

export default UsersForm;
