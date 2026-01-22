import cx from "classnames";
import LandingContent from "@/components/Home/LandingContent";

const LandingContainer = () => (
  <div
    id="top"
    className={cx(
      "bg-sky-gradient flex min-h-screen items-center justify-center",
    )}
  >
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="animate-float absolute left-10 top-20 h-64 w-64 rounded-full bg-ocean/5 blur-3xl" />
      <div
        className="bg-sunset/5 animate-float absolute bottom-32 right-20 h-96 w-96 rounded-full blur-3xl"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-float absolute left-1/3 top-1/2 h-48 w-48 rounded-full bg-sky/30 blur-2xl"
        style={{ animationDelay: "4s" }}
      />
    </div>

    <LandingContent />

    {/* Bottom wave decoration */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <path
          d="M0 50L48 45.8C96 41.7 192 33.3 288 35.8C384 38.3 480 51.7 576 55C672 58.3 768 51.7 864 46.7C960 41.7 1056 38.3 1152 40.8C1248 43.3 1344 51.7 1392 55.8L1440 60V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
          fill="hsl(var(--background))"
        />
      </svg>
    </div>
  </div>
);

export default LandingContainer;
