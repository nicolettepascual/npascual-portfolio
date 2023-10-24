import { Typography } from "@material-tailwind/react";

const TimelineTitle = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <Typography
      variant="h1"
      className="my-2 font-handwriting font-thin text-white"
    >
      <i className={`fa-solid fa-${icon} text-2xl`} /> {title}
    </Typography>
  );
};

export default TimelineTitle;
