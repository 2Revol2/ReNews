import ContentLoader from "react-content-loader";
import s from "./Skeleton.module.scss";
import { useTheme } from "@/app/provides/ThemeProvider";
import { useMobile } from "@/shared/lib/hooks/useMobile";

interface SkeletonProps {
  count: number;
}
export const Skeleton = ({ count }: SkeletonProps) => {
  const { isDark } = useTheme();
  const isMobile = useMobile(600);
  return (
    <ul className={s.list}>
      {[...new Array(count)].map((_, index) => {
        return (
          <ContentLoader
            key={index}
            speed={2}
            width={isMobile ? "100%" : "250"}
            height={isMobile ? "421" : "250"}
            viewBox={`0 0 ${isMobile ? "100%" : "250"} ${
              isMobile ? "421" : "250"
            }`}
            backgroundColor={isDark ? "#262b32" : "#c9c9c9"}
            foregroundColor="#bababa"
            className={s.skeleton}
          >
            <rect
              x="-4"
              y="2"
              rx="0"
              ry="0"
              width={isMobile ? "100%" : "250"}
              height={isMobile ? "421" : "250"}
            />
          </ContentLoader>
        );
      })}
    </ul>
  );
};
