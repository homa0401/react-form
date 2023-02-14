import Card from "../UI/Card";
import styles from "./CreateUser.module.css";
import Button from "../UI/Button";
import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Wrong input",
        message: "Inputs cannot be empty",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Incorrect age",
        message: "Age must be above 0",
      });
      return;
    }

    props.onCreateUser(inputName, inputAge);
    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={inputAge}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
export default CreateUser;
