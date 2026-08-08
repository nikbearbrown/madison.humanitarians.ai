import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "Lyrical Literacy - Humanitarians AI",
  description: "Empowering youth through the transformative power of music and poetry",
}

export default function LyricalLiteracyPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lyrical Literacy</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Empowering youth through the transformative power of music and poetry, fostering creativity and self-expression. An innovative program that combines AI with creative writing and music to enhance literacy skills.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/juYjI3cncug?si=WqvsOj98AZuo_B-V"
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
  <h2 className="text-3xl font-bold mb-6">About the Project</h2>
  <div className="prose prose-lg dark:prose-invert">
    <p>
      Lyrical Literacy is a pioneering initiative from Humanitarians AI that harnesses artificial intelligence to enhance cognitive and language development through music. This research-based program explores the powerful intersection of neuroscience, music, and education to create personalized learning experiences for diverse populations.
    </p>
    
    <p>
      At the heart of Lyrical Literacy is the understanding that music engages more brain regions simultaneously than almost any other human activity, providing multimodal learning experiences that target specific cognitive and linguistic skills while maintaining high engagement levels.
    </p>
    
    <h3 className="text-xl font-bold mt-6 mb-3">A Comprehensive Brain Exercise</h3>
    
    <p>
      "Use it or lose it" is the fundamental biological principle driving Lyrical Literacy. Just as an athlete who trains only certain muscle groups becomes physically imbalanced, a brain that doesn't engage in musical activities misses crucial developmental opportunities. When we sing, multiple regions of our brain activate in beautiful synchrony—language centers, memory networks, emotional processing areas, and motor control systems all work together, creating neural connections that strengthen cognitive resilience.
    </p>
    
    <div className="grid md:grid-cols-2 gap-6 my-6">
      <div className="p-5 bg-primary/5 rounded-lg border">
        <h4 className="font-bold mb-2">Neural Integration</h4>
        <p className="text-sm">
          Unlike isolated learning exercises, singing engages the whole brain in harmonious activity, strengthening connections between hemispheres and creating robust neural pathways that support broader cognitive functions.
        </p>
      </div>
      
      <div className="p-5 bg-primary/5 rounded-lg border">
        <h4 className="font-bold mb-2">Emotional Regulation</h4>
        <p className="text-sm">
          The emotional components of music provide natural gateways to developing emotional intelligence, self-regulation skills, and mindfulness practices that enhance learning capacity and retention.
        </p>
      </div>
    </div>
    
    <h3 className="text-xl font-bold mt-6 mb-3">Lyrical Literacy Subprojects</h3>
    
    <div className="grid md:grid-cols-2 gap-6 my-6">
      <div className="p-5 bg-primary/5 rounded-lg border">
        <h4 className="font-bold mb-2">Multilingual Melody</h4>
        <p className="text-sm">
          Leveraging AI to create personalized songs that facilitate language acquisition for learners of all ages, with special attention to vocabulary retention, pronunciation, and cultural context understanding.
        </p>
      </div>
      
      <div className="p-5 bg-primary/5 rounded-lg border">
        <h4 className="font-bold mb-2">Rhythm & Recall</h4>
        <p className="text-sm">
          A memory enhancement system that converts complex information into rhythmic patterns and melodic structures, making difficult-to-remember content more accessible and retained for longer periods.
        </p>
      </div>
      
      <div className="p-5 bg-primary/5 rounded-lg border">
        <h4 className="font-bold mb-2">Therapeutic Tones</h4>
        <p className="text-sm">
          Developing music-based interventions for cognitive rehabilitation, working with neurodivergent populations and those recovering from brain injuries to restore and strengthen neural pathways.
        </p>
      </div>
      
      <div className="p-5 bg-primary/5 rounded-lg border">
        <h4 className="font-bold mb-2">Educational Harmonies</h4>
        <p className="text-sm">
          Creating curriculum-aligned musical content that transforms traditional educational material into engaging, memorable songs that improve information retention and conceptual understanding.
        </p>
      </div>
    </div>
    
    <h3 className="text-xl font-bold mt-6 mb-3">YouTube Series & Collaboration</h3>
    
    <p>
      The Lyrical Literacy initiative is documented through our ongoing YouTube series, where we demonstrate the science, technology, and practical applications of our research. Each episode showcases real-world implementations, interviews with experts, and the measurable outcomes of our various subprojects.
    </p>
    
    <p>
      We actively seek collaborations with researchers, educators, musicians, AI developers, and healthcare professionals interested in exploring the potential of music and AI in cognitive development. If you're passionate about the intersection of music, neuroscience, and artificial intelligence, we invite you to reach out and join our growing community of innovators.
    </p>
    
    <div className="mt-6 flex flex-col md:flex-row gap-4 items-start">
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
        YouTube: @humanitariansai
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
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">AI-Generated Musical Content</h3>
                <p className="text-muted-foreground">
                  Custom-created songs tailored to individual learning objectives, cultural contexts, and developmental needs that leverage the power of music to enhance memory formation and retention.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Creative Storytelling</h3>
                <p className="text-muted-foreground">
                  Interactive storybooks with accompanying musical elements and audiobooks that incorporate rhythmic and melodic components, supporting both literacy development and creative expression.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Personalized Learning</h3>
                <p className="text-muted-foreground">
                  AI algorithms that adapt content based on learning progress, preferences, and specific developmental goals, creating customized learning paths for each individual.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Music Integration</h3>
                <p className="text-muted-foreground">
                  Materials designed for diverse populations, including those with learning differences, language barriers, or neurodevelopmental conditions, making education more accessible and engaging for all learners.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href="/contact">
                Contact Us
              </PrimaryButton>
              <SecondaryButton href="/donate">
                Support the Project
              </SecondaryButton>
              <PrimaryButton href="https://www.youtube.com/playlist?list=PLgOGgHS58rB8TP77w79PdmqF6qAAILkDP">
                Lyrical Literacy YouTube
              </PrimaryButton>
              <SecondaryButton href="https://github.com/Humanitariansai/Lyrical-Literacy">
                GitHub Repository
              </SecondaryButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
