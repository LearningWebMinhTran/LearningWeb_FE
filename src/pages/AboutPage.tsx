import { Link } from "@tanstack/react-router";

import MaterialIcon from "../components/atoms/MaterialIcon";
import UserNavbar from "../components/organisms/UserNavbar";

const AboutPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden transition-colors duration-300">
      <div className="relative flex flex-col min-h-screen w-full">
        <UserNavbar />

        <main className="flex flex-col items-center justify-center w-full flex-1">
          <div className="layout-content-container flex flex-col max-w-[960px] w-full px-4 md:px-6">
            <section className="@container py-8 md:py-16">
              <div className="flex flex-col gap-8 px-0 md:px-4 py-6 @[864px]:flex-row items-center">
                <div className="w-full @[864px]:w-1/2 aspect-video rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-sm relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeJVX91zoZPr0yeYn7nlx5rRfZXqXOO7A8O2xAnlnhKZFnESAoNK9fqnnRNu5i1YNvR13nAv0BmYfTVJ2R63UYTDE290wTBnQWosMFK7JgveHLqK-Hh9ERF28tR1JVFV15Zp6-wJ-E93OPlpvL8eDJP15pRDHIaHao7Xnfx5_1hnjtjnFPvdsb92b-k3REVVmyZKsUj5CLYyh-g7duCOJaiP7fGtwvNEfGd75bdlQr3Fvg3Oq451os4_zqF2wghTyk4J2j7Ixniypj')",
                    }}
                  ></div>
                </div>
                <div className="flex flex-col gap-6 w-full @[864px]:w-1/2 justify-center">
                  <div className="flex flex-col gap-3 text-left">
                    <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                      Empowering Learners Worldwide
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal leading-relaxed">
                      We are dedicated to providing free, accessible, and high-quality educational content for everyone.
                      Join our growing community of lifelong learners and curious minds today.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-blue-500/20"
                      to="/community">
                      Join Our Community
                    </Link>
                    <Link
                      className="flex items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 text-base font-bold leading-normal transition-colors"
                      to="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-10">
              <div className="px-4 pb-6">
                <h2 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight tracking-tight">
                  Our Purpose
                </h2>
                <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <MaterialIcon className="text-[32px]" name="public" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Our Mission</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                      To democratize education through open-source knowledge and make complex learning topics accessible
                      to anyone, anywhere, regardless of their background or resources.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <MaterialIcon className="text-[32px]" name="visibility" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Our Vision</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                      A world where quality learning resources are just a click away, bridging the gap between curiosity
                      and expertise, and fostering a global culture of continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-10">
              <div className="flex flex-col md:flex-row gap-10 px-4 items-center">
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <div className="pb-2">
                    <h2 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight tracking-tight">
                      Our Story
                    </h2>
                    <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
                  </div>
                  <div className="prose dark:prose-invert text-slate-500 dark:text-slate-400 leading-relaxed">
                    <p className="mb-4">
                      EduBlog started as a small passion project in a university dorm room. Frustrated by the lack of
                      up-to-date and free resources for modern web technologies, we decided to take notes publicly.
                    </p>
                    <p className="mb-4">
                      What began as a simple collection of markdown files has grown into a comprehensive platform
                      serving thousands of learners daily. We believe that knowledge should not be gated behind
                      paywalls.
                    </p>
                    <p>
                      Today, we are a small but dedicated team of educators, developers, and writers working together to
                      build the best free learning hub on the internet.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div
                    className="aspect-square md:aspect-[4/3] w-full bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden relative shadow-lg"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwi_JJZGHbOdraKN5m1GfTMPEwl9GXcmLswPbswuHwAlDvHptYRrMFo1NQsx4RD0sGGqgGg9cbIwcSyJeTlwOR0-7jBr1XG7wiX5ENxc5VENxBBsxFpPqt_tRn1zxvHVYvS4oxqOHtSCWURMtVFNMGYswE0vIbaIlGGmf0tZNX5KR644evaB8oasSC7iasrcIbKNzdz-HrDuVmt_on3jJCZ-nDjUm1FOrWF_bv6SjhhSwt-52iSjKl9UHM4DsutnvUoX8m0ZfrSj2O')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>
            </section>

            <section className="py-12 bg-white dark:bg-slate-800/50 rounded-2xl my-8 border border-slate-100 dark:border-slate-800/50">
              <div className="px-8 pb-10 text-center max-w-2xl mx-auto">
                <h2 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight tracking-tight mb-3">
                  What We Offer
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Everything you need to go from beginner to pro, completely free.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8">
                {[
                  {
                    icon: "menu_book",
                    title: "In-depth Tutorials",
                    description: "Comprehensive guides that take you through complex topics step-by-step.",
                  },
                  {
                    icon: "school",
                    title: "Career Paths",
                    description: "Structured learning paths designed to help you master job-ready skills.",
                  },
                  {
                    icon: "code",
                    title: "Project Based",
                    description: "Learn by doing with starter projects and code challenges.",
                  },
                ].map((offer) => (
                  <div className="flex flex-col items-center text-center gap-4" key={offer.title}>
                    <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-2">
                      <MaterialIcon className="text-[36px]" name={offer.icon} />
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold">{offer.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-10 mb-10">
              <div className="px-4 pb-8">
                <h2 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight tracking-tight">
                  Meet the Educators
                </h2>
                <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                {[
                  {
                    name: "Sarah Jenkins",
                    role: "Lead Instructor",
                    imageUrl:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfcKkTnxhdV4uyxQubfVaF031YmrY81GoJ7PmIDsa6Fw6735jYqoy8n6QYAXiZ5woVFr9MWFELwsHrjNQq5A91j4yuPnTD6_cXsFUuZEwvGe7TI_yuXsOF0am6LEj9-tYm5u7lSV8pGDzwo3gefrL6DXfvj4mcTyDfOnFbsNNzAUltAPlZCeQ7Eh83nJxblYZ1eXjpA3yq8Xa413sezOhKfbggx3AY3cuIyXbUoP1KXDG9xBnrX0miUw-NFq2TLyMGCWO7FOeOgdKC",
                  },
                  {
                    name: "Michael Chen",
                    role: "Senior Developer",
                    imageUrl:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuACdQ12MAhLQOTfDXR6tu5FU4ee7RbDGpWR5koKyjYe-mr1U3dGVFxHK_n0RdgIZYwd082RvKdlPHWwWcGMmXAVNiK5KYiVmsABrunsXOKrzG6S39ocwf-Wh7o8-BG54e2AbvemeSVOx-Nh3uwx5iI5zeNfWd9U4I2FH1G590WYhyzlWm4gxb2bvmVU2FDHB8wRnp-UA-X9YC5OV0KqrY_e5PApZz2NbSY9BKE_i99tgx_0YrYfXYpFppMBxRVup9j5XsKUpjtgLgnm",
                  },
                  {
                    name: "Priya Patel",
                    role: "Content Strategist",
                    imageUrl:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmKQeSN1atdLfto_Z_Us5LuLj9YylE2V2Tx3e8AIfen7zcnCafd_4YVDYy97iUVjg1ZWI5APK6KeZod6M64mYZhctMCG7RsvbmKpID8YC62sr8IqjU-390szzfwSAEMImEa7TgmHrSwSvmg4M2VXryQIfxf7Dgq0VgHswKIPQTbP-k9jnkro4P6KBkxL5uCLYoQElaniJAZGo9__Z3PbiuC8_NnF-q1UFDuRMWOWYsPbxmWkUI0rJUF_85KsOA73pYvlBLRPCbJ-d3",
                  },
                  {
                    name: "James Wilson",
                    role: "Community Manager",
                    imageUrl:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuA82YRXBej9EFPZSwJz0JKeoUrKG3fRqJ3dziwYoHvH66ZrEC9RUaFM0Jm_l8n_5slRfTGKYuT0IycDZJi_txQ2C4qKKMgcuD_AT3yfphcdfYWGRQxo75flzvKpGO_mKAIbJHmuQ36VooB32J3YpPy36Jv2ef0EIfH3m-pDto7VdMN80SGcZoET3k87qfPcII57O_r-HDZVfa-X9_7mUyMGl4NFShG4z8ZSgPn_2R05l14h8gOTB_sCG7O_AAD5mVpaT0g2OEmose-o",
                  },
                ].map((member) => (
                  <div className="flex flex-col items-center gap-3 group cursor-default" key={member.name}>
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-md group-hover:border-primary transition-colors">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${member.imageUrl}')` }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-slate-900 dark:text-white font-bold text-base">{member.name}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-auto">
          <div className="max-w-[960px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col gap-4 max-w-xs">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                <div className="size-6 text-primary">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clipRule="evenodd"
                      d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="font-bold text-lg">EduBlog</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Empowering the next generation of creators and thinkers through open education.
              </p>
            </div>
            <div className="flex flex-wrap gap-10 md:gap-20">
              <div className="flex flex-col gap-3">
                <h5 className="text-slate-900 dark:text-white font-bold text-sm">Platform</h5>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" to="/courses">
                  Courses
                </Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" to="/library">
                  Tutorials
                </Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" to="/community">
                  Community
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-slate-900 dark:text-white font-bold text-sm">Company</h5>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" to="/about">
                  About Us
                </Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" to="/courses">
                  Careers
                </Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" to="/contact">
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-slate-900 dark:text-white font-bold text-sm">Legal</h5>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" to="/about">
                  Privacy Policy
                </Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" to="/about">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-[960px] mx-auto px-4 md:px-10 mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <p>c 2024 EduBlog Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <MaterialIcon className="text-[18px] cursor-pointer hover:text-primary" name="thumb_up" />
              <MaterialIcon className="text-[18px] cursor-pointer hover:text-primary" name="share" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;

