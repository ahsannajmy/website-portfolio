import excelImg from "../assets/skills/skills-1.png";
import pythonImg from "../assets/skills/skills-2.png"; 
import awsImg from "../assets/skills/skills-3.png";
import javascriptImg from "../assets/skills/skills-4.png";
import dockerImg from "../assets/skills/skills-5.png"
import javaImg from "../assets/skills/skills-6.png";
import postgresImg from "../assets/skills/skills-7.png";
import gitImg from "../assets/skills/skills-8.png";

import sertificate1 from "../assets/sertificates/sertificate-1.png";
import sertificate2 from "../assets/sertificates/sertificate-2.png";
import sertificate3a from "../assets/sertificates/sertificate-3a.png";
import sertificate3b from "../assets/sertificates/sertificate-3b.png";
import sertificate4a from "../assets/sertificates/sertificate-4a.png";
import sertificate4b from "../assets/sertificates/sertificate-4b.png";
import sertificate4c from "../assets/sertificates/sertificate-4c.png";
import sertificate5 from "../assets/sertificates/sertificate-5.png";
import sertificate6a from "../assets/sertificates/sertificate-6a.png";
import sertificate6b from "../assets/sertificates/sertificate-6b.png";
import sertificate6c from "../assets/sertificates/sertificate-6c.png";

export const headerContent = `
    I recently received my bachelor's degree in computer science. 
    I have the motivation to work in the technology field, specifically 
    in the data analyst field, and I'm also expanding my expertise in 
    backend development. I have a high level of curiosity and feel challenged 
    if given a problem involving data. In this field, I have significant 
    interest in a data analyst or data scientist position. In addition 
    to my data analysis projects and courses, I am also learning backend 
    technologies in multiple programming languages both in my university 
    and outside university through courses. For supporting my interest, 
    I have taken several courses related to both data analyst and backend development roles.
`;

export const navItemsRight = ["HOME", "ABOUT ME", "PROJECTS", "SERTIFICATE", "CONTACT"];
export const navItemsLeft = ["CV Download"];

export const educationList = [
    {
        range_tahun : "2016 - 2019",
        nama_institusi : "SMAN 26 Jakarta",
        jurusan : "Science Major",
        deskripsi_lainnya : ""
    },
    {
        range_tahun : "2019 - 2024",
        nama_institusi : "Universitas Indoensia",
        jurusan : "Computer Science",
        deskripsi_lainnya : "GPA 3.31" 
    }
];

export const skillList = [
    {
        imgName : excelImg
    },
    {
        imgName : pythonImg
    },
    {
        imgName : awsImg
    },
    {
        imgName : javascriptImg
    },
    {
        imgName : dockerImg
    },
    {
        imgName : javaImg
    },
    {
        imgName : postgresImg
    },
    {
        imgName : gitImg
    },
];


export const projectProperties = [
    {
        projectName : "Final Assignment (Classification of Criminal Verdict Documents)",
        projectDesc : [
            `
            Build a classification model using python with CNN and LSTM architecture also with other machine learning models
            to predict or classify a criminal verdict. This prediction is based on the components inside of each documents
            such as (articles, sentences, type of case, lawyer's name, judge's name, court location, and other components)
            `,
            `
            In this project i'm also collecting criminal verdict documents from official site of supreme court in indonesia
            this collecting process was done through one of python library BeautifulSoup
            `,
            `
            This project also includes gathering, processing and cleaned the documents that have been collected and applying
            to an existing tag model and then proceed to the CNN, LSTM and other machine learning model for training
            `
        ],
        skillList : [
            'Deep Learning', 
            'Keras', 
            'gensim', 
            'Machine Learning',
            'Data Cleaning',
            'Vectorization',
            'NLTK',
            'Web Scrapping'
        ],
        imgMainSkill : [
            pythonImg,            
        ],
        projectLink : "https://drive.google.com/file/d/14r_C7suX_m5BTYI2iIz2R4CgeBKIOpwJ/view?usp=sharing"
    },
    {
        projectName : "MySkill Bootcamp Excel Tasks",
        projectDesc : [
            `
            In this bootcamp i was given several data to clean with excel tools and functionality
            such as using some fundamental excel functions along with data formatting functions
            `,
            `
            Experiecne the power of vlookup and index match to generate or complete certain data based
            on another table
            `,
            `
            I'm also learning to build pivot table based on an existing table to gain some good aggregate
            informations
            `,
            `
            Macro VBA is also part of the learning subject in this bootcamp we create a code to automate an
            excel process or using a record VBA
            `,
        ],
        skillList : [
            'Pivot Chart', 
            'Pivot Table', 
            'Aggregate Function', 
            'Formatting Function',
            'Data Validation',
            'Conditional If-Else',
            'Vlookup & Index Match',
            'Slicer',
            'Macro VBA'
        ],
        imgMainSkill : [
            excelImg
        ],
        projectLink : "https://docs.google.com/presentation/d/135Wc1ga_-2w4m8J0iF2-lLGdf3v6RFRx/edit?usp=sharing&ouid=110427610251806625501&rtpof=true&sd=true"
    },
    {
        projectName : "Admin Dashboard Tax Consultant",
        projectDesc : [
            `
            Build a admin dashboard for tax consulting to monitor team members.
            `,
            `
            Dashboard was built using django and tailwind css and for the database using postgresql that was hosted in
            railway
            `
        ],
        skillList : [
            'Django',
            'Basic Auth',
            'Postgresql',
            'Railway'
        ],
        imgMainSkill : [
            pythonImg,
            gitImg
        ],
        projectLink : "https://github.com/ahsannajmy/backend-konsultan-pajak"
    },
    {
        projectName : "Discord Anime Bot",
        projectDesc : [
            `
            Using discord module in python to connect and use myanimelist public apis to extract the data 
            `,
            `
            The feature in this bot is finding the anime name based on the given input and will generate available
            anime with its respective information
            `
        ],
        skillList : [
            "Python",
            "HTTP Request",
            "API"
        ],
        imgMainSkill : [
            pythonImg
        ],
        projectLink : "https://github.com/ahsannajmy/discordAnimeSearchBot"
    }
]

export const sertificates = [
    [sertificate1],
    [sertificate2],
    [sertificate3a,sertificate3b],
    [sertificate4a,sertificate4b,sertificate4c],
    [sertificate5],
    [sertificate6a,sertificate6b,sertificate6c]
]