import { landingContentData } from "@/config/config";

const LandingContent = () => (
  <div className="flex-grow flex flex-col items-center justify-center px-4">
    <div className="max-w-4xl mx-auto text-white">
      <p className="text-s text-center leading-relaxed">{`It's me. Hi, I'm`}</p>
      <p className="text-6xl md:text-8xl font-bold text-center">
        {landingContentData.title}
      </p>
      <p className="text-base text-center leading-relaxed">
        {landingContentData.subtitle}
      </p>
    </div>
  </div>
);

export default LandingContent;
