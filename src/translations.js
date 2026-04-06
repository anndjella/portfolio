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
      "Master's student in Software Engineering & AI with one year of Data Engineering experience. I enjoy building backend and full-stack solutions, working with SQL, ETL processes and delivering well-tested, reliable systems.",
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
      experienceLabels: {
      work: "Work Experience",
      volunteer: "Volunteer Experience"
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
    tools: ["Git", "GitHub","Swagger","Azure DevOps", "Postman", "Report Builder", "MS Office"],
    ai: ["Claude Code","GitHub Copilot",  "OpenAI Codex"],
    soft: ["Problem Solving","Attention to Detail", "Teamwork & Collaboration", "Adaptability", "Time Management", "Communication",],
  },
    skillsGroupNames: {
      programming: "✨ Programming",
      web: "🌐 Web",
      data: "☁️ Data & Cloud",
      testing: "✅ Testing & Quality",
      tools: "🔧 Tools",
      ai: "🤖 AI Tools",
      soft: "🧠 Soft Skills"
  },

    projectsLead:
      "Here are some of the projects that best represent my interests in backend, data and testing.",
    projects: [
            {
        name: "Medical Appointment System 🏥",
        desc:
          "A collaborative full-stack system for managing medical appointments, where I contributed mainly to database architecture design and backend development using .NET and Entity Framework. The project focuses on clean architecture principles, domain modeling and real-world scheduling logic, including slot-based appointment management. I also contributed to frontend features and worked closely with teammates through Git workflows and collaboration.",
        tech: "GitHub, CI/CD ,C#, .NET, Entity Framework, SQL Server, React",
        link: "https://github.com/OrionMedApp/medical-appointment",
      },
      {
        name: "Full-Stack Calendar Web App 📅",
        desc:
          "A SPA (Single Page Application) calendar built with Laravel (REST API) and React, featuring a complete role-based access system with guest, user and admin privileges. The app includes public and private event management, .ics export, event type filtering, email reminders and drag-and-drop scheduling using React Big Calendar. It integrates Google Calendar, OpenWeather for location-based forecasts and an interactive map for event locations. Admins additionally manage users and public events through a dedicated dashboard.",
        tech: "Laravel, React, MySQL, REST, Google APIs",
        demo: "https://www.youtube.com/watch?v=i5v7vhzR-g4",
        link: "https://github.com/anndjella/laravel-react-calendar",
      },
       {
        name: "University Exam & Student Management System 🎓",
        desc:
          "A full-stack university system for managing students, exams and academic workflows, built with an ASP.NET Web API backend and a React frontend. The application supports three main roles: Student, Teacher and Student Service, each with clearly defined permissions and workflows. Students can view their enrollments, register for exams and track results. Teachers work with exam registrations, grading and subject-related data. Student Service manages administrative tasks such as students, teachers, subjects, enrollments and exam terms. The backend is built using EF Core and SQL Server, with a strong focus on layered architecture, business rules and data consistency. The project also includes testing across multiple layers using xUnit, Moq and tSQLt, along with performance testing in JMeter and code quality analysis using SonarQube.",
        tech: "C#, .NET, React, EF Core, SQL Server, xUnit, Moq, tSQLt, JMeter, SonarQube",
        link: "https://github.com/anndjella/student-exam-system",
      },
      // {
      //   name: "ToDo Microservice App ✔️",
      //   desc:
      //     "Simple C# microservice application, Dockerized and deployed through a CI/CD pipeline with GitHub Actions.",
      //   tech: "C#, .NET, Docker, GitHub Actions",
      //   link: "https://github.com/anndjella/ToDoApp",
      // },
      {
        name: "Member Management App 🏋️",
        desc:
          "A Windows Forms application for managing a fitness studio, using SQL Server to store and manage data, with a client-server architecture. The system supports multi-operator access and provides features for managing members, monthly invoices and attendance records. It enforces workflow rules such as invoice creation before logging attendance, category-based pricing with discounts and payment tracking that affects invoice totals. Operators can search, edit and delete members, view detailed monthly invoices and update payment statuses for current-month attendances. The project demonstrates client-server communication, database interaction and structured business logic implementation.",
        tech: "C#, WinForms, SQL Server",
        link: "https://github.com/anndjella/member-management-app",
      },
        {
        name: "Movie Rating Prediction Model 🎬",
        desc:
          "A Clojure/ClojureScript system that predicts IMDb movie ratings using a linear-regression model trained on a cleaned and feature-engineered Kaggle dataset. The project includes end-to-end data processing (cleaning, encoding, transformations), statistical modeling, a lightweight backend for serving predictions and a frontend UI for entering movie features.",
        tech: "Clojure, Linear Regression, ClojureScript, SQLite",
        link: "https://github.com/anndjella/projekat_clojure",
      },
      {
        name: "Pet Shop Web Demo 🐾",
        desc:
          "A WordPress-based demo online pet shop built with WooCommerce, featuring a custom layout created with Elementor, multilingual support via a translation plugin, user registration and login functionality, a blog section, SEO optimization and a fully responsive design. The project highlights plugin integration, content management and frontend customization.",
        tech: "WordPress, WooCommerce, CSS, Elementor, SEO",
        link: "https://petsmart.great-site.net/",
        linkLabel: "Visit site →"
      },
    ],
    experience: {
  work: [
      {
      role: "Software Engineer Intern",
      place: "Orion Innovation, Belgrade (hybrid)",
      period: "Feb 2026 - present",
      desc: [
        "Worked in a team of 10 engineers on a full-stack application using <strong>C# (.NET)</strong> on the backend and <strong>React</strong> on the frontend.",
        "Actively participated in <strong>pull request workflows</strong>, including creating PRs, reviewing code and incorporating feedback.",
        "Collaborated with team members through <strong>code reviews</strong> to ensure code quality, consistency and best practices.",
        "Gaining experience with real-world development processes such as version control, team collaboration and structured development workflows.",
        "Currently also assigned to a <strong>production-level .NET project</strong>, where onboarding is in progress."
      ]
    },
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
          "Completed a bachelor thesis titled <i><strong>'Development of an Interactive Calendar Using Laravel and React Frameworks'</strong></i> (the first project listed below - Full-Stack Calendar Web App)."
        ],
      },
      ],

    contact: {
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub"
},
    viewOnGitHub: "View on GitHub →",
    footer: "Built with love ❤️ • Hosted on GitHub Pages",
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
  heroTitle: "Softversko inženjerstvo & Data inženjering",
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
    experienceLabels: {
    work: "Radno iskustvo",
    volunteer: "Volontersko iskustvo"
  },
  about:
    "Mesec dana pre završetka osnovnih studija, pridružila sam se <strong>\"Dobar start\" praksi u Nelt-u</strong>, gde sam na osnovu svojih veština i akademskog iskustva dodeljena <strong>Data inženjering timu</strong>.\n\n" +
    "Ostala sam tamo <strong>godinu dana, radeći četiri dana nedeljno u modelu plaćene prakse</strong>, uglavnom na SQL razvoju, ETL procesima i izveštavanju. Nakon vrlo intenzivne i vredne godine, odlučila sam da napustim Nelt kako bih se u potpunosti posvetila master studijama.\n\n" +
    "Trenutno završavam Master studije <strong>Softverskog inženjerstva i veštačke inteligencije</strong> na <strong>Fakultetu organizacionih nauka</strong>.\n\n" +
    "Kako napredujem kroz master studije, tražim ulogu u kojoj mogu nastaviti da se razvijam kao inženjer i doprinosim dobro strukturisanim i pouzdanim sistemima.<strong> Najviše me zanimaju poslovi u backend razvoju i radu sa podacima</strong>, posebno u ulogama koje kombinuju ove oblasti.",

  skills: {
    programming: ["C#", "Java", "JavaScript", "SQL","Python (osnovno)"],
    web: ["React (JavaScript biblioteka)", "Laravel (PHP okvir)", "HTML", "CSS", "RESTful API", "WordPress"],
    data: ["Microsoft SQL Server", "PostgreSQL (osnovno)", "Azure Data Factory (osnovno iskustvo sa tokovima podataka)", "Power BI (praktično iskustvo)"],
    testing: ["xUnit", "Moq", "tSQLt", "JMeter", "SonarQube"],
    tools: ["Git", "GitHub","Swagger","Azure DevOps", "Postman", "Report Builder", "MS Office paket"],
    ai: [ "Claude Code","GitHub Copilot", "OpenAI Codex"],
    soft: ["Rešavanje problema","Pažnja na detalje", "Timski rad i saradnja", "Prilagodljivost", "Upravljanje vremenom", "Komunikacija"],
  },
 skillsGroupNames: {
      programming: "✨ Programiranje",
      web: "🌐 Veb",
      data: "☁️ Data i Cloud",
      testing: "✅ Testiranje i kvalitet",
      tools: "🔧 Alati",
      ai: "🤖 AI alati",
      soft: "🧠 Soft veštine"
  },

  projectsLead:
    "Ovo su neki od projekata koji najbolje predstavljaju moje interese u backend-u, podacima i testiranju.",
  projects: [
    {
      name: "Sistem za zakazivanje medicinskih pregleda 🏥",
      desc:
        "Timski full-stack projekat za upravljanje medicinskim pregledima, gde sam najviše radila na dizajnu baze podataka i backend logici koristeći .NET i Entity Framework. Projekat je fokusiran na clean arhitekturu, domensko modelovanje i realne scenarije zakazivanja termina (slot-based pristup). Takođe sam učestvovala u frontend razvoju i saradnji sa timom kroz Git i code review procese.",
      tech: "GitHub, CI/CD, C#, .NET, Entity Framework, SQL Server, React",
      link: "https://github.com/OrionMedApp/medical-appointment"
    },
    {
      name: "Full-Stack kalendar veb aplikacija 📅",
      desc:
        "SPA (Single Page Application) kalendar izrađen pomoću Laravel (REST API) okvira i React biblioteke, sa kompletnim sistemom pristupa zasnovanim na ulogama - gosti, korisnici i administratori. Aplikacija omogućava upravljanje javnim i privatnim događajima, izvoz u .ics formatu, filtriranje po tipovima događaja, email podsetnike i raspoređivanje događaja prevlačenjem. Aplikacija je integrisana sa Google kalendarom, sa OpenWeather interfejsom za vremenske prognoze po lokaciji i interaktivnom mapom za lokacije događaja. Administratori dodatno upravljaju korisnicima i javnim događajima preko posebne kontrolne table.",
      tech: "Laravel, React, MySQL, REST, Google API",
      demo: "https://www.youtube.com/watch?v=i5v7vhzR-g4",
      link: "https://github.com/anndjella/laravel-react-calendar",
    },
        {
      name: "Sistem za upravljanje studentima i ispitima 🎓",
      desc:
        "Full-stack univerzitetski sistem za upravljanje studentima, ispitima i akademskim procesima, izrađen sa ASP.NET Web API backendom i React frontendom. Aplikacija podržava tri glavne uloge: student, nastavnik i studentska služba, sa jasno definisanim dozvolama i tokovima rada. Studenti mogu da pregledaju svoje upise, prijavljuju ispite i prate rezultate. Nastavnici rade sa prijavama i ocenama, kao i podacima vezanim za predmete. Studentska služba upravlja administrativnim delom sistema, uključujući studente, nastavnike, predmete, upise i ispitne rokove. Backend koristi EF Core i SQL Server, uz fokus na slojevitu arhitekturu, poslovna pravila i konzistentnost podataka. Projekat uključuje testiranje na više nivoa korišćenjem xUnit, Moq i tSQLt, kao i testiranje performansi pomoću JMeter alata i analizu kvaliteta koda kroz SonarQube.",
      tech: "C#, .NET, React, EF Core, SQL Server, xUnit, Moq, tSQLt, JMeter, SonarQube",
      link: "https://github.com/anndjella/student-exam-system",
    },
    // {
    //   name: "ToDo mikroservisna aplikacija ✔️",
    //   desc:
    //     "Jednostavna C# mikroservisna aplikacija, dockerizovana i postavljena kroz CI/CD pipeline koristeći GitHub Actions.",
    //   tech: "C#, .NET, Docker, GitHub Actions",
    //   link: "https://github.com/anndjella/ToDoApp",
    // },
    {
      name: "Aplikacija za upravljanje članovima 🏋️",
      desc:
        "Windows Forms aplikacija za upravljanje fitnes studiom, koristeći SQL Server za čuvanje i upravljanje podacima, sa klijent-server arhitekturom. Sistem podržava pristup više operatera i nudi funkcionalnosti za upravljanje članovima, mesečnim dugovanjima i evidencijom prisustva. Implementirana su pravila, kao što su kreiranje računa pre evidentiranja prisustva, cenovnik zasnovan na kategorijama sa popustima i praćenje plaćanja koje utiče na ukupne iznose dugovanja. Operateri mogu pretraživati, uređivati i brisati članove, pregledati detaljne mesečne račune i ažurirati status plaćanja za prisustva tekućeg meseca. Projekat demonstrira komunikaciju između klijenta i servera, interakciju sa bazom podataka i implementaciju strukturirane poslovne logike.",
      tech: "C#, WinForms, SQL Server",
      link: "https://github.com/anndjella/member-management-app",
    },
    {
      name: "Model predviđanja ocena filmova 🎬",
      desc:
        "Clojure/ClojureScript sistem koji predviđa IMDb ocene filmova koristeći linearni regresioni model treniran na očišćenim i transformisanim Kaggle podacima. Projekat uključuje end-to-end obradu podataka (čišćenje, pripremu, transformacije), statističko modeliranje, lagani backend za pružanje predikcija i frontend UI za unos karakteristika filmova.",
      tech: "Clojure, Linear Regression, ClojureScript, SQLite",
      link: "https://github.com/anndjella/projekat_clojure",
    },
    {
      name: "Veb prodavnica za kućne ljubimce🐾",
      desc:
        "Demo veb prodavnica za kućne ljubimce zasnovana na WordPress-u, izrađena pomoću WooCommerce dodatka, sa prilagođenim izgledom kreiranim u dodatku Elementor, podrškom za više jezika preko prevodilačkog dodatka, funkcionalnošću registracije i prijave korisnika, sekcijom za blog, SEO optimizacijom i potpuno responzivnim dizajnom. Projekat ističe integraciju dodataka, upravljanje sadržajem i prilagođavanje frontenda.",
      tech: "WordPress, WooCommerce, CSS, Elementor, SEO",
      link: "https://petsmart.great-site.net/",
      linkLabel: "Poseti sajt →"
    },
  ],
  experience: {
    work: [
            {
        role: "Softver inženjer praktikant",
        place: "Orion Innovation, Beograd (hybrid)",
        period: "Feb 2026 - sada",
        desc: [
          "Rad u timu od 10 inženjera na full-stack aplikaciji koristeći <strong>C# (.NET)</strong> na backendu i <strong>React</strong> na frontendu.",
          "Aktivno učešće u <strong>pull request procesu</strong> - kreiranje PR-ova, code review i implementacija sugestija.",
          "Saradnja sa timom kroz <strong>code review</strong> radi očuvanja kvaliteta koda i primene dobrih praksi.",
          "Sticanje iskustva u radu na realnim projektima i timskim development procesima.",
          "Takođe uključena u <strong>produkcioni .NET projekat</strong>, trenutno u fazi onboardinga."
        ]
      },
      {
        role: "Junior inženjer podataka",
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
          "Desetodnevni međunarodni program fokusiran na održivost, timski rad i interkulturalno učenje. Takođe je osnažio moje samopouzdanje u komunikaciji na engleskom i saradnji sa ljudima različitih kultura.",
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
        "Odbranila diplomski rad pod naslovom <i><strong>'Razvoj interaktivnog kalendara primenom Laravel i React okvira'</strong></i> (prvi projekat naveden ispod - Full-Stack kalendar veb aplikacija)."
      ],
    },
  ],

  contact: {
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub"
  },
  viewOnGitHub: "Pogledaj na GitHub-u →",
  footer: "Izgrađeno sa ljubavlju ❤️ • Hostovano na GitHub Pages",
}};
