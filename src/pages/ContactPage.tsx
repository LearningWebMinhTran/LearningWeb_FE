import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

import MaterialIcon from "../components/atoms/MaterialIcon";
import UserNavbar from "../components/organisms/UserNavbar";
import PublicFooter from "../components/organisms/PublicFooter";
import PageTransition from "../components/layouts/PageTransition";

const ContactPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col font-display antialiased">
      <UserNavbar />

      <PageTransition className="flex-grow flex flex-col">
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <section className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-normal max-w-2xl">
              Have a question about a course or want to contribute to the blog? We'd love to hear from you. Fill out the
              form below or reach out via email.
            </p>
          </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e7edf3] dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-[#0d141b] dark:text-white">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                    <MaterialIcon name="mail" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#4c739a] dark:text-gray-400 mb-1">Email</p>
                    <a className="text-base font-medium hover:text-primary transition-colors" href="mailto:support@edublog.com">
                      support@edublog.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                    <MaterialIcon name="call" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#4c739a] dark:text-gray-400 mb-1">Phone</p>
                    <p className="text-base font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                    <MaterialIcon name="location_on" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#4c739a] dark:text-gray-400 mb-1">Office</p>
                    <p className="text-base font-medium">
                      123 Learning Lane,<br />Knowledge City, CA 90210
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-[#e7edf3] dark:border-gray-700">
                <p className="text-sm font-medium text-[#4c739a] dark:text-gray-400 mb-4">Follow us</p>
                <div className="flex gap-4">
                  <a
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f6f7f8] dark:bg-gray-800 text-[#4c739a] hover:bg-primary hover:text-white transition-all"
                    href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </a>
                  <a
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f6f7f8] dark:bg-gray-800 text-[#4c739a] hover:bg-primary hover:text-white transition-all"
                    href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                  <a
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f6f7f8] dark:bg-gray-800 text-[#4c739a] hover:bg-primary hover:text-white transition-all"
                    href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm h-56 w-full relative group">
              <img
                alt="Map view of city streets showing EduBlog location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqGquKGJWkciyPcLvwIaRIT4pL-O4cmchzxJm2XJl0UmZcrqlD34jMoD60IgnPj7er4AobkYs7mPdGy8WL8Y3xCIpf6DLQPvp4WmhYvnVJLC_AsLxoN0RZqJGGAPv9x8bbBPpqkUq_n-ajEQM2FkmhDIwjatwplcJL1kl3y-7f0CrwtMjl3fNWG3WDtNixHyopB5ncLN-ZNZ0cPA4Uz9f-cbTdppt3XKw5xvNa6kCPEtEf4DPQ-lj8K_xhVBhgjiKw40wB-z0MokXI"
              />
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <div className="bg-white dark:bg-[#1a2632] p-2 rounded-full shadow-lg">
                  <MaterialIcon className="text-primary text-3xl" name="location_on" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 sm:p-10 shadow-lg shadow-gray-200/50 dark:shadow-none border border-[#e7edf3] dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-8 text-[#0d141b] dark:text-white">Send us a message</h3>
              <form
                className="flex flex-col gap-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  toast.success("Message sent. We'll get back to you soon.");
                }}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-[#0d141b] dark:text-gray-200 text-sm font-semibold">Name</span>
                    <input
                      className="form-input w-full rounded-xl border border-[#cfdbe7] dark:border-gray-700 bg-[#f6f7f8] dark:bg-gray-800 text-[#0d141b] dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-[#93adc8]"
                      placeholder="Your full name"
                      type="text"
                    />
                  </label>
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-[#0d141b] dark:text-gray-200 text-sm font-semibold">Email</span>
                    <input
                      className="form-input w-full rounded-xl border border-[#cfdbe7] dark:border-gray-700 bg-[#f6f7f8] dark:bg-gray-800 text-[#0d141b] dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-[#93adc8]"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-[#0d141b] dark:text-gray-200 text-sm font-semibold">Subject</span>
                  <div className="relative">
                    <select
                      className="form-select w-full rounded-xl border border-[#cfdbe7] dark:border-gray-700 bg-[#f6f7f8] dark:bg-gray-800 text-[#0d141b] dark:text-white h-12 px-4 pr-10 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
                      defaultValue="">
                      <option disabled value="">
                        Select a topic
                      </option>
                      <option value="course">Course Inquiry</option>
                      <option value="blog">Blog Contribution</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#0d141b] dark:text-gray-200 text-sm font-semibold">Message</span>
                  <textarea
                    className="form-textarea w-full rounded-xl border border-[#cfdbe7] dark:border-gray-700 bg-[#f6f7f8] dark:bg-gray-800 text-[#0d141b] dark:text-white min-h-[160px] p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-[#93adc8] resize-y"
                    placeholder="How can we help you?"
                  ></textarea>
                </label>
                <div className="pt-2">
                  <button
                    className="group w-full sm:w-auto min-w-[160px] h-12 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-xl transition-all shadow-md shadow-primary/30 flex items-center justify-center gap-2"
                    type="submit">
                    <span>Send Message</span>
                    <MaterialIcon className="text-[20px] group-hover:translate-x-1 transition-transform" name="send" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </main>
        <PublicFooter />
      </PageTransition>
    </div>
  );
};

export default ContactPage;

