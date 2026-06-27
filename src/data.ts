export const fullVersionLink = "https://resume.betich.me";
export const sourceLink = "https://github.com/betich/resume";
export const ogImageUrl =
    "https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg";

// Tags used for filtering the resume into focused "versions".
// `resume` marks items curated for the general overview; swe/robotics/design
// produce focused CVs. An item can belong to multiple categories.
export type Tag = "resume" | "swe" | "robotics" | "design";
export const ALL_TAGS: Tag[] = ["resume", "swe", "robotics", "design"];

export const introData = {
    name: "Panithi Makthiengtrong",
    nickname: "Thee",
    phone: "",
    email: "betich365@gmail.com",
    github: "betich",
    linkedin: "betich",
    instagram: "ttthhheeeeeeeee",
    facebook: "panithi.makthiengtrong",
    location: "Bangkok, Thailand",
    website: "betich.me",
};

export const technologies = [
    {
        section: "Programming Languages:",
        details: "JavaScript, Node.js, TypeScript, Python, Golang, C++, C (Arduino)",
        tags: ["resume", "swe", "robotics"] as Tag[],
    },
    {
        section: "Libraries:",
        details:
            "ReactJS, NextJS, TailwindCSS, ExpressJS, Svelte, Pytorch, Tensorflow, Astro, Ionic React, Expo",
        tags: ["resume", "swe", "robotics"] as Tag[],
    },
    {
        section: "Robotics & Embedded:",
        details:
            "ROS2, MuJoCo, Arduino, Raspberry Pi, Raspberry Pi Pico, I2C/SMBus, BLE, RF, ArtNet/DMX, PCB Design (KiCad, EasyEDA), Fusion 360, stepper/servo motor control",
        tags: ["resume", "robotics"] as Tag[],
    },
    {
        section: "Tools:",
        details:
            "Git, Docker, Firebase, Vercel, Github Actions, AWS, Google Cloud Platform",
        tags: ["resume", "swe", "robotics"] as Tag[],
    },
    {
        section: "Other:",
        details: "Figma, Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro",
        tags: ["resume", "design"] as Tag[],
    },
];

export const educations = [
    {
        head: "B.Eng. Robotics and Artificial Intelligence Engineering (International Program)",
        details: "Chulalongkorn University, TH. 2022-2026",
        tags: ["resume", "swe", "robotics", "design"] as Tag[],
    },
    {
        head: "Science-Mathematics Program",
        details: "Triam Udom Suksa School, TH. 2019-2021",
        tags: ["resume", "swe", "robotics", "design"] as Tag[],
    },
];

export const workExperiences = [
    {
        position: "Software Engineer",
        type: "Internship",
        company: "Sertis Company Limited",
        url: "https://sertiscorp.com/",
        years: ["Jun 2025", "Oct 2025"],
        tags: ["resume", "swe", "design"] as Tag[],
        details: [
            "Helped develop and implement a design tokens system that synchronizes work from Figma by the UX/UI team with the dev team by converting them into code automatically using Style Dictionary.",
            "Used ReactJS to build front-end systems for enterprise-grade applications.",
        ],
    },
    {
        position: "Data Scientist",
        type: "Internship",
        company: "Bualuang Securities Public Company Limited",
        url: "https://www.bualuang.co.th/",
        years: ["Jun 2024", "Jul 2024"],
        tags: ["resume", "swe", "robotics"] as Tag[],
        details: [
            "Developed artificial neural network models to predict values and classify data based on historical data.",
            "Researched about recommendation systems and deep recommender systems to effectively recommend products to customers.",
        ],
    },
    {
        position: "Front-end Web Developer",
        type: "Part-time",
        company: "Gamlytics (startup)",
        url: "https://gamlytics.gg/",
        years: ["Jun 2023", "Aug 2023"],
        tags: ["resume", "swe"] as Tag[],
        details: [
            "Developed the web frontend of Gamlytics, an AI powered analytics and management platform for E-Sports using NextJS, React and TailwindCSS.",
        ],
    },
];

