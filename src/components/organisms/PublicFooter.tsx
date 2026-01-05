import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const APP_LOGO =
  "https://res.cloudinary.com/dtwrwvffl/image/upload/v1767611236/whiteBgColor2_anh6zf.png";

const PublicFooter = () => {
  return (
    <footer className="w-full border-t border-[#e7ebf3] bg-white py-12 dark:bg-[#101622] dark:border-slate-800">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <img alt="LearningWeb logo" className="h-12 w-32 object-contain" src={APP_LOGO} />
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Empowering learners worldwide with free, high-quality educational content.
            </p>
            <div className="flex gap-4 mt-2 text-slate-400">
              <span>Blog</span>
              <span>Newsletter</span>
              <span>RSS</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#0d121b] dark:text-white">Explore</h4>
            <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/courses">
              Programming
            </Link>
            <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/library">
              Data Science
            </Link>
            <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/library">
              Humanities
            </Link>
            <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/library">
              Productivity
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#0d121b] dark:text-white">Company</h4>
            <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/about">
              About Us
            </Link>
            <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/courses">
              Courses
            </Link>
            <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/community">
              Community
            </Link>
            <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/contact">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#0d121b] dark:text-white">Stay Updated</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Get the latest articles sent right to your inbox.
            </p>
            <form
              className="flex flex-col gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                toast.success("Thanks for subscribing!");
              }}
            >
              <Input placeholder="Your email address" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-[#e7ebf3] pt-8 sm:flex-row dark:border-slate-800">
          <p className="text-xs text-slate-400">c 2024 EduBlog Inc. All rights reserved.</p>
          <p className="text-xs text-slate-400 mt-2 sm:mt-0">Powered by MongoDB</p>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
