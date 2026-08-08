import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
 title: "Madison - AI-Powered Marketing Intelligence",
 description: "An open-source, agent-based AI marketing intelligence framework designed to transform branding, marketing, and advertising",
}

export default function MadisonPage() {
 return (
   <div className="container px-4 md:px-6 mx-auto py-12">
     <div className="max-w-4xl mx-auto">
       {/* Hero Section */}
       <div className="mb-16">
         <h1 className="text-4xl md:text-5xl font-bold mb-6">Madison</h1>
         <p className="text-xl text-muted-foreground mb-8">
           An open-source, agent-based AI marketing intelligence framework designed to transform branding, marketing, and advertising. Madison organizes specialized AI agents that collaborate under an orchestration layer to deliver cohesive, data-driven marketing solutions.
         </p>
         <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
           <iframe
             className="absolute top-0 left-0 w-full h-full"
             src="https://www.youtube.com/embed/videoseries?si=L8wvKwPE_F37cgiD&amp;list=PLgOGgHS58rB-2XzQOaQbBGUk30ABMig51"
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
           <h2 className="text-3xl font-bold mb-6">What Madison Fellows Do?</h2>
           <div className="prose prose-lg dark:prose-invert max-w-none">
             
             <p>
               Madison Fellows initially build <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer">n8n</a> components that do something useful related to branding, marketing or advertising. These components are designed to take actions, check compliance, gather data or generate media, all while working with branding, marketing or advertising experts to create effective workflows.
             </p>
                          <div className="mb-8">
               <Image 
                 src="/png/n8n.png" 
                 alt="n8n workflow" 
                 width={1536} 
                 height={449} 
                 className="w-full h-auto rounded-lg my-6"
               />
             </div>
             <p>
               Once a single component is built, a fellow can continue to improve it, build another tool or work on the orchestration layer which extends traditional reinforcement learning theory to learning with agentic workflows (see figure). This includes adapting bandits, tabular q-learning and policy gradients to agentic workflows.
             </p>
                          <div className="mb-8">
               <Image 
                 src="/png/rl_agentic.png" 
                 alt="Reinforcement Learning for Agentic AI diagram" 
                 width={1536} 
                 height={1888} 
                 className="w-full h-auto rounded-lg my-6"
               />
             </div>
             <h3 className="text-xl font-bold mt-8 mb-4">The Five Agent Layers</h3>
             
             <p>
               Madison organizes specialized AI agents into five collaborative layers, each addressing distinct marketing challenges:
             </p>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold">1. Intelligence Agents</h4>
                 <p className="text-sm">Gather and analyze data to provide actionable insights into market dynamics and consumer sentiment through reputation monitoring and trend analysis.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold">2. Content Agents</h4>
                 <p className="text-sm">Create, optimize, and distribute marketing materials across channels with consistent brand voice and multi-platform adaptation.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold">3. Research Agents</h4>
                 <p className="text-sm">Process data to uncover customer insights through automated survey analysis and synthetic persona development.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold">4. Experience Agents</h4>
                 <p className="text-sm">Enhance customer interactions through AI concierge systems and customer journey transformation.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold">5. Performance Agents</h4>
                 <p className="text-sm">Measure and optimize marketing outcomes through multi-armed bandit optimization and predictive analytics.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold">Orchestration Layer</h4>
                 <p className="text-sm">Coordinates all agents through cross-project validation, dynamic resource allocation, and continuous learning.</p>
               </div>
             </div>
             
             <h3 className="text-xl font-bold mt-8 mb-4">Potential Agentic Tools for Madison Fellows</h3>
             
             <div className="grid md:grid-cols-2 gap-4 mt-4">
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Brand Voice Analyzer</h4>
                 <p className="text-sm text-muted-foreground">A tool that analyzes content across channels to ensure consistent brand voice and suggests improvements using NLP models.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Market Sentiment Tracker</h4>
                 <p className="text-sm text-muted-foreground">An agent that monitors social media and news sources to track brand sentiment and identify emerging trends or issues.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Content Optimization Engine</h4>
                 <p className="text-sm text-muted-foreground">A tool that uses multi-armed bandit algorithms to test and optimize content variations across different platforms.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Synthetic Customer Journey Simulator</h4>
                 <p className="text-sm text-muted-foreground">An agent that creates and tests synthetic customer profiles to identify friction points in marketing funnels.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Compliance Verification Tool</h4>
                 <p className="text-sm text-muted-foreground">A tool that reviews marketing materials for regulatory compliance across different jurisdictions and industries.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Visual Asset Generator</h4>
                 <p className="text-sm text-muted-foreground">An agent that creates on-brand visual content based on marketing briefs and campaign requirements.</p>
               </div>
             </div>
             
             <p className="mt-8">
               These tools are just starting points. Madison Fellows are encouraged to explore and develop innovative solutions that address real-world marketing and branding challenges while advancing the capabilities of the Madison framework.
             </p>
             
             <div className="mt-8 flex flex-col md:flex-row gap-4 items-start">
               <a 
                 href="https://github.com/Humanitariansai/Madison" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-primary hover:underline"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                   <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                   <path d="M9 18c-4.51 2-5-2-7-2"></path>
                 </svg>
                 GitHub: Madison Framework
               </a>
               
               <a 
                 href="https://www.humanitarians.ai/madison" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-primary hover:underline"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                   <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                   <line x1="3" y1="9" x2="21" y2="9"></line>
                   <line x1="9" y1="21" x2="9" y2="9"></line>
                 </svg>
                 Madison Webpage
               </a>
               
               <a 
                 href="https://youtube.com/playlist?list=PLgOGgHS58rB-2XzQOaQbBGUk30ABMig51&si=L8wvKwPE_F37cgiD"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-primary hover:underline"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                   <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                   <path d="m10 15 5-3-5-3z"></path>
                 </svg>
                 YouTube: Madison Playlist
               </a>
             </div>
           </div>
         </section>

         <section>
           <h2 className="text-3xl font-bold mb-6">Get Started</h2>
           <p className="text-muted-foreground mb-6">
             Madison provides a comprehensive framework for AI-driven marketing intelligence. Explore the codebase, watch implementation demos, or join our collaborative development community.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
             <PrimaryButton href="https://github.com/Humanitariansai/Madison">
               Madison GitHub
             </PrimaryButton>
             <SecondaryButton href="https://www.humanitarians.ai/madison">
               Madison Website
             </SecondaryButton>
             <SecondaryButton href="https://youtube.com/playlist?list=PLgOGgHS58rB-2XzQOaQbBGUk30ABMig51&si=L8wvKwPE_F37cgiD">
               Madison YouTube
             </SecondaryButton>
           </div>
         </section>
       </div>
     </div>
   </div>
 );
}
