import React from "react";
import styles from "../../styles/User.module.css";
import { useSelector } from "react-redux";
import UserSignupForm from "./UserSignupForm";

const UserForm = () => {
  const { showForm } = useSelector(({ user }) => user);
  return showForm ? <UserSignupForm /> : <></>;
};

export default UserForm;
