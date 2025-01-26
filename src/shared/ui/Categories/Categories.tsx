import s from "./Categories.module.scss";

interface CategoriesProps {
  categories: string[];
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  currentCategory: string;
}

export const Categories = ({
  categories,
  setCurrentCategory,
  currentCategory,
}: CategoriesProps) => {
  return (
    <div className={s.categories}>
      <ul className={s.list}>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => setCurrentCategory(category)}
              className={currentCategory === category ? s.active : s.category}
              disabled={currentCategory === category}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
