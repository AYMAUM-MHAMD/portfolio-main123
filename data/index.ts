export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Ayman saved my entire project! His expertise in Next.js and Vendure was crucial to the success of our store. Professional work and great responsiveness.",
    name: "Jason Martinez",
    title: "",
    img: "./avatar/Jason Martinez.png",
  },
  {
    quote:
      "Working with Ayman was seamless and professional. He was able to transform our idea into a fully-fledged online store using the latest technologies.",
    name: "Alison Wright",
    title: "",
    img: "./avatar/Alison Wright.png",
  },
  {
    quote:
      "Ayman is talented and skilled. He built us a professional mobile app using React Native and seamlessly integrated it into our store.",
    name: "Daniel Hoover",
    title: "",
    img: "./avatar/Daniel Hoover.png",
  },
  {
    quote:
      "Ayman blew our mind with the quality of the code and the speed of implementation. He was able to manage a large project using Next.js and Vendure with professionalism.",
    name: "Megan Stone",
    title: "",
    img: "./avatar/Megan Stone.png",
  },
  {
    quote:
      "Our experience with Ayman was beyond excellent. He quickly understood our needs and provided powerful technical solutions that helped expand our business.",
    name: "Christopher Black",
    title: "",
    img: "./avatar/Christopher Black.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "E-commerce Development - Next.js and vendure",
    desc: "I build modern US stores using Next.js, For large projects, I rely on Vendure with the backend deployed on AWS.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile Applications - React Native",
    desc: "I develop integrated iOS and Android apps that seamlessly integrate with large e-commerce stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Projects - Integrated Stores",
    desc: "From concept to launch: designing with Figma, developing Next.js, and integrating global payment and shipping solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Front-End Development Leading - React and TailwindCSS",
    desc: "I lead the development of professional, high-performance front-ends for large and complex projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/gmail.svg",
    link: "mailto:aemnaldrce@gmail.com",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/AYMAUM-MHAMD",
  },
  {
    id: 3,
    img: "/Up.svg",
    link: "https://www.upwork.com/freelancers/~01615fd056792a4cb0",
  },
  {
    id: 4,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/%D8%A3%D9%8A%D9%85%D9%86-%D8%A7%D9%84%D8%AF%D8%B1%D8%B3%D9%8A-9422b1253/",
  },
];
