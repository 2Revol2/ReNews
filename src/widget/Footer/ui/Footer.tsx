import s from "./Footer.module.scss";
import { menu } from "@/shared/const/menu";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerWrapper}>
        <div>
          <h1>ReNews</h1>
        </div>
        <div>
          <ul className={s.list}>
            {menu.map((item) => {
              return (
                <li key={item.text}>
                  <Link className={s.link} to={item.url}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        
      </div>
    </div>
  );
};
