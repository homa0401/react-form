import Card from "../UI/Card";
import styles from "./Userlist.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