export const activityExperiences = [
    {
        position: "Head or Marketing and Communication",
        company: "Engineering Student Committee, Chulalongkorn University",
        url: "https://instagram.com/escchula",
        years: ["Jun 2024", "current"],
        tags: ["resume", "design", "swe"] as Tag[],
        details: [
            "Managing the social media accounts of ESC (instagram.com/esccchula, fb.me/escchula) with more than 440K views and 57k reach combined per month.",
            "Set up the ESC design system — a combination of design tokens, variables, components, and styles kit for the ESC design team quickly create new designs using Figma.",
            "Initiated the Chula Intania Shop project, an online shop for Faculty of Engineering, Chulalongkorn University merchandise with an estimated revenue of more than 40k THB in the span of 2 products.",
            "Led the creation of 300+ artwork pieces (posters, infographics, social content) publicizing events across the Faculty of Engineering.",
            "Revised and documented the Brand Identity of ESC (logos, typography, color palette, usage) to be more modern and professional.",
        ],
    },
    {
        position: "Inner Member of Internal Affairs",
        company: "Engineering Student Committee, Chulalongkorn University",
        url: "https://instagram.com/escchula",
        years: ["Jun 2023", "May 2024"],
        tags: ["design"] as Tag[],
        details: [
            "Organized events and activities for more than 3,000 engineering students at Chulalongkorn University.",
            'Coordinated with Chula University Engineering Alumni to host the Intania Music Festival, a music festival aimed to celebrate the re-opening of "Larngear", a community space in the Faculty of Engineering.',
        ],
    },
    {
        position: "Head of Graphic Design (Founding Member)",
        company: "Intania Production House",
        url: "https://instagram.com/intania_production_house",
        years: ["2023", "2024"],
        tags: ["design"] as Tag[],
        details: [
            "Initiated and build a club with more than 100 members in Faculty of Engineering, Chulalongkorn University that gathers students who are interested in graphic design and video production together.",
            "Planned workshops and activities for club members to learn and improve their graphic design skills.",
        ],
    },
    {
        position: "Core Team",
        company: "Thinc. (Thailand Incubator Club)",
        url: "https://thinc.in.th",
        years: ["2022", "current"],
        tags: ["resume", "swe", "design"] as Tag[],
        details: [
            "Contributed in building a community of Chulalongkorn University students who are interested in using technology to create things that make an impact on society.",
            "Advised club members on how to develop their projects and their software development, data science, product design skills in club projects.",
            "Re-branded the club with new typefaces and color schemes, and was the main designer for club event posters.",
            "Organized events and workshops for students to learn how to use technology to build prodjects.",
            "Broadcasted the club's activities to the through social media.",
        ],
    },
    {
        position: "President",
        company:
            "Information System Development Department, Student Government of Chulalongkorn University",
        url: "https://github.com/isd-sgcu",
        years: ["Jun 2023", "May 2024"],
        tags: ["resume", "swe"] as Tag[],
        details: [
            "Coordinated with stakeholders to develop and maintain several services and websites in 2023 (Rub Puen Kao Mai 66, CU Open House 2024, JohnJud, ISD Website, CU-TU Unity Football Match 2024) for the Student Government of Chulalongkorn University (SGCU) which is used by more than 6,000 students.",
            "Managed a team of more than 50 developers and designers to develop and maintain services for the Student Government of Chulalongkorn University (SGCU).",
            "Acted as Project Manager of the CU-TU Unity Football Match 2024 interactive website project, an interactive game made for the CU-TU Unity Ball 2024 event (github.com/isd-sgcu/cutu-2024).",
            "Coordinated with the creative team to develop the E-Stamp and Registration system fors Rub Puen Kao Mai 66, an event that welcomes new students to Chulalongkorn University (github.com/isd-sgcu/rpkm66-frontend).",
        ],
    },
    {
        position: "Front-end Developer",
        company:
            "Information System Development Department, Student Government of Chulalongkorn University",
        url: "https://github.com/isd-sgcu",
        years: ["Jun 2022", "May 2023"],
        tags: ["swe"] as Tag[],
        details: [
            "Developed the front-end for 2 projects in 2022 using NextJS and Ionic React",
            "Developed the CU Wander App using Ionic React, an application that lets you collect rewards by walking around Chulalongkorn University to redeem discounts for restaurants around Chulalongkorn University.",
            "Developed the frontend of the Fresher's Fair 65 (Rub Puen Kao Mai) website, an E-Stamp and Registration website for Rub Puen Kao Mai 65, an event that welcomes new students to Chulalongkorn University (github.com/isd-sgcu/rnkm65-frontend).",
        ],
    },
    {
        position: "Event Host",
        company: "Creatorsgarten",
        url: "https://creatorsgarten.org",
        years: ["2021", "current"],
        tags: ["resume", "swe", "design"] as Tag[],
        details: [
            "Hosted the Seventh and Eighth Stupid Hackathon in Thailand, a hackathon where participants are encouraged to create something useless that nobody needs for fun. The seventh event was held at the Knowledge Exchange Center, Bangkok, Thailand with more than 150 participants, and the eighth event was held at the Faculty of Engineering, Chulalongkorn University with more than 120 participants.",
            "Volunteered at events hosted by Creatorsgarten such as the 5th and 6th Stupid Hackathon in Thailand.",
        ],
    },
    {
        position: "Website Developer",
        company: "Triam Udom Clubs Management Committee",
        url: "https://clubs.triamudom.ac.th",
        years: ["May 2021", "Apr 2022"],
        tags: ["swe"] as Tag[],
        details: [
            "Designed, developed and maintained several services for the Clubs Registration System (Clubs data editor, etc.) using NextJS, used by more than 3,000 students",
            "Developed over 4 full-stack web applications for Triam Udom Suksa School, streamlining club registrations, study and exam scheduling, and event engagement for over 3,000 students. Highlights include maintaining the Club Registration System, creating a Schedule Generator, building an interactive Open House 2022 website, and designing an Online Loy Kratong animation. Built with NextJS, TailwindCSS, Framer Motion, and Firebase.",
        ],
    },
];

