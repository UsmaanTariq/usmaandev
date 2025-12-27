import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* Hero Section - Full screen white section with centered text */}
      <div className="flex flex-col w-full bg-[white] h-[90vh] justify-center items-center">
        <div className="max-w-7xl mx-auto px-8 flex w-full justify-center items-center gap-8">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">Hi, I'm Usmaan, A Data Analyst and Full Stack Developer</h1>
            <p className="text-lg text-gray-600">Scroll to see more</p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
           <Image src='/Me.jpeg' height={500} width={500} className="rounded-full object-cover" alt="Profile"/>
          </div>
        </div>
      </div>
      
      {/* Projects Section - Black section below */}
      <div className="w-full bg-[black] py-8">
        <div className="flex flex-col mx-auto px-8 flex gap-6 max-w-7xl">
          <h1 className="text-4xl text-white font-bold">My Recent Projects</h1>
          <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-2">

            <h1 className="text-2xl font-bold">StreamStar</h1>
            <p>My first official project, the goal of this website is to allow producers to track
              their streams accross multiple platforms and have historic insight into how the tracks they 
              produced are performing.
            </p>
            <div className="bg-gray-200 h-70 flex items-center justify-center rounded overflow-hidden">
              <Image 
                src="/streamstar.PNG" 
                alt="StreamStar Project Screenshot" 
                width={2000} 
                height={2000}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-lg">Technologies Used</h2>
            <div className="flex gap-4">
              <p>Hi</p>
              <p>Bye</p>
            </div>
          </div>

          <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-4 shadow-xlg">
            <h1 className="text-2xl font-bold">UsmaanDev</h1>
            <p>After designing my first project, I needed to make a platform to display the projects I 
              have worked on, thus came "UsmaanDev". This is my portfolio website and it breaks down my
              projects and how I made them.
            </p>
            <div className="bg-gray-200 h-48 flex items-center justify-center rounded">
              <p className="text-gray-500">Image will go here</p>
            </div>
            <h2 className="text-lg">Technologies Used</h2>
          </div>

          <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-4">
            <h1 className="text-2xl font-bold">To Be Decided</h1>
            <p>After designing my first project, I needed to make a platform to display the projects I 
              have worked on, thus came "UsmaanDev". This is my portfolio website and it breaks down my
              projects and how I made them.
            </p>
            <div className="bg-gray-200 h-48 flex items-center justify-center rounded">
              <p className="text-gray-500">Image will go here</p>
            </div>
            <h2 className="text-lg">Technologies Used</h2>
          </div>

        </div>
      </div>
      <div className="w-full bg-[white] py-8">
        <div className="flex flex-col mx-auto px-8 flex gap-6 max-w-7xl">
          <h1 className="text-4xl text-black font-bold">My Work Experience</h1>
          
          {/* TransUnion - Current Role */}
          <div className="flex flex-col p-6 border border-gray-200 shadow-md rounded-lg bg-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold">TransUnion</h1>
                <p className="text-xl text-gray-700 italic">Business Intelligence Analyst</p>
              </div>
              <p className="text-lg text-gray-600 font-semibold whitespace-nowrap">November 2024 - Present</p>
            </div>
            <div className="text-gray-700 space-y-3">
              <p>
                During my role at TransUnion, I have been working closely with the Data Intelligence team to deliver 
                comprehensive business insights and analytics solutions. My responsibilities include developing interactive 
                dashboards and reports that enable stakeholders to make data-driven decisions across multiple departments.
              </p>
              <p>
                I specialize in leveraging advanced analytics tools including Power BI for visualization, Alteryx for 
                data preparation and workflow automation, and SQL Server Management Studio (SSMS) for database management 
                and complex query optimization. My work involves transforming raw data into actionable insights, creating 
                automated reporting solutions, and collaborating with cross-functional teams to identify key performance 
                indicators and business metrics.
              </p>
              <p>
                I have successfully streamlined data processes, improved reporting efficiency, and contributed to strategic 
                initiatives that drive business growth and operational excellence.
              </p>
            </div>
          </div>

          {/* Previous Role 1 */}
          <div className="flex flex-col p-6 border border-gray-200 shadow-md rounded-lg bg-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold">Tech Solutions Ltd</h1>
                <p className="text-xl text-gray-700 italic">Junior Data Analyst</p>
              </div>
              <p className="text-lg text-gray-600 font-semibold whitespace-nowrap">June 2023 - October 2024</p>
            </div>
            <div className="text-gray-700 space-y-3">
              <p>
                As a Junior Data Analyst at Tech Solutions Ltd, I was responsible for supporting the analytics team 
                in gathering, processing, and analyzing large datasets to identify trends and patterns that informed 
                business strategy. I developed proficiency in SQL for data extraction and manipulation, and created 
                dynamic reports using Excel and basic Power BI visualizations.
              </p>
              <p>
                My key contributions included conducting statistical analysis, maintaining data quality standards, 
                documenting data processes, and collaborating with senior analysts on various projects. This role 
                provided me with a solid foundation in data analytics methodologies and best practices while working 
                in a fast-paced, collaborative environment.
              </p>
            </div>
          </div>

          {/* Previous Role 2 */}
          <div className="flex flex-col p-6 border border-gray-200 shadow-md rounded-lg bg-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold">Digital Innovations Inc</h1>
                <p className="text-xl text-gray-700 italic">Data Analytics Intern</p>
              </div>
              <p className="text-lg text-gray-600 font-semibold whitespace-nowrap">January 2023 - May 2023</p>
            </div>
            <div className="text-gray-700 space-y-3">
              <p>
                During my internship at Digital Innovations Inc, I gained hands-on experience in data collection, 
                cleaning, and preliminary analysis. I assisted in preparing datasets for analysis, creating basic 
                visualizations, and supporting the team in generating weekly performance reports for management review.
              </p>
              <p>
                This role introduced me to industry-standard tools and practices, including data validation techniques, 
                dashboard creation fundamentals, and effective communication of analytical findings to non-technical 
                stakeholders. The internship was instrumental in developing my passion for data analytics and establishing 
                a career path in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
