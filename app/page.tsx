import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* Hero Section - Full screen white section with centered text */}
      <div className="flex flex-col w-full bg-white h-[70vh] justify-center items-center">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Hi, I'm Usmaan, A Full Stack Developer</h1>
          <p className="text-lg text-gray-600">Scroll to see more</p>
        </div>
      </div>
      
      {/* Projects Section - Black section below */}
      <div className="w-full bg-black py-16">
        <h1 className="mb-8 text-4xl text-white text-center font-bold">My Recent Projects</h1>
        <div className="mx-auto px-8 flex gap-6">
          <div className="w-1/3 bg-white p-6 rounded-lg flex flex-col gap-4">

            <h1 className="text-2xl font-bold">StreamStar</h1>
            <p>My first official project, the goal of this website is to allow producers to track
              their streams accross multiple platforms and have historic insight into how the tracks they 
              produced are performing.
            </p>
            <div className="bg-gray-200 h-48 flex items-center justify-center rounded">
              <p className="text-gray-500">Image will go here</p>
            </div>
            <h2 className="text-lg">Technologies Used</h2>
          </div>

          <div className="w-1/3 bg-white p-6 rounded-lg flex flex-col gap-4">
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
        </div>
      </div>
    </>
  );
}
