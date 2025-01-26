import { menu } from "@/shared/const/menu";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss";
export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {menu.map((item) => {
          return (
            <li key={item.text}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${s.active}` : `${s.link}`
                }
                to={item.url}
              >
                {item.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
