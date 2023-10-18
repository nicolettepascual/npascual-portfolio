import { landingContentData } from "@/config/config";

const LandingContent = () => (
  <div className="flex flex-grow flex-col items-center justify-center px-4">
    <div className="mx-auto max-w-4xl text-white">
      <p className="text-s text-center leading-relaxed">{`It's me. Hi, I'm`}</p>
      <p className="text-center font-handwriting text-8xl md:text-9xl">
        {landingContentData.title}
      </p>
      <p className="text-center text-base leading-relaxed">
        {landingContentData.subtitle}
      </p>
    </div>
  </div>
);

export default LandingContent;
