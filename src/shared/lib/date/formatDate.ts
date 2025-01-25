interface formateDateProps {
  date: Date;
}

export const formatDate = ({ date }: formateDateProps) => {
  return date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
