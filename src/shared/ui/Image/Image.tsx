import s from "./Image.module.scss";
interface ImageProps {
  image: string;
}

export const Image = ({ image }: ImageProps) => {
  return (
    <div className={s.wrapper}>
      {image ? <img className={s.image} src={image} alt="news" /> : null}
    </div>
  );
};
