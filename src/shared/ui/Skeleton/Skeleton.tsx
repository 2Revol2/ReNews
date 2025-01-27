import ContentLoader from "react-content-loader";
import s from "./Skeleton.module.scss";

interface SkeletonProps {
  count: number;
}
export const Skeleton = ({ count }: SkeletonProps) => {
  return (
    <ul className={s.list}>
      {[...new Array(count)].map((_, index) => {
        return (
          <ContentLoader
            key={index}
            speed={2}
            width={250}
            height={295}
            viewBox="0 0 250 295"
            backgroundColor="#c9c9c9"
            foregroundColor="#bababa"
          >
            <rect x="-4" y="2" rx="0" ry="0" width="250" height="295" />
          </ContentLoader>
        );
      })}
    </ul>
  );
};