export const projects = [
    {
        name: "IDC RoboCon 2025",
        details:
            'Competed in IDC RoboCon, an international robot design competition in Shanghai, China, with teams from Thailand, China, Japan, South Korea, Egypt, and India. Built a builder robot and a "mission scorer" robot in ~2 weeks — covering design, fabrication, and programming. Used ROS2 and MuJoCo for simulation, Arduino (C++) for motor control and RF/web communication, and a BLE-controlled web interface. Awarded a Thailand student representative team prize.',
        url: "",
        tags: ["resume", "robotics"] as Tag[],
        hide: false,
    },
    {
        name: "Tastebox (Automated Robotic Cooker)",
        details:
            "My final-year engineering project: an automated robotic cooker with four microcontroller-driven submodules (ingredient dispenser, bag cutter, cooker, and a robotic-arm lid opener), all coordinated over an I2C bus by a Raspberry Pi. Reverse-engineered the cooker control board to emulate its rotary encoder and buzzer signals with a microcontroller.",
        url: "",
        tags: ["resume", "robotics", "swe"] as Tag[],
        hide: false,
    },
    {
        name: "Hardcopy",
        details:
            "A thermal-printer photo booth operated by a fleet of Raspberry Pis, each connected to a camera and printer. Built the embedded software managing the machines plus an admin dashboard to monitor machines and lay out the printed design. Installed in a café for around a week.",
        url: "",
        tags: ["resume", "robotics", "swe"] as Tag[],
        hide: false,
    },
    {
        name: "LED Strip ArtNet Controller",
        details:
            "A DIY Ethernet LED-strip controller speaking the ArtNet protocol so artists can drive it from tools like TouchDesigner to display complex rendered graphics. Built around a W5500 Ethernet chip with a custom PCB, designed to be modular with planned DMX (XLR) support.",
        url: "",
        tags: ["robotics", "swe"] as Tag[],
        hide: false,
    },
    {
        name: "Raspberry Pi Pico Stepper Controller PCB",
        details:
            "Designed and fabricated a custom Printed Circuit Board for driving stepper motors from a Raspberry Pi Pico, designed using EasyEDA.",
        url: "",
        tags: ["robotics"] as Tag[],
        hide: false,
    },
    {
        name: "Intania Jukebox",
        details:
            'A Raspberry Pi music player controlled by an LED keypad. Streams music from the Spotify API with volume and playback control (pause, skip, jump) and social features like "liking" a song.',
        url: "https://github.com/betich/intania-jukebox",
        tags: ["robotics", "swe"] as Tag[],
        hide: false,
    },
    {
        name: "Color Guessor Toy",
        details:
            'Project for "Robotics Project II" subject of the Robotics AI program, in collaboration with students from the Industrial Design program, Faculty of Architecture. An interactive toy where players place colored blocks matching an on-screen prompt, using a camera module for color detection with a ReactJS front-end.',
        url: "https://github.com/betich/robo2-color-guessor",
        tags: ["robotics", "swe"] as Tag[],
        hide: true,
    },
    {
        name: "Ped4You",
        details:
            "ช่วยทุกคนกาบัตรเลือกตั้งของตัวเองได้อย่างมั่นใจ — An interactive website that provides information about the 2023 Election, including an Election Simulator, a game that guides you through the process of the election. Integrated with a machine learning model that asseses if the election ballot is valid or not.",
        url: "https://github.com/PED4you/ped4you-website",
        tags: ["resume", "swe"] as Tag[],
        hide: false,
    },
    {
        name: "TCAS Schedule Generator",
        details:
            "A website for generating a study and exam schedule for students who are applying for universities in Thailand, the website gained a small traction via twitter and my friends.",
        url: "https://tcas.betich.me",
        tags: ["resume", "swe"] as Tag[],
        hide: false,
    },
];

