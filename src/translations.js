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
      education: "Education",
      contact: "Contact",
    },
    heroTitle: "Software Engineering & Data Engineering",
    heroSubtitle:
      "Master's student in Software Engineering & AI with one year of Data Engineering experience. I enjoy building backend and full-stack solutions, working with SQL, ETL processes, and delivering well-tested, reliable systems.",
    heroCtaPrimary: "View projects",
    heroCtaSecondary: "About me",

    sections: {
      aboutTitle: "About me",
      skillsTitle: "Skills",
      projectsTitle: "Projects",
      experienceTitle: "Experience",
      educationTitle: "Education",
      contactTitle: "Contact",
    },
     educationHeadings: {
      master: "Master studies",
      bachelor: "Bachelor studies",
    },
    about:
      "A month before finishing my bachelor studies, I joined the <strong>\"Dobar start\" (Good start) internship program at Nelt</strong>, where I was assigned to the <strong>Data Engineering team</strong> based on my skills and academic background.\n\n" +
      "I stayed there for a <strong>full year, working four days a week in a paid internship model</strong>, mainly on SQL development, ETL processes and reporting. After a very intense and valuable year, I decided to leave Nelt so I could fully focus on my Master's studies.\n\n" +
      "I am currently completing my Master's in <strong>Software Engineering & Artificial Intelligence</strong> at <strong>Faculty of Organizational Sciences</strong>.\n\n" +
      "As I progress through my Master's studies, I'm looking for a role where I can keep improving as an engineer and contribute to well-structured, reliable systems. I'm most interested in <strong>backend development and data-related work</strong>, especially in roles that bring those areas together.",

   skills: {
    programming: ["C#", "Java", "JavaScript", "SQL","Python (basic)"],
    web: ["React (JavaScript library)", "Laravel (PHP framework)", "HTML", "CSS", "RESTful APIs", "WordPress"],
    data: ["Microsoft SQL Server", "PostgreSQL (basic)", "Azure Data Factory (basic pipelines experience)", "Power BI (hands-on)"],
    testing: ["xUnit", "Moq", "tSQLt", "JMeter", "SonarQube"],
    tools: ["Git", "GitHub","Azure DevOps", "Postman", "Report Builder", "MS Office"],
    soft: ["Problem Solving","Attention to Detail", "Teamwork & Collaboration", "Adaptability", "Time Management", "Communication",],
  },
    skillsGroupNames: {
      programming: "✨ Programming",
      web: "🌐 Web",
      data: "☁️ Data & Cloud",
      testing: "✅ Testing & Quality",
      tools: "🔧 Tools",
      soft: "🧠 Soft Skills"
  },

    projectsLead:
      "Here are some of the projects that best represent my interests in backend, data and testing.",
    projects: [
      {
        name: "Full-Stack Calendar Web App 📅",
        desc:
          "Full-stack calendar app with Laravel + React, REST API, Google Calendar & OpenWeather integration and role-based access (admin/user/guest).",
        tech: "Laravel, React, MySQL, REST, Google APIs",
        demo: "https://www.youtube.com/watch?v=i5v7vhzR-g4",
        link: "https://github.com/anndjella/laravel-react-calendar",
      },
      {
        name: "University Exam & Student Management System 🎓",
        desc:
          "ASP.NET Web API for managing students and exams with EF Core, SQL Server, unit & integration tests (xUnit, Moq, tSQLt), JMeter performance tests and SonarQube analysis.",
        tech: "C#, .NET, EF Core, SQL Server, xUnit, tSQLt, JMeter, SonarQube",
        link: "https://github.com/anndjella/student-exam-system",
      },
      {
        name: "ToDo Microservice App ✔️",
        desc:
          "Simple C# microservice application, Dockerized and deployed through a CI/CD pipeline with GitHub Actions.",
        tech: "C#, .NET, Docker, GitHub Actions",
        link: "https://github.com/anndjella/ToDoApp",
      },
      {
        name: "Member Management App 🏋️",
        desc:
          "Windows Forms client-server app for a fitness center with layered architecture and SQL database.",
        tech: "C#, WinForms, SQL",
        link: "https://github.com/anndjella/member-management-app",
      },
        {
        name: "Movie Rating Prediction Model 🎬",
        desc:
          "Built a Clojure/ClojureScript system that predicts IMDb movie ratings using a linear-regression model trained on a cleaned and feature-engineered Kaggle dataset. The project includes end-to-end data processing (cleaning, encoding, transformations), statistical modeling, a lightweight backend for serving predictions, and a frontend UI for entering movie features.",
        tech: "Clojure, Linear Regression, ClojureScript",
        link: "https://github.com/anndjella/projekat_clojure",
      },
      {
        name: "Pet Shop Web Demo 🐾",
        desc:
          "WordPress-based pet shop demo with WooCommerce and Elementor, focused on layout, responsiveness and plugins.",
        tech: "WordPress, WooCommerce, CSS",
        link: "https://petsmart.great-site.net/",
        linkLabel: "Visit site →"
      },
    ],
    experience: {
  work: [
    {
      role: "Junior Data Engineer",
      place: "Nelt Group, Belgrade (hybrid)",
      period: "Sept 2024 - Aug 2025",
      desc: [
    "Developed and optimized <strong>queries, views and stored procedures</strong> for a <strong>Star Schema</strong> data warehouse utilizing <strong>Microsoft SQL Server</strong>.",
    "Built and maintained <strong>ETL jobs</strong> in SAS (and some in Azure Data Factory) to load, clean and transform data from operational systems (primarly <strong>SAP</strong>) into the warehouse.",
    "Performed data quality checks (missing or inconsistent entries, duplicates) and <strong>improved the ETL logic</strong> to stabilize daily loads.",
    "Created more than 10 regulatory reports using <strong>Microsoft Report Builder</strong>.",
    "Collaborated with <strong>business teams</strong> to translate requirements into data models and reporting workflows."
  ]  },
    {
      role: "Online English Tutor",
      place: "Native Camp (remote)",
      period: "Mar 2022",
      desc:
        "Taught conversational English to students from different countries, improving my communication skills and cultural awareness.",
    },
  ],
  
  volunteer: [
    {
      role: "Associate - Department for E-Business",
      place: "Faculty of Organizational Sciences, Belgrade",
      period: "Oct 2023 - Sept 2024",
      desc:
        "Led lab sessions and supported research activities related to e-business and web technologies.",
    },
    {
      role: "Topic Team Member - Artificial Intelligence BattleGround (AIBG)",
      place: "BEST Belgrade",
      period: "Aug 2023 - Dec 2023",
      desc:
        "Designed and implemented a hackathon gaming platform in Java where competing participants focus on creating and optimizing intelligent agents.",
    },
     {
      role: "Site Responsible - European BEST Engineering Competition (EBEC)",
      place: "BEST Belgrade",
      period: "Oct 2022 - May 2023",
      desc:
        "Maintained the WordPress site for the EBEC project, improving its performance and regularly updating content.",
    },
    {
      role: "Participant - Erasmus+ Youth Exchange “Green Goals”",
      place: "Portugal",
      period: "Nov 2025",
      desc:
        "A ten-day international program focused on sustainability, teamwork and intercultural learning. It also strengthened my confidence in communicating in English and collaborating with people from different cultural backgrounds",
    },
  ],
},
education: [
      {
        degree: "Master's in Software Engineering & Artificial Intelligence 🔜",
        school: "Faculty of Organizational Sciences, University of Belgrade",
        period: "Nov 2024 - present",
        desc: [
          "Working on a master thesis titled <i><strong>'Analysis and Application of DevOps Practices in Azure Serverless Architecture'</strong></i>."
        ],
      },
      {
        degree: "BSc in Information Systems and Technologies 🎓",
        school: "Faculty of Organizational Sciences, University of Belgrade",
        period: "Oct 2020 - Sept 2024",
        desc: [
          "Graduated with GPA 9.32/10.",
          "Built a strong foundation in databases, software engineering and programming.",
          "Completed a bachelor thesis titled <i><strong>'Development of an Interactive Calendar Using Laravel and React Frameworks'</strong></i> (the first project listed above - Full-Stack Calendar Web App)."
        ],
      },
      ],

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
    education: "Obrazovanje",
    contact: "Kontakt",
  },
  heroTitle: "Softversko inženjerstvo & Data Engineering",
  heroSubtitle:
    "Master student Softverskog inženjerstva i veštačke inteligencije sa jednogodišnjim iskustvom u Data inženjeringu. Uživam u izradi backend i full-stack rešenja, radu sa SQL-om, ETL procesima i isporuci dobro testiranih i pouzdanih sistema.",
  heroCtaPrimary: "Pogledaj projekte",
  heroCtaSecondary: "O meni",

  sections: {
    aboutTitle: "O meni",
    skillsTitle: "Veštine",
    projectsTitle: "Projekti",
    experienceTitle: "Iskustvo",
    educationTitle: "Obrazovanje",
    contactTitle: "Kontakt",
  },
  educationHeadings: {
    master: "Master studije",
    bachelor: "Osnovne studije",
  },
  about:
    "Mesec dana pre završetka osnovnih studija, pridružila sam se <strong>\"Dobar start\" praski u Nelt-u</strong>, gde sam na osnovu svojih veština i akademskog iskustva dodeljena <strong>Data inženjering timu</strong>.\n\n" +
    "Ostala sam tamo <strong>godinu dana, radeći četiri dana nedeljno u modelu plaćene prakse</strong>, uglavnom na SQL razvoju, ETL procesima i izveštavanju. Nakon vrlo intenzivne i vredne godine, odlučila sam da napustim Nelt kako bih se u potpunosti posvetila master studijama.\n\n" +
    "Trenutno završavam Master studije <strong>Softverskog inženjerstva i veštačke inteligencije</strong> na <strong>Fakultetu organizacionih nauka</strong>.\n\n" +
    "Kako napredujem kroz master studije, tražim ulogu u kojoj mogu nastaviti da se razvijam kao inženjer i doprinosim dobro strukturisanim i pouzdanim sistemima.<strong> Najviše me zanimaju poslovi u backend razvoju i radu sa podatacima</strong>, posebno u ulogama koje kombinuju ove oblasti.",

  skills: {
    programming: ["C#", "Java", "JavaScript", "SQL","Python (osnovno)"],
    web: ["React (JavaScript biblioteka)", "Laravel (PHP okvir)", "HTML", "CSS", "RESTful API", "WordPress"],
    data: ["Microsoft SQL Server", "PostgreSQL (osnovno)", "Azure Data Factory (osnovno iskustvo sa tokovima podataka)", "Power BI (praktično iskustvo)"],
    testing: ["xUnit", "Moq", "tSQLt", "JMeter", "SonarQube"],
    tools: ["Git", "GitHub","Azure DevOps", "Postman", "Report Builder", "MS Office paket"],
    soft: ["Rešavanje problema","Pažnja na detalje", "Timski rad i saradnja", "Prilagodljivost", "Upravljanje vremenom", "Komunikacija"],
  },
 skillsGroupNames: {
      programming: "✨ Programiranje",
      web: "🌐 Veb",
      data: "☁️ Data i Cloud",
      testing: "✅ Testiranje i kvalitet",
      tools: "🔧 Alati",
      soft: "🧠 Soft veštine"
  },

  projectsLead:
    "Ovo su neki od projekata koji najbolje predstavljaju moje interese u backend-u, podacima i testiranju.",
  projects: [
    {
      name: "Full-Stack kalendar veb aplikacija 📅",
      desc:
        "Full-stack kalendar (Laravel + React) sa REST API integracijom, podrškom za Google Kalendare i vremensku prognozu, i kontrolom pristupa po ulogama (admin, korisnik, gost).",
      tech: "Laravel, React, MySQL, REST, Google API",
      demo: "https://www.youtube.com/watch?v=i5v7vhzR-g4",
      link: "https://github.com/anndjella/laravel-react-calendar",
    },
    {
      name: "Sistem za upravljanje studentima i ispitima 🎓",
      desc:
        "ASP.NET Web API za upravljanje studentima i ispitima sa EF Core, SQL Server, unit i integracionim testovima (xUnit, Moq, tSQLt), JMeter testovima performansi i SonarQube analizom.",
      tech: "C#, .NET, EF Core, SQL Server, xUnit, tSQLt, JMeter, SonarQube",
      link: "https://github.com/anndjella/student-exam-system",
    },
    {
      name: "ToDo mikroservisna aplikacija ✔️",
      desc:
        "Jednostavna C# mikroservisna aplikacija, dockerizovana i postavljena kroz CI/CD pipeline koristeći GitHub Actions.",
      tech: "C#, .NET, Docker, GitHub Actions",
      link: "https://github.com/anndjella/ToDoApp",
    },
    {
      name: "Aplikacija za upravljanje članovima 🏋️",
      desc:
        "Windows Forms client-server aplikacija za fitnes centar sa slojevitom arhitekturom i SQL bazom.",
      tech: "C#, WinForms, SQL",
      link: "https://github.com/anndjella/member-management-app",
    },
    {
      name: "Model predviđanja ocena filmova 🎬",
      desc:
        "Izgradila Clojure/ClojureScript sistem koji predviđa IMDb ocene filmova koristeći linearni regresioni model treniran na očišćenim i transformisanim Kaggle podacima. Projekat uključuje end-to-end obradu podataka (čišćenje, pripremu, transformacije), statističko modeliranje, lagani backend za pružanje predikcija i frontend UI za unos karakteristika filmova.",
      tech: "Clojure, Linear Regression, ClojureScript",
      link: "https://github.com/anndjella/projekat_clojure",
    },
    {
      name: "Pet Shop Web Demo 🐾",
      desc:
        "Demo veb-sajta radnje za ljubimce izrađen u WordPress sistemu sa WooCommerce i Elementor dodacima, fokusiran na izgled, prilagodljivost i dodatke.",
      tech: "WordPress, WooCommerce, CSS",
      link: "https://petsmart.great-site.net/",
      linkLabel: "Poseti sajt →"
    },
  ],
  experience: {
    work: [
      {
        role: "Junior Data Engineer",
        place: "Nelt Group, Beograd (hybrid)",
        period: "Sept 2024 - Avg 2025",
        desc: [
          "Razvijanje i održavanje <strong>upita, pogleda i uskladištenih procedura</strong> za <strong>Star Schema</strong> skladište podataka, koristeći <strong>Microsoft SQL Server</strong>.",
          "Izgradnja i održavanje <strong>ETL poslova</strong> u SAS-u (i nešto u Azure Data Factory) za učitavanje, čišćenje i transformaciju podataka iz operativnih sistema (uglavnom <strong>SAP</strong>) u skladište podataka.",
          "Provera kvaliteta podataka (nedostajući ili nekonzistentni unosi, duplikati) i <strong>unapređenje ETL logike</strong> za stabilizaciju dnevnih učitavanja.",
          "Kreirano više od 10 regulatornih izveštaja koristeći <strong>Microsoft Report Builder</strong>.",
          "Saradnja sa <strong>biznis timovima</strong> kako bi se zahtevi preveli u data modele i tokove za izveštavanje."
        ]
      },
      {
        role: "Online profesor engleskog",
        place: "Native Camp (remote)",
        period: "Mar 2022",
        desc:
          "Podučavala konverzacijski engleski studentima iz različitih zemalja, poboljšavajući svoje komunikacione veštine i kulturnu svest.",
      },
    ],
    
    volunteer: [
      {
        role: "Saradnik - Katedra za elektronsko poslovanje",
        place: "Fakultet organizacionih nauka, Beograd",
        period: "Okt 2023 - Sept 2024",
        desc:
          "Vodila laboratorijske vežbe i podržavala istraživačke aktivnosti vezane za elektronsko poslovanje i veb tehnologije.",
      },
      {
        role: "Član Topic tima - Artificial Intelligence BattleGround (AIBG)",
        place: "BEST Beograd",
        period: "Avg 2023 - Dec 2023",
        desc:
          "Projektovanje i implementacija hakaton platforme za igru u Javi gde se takmičari fokusiraju na kreiranje i optimizaciju inteligentnih agenata.",
      },
      {
        role: "Odgovorna osoba za sajt - European BEST Engineering Competition (EBEC)",
        place: "BEST Beograd",
        period: "Okt 2022 - Maj 2023",
        desc:
          "Održavala WordPress sajt za EBEC projekat, poboljšavajući performanse i redovno ažurirajući sadržaj.",
      },
      {
        role: "Učesnik - Erasmus+ Youth Exchange “Green Goals”",
        place: "Portugal",
        period: "Nov 2025",
        desc:
          "Desetodnevni međunarodni program fokusiran na održivost, timski rad i interkulturalno učenje. Takođe je osnažio moje samopouzdanje u komunikaciji na engleskom i saradnji sa ljudima iz različitih kultura.",
      },
    ],
  },
  education: [
    {
      degree: "Master studije iz Softverskog inženjerstva i veštačke inteligencije 🔜",
      school: "Fakultet organizacionih nauka, Univerzitet u Beogradu",
      period: "Nov 2024 - sada",
      desc: [
        "Izrada master rada pod naslovom <i><strong>'Analiza i primena DevOps praksi u Azure Serverless arhitekturi'</strong></i>."
      ],
    },
    {
      degree: "Osnovne studije iz Informacionih sistema i tehnologija 🎓",
      school: "Fakultet organizacionih nauka, Univerzitet u Beogradu",
      period: "Okt 2020 - Sept 2024",
      desc: [
        "Diplomirala sa prosekom 9.32/10.",
        "Izgradila solidnu osnovu u bazama podataka, softverskom inženjerstvu i programiranju.",
        "Odbranila diplomski rad pod naslovom <i><strong>'Razvoj interaktivnog kalendara primenom Laravel i React okvira'</strong></i> (prvi projekat naveden iznad - Full-Stack kalendar veb aplikacija)."
      ],
    },
  ],

  contact: {
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub"
  },
  viewOnGitHub: "Pogledaj na GitHub-u →",
  footer: "Izgrađeno sa React & Vite • Hostovano na GitHub Pages",
}};
