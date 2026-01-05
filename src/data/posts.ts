export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  categoryBadgeClass: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  dateLabel: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

export const posts: Post[] = [
  {
    slug: "mongodb-schema-design-patterns",
    title: "Introduction to MongoDB Schema Design Patterns",
    excerpt:
      "Learn the basics of designing flexible schemas for document-based databases. We explore embedding vs referencing and when to use each strategy for optimal performance.",
    content: [
      "Schema design is the foundation of any scalable MongoDB application.",
      "We'll review patterns for embedding related documents, referencing for high cardinality, and hybrid approaches.",
      "By the end, you'll know how to pick the right structure for read-heavy and write-heavy workloads.",
    ],
    category: "Database",
    categoryBadgeClass:
      "absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary uppercase tracking-wider",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBquApyb43CIpq0YqGzFldhj_k3i3-PfhFYvjWlAkTnGi1jkLn09k12wNowDa_JTrw2WloOXaig4NCVNUxGifjmMU3DzYQl1vCzbJJmkduYiatgI5p7cQIJD8iT85XA3mBzhGSnfseEiPQWmfD8_GuXU27u-aAisZKZD1uFrKxTzKoq4iY8lBPf1lm0x-672-e_gMHhyPG-yGlSCCj7cAvRmrke2tbC1ddwW9YvTiigeDDIaX_Q7hWWchpkitQU4ly_Jskv1QICdkF",
    imageAlt: "Abstract visualization of database schema structures",
    date: "2023-10-24",
    dateLabel: "Oct 24, 2023",
    readTime: "8 min read",
    tags: ["#mongodb", "#database", "#backend"],
    author: {
      name: "Jane Doe",
      role: "Database Expert",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAbVOgtBzY_JUJBTz9efoM7_MZ810mRFkodb1iJtR0zgQFo0S2Bilp_6TLj00nDCkKnFqo-nN13vaCI-mDwn5M1_LKVzHVErF0uPXQpXfB_zB-H5uRjLA6Qx3HO_wLuOcBeWDNgmwNkx3EJnrMXSL48ky9_K4bocYrlQpZFWkrZZ9IA_8rlWANJziXKfxo8xAHy0PPfoCKbrN8HCgcn8enR4CyumRKWq_rp6HW5x696ChbhzEv8uTP0Jhd3vFVqJ82zimg3ML5C9Jss",
    },
  },
  {
    slug: "css-grid-flexbox-layouts",
    title: "Mastering CSS Grid and Flexbox Layouts",
    excerpt:
      "A comprehensive guide to modern CSS layout techniques. Stop floating divs and start building responsive, robust interfaces with Grid and Flexbox today.",
    content: [
      "Grid and Flexbox solve different layout problems, and knowing when to use each is key.",
      "We'll walk through layout recipes for dashboards, cards, and responsive page shells.",
    ],
    category: "Frontend",
    categoryBadgeClass:
      "absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-indigo-600 uppercase tracking-wider",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhwGA3WCLWpxj505eMDqipxl8y2WfbyiU1OIpeLZCcKnfn-oXtkKuKpRSKefa5J5lImUYu5PDoNKrpOxxyKwclEFNjpilr7KG4JxD9-u0M2SMyVK60SkFZcjLXCGnJusQeuHjy_3IpbF35YiK88qKjtJgYNGoHYhQCtnrdE7qTJXrsah6H3WEMalojSNotC5UGNrVomlo5A6c877lLi5suQTN-4ici_W6gd6M6QQ_lH7kIhrVE4qECroRzZNP9IE0q9FoFwXf5Gbut",
    imageAlt: "Code on a computer screen showing frontend development",
    date: "2023-10-20",
    dateLabel: "Oct 20, 2023",
    readTime: "5 min read",
    tags: ["#css", "#frontend", "#design"],
    author: {
      name: "Mark Smith",
      role: "Frontend Wizard",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC8vh0l4-4-BrE14rYYP7KsHMJCpO7z2Hef8nD8hDWXNcrHFlftfj2J01E2W0-4pSwGkCNEvUwfGcMtZKbcLWRDftJmhAFxFqgSG26hfWfhwCYWqmmn2ACEGbna5GM34KAYnDmhkEehbNeMgIZg-ivvM3wz5AapBu_xQ5U3FvDC8hcbs42T5UJgMmBn_f8winsf2-ylhHDt-UXLZCFWBdJMhmwB5QHbbI9cbYDc6fxYzcXG9rV0tORYdGRSDVfokRjfTz-4sGUMSEJY",
    },
  },
  {
    slug: "connect-iot-device-to-cloud",
    title: "Connecting Your First IoT Device to the Cloud",
    excerpt:
      "Step-by-step tutorial on connecting an ESP32 microcontroller to AWS IoT Core. We cover secure certificate generation, MQTT messaging, and basic data visualization.",
    content: [
      "This guide walks through provisioning and secure connectivity for a first IoT prototype.",
      "You'll set up certificates and test MQTT messages with a simple device simulator.",
    ],
    category: "IoT",
    categoryBadgeClass:
      "absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-teal-600 uppercase tracking-wider",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoaVT9o2--jWUaw51lPz9YhuWHY4s3ZOpJy05NqDhPXRrWpJfHsOfR8lt5Iy5InZD4I-hlPjBrc3QkOdR6cjvy0ivu0MDZrg3HIrBgxZqi1B1npNXtqdI1CErfDUebO7BBL56VDbLbswvRYLQlTed5o3-Ca82BtzS49etqN6r1G6ifPZHGoiHJ6kaifY0jtln6unbPn64123XsVWtIg72gnqCqLrDXFeTyolXxYZ4b-um2baC9OmkEJfuE-nh5pkTNZwxNhUZ6lY7g",
    imageAlt: "Electronic circuit board close up representing hardware",
    date: "2023-10-15",
    dateLabel: "Oct 15, 2023",
    readTime: "12 min read",
    tags: ["#iot", "#cloud", "#aws"],
    author: {
      name: "Sarah Lee",
      role: "IoT Specialist",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1RAxOTDPDYTzJtw7DvbR8-A19SsLpmxaaC4HeePCYpUlN_8PoGiHGeBomLqN_Ob0YCmN1Hz4O2pY-JSrzdPlZBNXUmwLIrmjyHcqh6XkNj7z-xJVkCTsnluLnIPMvsr0NoyQv0wbrr11OHvf_Zk2gKbF-BHKh_ZMuiqaRoZ0Kdad5MNKPrnfxZ9M0uJtc8DsRu44PWBIKnQr1M5JNgbnvNUrKbuaM0yr8p0qvopCk35ssztgsfdTVbQxAv2ZrlIQKDl8tkKeWR-Tz",
    },
  },
  {
    slug: "large-language-models-beginners",
    title: "Understanding Large Language Models for Beginners",
    excerpt:
      "Demystifying the magic behind ChatGPT and other LLMs. What are transformers, how do they learn, and what are the ethical considerations we need to be aware of?",
    content: [
      "We'll break down tokenization, attention, and training data at a high level.",
      "You'll also learn where LLMs shine and where they still need guardrails.",
    ],
    category: "AI & ML",
    categoryBadgeClass:
      "absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-purple-600 uppercase tracking-wider",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeRx753SZQq_RYwQDXSHcykhru3oxbPtIXrtzcW0QNZs3eJkbGoUslU_6k53uLdMXM-_8obnx7QeZHS4G2JPWT_c2oDW5KZ9HgmILah74YSHBfO8UB1GstDS9U5n7pl8lUhah1o4vVL-pXynMuRlVeC3UJwSSl0ZqNuspxwiU_p7zqQtpeFXfPC2rzCL21bvhqHrTW5lBYbOKxaehYUprJKjrmYA_0zydHeClJHTd9Bb56MqiUe2bx-tHiG0awjPNL_hOeTHrj1Png",
    imageAlt: "Abstract gradient mesh representing AI neural networks",
    date: "2023-10-12",
    dateLabel: "Oct 12, 2023",
    readTime: "6 min read",
    tags: ["#ai", "#ml", "#llm"],
    author: {
      name: "Alex Chen",
      role: "AI Researcher",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDJB_TsqpfKNIJ1Nuc1ZOwzMfkwefEMfoQ2p1Xm2rmVNHTYNcluM1Vqa3cdzCn7y94vOjeZtett8F2bHrzFvu1dEaLXHc5azI76InswRWURT9nfvpu6F8Ie3Lp2yBbdNcUHOCxTT-mK9Xxm_hIMudKFAPzMgXd2ZYzsP4dtYvppdKWossbLwG7EISxJLzqnNhCvSBW20j5jWd_m2h8UCL1tCv5dwgrJJkRzBhWS_nZwZjmzI9kCuqAz46XPUv7RacYkq5e68Z3jZYEL",
    },
  },
  {
    slug: "effective-studying-without-burnout",
    title: "10 Tips for Effective Studying Without Burnout",
    excerpt:
      "Discover techniques like Pomodoro and active recall to maximize your retention while keeping stress levels low during exam season.",
    content: [
      "Build a sustainable study rhythm with timeboxing and structured breaks.",
      "We'll outline templates for daily review and weekly synthesis.",
    ],
    category: "Productivity",
    categoryBadgeClass:
      "absolute top-3 left-3 rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDoX6yA0Eqz3nyXkAOyNqBFbwlJ8R4JpUgHwq0y5Bhhbx_ZmeEXcVGIkT7cTAjDvEWPFHjOI2KBTWL1H9lD7APtoMn_lfWB5xQ9V8Tg11BKSLrnvKsFZovcT05iMTzyyjlmP4TYBF5xrFULi94v-0C-utdOdko2orzjXlGkfNn6xokDsqUrBl0CIqGxy7y8rpR2Hxk1MVq8OZRTJhlNBR9Ap_BtJ5ctvgOPMV9HKSmHupgBvx2-2uXYVtRGBDe77MejFZVAa_g-Q1EG",
    imageAlt: "Student organizing notes for effective studying",
    date: "2023-10-22",
    dateLabel: "2 days ago",
    readTime: "6 min read",
    tags: ["#productivity", "#study"],
    author: {
      name: "Alex Chen",
      role: "Learning Coach",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBDmaXdPy0E0JbXXp3jw5WvL-F8T410Wz2qVvKwCf0UpZo-bxTjaOQNGmiAjMIZN5Y-UZh39uTZorCHpDWiRZo2z2iIBjMvKJVque0zBQ9YixrZUQ-BIe7KIPGvbBSCyMvimXQuXQTEq4_-jRWK1tWWjgGNlb6xHbr3M51VgpjYT_dXNcWrvEH8t8PrdWngAZiY0MGTjL5_s3anml8gJtAc3UNVCcS84Gn60acP30kVlmMxJLcaH3FHYsexQLyd1b1ICmtS5Qd8UIQq",
    },
  },
  {
    slug: "intro-to-react-hooks",
    title: "Intro to React Hooks: Simplified for Beginners",
    excerpt:
      "useState, useEffect, and custom hooks explained simply. Build cleaner components with less boilerplate code.",
    content: [
      "We cover the most important hooks and show how to avoid common pitfalls.",
      "Get practical patterns for extracting reusable logic into custom hooks.",
    ],
    category: "Programming",
    categoryBadgeClass:
      "absolute top-3 left-3 rounded-md bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmTeftHaumampdmsljYo8Y40VkVh5QKmt1TH-1yUUKy7KLRlTTuGNwCTv-O8CcvxjPtRAoXuB_iyRXx4CHrKwGhbN_DjQ7GHdFtXvaw79-o9a77XoY5JWHAdmkTattr8XuhZ7fOMTsUbizhMW4yXIZDXGnLtgZvQhCT_D5Zw_S_Th8lPC_D4j87ONdh-Q-yH65IhCPD5vJNDB2jJX_LG-S4UGtk4nHCLbU-HVj91Y0tegejBsGdXbcnT3WSrIKuJ4Nl_gmXkzVtE-m",
    imageAlt: "React code snippet on a dark monitor",
    date: "2023-10-20",
    dateLabel: "4 days ago",
    readTime: "7 min read",
    tags: ["#reactjs", "#javascript"],
    author: {
      name: "Jordan Lee",
      role: "Frontend Engineer",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlZr55l9FJJzAIRTLFYED4rhUDJ0N-02ZrAAeI4NDPfB7Fw_ZCRoek0mGK8Mf87aQxigs11tkNU7WzSHc_8U1XEXL2qIfExST0lknhOg6kg55zQDRAPpkO0KBpEMqPp9Ufv4Vs509oY8MCuHolOZmQGfR30iSlBwXUC7bqH6BkI5QPP0iVArtB7j4m3bTMJgj729X4GSoSi-x3dSP8UgsUt7FDPbmEM0WyoiFA-Y1jI76VhLxVCNFZBKu-sQdbl6_VRlePtKm_ULrC",
    },
  },
  {
    slug: "history-of-modern-art",
    title: "The History of Modern Art Movements",
    excerpt:
      "From Impressionism to Surrealism, explore how the art world evolved during the 19th and 20th centuries.",
    content: [
      "We trace key movements and the artists who defined them.",
      "You'll also see how social change influenced the evolution of visual culture.",
    ],
    category: "Humanities",
    categoryBadgeClass:
      "absolute top-3 left-3 rounded-md bg-purple-100 px-2.5 py-1 text-xs font-bold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhgBYivoFh1Fm9zvQMQ0-YzEgaWLsQ44704kffYzIas2lTUwUrzUE7SHziioirVYTqnDbjjCOKK4I67RB2OZ0xa_O0yFtxb0GIQxDtxC6Yn9SbEQoO8TB99OW-PTIdZKItKjjOqRYt69KXb5HNpUKTD3yWbSB__ACV-kia-ieWTiWTPIKhIxxGNJrdh02oL6jAO5h7N3DeyvniJyOlhspo45-92kO0dS5wqWtTUg-yvaiNC29UZS4WH4MlXoDHJgMnd_G4TekWAEC1",
    imageAlt: "Abstract colorful oil painting representing modern art",
    date: "2023-10-12",
    dateLabel: "1 week ago",
    readTime: "6 min read",
    tags: ["#art", "#history"],
    author: {
      name: "Maria Garcia",
      role: "Art Historian",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCB0E6Qo6s2PG4HNR4zQ3eANcSnHD5D0DoAGbPOEO-DSPxZ5KUAYL2_TYunwHUn0OpluRrqNMP1wmNqR68HUI4w2hBvS1Q7_n47qXvTzBokUzdkQUlzpi_aRdWO4Rq4P-Y-ND2XSHl-cuDJ_dFdBk25CUL_8b2vS7meSL4s2ubg_gCFzFqFgit87yPxDNDj3usZlq3CE7lIu3xmTfuzUi3BEoujGECtbiG_R-WPoguBAuyO9DZunF-PNmcjvHdoOevUVRI4rPvegFnz",
    },
  },
  {
    slug: "understanding-black-holes",
    title: "Understanding Black Holes",
    excerpt:
      "A beginner's guide to the most mysterious objects in our universe and what they tell us about gravity.",
    content: [
      "Black holes are regions where gravity is so strong that not even light can escape.",
      "We summarize event horizons, singularities, and why black holes matter for physics.",
    ],
    category: "Science",
    categoryBadgeClass:
      "absolute top-3 left-3 rounded-md bg-indigo-100 px-2.5 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdtUJJnOJwbmY1Uk-C5vJY6E2n9GG1TbYy9qsGQj9QUCdgJUaNW87mr6kBZ7SNeK00iGmu4OBLkeiOzGO5fyI_sCuR26uvVP-I9vOaSUCo44k7o0LXXSPL5L6_3Q-YvjFdjGKzY327DmDJikvyvkH8wI4AijlZZ1PVW1-n46bj8jpCd77zV1CAFa6e4TUk366-fkZO9xh1djLG94Vr48fydzguRaaQF8RWVEYgGq0vUvBk94xsM8Za4Xh7OwleonuM3S_o6uSyjFE9",
    imageAlt: "Telescope pointing at night sky",
    date: "2023-10-06",
    dateLabel: "2 weeks ago",
    readTime: "8 min read",
    tags: ["#science", "#space"],
    author: {
      name: "Dr. Ray",
      role: "Astrophysicist",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBP1WpKaA06K5rbdAkwAFclh-tNzPYyvtXaeqcb7oIeas0gU-p5fIChyRrh6rlGBA8b41pWq2PfGRsvu_-LlaLndVfoRXklpk3b8Klx0T0gYVt1Hb6JLr7shi9nyBRNxEQ37V1JT9Ez783kWPl_S_Uj5u3ALimFl2aeD8ALUqNAdWgcelx4kJqg3uETcH4-vKJtuEQPXRTDflSimoYdd289J6LRpjpZMuRZcBCA3aYudC64WFQianX3q6SPxAPm5xe4Y1IL7PMrcOpE",
    },
  },
];

export const featuredPost = posts[0];

export const latestPosts = posts.slice(1, 7);

export const getPostBySlug = (slug: string) => posts.find((post) => post.slug === slug);

export const getCategories = () => {
  const counts = new Map<string, number>();
  posts.forEach((post) => counts.set(post.category, (counts.get(post.category) ?? 0) + 1));
  return Array.from(counts.entries()).map(([name, count]) => ({ name, count }));
};

export const getTags = () => {
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags.values());
};
