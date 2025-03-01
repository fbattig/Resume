import './Resume.css';
import { useState } from 'react';

export default function Resume() {
  const [activeSection, setActiveSection] = useState('experience');
  const [expandedJobs, setExpandedJobs] = useState({});

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const toggleJobDetails = (jobId) => {
    setExpandedJobs(prevState => ({
      ...prevState,
      [jobId]: !prevState[jobId]
    }));
  };

  // Job experience data
  const jobExperiences = [
    {
      id: 'ttc',
      title: 'FULL STACK DEVELOPER (Contract)',
      company: 'TTC',
      location: 'Toronto, Ontario',
      period: 'Jan 2024 – Dec 2024',
      responsibilities: [
        'Modernized legacy .NET 4.6 board reporting web forms by migrating to ASP.NET Core and Angular',
        'Optimized Angular components and backend workflows, cutting load times by 80% and boosting efficiency by 60%',
        'Engineered 50+ test cases to secure 99% system reliability and eliminate performance bottlenecks',
        'Integrated Angular 17, Telerik Kendo UI, Crystal Reports, Entity Framework, and RESTful APIs',
        'Delivered an enterprise-level reporting system that enhanced performance and user experience'
      ]
    },
    {
      id: 'compass',
      title: 'FULL STACK DEVELOPER (Contract)',
      company: 'Compass Canada',
      location: 'Mississauga, Ontario',
      period: 'Aug 2022 – July 2023',
      responsibilities: [
        'Collaborated with the back-end team to drive the development of EPay\'s ASP.NET Core Web API powered by the latest .NET 7 technology stack.',
        'Collaborated within a team of .NET developers to enhance and maintain four N-tier enterprise applications using .NET (v.4.6) framework and C#.',
        'Improved efficiency in two SQL database projects through refining stored procedures, functions, tables, and indexes.',
        'Made modifications and enhancements to SSRS reports based on change request documents.',
        'Developed and refined web GUI applications and Ajax based on change request documents, utilizing web technologies including HTML, SASS, and JavaScript.',
        'Utilized the full potential of .NET to craft adaptable, high-performance solutions, ensuring seamless alignment with business requirements and user expectations.',
        'Employed reverse engineering techniques to unravel the intricacies of existing code, constructing flowcharts and comprehensive documentation to gain profound insights into its functionality. Rewrote and refactored the code, improving its maintainability and efficiency.',
        'Maintained and fine-tuned web GUI applications, including ASP.NET Web Forms, while addressing and rectifying incompatible Telerik controls. Integrated JavaScript functionality to ensure the delivery of responsive and interactive user interfaces.',
        'Assisted in the training and onboarding of new developers, ensuring their readiness to contribute effectively to projects.'
      ]
    },
    {
      id: 'fct',
      title: 'FULL STACK DEVELOPER (Contract)',
      company: 'First Canadian Title (FCT)',
      location: 'Toronto, Ontario',
      period: 'Nov 2021 – Jun 2022',
      responsibilities: [
        'Utilized TFS as a CI/CD tool and source control solution, streamlining code changes and version control for smooth development processes.',
        'Crafted versatile web applications, employing Angular 12, HTML, SASS, and JavaScript, coupled with .NET Framework - Web API.',
        'Garnered extensive experience in building optimized N-tier enterprise applications, harnessing the capabilities of .NET frameworks and C#.',
        'Contributed to the transformation of the "FCT Junction Online" project into a responsive web application with multifaceted objectives.',
        'Established a development environment using Angular, TypeScript, Bootstrap, ngx-bootstrap. Used Protractor to test Angular.',
        'Collaborated seamlessly with the scrum team to construct interfaces using NgRx and RxJs, enabling reactive state and programming management.',
        'Implemented a streamlined single-page application structure with modular architecture, designing components and directives with a focus on singular responsibilities.',
        'Generated SQL Scripts to facilitate seamless database deployment and administration in the pre-production phase, ensuring optimal readiness for database administrators.'
      ]
    },
    {
      id: 'bond',
      title: 'FULL STACK DEVELOPER (Contract)',
      company: 'Bond Brand Loyalty',
      location: 'Toronto, Ontario',
      period: 'May 2021 – Sep 2021',
      responsibilities: [
        'Employed SQL stored procedures and T-SQL Queries extensively, effectively managing the Scene and Scotia rewards application.',
        'Oversaw the maintenance of SSIS packages to ensure seamless data integration and transformation.',
        'Managed Asp.Net Web forms (GUI) applications, ensuring their smooth operation and user-friendly interfaces.',
        'Collaborated closely with stakeholders, comprehending project requirements, and offering valuable technical insights to devise robust software solutions.',
        'Functioned as an integral member of the core digital engineering team, contributing significantly to day-to-day development activities.',
        'Designed, constructed, and upheld efficient, reusable, and dependable C# and Ajax code.',
        'Prioritized optimal performance, quality, and responsiveness in the applications\' development and maintenance.',
        'Proactively identified performance bottlenecks and errors, devising effective solutions to rectify these challenges.'
      ]
    },
    {
      id: 'rrtax',
      title: 'FULL STACK DEVELOPER (Contract)',
      company: 'RR Tax Accounting',
      location: 'Toronto, Ontario',
      period: 'Mar 2019 – Apr 2021',
      responsibilities: [
        'Played a pivotal role in the development of applications and databases, demonstrating a keen ability to understand client needs, troubleshoot issues, analyze requirements, and deliver tailored solutions.',
        'Collaborated with clients to design robust software and systems solutions, aligning precisely with their unique problem sets.',
        'Engineered a customer tracking application using Angular 12, Angular Material, RxJs, ASP.NET Core API, and Azure SQL. This high-performance application was hosted on Azure PaaS, ensuring seamless functionality.',
        'Implemented Protractor testing for Angular.',
        'Leveraged the mediator pattern (MediatR) to enhance the maintainability and scalability of the code by effectively decoupling command/query and event-handling segments.',
        'Strengthened security by implementing JWT Token-based authentication, ensuring authorized access to different users for the ASP.NET Core Web API.',
        'Crafted a GST/HST data collection form using React Hooks and Firebase, incorporating authentication and authorization functionalities to accurately calculate corresponding payment amounts.',
        'Orchestrated the configuration of Azure resources, including Resource Group, App Service, App Service Plan, SQL Server, and SQL Database. These resources facilitated the deployment of ASP.NET web applications, managed using Azure DevOps and Git for streamlined source control and continuous integration/deployment.',
        'Facilitated productive meetings with clients, meticulously gathering business processes and requirements to align solutions with their specific needs.',
        'Translated client requirements into comprehensive technical documentation, ensuring effective communication between clients and the development team, and providing a clear roadmap for implementation.'
      ]
    },
    {
      id: 'rbc',
      title: 'FULL STACK DEVELOPER (Contract)',
      company: 'Royal Bank of Canada (RBC)',
      location: 'Toronto, Ontario',
      period: 'Aug 2018 – Feb 2019',
      responsibilities: [
        'Proficiently analyzed requirements to develop applications aligned with organizational standards and best practices, focusing on IT security, architecture, project delivery methods, and vulnerability mitigation.',
        'Collaborated effectively within a developer team to address technical front/back-end requirements in existing .NET/web apps.',
        'Created "Related Party Reporting" using C#, Entity Framework, SQL, ASP.NET Core Rest API & Angular to disclose transactions with related parties in compliance with policies. Employed NgRx and RxJs for efficient state management.',
        'Designed "Resource Planning" app using ASP.NET MVC, transferring SharePoint view data to SQL Server for Tableau reports and web interfaces. Leveraged .NET Framework, C#, JavaScript, and Entity Framework for robust development.',
        'Enhanced enterprise financial planning .NET app for improved functionality and performance.',
        'Developed a console app to securely transfer SharePoint data to SQL Server, adhering to internal security standards. Employed arrays, lists, multithreading, and delegates for performance optimization.',
        'Defined, developed, and resolved business system issues, recommending stakeholder-oriented solutions and executing rigorous test plans for quality assurance.'
      ]
    },
    {
      id: 'chs',
      title: 'FULL STACK DEVELOPER (Contract)',
      company: 'Copper Horizon Software (CHS)',
      location: 'Calgary, Alberta',
      period: 'Sept 2014 – Jun 2018',
      responsibilities: [
        'Collaborate with a team of developers to develop/solve technical front/back-end requirements on existing and/or new ASP.NET / web applications. Collaborate with project managers ensuring deliverables are completed in time and within budget. Apply Agile Scrum Methodology, improving Sprint Backlog, Sprint tasks, Daily Stand Up Meetings, Network Grooming sessions and Sprint reviews companywide.',
        'Developed an Azure application using ASP.NET Core Rest API & Angular-Bootstrap/ASP.NET Core MVC/SQL Azure.',
        'The purpose of this application was to create PDF agreement documents between two parties, specifically "Grower" and "Bayer." The application included several functionalities like searching, retrieving lists of documents, data entry form templates in both English and French languages, printing, emailing, and saving documents.',
        'Configured and customized Azure Virtual Machines, installing Azure SQL Server, Databases, and IIS. Leveraged Azure DevOps and Git for streamlined source control and continuous integration/deployment.',
        'Maintained ASP.NET MVC and Telerik Kendo User Interface applications for a Fortune Global 500 Corporation, benefiting over 300 end-users. These applications automated data collection, validation, and multi-user access, enhancing operational efficiency. Leveraged JavaScript skills and reporting tools such as SSRS, Tableau, and Kendo Reporting.',
        'Contributed to unit testing efforts to ensure the reliability and functionality of ASP.NET/web applications.',
        'Expertly utilized SSIS to extract, transform, and load data from an old Microsoft Dynamics CRM, performing a comprehensive comparison against the new release of Microsoft Dynamics CRM. Employed T-SQL skills to design databases, tables, stored procedures, views, and queries.',
        'Successfully implemented the Assyst Web application using React, empowering sales personnel to track product allocations and forecast future orders for customers.',
        'Evaluated, enhanced, and maintained WPF\'s Bayer Financial enterprise budgeting and forecasting application, catering to the needs of 500 concurrent daily users. This application played a crucial role in reconciling end-of-month operational accounts and forecasting future budget requirements.',
        'Adhered to Agile methodology principles, integrating Sprint Backlog, Sprint Tasks, Daily Stand Up meetings, Grooming sessions, and Sprint reviews to ensure effective collaboration and timely project delivery.',
        'Leveraged TFS as a CI/CD tool and source control solution, optimizing code management and version control for streamlined development processes.'
      ]
    },
    {
      id: 'bayer',
      title: 'DEVELOPER (Contract)',
      company: 'Bayer Crop Science',
      location: 'Toronto, Ontario',
      period: 'Jun 2013 – Aug 2014',
      responsibilities: [
        'Developed and maintained ASP.NET MVC and Telerik Kendo UI applications with strong use of JavaScript for a Fortune Global 500 Corporation, improving the automation process of data collection, validity, and multi-user access for over 100 end-users.',
        'Created and maintained a financial application that streamlined rebate calculation in Excel and VBA, resulting in significant cost savings and increased revenue.',
        'Evaluated, improved, and maintained Silverlight Bayer’s financial enterprise budgeting and forecasting application, which supported 500 concurrent users daily and was relied upon to reconcile end-of-month operations accounts and determine future budget requirements.',
        'Utilized SSIS extensively to extract and transfer data from various sources such as SQL databases, Excel files, and MS Access to feed Tableau Reports.',
        'Conducted meetings with clients to gather business processes and requirements for solutions, and documented those requirements. Modified business requirements into technical solutions through documentation.'
      ]
    },
    {
      id: 'mto',
      title: 'DEVELOPER (Contract)',
      company: 'Ministry of Transportation (MTO)',
      location: 'St. Catharines, Ontario',
      period: 'Aug 2012 – May 2013',
      responsibilities: [
        'Led the oversight of a portfolio of digital transportation initiatives to maximize the government’s objective of achieving the highest quality in safety for public benefit.',
        'Analyzed complex transit infrastructure and policy issues to support decision-making, collaborated financial performance reviews, developed program evaluation plans, and managed stakeholder relationships.',
        'Provided guidance and recommendations on software improvements and processes.',
        'Played a key role as a team member in the development of the WPF front end and business components for the Transit Volume Information System (TVIS), which reports the annual average daily traffic of 1500+ highway segments throughout the region. Applied MVVM and LINQ to Entities to ensure efficient and effective system functionality.',
        'Performed Automated Unit Tests, Manual Unit Tests to enhance system verification.',
        'Utilized TFS as a CI/CD tool and source control to ensure smooth and efficient management of code changes and version control.',
        'Generated and revised Automated Unit Tests, Manual Unit Tests, and Coded UI Tests to improve the verification process and ensure the quality of the system.',
        'Implemented the Agile methodology, including Sprint Backlog, Sprint Tasks, Daily Stand-Up meetings, Grooming sessions, and Sprint review, to ensure effective collaboration and timely delivery of the project.'
      ]
    },
    {
      id: 'moe',
      title: 'DEVELOPER (Contract)',
      company: 'Ministry of Education (MOE)',
      location: 'Toronto, Ontario',
      period: 'Jun 2011 – Jun 2012',
      responsibilities: [
        'Provided specialized systems design, development, and expert technical acumen to provide resolutions to meet client needs.',
        'Led system analysis and application planning, design, testing, and tailoring.',
        'Developed business case and presentations for recommended systems and application improvements.',
        'Created and implemented application upgrades and changes.',
        'Designed and implemented controllers, views, and models according to governing documents and client requirements, while ensuring timely and accurate adjustments to Crystal Reports based on change request specifications.',
        'Developed and Unit tested a robust survey application using ASP.NET Razor, MVC3, JavaScript, and SQL for non-technical staff to easily create their own surveys, improving efficiency and productivity.'
      ]
    },
    {
      id: 'lcbo',
      title: 'LEAD SENIOR DEVELOPER (Contract)',
      company: 'Liquor Control Board of Ontario (LCBO)',
      location: 'Toronto, Ontario',
      period: 'Nov 2007 – May 2011',
      responsibilities: [
        'Developed user applications and financial solutions for state-sponsored enterprise overseeing $5.89B revenue from 860+ retail outlets providing 24k products to consumers region-wide.',
        'Coached and trained junior programmers in production, quality and customer-service requirements.',
        'Implemented the latest technology in web-based security and applications to track transactions and criminal incidents.',
        'Maintained various VB6 applications using Frontend and Business Logic, and Toad for Oracle for Backend.',
        'Skilled in SharePoint administration to manage document control. Extensive use of .NET technology.',
        'Successfully converted a Gift Card application VB windows application technology, enabling real-time adjustment of card balances and choreographing the reconciliation of 100K card transactions worth $800K. Utilized SSIS as a processing tool to ensure compliance with PCI regulations.',
        'Applied data analysis in SQL to construct business objectives, along with stored procedures and controls for high-volume sales, ensuring a seamless sales process for customers.',
        'Implemented JavaScript/jQuery in the actualization of a digital Brand Display web ASP page for the sales audit department, utilizing SKU selection in a database to automatically populate sales promotion data.',
        'Played a key role in developing the WPF’s Law Enforcement and Incident Report Online application, responsible for tracking incidents in stores, enabling investigators to trace them and take corrective actions. Developed business objects, stored procedures, and controls in both the backend and frontend.',
        'Diligently troubleshot and resolved bugs in .NET applications to ensure optimal development environment.',
        'Designed and developed WinForms user interface projects with initial layout and base controls, providing a user-friendly interface for end-users.'
      ]
    },
    {
      id: 'cnr',
      title: 'DEVELOPER (Contract)',
      company: 'Canadian National Railway',
      location: 'Brampton, Ontario',
      period: 'Jan 2003 – Oct 2007',
      responsibilities: [
        'Analyzed requirements to develop applications that supported organization standards and best practices.',
        'Ensured compliance with internal information technology standards of security, architecture, project delivery methods, and vulnerability mitigation.',
        'Generated Data Transformation Service process to read data process and convert into reportable data in Crystal Reporting.',
        'Provided presentations and training on product design and functions to clients.',
        'Developed “WEB CN Worldwide” application in ASP.NET-C# 2.0 and SQL Server 2000 to track CN and customers containers shipped from Nederland to Canada, enabling users to track container locations 24/7 and access relevant documents, services, and logistics information.',
        'Built architecture and developed Container Management Tool in Visual Basic (VB) for efficient warehouse and shipping management, allocating available container space based on customer base requirements.',
        'Contributed to the design, coding (using MS Access), and testing of the IMXTool Scheduling system, improving data retrieval, flexibility in reporting, and reliability and predictability of shipments.',
        'Created the FMS Interquisa tool interface, enhancing service monitoring for all traffic throughout North America.'
      ]
    }
  ];

  return (
    <section id="resume">
      <div className="resume-nav">
        <button 
          className={activeSection === 'summary' ? 'active' : ''} 
          onClick={() => handleSectionChange('summary')}
        >
          Summary
        </button>
        <button 
          className={activeSection === 'skills' ? 'active' : ''} 
          onClick={() => handleSectionChange('skills')}
        >
          Technical Skills
        </button>
        <button 
          className={activeSection === 'experience' ? 'active' : ''} 
          onClick={() => handleSectionChange('experience')}
        >
          Experience
        </button>
      </div>

      {activeSection === 'summary' && (
        <div className="resume-section">
          <h3>SUMMARY OF QUALIFICATIONS</h3>
          <ul className="qualification-list">
            <li>Over 15 years of experience designing and developing applications using C# and .NET Framework/Core using Microsoft Visual Studio</li>
            <li>Experience gathering user requirements, reviewing deficiencies, and providing solutions to remediate those</li>
            <li>Experience building web applications using ASP.NET MVC/MVVC, Angular, Angular Material, React, HTML, CSS, SASS</li>
            <li>Experience building RESTful web APIs</li>
            <li>Experience working on RDBMS like MS SQL Server, MYSQL</li>
            <li>Full stack software development experience</li>
            <li>Experience with technical documentation of code functionalities</li>
            <li>Experience with user testing methods</li>
            <li>Mentored and led developers, providing technical guidance, coordinating team efforts, and implementing Agile methodologies for efficient project management</li>
            <li>Leveraging cutting-edge coding assistants: Cursor, Windsurf, Roo-Code, Claude-Sonnet, and Copilot to drive superior code quality, streamline development workflows, and maximize overall efficiency</li>
            <li>Fluent in English and Spanish</li>
          </ul>
        </div>
      )}

      {activeSection === 'skills' && (
        <div className="resume-section">
          <h3>TECHNICAL PROFICIENCIES</h3>
          <div className="skills-container">
            <div className="skill-tag">C#</div>
            <div className="skill-tag">Crystal Reports</div>
            <div className="skill-tag">CSS</div>
            <div className="skill-tag">Entity Framework</div>
            <div className="skill-tag">HTML</div>
            <div className="skill-tag">JavaScript</div>
            <div className="skill-tag">jQuery</div>
            <div className="skill-tag">Git</div>
            <div className="skill-tag">TFS</div>
            <div className="skill-tag">LINQ to Entities</div>
            <div className="skill-tag">Microsoft Access</div>
            <div className="skill-tag">ASP.NET CORE</div>
            <div className="skill-tag">ASP.NET (MVC)</div>
            <div className="skill-tag">Silverlight</div>
            <div className="skill-tag">SSIS</div>
            <div className="skill-tag">SSRS</div>
            <div className="skill-tag">SQL Server</div>
            <div className="skill-tag">Tableau</div>
            <div className="skill-tag">Telerik Kendo UI</div>
            <div className="skill-tag">VB 6</div>
            <div className="skill-tag">Visual Basic.NET</div>
            <div className="skill-tag">Visual Studio</div>
            <div className="skill-tag">WinForms</div>
            <div className="skill-tag">WPF</div>
            <div className="skill-tag">Bootstrap</div>
            <div className="skill-tag">HTML 5</div>
            <div className="skill-tag">Angular</div>
            <div className="skill-tag">React</div>
            <div className="skill-tag">Redux</div>
            <div className="skill-tag">React-hooks</div>
            <div className="skill-tag">Blazor</div>
          </div>
        </div>
      )}

      {activeSection === 'experience' && (
        <div className="resume-section">
          <h3>PROFESSIONAL EXPERIENCE</h3>
          
          <div className="job-list">
            {jobExperiences.map(job => (
              <div key={job.id} className="job">
                <div 
                  className={`job-header ${expandedJobs[job.id] ? 'expanded' : ''}`}
                  onClick={() => toggleJobDetails(job.id)}
                >
                  <div className="job-title-company">
                    <h4>{job.title}</h4>
                    <span className="company">{job.company}</span>
                  </div>
                  <div className="job-meta">
                    <span className="location">{job.location}</span>
                    <span className="date">{job.period}</span>
                  </div>
                  <div className="expand-icon">{expandedJobs[job.id] ? '−' : '+'}</div>
                </div>
                
                {expandedJobs[job.id] && (
                  <div className="job-details-container">
                    <ul className="job-details">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
