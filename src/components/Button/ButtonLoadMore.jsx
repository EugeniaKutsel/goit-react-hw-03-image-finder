import css from "../Button/ButtonLoadMore.module.css";

const Button = ({ onClick }) => {
  return (
    <button className={css.loadMore} type="button" onClick={onClick}>
      Load more
    </button>
  );
}

export default Button;