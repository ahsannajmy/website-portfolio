import excelImg from "../assets/skills/skills-1.png";
import pythonImg from "../assets/skills/skills-2.png";
import awsImg from "../assets/skills/skills-3.png";
import javascriptImg from "../assets/skills/skills-4.png";
import dockerImg from "../assets/skills/skills-5.png";
import javaImg from "../assets/skills/skills-6.png";
import postgresImg from "../assets/skills/skills-7.png";
import gitImg from "../assets/skills/skills-8.png";

import sertificate1 from "../assets/sertificates/sertificate-1.png";
import sertificate2 from "../assets/sertificates/sertificate-2.png";
import sertificate3a from "../assets/sertificates/sertificate-3a.png";
import sertificate4a from "../assets/sertificates/sertificate-4a.png";
import sertificate5 from "../assets/sertificates/sertificate-5.png";
import sertificate6a from "../assets/sertificates/sertificate-6a.png";

import cnn from "../assets/project/cnn.webp";
import excelPortfolio from "../assets/project/excel-portfolio.png";
import dashboardConsultant from "../assets/project/dashboard-tax-consultant.png";
import discordBot from "../assets/project/discord-bot.png";
import ourastoreClone from "../assets/project/ourastore-clone.png";

export const educationList = [
  {
    range_tahun: "2016 - 2019",
    nama_institusi: "SMAN 26 Jakarta",
    jurusan: "Science Major",
    deskripsi_lainnya: "",
  },
  {
    range_tahun: "2019 - 2024",
    nama_institusi: "Universitas Indoensia",
    jurusan: "Computer Science",
    deskripsi_lainnya: "GPA 3.31",
  },
];

export const skillList = [
  {
    imgName: excelImg,
  },
  {
    imgName: pythonImg,
  },
  {
    imgName: awsImg,
  },
  {
    imgName: javascriptImg,
  },
  {
    imgName: dockerImg,
  },
  {
    imgName: javaImg,
  },
  {
    imgName: postgresImg,
  },
  {
    imgName: gitImg,
  },
];

export const projectProperties = [
  {
    projectImage: cnn,
    projectName:
      "Final Assignment (Classification of Criminal Verdict Documents)",
    skillList: [
      "Deep Learning",
      "Keras",
      "gensim",
      "Machine Learning",
      "Data Cleaning",
      "Vectorization",
      "NLTK",
      "Web Scrapping",
    ],
    imgMainSkill: [pythonImg],
    projectLink:
      "https://drive.google.com/file/d/14r_C7suX_m5BTYI2iIz2R4CgeBKIOpwJ/view?usp=sharing",
  },
  {
    projectImage: excelPortfolio,
    projectName: "MySkill Bootcamp Excel Tasks",
    skillList: [
      "Pivot Chart",
      "Pivot Table",
      "Aggregate Function",
      "Formatting Function",
      "Data Validation",
      "Conditional If-Else",
      "Vlookup & Index Match",
      "Slicer",
      "Macro VBA",
    ],
    imgMainSkill: [excelImg],
    projectLink:
      "https://docs.google.com/presentation/d/135Wc1ga_-2w4m8J0iF2-lLGdf3v6RFRx/edit?usp=sharing&ouid=110427610251806625501&rtpof=true&sd=true",
  },
  {
    projectImage: dashboardConsultant,
    projectName: "Admin Dashboard Tax Consultant",
    skillList: ["Django", "Basic Auth", "Postgresql", "Railway"],
    imgMainSkill: [pythonImg, gitImg, postgresImg],
    projectLink: "https://github.com/ahsannajmy/backend-konsultan-pajak",
  },
  {
    projectImage: discordBot,
    projectName: "Discord Anime Bot",
    skillList: ["Python", "HTTP Request", "API"],
    imgMainSkill: [pythonImg],
    projectLink: "https://github.com/ahsannajmy/discordAnimeSearchBot",
  },
  {
    projectImage: ourastoreClone,
    projectName: "Ourastore Clone",
    skillList: [
      "Express Js",
      "Prisma",
      "Next JS",
      "AWS",
      "Postgresql",
      "Postman",
    ],
    imgMainSkill: [javascriptImg, awsImg, postgresImg],
    projectLink: "https://github.com/basazard/ourastore/tree/ahsan",
  },
];

export const sertificates = [
  sertificate1,
  sertificate2,
  sertificate3a,
  sertificate4a,
  sertificate5,
  sertificate6a,
];
