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
          <div className="flex flex-col p-4 border-1 border-gray-200 shadow-md rounded-lg">
            <div className="flex justify-between">
              <h1 className="text-2xl">TransUnion - <span className="font-italic">Buisiness Intelligence Analyst</span></h1>
              <h1 className="text-2xl">November 2025 - Present</h1>
            </div>
            <div className="flex justify-between mt-2">
              <p>During my role at TransUnion I worked in the Data team. I worked with a range of technologies including, but not 
                limited to: Power BI, Alteryx, SMMS.
              </p>
              <p className="ml-6">Bruh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
