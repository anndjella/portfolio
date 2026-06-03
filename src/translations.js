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
    heroEyebrow: "Software • Data • Quality",
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
      "I am a software engineering Master's student and currently work as a <strong>full-stack developer intern</strong>. I have a soft spot for <strong>backend, data and systems that actually make sense</strong>. Before that, I gained one year of experience as a <strong>Data Engineer</strong> in a large data-driven company, working with SQL, ETL processes and reporting.\n\n" +
      "I enjoy building things that are clear, useful and reliable, whether that means shaping backend logic, working with data or connecting the pieces on the frontend. I like learning by doing, asking questions, improving a little with every task and staying curious even when the bug is being unnecessarily dramatic.\n\n" +
      "Progress matters a lot to me. I love learning, growing and becoming better at what I do, even when it takes time. One quote I often come back to, in many aspects of life, is: <strong>\"It's a slow process, but quitting won't speed it up.\"</strong>",

   skills: {
    programming: ["C#", "Java", "JavaScript", "SQL","Python (basic)"],
    web: ["Angular", "React (JavaScript library)", "Laravel (PHP framework)", "HTML", "CSS", "RESTful APIs", "WordPress"],
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
          "A collaborative <strong>full-stack medical scheduling system</strong> built around real appointment workflows. I contributed mainly to <strong>database design and backend development</strong> with .NET and Entity Framework, including slot-based scheduling logic and team collaboration through Git and code reviews.",
        tech: "GitHub, CI/CD ,C#, .NET, Entity Framework, SQL Server, React",
        link: "https://github.com/OrionMedApp/medical-appointment",
      },
      {
        name: "Full-Stack Calendar Web App 📅",
        desc:
          "A <strong>Laravel + React</strong> calendar app with role-based access for guests, users and admins. It supports public/private events, <strong>drag-and-drop scheduling</strong>, .ics export, email reminders and integrations with Google Calendar, OpenWeather and maps.",
        tech: "Laravel, React, MySQL, REST, Google APIs",
        demo: "https://www.youtube.com/watch?v=i5v7vhzR-g4",
        link: "https://github.com/anndjella/laravel-react-calendar",
      },
       {
        name: "University Exam & Student Management System 🎓",
        desc:
          "A <strong>full-stack university management system</strong> for students, exams and academic administration. The backend uses <strong>ASP.NET Web API, EF Core and SQL Server</strong>, with clear role-based workflows and testing across multiple layers using xUnit, Moq, tSQLt, JMeter and SonarQube.",
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
          "A <strong>client-server Windows Forms app</strong> for managing fitness studio members, invoices and attendance. The project focuses on <strong>SQL Server data handling</strong>, multi-operator work and business rules such as monthly billing, payment status and category-based pricing.",
        tech: "C#, WinForms, SQL Server",
        link: "https://github.com/anndjella/member-management-app",
      },
        {
        name: "Movie Rating Prediction Model 🎬",
        desc:
          "A <strong>Clojure/ClojureScript prediction system</strong> for estimating IMDb movie ratings. It includes data cleaning, feature preparation, a <strong>linear regression model</strong>, a lightweight backend and a simple UI for entering movie features.",
        tech: "Clojure, Linear Regression, ClojureScript, SQLite",
        link: "https://github.com/anndjella/projekat_clojure",
      },
      {
        name: "Pet Shop Web Demo 🐾",
        desc:
          "A <strong>WordPress/WooCommerce demo shop</strong> with a custom Elementor layout, multilingual support, user login, blog content and SEO setup. The focus was on responsive design, plugin integration and practical content management.",
        tech: "WordPress, WooCommerce, CSS, Elementor, SEO",
        link: "https://petsmart.great-site.net/",
        linkLabel: "Visit site →"
      },
    ],
    experience: {
  work: [
      {
      role: "Full-Stack Developer Intern",
      place: "Orion Innovation, Belgrade (hybrid)",
      period: "Feb 2026 - present",
      desc: [
        "Worked with a team of 10 interns on a <strong>full-stack application</strong>, contributing to backend development, frontend features and team workflows through Git and code reviews.",
        "Currently working in a <strong>production microservice environment</strong> on an application that incorporates <strong>OpenAI capabilities</strong> into real product features.",
        "Developing features using <strong>.NET</strong> on the backend and <strong>Angular</strong> on the frontend, with focus on maintainable implementation and integration with existing services.",
        "Actively participating in <strong>pull request workflows</strong>, including creating PRs, reviewing code, applying feedback and collaborating with more experienced engineers."
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
  heroEyebrow: "Softver • Podaci • Kvalitet",
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
    "Ja sam master student softverskog inženjerstva i trenutno radim kao <strong>full-stack developer praktikant</strong>. Imam posebnu naklonost ka <strong>backendu, podacima i sistemima koji stvarno imaju smisla</strong>. Iza sebe imam godinu dana iskustva kao <strong>Data Engineer</strong> u velikoj data-driven kompaniji, gde sam radila sa SQL-om, ETL procesima i izveštavanjem.\n\n" +
    "Volim da gradim stvari koje su jasne, korisne i pouzdane, bilo da je u pitanju backend logika, rad sa podacima ili povezivanje delova na frontendu. Najviše mi prija kada učim kroz konkretan rad, postavljam pitanja, napredujem korak po korak i ostanem radoznala čak i kad bug odluči da bude malo dramatičan.\n\n" +
    "Obožavam da napredujem, učim i razvijam se, čak i kada proces traje duže nego što bih volela. Citat kojim se često vodim i kom se vraćam u mnogim aspektima života je: <strong>\"It's a slow process, but quitting won't speed it up.\"</strong>",

  skills: {
    programming: ["C#", "Java", "JavaScript", "SQL","Python (osnovno)"],
    web: ["Angular", "React (JavaScript biblioteka)", "Laravel (PHP okvir)", "HTML", "CSS", "RESTful API", "WordPress"],
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
        "Timski <strong>full-stack sistem za zakazivanje medicinskih pregleda</strong>, zasnovan na realnim tokovima rada. Najviše sam radila na <strong>dizajnu baze podataka i backend logici</strong> u .NET-u i Entity Framework-u, uključujući slot-based zakazivanje i saradnju kroz Git i code review.",
      tech: "GitHub, CI/CD, C#, .NET, Entity Framework, SQL Server, React",
      link: "https://github.com/OrionMedApp/medical-appointment"
    },
    {
      name: "Full-Stack kalendar veb aplikacija 📅",
      desc:
        "<strong>Laravel + React</strong> kalendar aplikacija sa pristupom po ulogama za goste, korisnike i administratore. Podržava javne i privatne događaje, <strong>drag-and-drop zakazivanje</strong>, .ics export, email podsetnike i integracije sa Google Calendar, OpenWeather i mapama.",
      tech: "Laravel, React, MySQL, REST, Google API",
      demo: "https://www.youtube.com/watch?v=i5v7vhzR-g4",
      link: "https://github.com/anndjella/laravel-react-calendar",
    },
        {
      name: "Sistem za upravljanje studentima i ispitima 🎓",
      desc:
        "<strong>Full-stack univerzitetski sistem</strong> za studente, ispite i administrativne procese. Backend je rađen kroz <strong>ASP.NET Web API, EF Core i SQL Server</strong>, sa jasnim tokovima po ulogama i testiranjem kroz xUnit, Moq, tSQLt, JMeter i SonarQube.",
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
        "<strong>Klijent-server Windows Forms aplikacija</strong> za upravljanje članovima, računima i evidencijom prisustva u fitnes studiju. Fokus je na <strong>SQL Server radu sa podacima</strong>, pristupu više operatera i poslovnim pravilima kao što su mesečna zaduženja, status plaćanja i kategorije članova.",
      tech: "C#, WinForms, SQL Server",
      link: "https://github.com/anndjella/member-management-app",
    },
    {
      name: "Model predviđanja ocena filmova 🎬",
      desc:
        "<strong>Clojure/ClojureScript sistem za predviđanje IMDb ocena</strong> filmova. Uključuje čišćenje podataka, pripremu karakteristika, <strong>linearni regresioni model</strong>, lagani backend i jednostavan UI za unos podataka o filmu.",
      tech: "Clojure, Linear Regression, ClojureScript, SQLite",
      link: "https://github.com/anndjella/projekat_clojure",
    },
    {
      name: "Veb prodavnica za kućne ljubimce🐾",
      desc:
        "<strong>WordPress/WooCommerce demo prodavnica</strong> sa prilagođenim Elementor dizajnom, višejezičnom podrškom, korisničkom prijavom, blogom i SEO podešavanjima. Fokus je bio na responzivnom dizajnu, integraciji dodataka i praktičnom upravljanju sadržajem.",
      tech: "WordPress, WooCommerce, CSS, Elementor, SEO",
      link: "https://petsmart.great-site.net/",
      linkLabel: "Poseti sajt →"
    },
  ],
  experience: {
    work: [
            {
        role: "Full-Stack Developer Praktikant",
        place: "Orion Innovation, Beograd (hybrid)",
        period: "Feb 2026 - sada",
        desc: [
          "Radila u timu od 10 praktikanata na <strong>full-stack aplikaciji</strong>, uz doprinos backend razvoju, frontend funkcionalnostima i timskim procesima kroz Git i code review.",
          "Trenutno radim u <strong>produkcijskom mikroservisnom okruženju</strong> na aplikaciji koja uključuje <strong>OpenAI mogućnosti</strong> u realne funkcionalnosti proizvoda.",
          "Razvijam funkcionalnosti koristeći <strong>.NET</strong> na backendu i <strong>Angular</strong> na frontendu, sa fokusom na održivu implementaciju i integraciju sa postojećim servisima.",
          "Aktivno učestvujem u <strong>pull request procesu</strong> - kreiranje PR-ova, code review, primena sugestija i saradnja sa iskusnijim inženjerima."
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
