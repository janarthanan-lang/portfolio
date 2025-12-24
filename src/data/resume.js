import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const resumeData = {
    personalInfo: {
        name: "Janarthanan M",
        title: "Data Analyst & Data Scientist",
        email: "m.janarthanan2005@gmail.com",
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
                url: "mailto:m.janarthanan2005@gmail.com",
                icon: Mail
            }
        ]
    },
    heroDescription: "A passionate and detail-oriented aspiring Data Analyst and Data Scientist with hands-on experience in data cleaning, analysis, and visualization. I have worked on real-world projects such as expense tracking systems, Power BI dashboards, and machine learning models, where I analyzed data and generated meaningful insights. I enjoy working with tools like SQL, Python, Power BI, and machine learning techniques to transform raw data into actionable insights that support business decisions. I focus strongly on data accuracy, consistency, and clear reporting. My goal is to grow as a data professional, strengthen my analytical and modeling skills, and contribute to data-driven solutions that create real business impact.",
    summary: "Highly-Motivated Data Scientist and Data Analyst with hands-on experience in Python, SQL, Excel, Power BI, Pandas, NumPy, Matplotlib, Seaborn, Machine Learning, and Statistical Analysis. Skilled in data cleaning, exploratory data analysis (EDA), feature engineering, model building, and data visualization to deliver actionable business insights. Passionate about applying data science techniques to solve real-world problems.",
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
        },
        {
            title: "Business Sales Analytics Dashboarding",
            date: "December - 2025",
            description: "Advanced Excel Sales Analysis Project using Superstore dataset. Performed data cleaning, calculated fields, pivot analysis, KPI tracking, What-If Analysis (Goal Seek & Scenario Manager), and macros automation. Built an interactive dashboard to derive actionable business insights and recommendations.",
            technologies: ["Excel", "Data Analysis", "Dashboarding"],
            link: "https://github.com/janarthanan-lang/Business-Sales-Analytics-Dashboarding-with-Advanced-Excel"
        },
        {
            title: "Salary Survey Analysis",
            date: "December - 2025",
            description: "Analyzed a global salary survey dataset using Excel and MySQL. Data was cleaned by handling missing values, removing outliers, formatting text, and converting salaries to USD. SQL queries and dashboards reveal insights on salary trends across industries, countries, gender, education, and experience.",
            technologies: ["Excel", "MySQL", "Data Analysis"],
            link: "https://github.com/janarthanan-lang/Salary_Survey_Analysis_Project"
        },
        {
            title: "RandomForest & AdaBoost Comparison",
            date: "October - 2025",
            description: "Machine learning project comparing Random Forest and AdaBoost classifiers on the Mushroom dataset to predict edible vs poisonous mushrooms. Includes data preprocessing, model training, evaluation, and accuracy comparison through visual plots.",
            technologies: ["Python", "Machine Learning", "Scikit-Learn"],
            link: "https://github.com/janarthanan-lang/RandomForest-And-Adaboost-Comparison"
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
        "Photography", "Generative AI", "Web Development"
    ]
};
