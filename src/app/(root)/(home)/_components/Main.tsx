import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { HoverBorderGradient } from "@/components/ui/Hover-border-gradient";

const MainPage = () => {
  const router = useRouter();
  return (
    <section className="w-full overflow-hidden">
      <div className="w-full max-w-none relative pt-20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge
            className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
           Free to use  for now
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Revolutionize Your Tech Interviews <Cover>Collaborate</Cover>. Code.
            Hire Smarter.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Host seamless technical interviews with real-time code
            collaboration, screen sharing, voice/video chat, scheduling,
            candidate ratings, and more — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 w-[12rem] h-12 cursor-pointer"
              onClick={() => router.push("/main")}
            >
              <span className="text-base font-medium text-center">Try It Free</span>
              <ArrowRight className="ml-2 size-4" />
            </HoverBorderGradient>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base cursor-pointer"
              onClick={() => router.push("/schedule")}
            >
              Book a schedule
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>14-day trial</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
            <Image
              src="/scrumble.png"
              width={1280}
              height={720}
              alt="SaaSify dashboard"
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
          <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainPage;
