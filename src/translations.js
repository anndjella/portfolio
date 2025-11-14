// src/translations.js
export const translations = {
  en: {
    brand: "ANĐELA STANKOVIĆ",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    heroTitle: "Software Engineering & Data Engineering",
    heroSubtitle:
      "Master’s student in Software Engineering & AI with one year of hands-on Data Engineering experience. I enjoy building reliable backend systems, data workflows and well-tested solutions.",
    heroCtaPrimary: "View projects",
    heroCtaSecondary: "About me",

    sections: {
      aboutTitle: "About me",
      skillsTitle: "Skills",
      projectsTitle: "Projects",
      experienceTitle: "Experience & Education",
      contactTitle: "Contact",
    },

    about:
      "A few months before finishing my bachelor studies, I joined the “Dobar start” internship program at Nelt, where I was assigned to the Data Engineering team based on my skills and academic background.\n\n" +
      "I stayed there for a full year, working four days a week in a paid internship model, mainly on SQL development, ETL processes and reporting. After a very intense and valuable year, I decided to leave Nelt so I could fully focus on my Master’s studies.\n\n" +
      "I am currently completing my Master’s in Software Engineering & Artificial Intelligence at FON — I have finished 36 out of 60 ECTS (two exams and the thesis are left).\n\n" +
      "Right now, my goal is to find a role where I can keep growing as an engineer. I am applying to both Data Engineering and Software Engineering positions, because I genuinely enjoy both backend development, testing and DevOps, as well as data pipelines and analytics.",

    skills: {
      programming: "C#, Java, JavaScript, SQL",
      web: "React, Laravel, HTML, CSS, REST APIs, WordPress",
      data: "SQL Server, PostgreSQL, SAS, Azure Data Factory, Power BI",
      testing: "xUnit, Moq, tSQLt, JMeter, SonarQube",
      tools: "Git, GitHub, Postman, Report Builder, MS Office",
    },

    projectsLead:
      "Here are some of the projects that best represent my interests in backend, data and testing.",
    projects: [
      {
        name: "Full-Stack Calendar Web App",
        desc:
          "Full-stack calendar app with Laravel + React, REST API, Google Calendar & OpenWeather integration and role-based access (admin/user/guest).",
        tech: "Laravel, React, MySQL, REST, Google APIs",
        link: "https://github.com/anndjella/laravel-react-calendar",
      },
      {
        name: "University Exam & Student Management System",
        desc:
          "ASP.NET Web API for managing students and exams with EF Core, SQL Server, unit & integration tests (xUnit, Moq, tSQLt), JMeter performance tests and SonarQube analysis.",
        tech: "C#, .NET, EF Core, SQL Server, xUnit, tSQLt, JMeter, SonarQube",
        link: "https://github.com/anndjella/student-exam-system",
      },
      {
        name: "ToDo Microservice App",
        desc:
          "C# microservice application, Dockerized and deployed through a CI/CD pipeline with GitHub Actions.",
        tech: "C#, .NET, Docker, GitHub Actions",
        link: "https://github.com/anndjella/ToDoApp",
      },
      {
        name: "Member Management App",
        desc:
          "Windows Forms client–server app for a fitness center with layered architecture and SQL database.",
        tech: "C#, WinForms, SQL",
        link: "https://github.com/anndjella/member-management-app",
      },
      {
        name: "Pet Shop Web Demo",
        desc:
          "WordPress-based pet shop demo with WooCommerce and Elementor, focused on layout, responsiveness and plugins.",
        tech: "WordPress, WooCommerce, CSS",
        link: "https://petsmart.great-site.net/",
      },
    ],

    experience:
      "💼 Junior Data Engineer — Nelt Group (2024–2025)\n" +
      "Worked on data warehouse development in Microsoft SQL Server, ETL processes in SAS and Azure Data Factory, Power BI dashboards (DAX) and regulatory reports in Microsoft Report Builder. Collaborated closely with business teams (finance, logistics, management) to translate requirements into data models and reports.\n\n" +
      "🎓 Master’s Studies — Software Engineering & Artificial Intelligence, FON\n" +
      "Focus on software engineering, backend, DevOps practices, testing and automation.\n\n" +
      "🎓 Bachelor’s Degree — Information Systems and Technologies, FON (GPA 9.32/10)\n\n" +
      "🤝 Volunteer — BEST Belgrade & FON\n" +
      "Topic Team member at Artificial Intelligence BattleGround (Java-based AI competition environment) and associate at the Department for E-Business.",

    contact: {
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub"
},
    viewOnGitHub: "View on GitHub →",
    footer: "Built with React & Vite • Hosted on GitHub Pages",
  },

  sr: {
    brand: "ANĐELA STANKOVIĆ",
    nav: {
      home: "Početna",
      about: "O meni",
      skills: "Veštine",
      projects: "Projekti",
      experience: "Iskustvo",
      contact: "Kontakt",
    },
    heroTitle: "Softversko i data inženjerstvo",
    heroSubtitle:
      "Master student Softverskog inženjerstva i veštačke inteligencije, sa jednogodišnjim iskustvom u data inženjeringu. Volim da radim na backend sistemima, data tokovima i dobro testiranim rešenjima.",
    heroCtaPrimary: "Projekti",
    heroCtaSecondary: "O meni",

    sections: {
      aboutTitle: "O meni",
      skillsTitle: "Veštine",
      projectsTitle: "Projekti",
      experienceTitle: "Iskustvo i obrazovanje",
      contactTitle: "Kontakt",
    },

    about:
      "Neposredno pred završetak osnovnih studija započela sam praksu “Dobar start” u kompaniji Nelt, gde sam, na osnovu svojih veština i prethodnog iskustva, bila raspoređena u tim za data inženjering.\n\n" +
      "U Neltu sam ostala godinu dana, radeći četiri od pet dana nedeljno u modelu plaćene prakse. Tokom tog perioda radila sam na SQL razvoju, ETL procesima i izveštavanju. Nakon veoma intenzivnog i korisnog perioda, odlučila sam da napustim praksu kako bih se u potpunosti posvetila master studijama.\n\n" +
      "Trenutno sam na master programu Softversko inženjerstvo i veštačka inteligencija na FON-u; položila sam 36 od 60 ESPB (ostala su mi još dva ispita i master rad).\n\n" +
      "U ovom trenutku cilj mi je da pronađem poziciju na kojoj mogu da nastavim da rastem kao inženjer. Prijavljujem se i na data engineering i na software engineering pozicije, jer iskreno volim oba područja – kako rad sa podacima i pipeline-ovima, tako i backend razvoj, testiranje i DevOps.",

    skills: {
      programming: "C#, Java, JavaScript, SQL",
      web: "React, Laravel, HTML, CSS, REST API, WordPress",
      data: "SQL Server, PostgreSQL, SAS, Azure Data Factory, Power BI",
      testing: "xUnit, Moq, tSQLt, JMeter, SonarQube",
      tools: "Git, GitHub, Postman, Report Builder, MS Office",
    },

    projectsLead:
      "Nekoliko projekata koji najbolje odražavaju moja interesovanja za backend, data i testiranje.",
    projects: [
      {
        name: "Full-Stack Calendar Web App",
        desc:
          "Full-stack kalendarska aplikacija (Laravel + React) sa REST API-jem, Google Calendar i OpenWeather integracijama i ulogama (admin/user/guest).",
        tech: "Laravel, React, MySQL, REST, Google API",
        link: "https://github.com/anndjella/laravel-react-calendar",
      },
      {
        name: "University Exam & Student Management System",
        desc:
          ".NET Web API za upravljanje studentima i ispitima, uz EF Core, SQL Server, unit i integration testove (xUnit, Moq, tSQLt), JMeter testove performansi i SonarQube analizu.",
        tech: "C#, .NET, EF Core, SQL Server, xUnit, tSQLt, JMeter, SonarQube",
        link: "https://github.com/anndjella/student-exam-system",
      },
      {
        name: "ToDo Microservice App",
        desc:
          "C# microservice aplikacija, kontejnerizovana kroz Docker i postavljena putem CI/CD toka u GitHub Actions-u.",
        tech: "C#, .NET, Docker, GitHub Actions",
        link: "https://github.com/anndjella/ToDoApp",
      },
      {
        name: "Member Management App",
        desc:
          "Windows Forms client–server aplikacija za fitnes centar sa slojevitom arhitekturom i SQL bazom.",
        tech: "C#, WinForms, SQL",
        link: "https://github.com/anndjella/member-management-app",
      },
      {
        name: "Pet Shop Web Demo",
        desc:
          "WordPress demo sajt za pet shop, sa WooCommerce i Elementor dodacima, fokus na raspored, responsivnost i plugine.",
        tech: "WordPress, WooCommerce, CSS",
        link: "https://petsmart.great-site.net/",
      },
    ],

    experience:
      "💼 Junior Data Engineer — Nelt Group (2024–2025)\n" +
      "Rad na razvoju data warehouse rešenja u Microsoft SQL Server okruženju, ETL procesi u SAS-u i Azure Data Factory-ju, Power BI izveštaji (DAX) i regulatorni izveštaji u Microsoft Report Builder-u. Bliska saradnja sa poslovnim timovima (finansije, logistika, menadžment) na prevođenju zahteva u data modele i izveštaje.\n\n" +
      "🎓 Master studije — Softversko inženjerstvo i veštačka inteligencija, FON\n" +
      "Fokus na softversko inženjerstvo, backend, DevOps prakse, testiranje i automatizaciju.\n\n" +
      "🎓 Osnovne studije — Informacioni sistemi i tehnologije, FON (prosek 9.32/10)\n\n" +
      "🤝 Volontiranje — BEST Beograd i FON\n" +
      "Topic tim na AIBG takmičenju (Java okruženje za AI agente) i saradnik na Katedri za e-poslovanje.",

    contact: {
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      cvNote: "Ovde možeš dodati link ka svom CV-u (Google Drive / PDF).",
    },
    viewOnGitHub: "Pogledaj na GitHub-u →",
    footer: "Izrađeno u React & Vite • Hostovano na GitHub Pages",
  },
};