export const contributions = [
    {
        name: "Contester.life",
        details:
            "A website that gathers gather competition opportunities, camps, and activities that may be the starting point of great opportunities",
        url: "https://contester.life",
        tags: ["resume", "swe"] as Tag[],
        hide: false,
    },
    {
        name: "Junior Webmaster Camp 13",
        details:
            "Acted as Interim Director of the Imagineering team, managing the creation of event decoration, swag, and the web services for Junior Webmaster Camp 13, a camp that teaches web development to high school students.",
        url: "13.jwc.in.th",
        tags: ["swe", "design"] as Tag[],
        hide: true,
    },
    {
        name: "Vid Love Vid U 2024",
        details:
            "Initiated and coached the website team of the Vid Love Vid U 2024 event.",
        url: "https://github.com/vidlovevidu-chula/vlvu2024-website",
        tags: ["swe"] as Tag[],
        hide: true,
    },
    {
        name: "Vishnu 21st",
        details:
            "Worked with the PR team and IT team for Vishnu 21st, an event that welcomes new students to the Faculty of Engineering, Chulalongkorn University.",
        url: "instagram.com/vishnu21st",
        tags: ["swe", "design"] as Tag[],
        hide: true,
    },
    {
        name: "Food & Film Festival 2023",
        details:
            "Lead the Graphic Design team for Food & Film Festival 2023, an event in Chulalongkorn University.",
        url: "instagram.com/foodfilmfest.cu/",
        tags: ["design"] as Tag[],
        hide: true,
    },
    {
        name: "PED4you",
        details:
            "Initiated and developed an interactive website that provides information about the 2023 Election, including an Election Simulator, a game that guides you through the process of the election. Integrated with a machine learning model that asseses if the election ballot is valid or not. This project was used by more than 10,000 users and was featured in several news articles.",
        url: "github.com/PED4you/ped4you-website",
        tags: ["swe"] as Tag[],
        hide: false,
    },
    {
        name: "Vid Love Vid U 2023",
        details:
            "Initiated and developed an interactive website for Vid Love Vid U, a Valentine's day event. Take a quiz to discover your love personality and collect E-Stamps to win prizes.",
        url: "github.com/vidlovevidu-chula/vlvu-website",
        tags: ["swe"] as Tag[],
        hide: false,
    },
    {
        name: "Programming.in.th",
        details:
            "Contributed in developed the front-end for Programming.in.th, a website for practicing algorithms, data structures and competitive programming.",
        url: "programming.in.th",
        tags: ["resume", "swe"] as Tag[],
        hide: false,
    },
    {
        name: "Intania Open House 2023",
        details:
            "The website for Intania Open House 2023, with an interactive quiz to see which major suits you the best.",
        url: "github.com/thinc-org/intania-oph",
        tags: ["swe"] as Tag[],
        hide: false,
    },
    {
        name: "EIC Robocup Website",
        details:
            "Initiated and developed a website for the EIC club, Chulalongkorn University.",
        url: "https://github.com/robocup-eic/eic-website",
        tags: ["swe", "robotics"] as Tag[],
        hide: false,
    },
    {
        name: "TOCPC Website",
        details:
            "The website for Thailand Online Competitive Programming Contest 2021.",
        url: "https://github.com/TOCPC/tocpc-site",
        tags: ["swe"] as Tag[],
        hide: true,
    },
    {
        name: "The 5th Stupid Hackathon Thailand Website",
        details: "The website for the 5th Stupid Hackathon Thailand.",
        url: "stupid.hackathon.in.th/5",
        tags: ["swe"] as Tag[],
        hide: true,
    },
];

export const interests = [
    {
        text: "Areas of Interest : Technology, Web Development, UX/UI Design, Graphic Design, Machine Learning, Artificial Intelligence, Robotics, Embedded Systems, Music Theory, Video Production",
        tags: ["resume", "swe", "robotics", "design"] as Tag[],
    },
];
