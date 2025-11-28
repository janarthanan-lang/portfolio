import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const resumeData = {
    personalInfo: {
        name: "Janarthanan Marimuthu",
        title: "Data Analyst & Data Scientist",
        email: "janamarimuthu2005@gmail.com",
        phone: "+91 8940500570",
        location: "Sathyamangalam, Tamil Nadu",
        social: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/janarthanan-marimuthu-2005m",
                icon: Linkedin
            },
            {
                name: "GitHub",
                url: "https://github.com/janarthanan-lang",
                icon: Github
            },
            {
                name: "Email",
                url: "mailto:janamarimuthu2005@gmail.com",
                icon: Mail
            }
        ]
    },
    summary: "Highly motivated and detail-oriented Data Analyst with expertise in data analysis, visualization, reporting, and predictive modelling to enhance business insights. Experienced in delivering data-driven insights while collaborating with cross-functional teams. Currently pursuing Data Analytics and Data Science Trainee at KGiSL MicroCollege.",
    skills: {
        technical: [
            "Python", "Excel", "Power BI", "MySQL", "Statistical Analysis", "Machine Learning Algorithms"
        ],
        soft: [
            "Adaptability", "Team Work", "Time Management", "Detail-Oriented"
        ]
    },
    projects: [
        {
            title: "Laptop Price Analysis using EDA",
            date: "September - 2025",
            description: "Performed comprehensive Exploratory Data Analysis (EDA) on a laptop dataset, including data cleaning, feature understanding, and univariate, bivariate, and multivariate analysis using Python (Pandas, Matplotlib, Seaborn). Identified key pricing drivers such as RAM, CPU, GPU, Company brand, and Operating System.",
            technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
            link: "https://github.com/janarthanan-lang/Python-EDA-Project.git"
        },
        {
            title: "Employee Attrition Prediction Using ML",
            date: "November - 2025",
            description: "Performed data cleaning, preprocessing, encoding, and feature scaling on the IBM HR dataset. Trained and evaluated multiple Machine Learning models, identifying XGBoost as the best performer. Deployed the optimized model using Streamlit.",
            technologies: ["Python", "Scikit-Learn", "XGBoost", "Streamlit"],
            link: "https://github.com/janarthanan-lang/IBM_Employee_Attrition_ML_Project.git"
        }
    ],
    certifications: [
        "Python Fundamentals in Great Learning",
        "Data Analyst & Data Scientist in KGiSL MicroCollege",
        "Generative AI in NAVIDA"
    ],
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Gobi Arts & Science College, Gobichettipalayam",
            year: "2022 – 2025"
        }
    ],
    interests: [
        "Cloud Platform", "Photography", "Generative AI", "Web Development"
    ]
};
