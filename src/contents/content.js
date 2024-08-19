import excelImg from "../assets/skills-1.png";
import pythonImg from "../assets/skills-2.png"; 
import awsImg from "../assets/skills-3.png";
import javascriptImg from "../assets/skills-4.png";
import dockerImg from "../assets/skills-5.png"
import javaImg from "../assets/skills-6.png";
import postgresImg from "../assets/skills-7.png";

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
    }
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
            to an existing tag model and then proceed to the CNN, LSTM and other machine learning model for training for more
            details here are my paper
            `
        ],
        skillList : []
    },
    {

    },
    {

    }
]