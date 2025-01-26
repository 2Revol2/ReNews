import s from "./PageError.module.scss";
export const PageError = () => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={s.wrapper}>
      <div className={s.error}>
        <h1>Oops! Something went wrong.</h1>
        <p>Please try refreshing the page</p>
      </div>

      <button className={s.button} onClick={() => reloadPage()}>
        Перезагрузить страницу
      </button>
    </div>
  );
};
