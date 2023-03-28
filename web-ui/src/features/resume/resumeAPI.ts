import { ResumeData } from "./resumeModels";

export function fetchResume(resumeId: string) {
    return new Promise<{ data: ResumeData }>((resolve) =>
        setTimeout(() =>
            resolve({
                data: {
                    personalDetails: {
                        name: "Tyler Coles",
                        email: "tyevco@gmail.com",
                        address: {
                            city: "Seven Hills",
                            state: "Ohio"
                        },
                        phone: "+13307034702"
                    },
                    qualifications: "As an accomplished software engineer, I specialize in full-stack development and take pride in crafting clear and maintainable code. My exceptional problem-solving abilities, combined with a self-driven attitude, enable me to efficiently complete tasks. I have a proven track record of collaborating with and mentoring colleagues, which fosters a friendly and productive workplace. Always eager to tackle challenges and develop innovative solutions, I constantly strive to fulfill business and customer needs. Furthermore, I am committed to staying current with emerging technologies and industry trends, ensuring that I maintain a competitive edge.",
                    skills: [
                        {
                            skill: "C#",
                            category: "Programming",
                        },
                        {
                            skill: "TypeScript",
                            category: "Programming",
                        },
                        {
                            skill: "JavaScript",
                            category: "Programming",
                        },
                        {
                            skill: "React",
                            category: "Programming",
                        },
                        {
                            skill: "Redux",
                            category: "Programming",
                        },
                        {
                            skill: "Node.JS",
                            category: "Programming",
                        },
                        {
                            skill: "CSS",
                            category: "Programming",
                        },
                        {
                            skill: "Java",
                            category: "Programming",
                        },
                        {
                            skill: "SOLID Principles",
                            category: "Programming",
                        },
                        {
                            skill: "Object-oriented Programming",
                            category: "Programming",
                        },
                        {
                            skill: "CI/CD",
                            category: "DevOps",
                        },
                        {
                            skill: "GitHub",
                            category: "DevOps",
                        },
                        {
                            skill: "Git",
                            category: "DevOps",
                        },
                        {
                            skill: "GitHub Actions",
                            category: "DevOps",
                        },
                        {
                            skill: "Azure DevOps",
                            category: "DevOps",
                        },
                        {
                            skill: "Azure Pipeliens",
                            category: "DevOps",
                        },
                        {
                            skill: "Agile",
                            category: "DevOps",
                        },
                        {
                            skill: "SAFe",
                            category: "DevOps",
                        },
                        {
                            skill: "Webpack",
                            category: "DevOps",
                        },
                        {
                            skill: "Terraform",
                            category: "DevOps",
                        },
                        {
                            skill: "Azure Cloud",
                            category: "Computing",
                        },
                        {
                            skill: "Microservices",
                            category: "Computing",
                        },
                        {
                            skill: "ASP.NET",
                            category: "Programming",
                        },
                        {
                            skill: "Micro Frontends",
                            category: "Computing",
                        },
                        {
                            skill: "Containers",
                            category: "Computing",
                        },
                        {
                            skill: "DataDog",
                            category: "Computing",
                        },
                        {
                            skill: "SQL Server",
                            category: "Computing",
                        },
                        {
                            skill: "Azure App Services",
                            category: "Computing",
                        },
                        {
                            skill: "Azure Functions",
                            category: "Computing",
                        },
                    ],
                    workExperience: [{
                        company: {
                            name: "Home Point Financial",
                            location: "Ann Arbor, MI"
                        },
                        title: "Principal Software Engineer",
                        contractor: false,
                        remote: true,
                        startDate: "December 2021",
                        description: [
                            "Led the development and implementation of FNC CMS Appraisal integration using GraphQL for internal requests, working closely with business stakeholders, internal development teams, and external vendors to gather requirements and establish the middle-tier API.",
                            "Conducted one-on-one code reviews with software engineers and mentored them, enhancing their understanding of concepts and topics while providing best practices and additional training resources to foster growth.",
                            "Fostered team communication and eliminated interpersonal bottlenecks by promoting open dialogue across the entire team.",
                            "Collaborated with business stakeholders and analysts to comprehend requests and define product development requirements.",
                            "Performed security analysis on code-base, ensuring adherence to security standards, and implemented necessary changes to address vulnerabilities.",
                            "Created GitHub workflows to automate the application of policies and the addition/update of workflows across all enterprise repositories, streamlining repository management and ensuring consistency.",
                        ]
                    },
                    {
                        company: {
                            name: "Home Point Financial",
                            location: "Ann Arbor, MI"
                        },
                        title: "Senior Software Engineer",
                        contractor: false,
                        remote: true,
                        startDate: "March 2018",
                        endDate: "December 2021",
                        description: [
                            "Engaged in Agile Development using Scrum to manage workloads.",
                            "Transitioned .NET Framework applications to Azure Cloud using Azure Functions and .NET Core/.NET 6.",
                            "Established CI/CD workflows in Azure Pipelines and GitHub Actions.",
                            "Monitored and managed application performance using DataDog and OpsGenie, updating multiple legacy applications to include logging.",
                            "Assisted development teams with debugging and troubleshooting issues across various systems.",
                            "Designed and implemented a dynamic micro frontend portal framework using ASP.NET Core, TypeScript, React.js, and Webpack Module Federation, reducing development time for teams to create and integrate micro apps.",
                            "Optimized the internal Loan Management API, reducing loan processing time from two minutes to under thirty seconds, significantly increasing business productivity by enabling faster loan processing.",
                            "Refactored legacy client plugin code to enable dynamic loading of additional libraries at runtime, streamlining development and deployment while minimizing the need for manual integration and coordination by other software teams.",
                            "Created build/deployment pipelines for legacy applications, improving deployments and reducing risks through automation.",
                            "Implemented a new report generation workflow, cutting report generation time from over six hours to under two minutes, enabling faster output processing and improved turnaround times for business users.",
                        ]
                    },
                    {
                        company: {
                            name: "Thomson Reuters",
                            location: "Rochester, NY"
                        },
                        title: "Senior Software Engineer",
                        contractor: false,
                        remote: false,
                        startDate: "July 2015",
                        endDate: "March 2018",
                        description: [
                            "Developed features and fixed bugs for Public Records on Westlaw Next in an Agile environment, utilizing C#, ASP.NET, REST, HTML, JavaScript, and jQuery within a proprietary SOA framework.",
                            "Became a local subject matter expert for the CLEAR project, learning the off-site developers' codebase and assisting in scaling the project to a larger team.",
                            "Designed and developed UI components and server-side workflows for the License Plate Reader feature within CLEAR, using Java, Tomcat, GWT, and Google Maps API.",
                            "Led a team of software engineers for the Risk Inform feature within CLEAR, performing systems analysis, task assignment, and framework design for displaying UI components, while also mentoring team members on design approaches and participating in code reviews.",
                            "Collaborated with product owners in designing and developing new customer features.",
                            "Assisted QA teams by providing initial test cases used during development and identifying edge cases.",
                            "Designed and developed a browser extension for easier configuration of the proprietary SOA framework, using JavaScript and HTML5.",
                        ]
                    },
                    {
                        company: {
                            name: "Wellington Steel & Associates (Thomson Reuters)",
                            location: "Rochester, NY"
                        },
                        title: "Senior Software Engineer",
                        contractor: true,
                        remote: false,
                        startDate: "June 2014",
                        endDate: "July 2015",
                        description: [
                            "Worked as a Software Engineer for Taxnet Pro, developing new features and fixing bugs using C#, ASP.NET, REST, JavaScript, and jQuery within the proprietary SOA platform.",
                            "Mentored developers at various levels in debugging and programming languages used in the Cobalt framework and Taxnet Pro.",
                            "Improved performance by refactoring client and server code with HTML and JavaScript technologies, decreasing component load times by 60%.",
                            "Collaborated with the Scale Testing team to identify and resolve performance issues.",
                            "Coordinated with developers to create a migration solution from the legacy application.",
                            "Developed a productivity-enhancing solution using Fiddler to load JavaScript files from local sources rather than across the network.",
                            "Participated in an on-call rotation supporting multiple products within the platform.",
                        ]
                    },
                    {
                        company: {
                            name: "Solu Technologies (Wegmans Food Markets)",
                            location: "Rochester, NY"
                        },
                        title: "Senior Software Engineer",
                        contractor: true,
                        remote: false,
                        startDate: "April 2013",
                        endDate: "May 2014",
                        description: [
                            "Collaborated with a small team to design and develop a Shop From Home application for Wegmans store employees, using C# and REST, and provided application training to in-store employees.",
                            "Designed and developed an ETL application to extract SQL data into XML based on an XSD for delivery via SFTP to vendors.",
                        ]
                    },
                    {
                        company: {
                            name: "Denlight Technologies, LLC",
                            location: "Doylestown, OH"
                        },
                        title: "Software Engineer",
                        contractor: false,
                        remote: false,
                        startDate: "June 2004",
                        endDate: "March 2013",
                        description: [
                            "Conducted system analysis and developed JB Sales Order Entry, a sales order entry and management application using VB.NET and Microsoft SQL Server, improving order creation and management speed.",
                            "Designed and developed an internal project management system, enabling managers to create projects and share project artifacts.",
                        ]
                    }],
                    education: [{
                        school: "The University of Akron",
                        field: "Computer Engineering",
                        startDate: "August 2003",
                        endDate: "May 2006",
                    }]
                }
            }), 500));
}