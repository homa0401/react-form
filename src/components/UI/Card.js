import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.NameInputRGB}`}>{props.children}</div>
  );
};

export default Card;
