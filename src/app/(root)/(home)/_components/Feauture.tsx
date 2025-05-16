import { cn } from "@/lib/utils";
import {
  Code2,
  Video,
  ScreenShare,
  CalendarCheck,
  Star,
  PlayCircle,
  Smile,
  Users
} from "lucide-react";


export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Real-Time Online IDE",
      description:
        "Collaborate on code with live syntax highlighting, multi-language support, and instant execution.",
      icon: <Code2 />,
    },
    {
      title: "Video & Voice Calling",
      description:
        "Communicate clearly with built-in high-quality video and voice calling — no third-party apps needed.",
      icon: <Video />,
    },
    {
      title: "Interview Scheduling",
      description:
        "Automate interview bookings, send calendar invites, and avoid back-and-forth emails.",
      icon: <CalendarCheck />,
    },
    {
      title: "Rate & Review Candidates",
      description: "Score candidates right after the session and keep track of evaluations in a structured format.",
      icon: <Star />,
    },
    {
      title: "Screen Sharing",
      description: "Share your screen or ask candidates to share theirs for debugging, walkthroughs, or whiteboarding",
      icon: <ScreenShare />,
    },
    {
      title: "Session Recordings",
      description:
        "Save and revisit interview recordings anytime for review, training, or compliance.",
      icon: <PlayCircle />,
    },
    {
      title: "Emoji Reactions",
      description:
        "Lighten the mood with fun, real-time emoji reactions during the interview.",
      icon: <Smile />,
    },
    {
      title: "Multi-Interviewer Support",
      description:
        "Add multiple interviewers to the same session with distinct roles and collaboration tools.",
      icon: <Users />,
    },
  ];
  return (
    <div className="">
       <div className="text-center mt-[5rem]">
        <h2 className="text-4xl font-bold mb-4">Features</h2>
        <p className="text-lg text-muted-foreground">
          Discover the power of EveryAI with our comprehensive features.
        </p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pxy-10 max-w-7xl mx-auto mt-20">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
