import s from "./Input.module.scss";
interface InputProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}
export const Input = ({ keyword, setKeyword }: InputProps) => {
  return (
    <div className={s.wrapper}>
      <input
        type="text"
        placeholder="Search..."
        className={s.input}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};
