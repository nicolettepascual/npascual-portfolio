import SectionContent from "./SectionContent";
import SectionTitle from "./SectionTitle";

const SectionHeader = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div className="mb-16 text-center">
    <SectionContent text={content} />
    <SectionTitle text={title} />
    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-ocean to-sky" />
  </div>
);

export default SectionHeader;
