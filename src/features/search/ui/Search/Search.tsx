import { useMobile } from "@/shared/lib/hooks/useMobile";
import s from "./Search.module.scss";
interface InputProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}
export const Search = ({ keyword, setKeyword }: InputProps) => {
  const isMobile = useMobile(600);
  return (
    <div className={isMobile ? s.wrapperMobile : s.wrapper}>
      <input
        type="text"
        placeholder="Search..."
        className={isMobile ? s.inputModile : s.input}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};
