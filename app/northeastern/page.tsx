import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "Northeastern University & Humanitarians AI - Code for a Cause",
  description: "Collaborative AI projects between Northeastern University and Humanitarians AI where students learn AI by doing AI through impactful applications",
}

export default function Northeastern() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Northeastern University & Humanitarians AI</h1>
          <p className="text-xl text-muted-foreground mb-8">
            "Learn AI by Doing AI" through our collaborative "Code for a Cause" projects where Northeastern University students and Humanitarians AI build impactful AI applications across education, research, and community service.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/videoseries?si=dYCuV6c5VWGJeLsC&amp;list=PLgOGgHS58rB_f-rJIRNAH2RscINiV4uw3"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">About Our Collaboration</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Northeastern University and Humanitarians AI have joined forces to create a series of innovative "Code for a Cause" projects where current students and recent graduates gain hands-on experience building AI applications that make a real difference in education and society.
              </p>
              
              <p>
                These collaborative projects provide students with practical experience while developing AI solutions that address real-world challenges in education, research, and community service. Through this partnership, participants truly "Learn AI by Doing AI" in meaningful contexts.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Educational AI Assistants</h3>
              
              <p>
                Our educational chatbots enhance student learning experiences across various STEM disciplines at Northeastern University:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Ada: Calculus Chatbot</h4>
                  <p className="text-sm">Provides step-by-step guidance and Socratic questioning for introductory calculus students, aligned with course syllabi.</p>
                  <a href="https://chatgpt.com/g/g-JMkUy05pG-ada-calculus-bot" className="text-sm text-primary hover:underline mt-2 inline-block">Try Ada</a>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Newton: Physics Chatbot</h4>
                  <p className="text-sm">Integrates rich media including dynamic graphs and interactive simulations for visual and hands-on exploration of physics concepts.</p>
                  <a href="https://chatgpt.com/g/g-0CmbbdGsA-newton-the-physics-bot" className="text-sm text-primary hover:underline mt-2 inline-block">Try Newton</a>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Grace: Algorithms Chatbot</h4>
                  <p className="text-sm">Simulates algorithms and incorporates interactive visualizations to help students understand complex algorithmic concepts.</p>
                  <a href="https://chatgpt.com/g/g-MFbqFw55p-grace-6205-the-info-6205-algorithms-tutor" className="text-sm text-primary hover:underline mt-2 inline-block">Try Grace</a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Community Projects</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">CatBot</h4>
                  <p className="text-sm text-muted-foreground">AI-powered customer support chatbot that streamlines adoption inquiries, matches potential adopters with suitable cats, and promotes senior and special needs cat adoptions.</p>
                  <a href="https://thecatconnection.org/" className="text-sm text-primary hover:underline mt-2 inline-block">Try CatBot</a>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Research Agent</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive data analysis framework that identifies and visualizes research trends within Northeastern's College of Engineering using sophisticated data processing techniques.</p>
                </div>
              </div>
              
              <p className="mt-8">
                These collaborations between Northeastern University and Humanitarians AI demonstrate how tailored AI solutions can enhance student engagement, foster critical thinking, and improve academic outcomes while providing students with valuable real-world experience.
              </p>
              
              <div className="mt-8 flex flex-col md:flex-row gap-4 items-start">
                <a 
                  href="https://github.com/Humanitariansai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  GitHub: Humanitarians AI
                </a>
                
                <a 
                  href="https://www.youtube.com/@humanitariansai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                  YouTube: Humanitarians AI
                </a>
                
                <a 
                  href="mailto:info@humanitarians.ai"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  Email: info@humanitarians.ai
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Example Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Ada: Calculus Learning Assistant</h3>
                <p className="text-muted-foreground mb-4">
                  Provides step-by-step guidance, scaffolding, and Socratic questioning to help students understand complex calculus concepts without giving direct answers.
                </p>
                <a href="https://chatgpt.com/g/g-JMkUy05pG-ada-calculus-bot" className="text-primary hover:underline">Try Ada →</a>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Newton: Interactive Physics Tutor</h3>
                <p className="text-muted-foreground mb-4">
                  Enhances learning with dynamic graphs and interactive simulations, providing students with visual and hands-on ways to explore complex physics concepts.
                </p>
                <a href="https://chatgpt.com/g/g-0CmbbdGsA-newton-the-physics-bot" className="text-primary hover:underline">Try Newton →</a>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Grace: Algorithms Visualization Tool</h3>
                <p className="text-muted-foreground mb-4">
                  Simulates algorithms and incorporates interactive visualizations to help students grasp abstract algorithmic concepts more effectively.
                </p>
                <a href="https://chatgpt.com/g/g-MFbqFw55p-grace-6205-the-info-6205-algorithms-tutor" className="text-primary hover:underline">Try Grace →</a>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">CatBot: Adoption Assistant</h3>
                <p className="text-muted-foreground mb-4">
                  Helps cats find forever homes by streamlining the adoption process, matching potential adopters with suitable cats, and promoting special needs adoption.
                </p>
                <a href="https://thecatconnection.org/" className="text-primary hover:underline">Try CatBot →</a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Project Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Ethical AI Education</h3>
                <p className="text-muted-foreground">
                  All projects promote responsible and ethical AI use in educational settings, providing guidance without giving direct answers.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Hands-On Learning</h3>
                <p className="text-muted-foreground">
                  Students gain practical experience building real-world AI applications while making a positive impact on education and society.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Faculty Collaboration</h3>
                <p className="text-muted-foreground">
                  Projects are developed in close partnership with Northeastern faculty to ensure alignment with course objectives and student needs.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Real-World Impact</h3>
                <p className="text-muted-foreground">
                  Solutions address genuine challenges in education, research, and community service, demonstrating AI's potential for social good.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
            <p className="text-muted-foreground mb-6">
              Explore our collaborative projects, get involved as a student or faculty member, or learn more about the partnership between Northeastern University and Humanitarians AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href="https://github.com/Humanitariansai/">
                GitHub Projects
              </PrimaryButton>
              <SecondaryButton href="https://www.youtube.com/@humanitariansai">
                YouTube Channel
              </SecondaryButton>
              <SecondaryButton href="https://www.humanitarians.ai/">
                Humanitarians AI Website
              </SecondaryButton>
              <SecondaryButton href="https://music.apple.com/us/artist/humanitarians-ai/1781414009">
                Apple Music
              </SecondaryButton>
              <SecondaryButton href="https://open.spotify.com/artist/3cj3R4pDpYQHaWx0MM2vFV">
                Spotify
              </SecondaryButton>
              <SecondaryButton href="https://www.linkedin.com/company/105696953/">
                LinkedIn
              </SecondaryButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
