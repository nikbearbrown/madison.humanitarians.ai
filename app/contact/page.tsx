import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Users, Lightbulb, Heart } from "lucide-react"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "Contact Us - Humanitarians AI",
  description: "Get in touch with Humanitarians AI for Fellows Program inquiries, project collaboration, mentorship opportunities, and general questions",
}

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to learn more about our work? Get in touch with our team. We're always looking for collaborators, supporters, and those interested in leveraging AI for social good.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12">
          {/* Fellows Program Inquiries */}
          <section>
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 mr-3 text-primary" />
              <h2 className="text-3xl font-bold">Fellows Program Inquiries</h2>
            </div>
            
            <div className="p-6 border rounded-lg mb-6">
              <div className="prose prose-lg dark:prose-invert mb-6">
                <p>For questions about applying to our Fellows Program, documentation requirements, or position opportunities:</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center mb-2">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    <h3 className="font-bold">Email</h3>
                  </div>
                  <p className="text-sm">hr@humanitarians.ai</p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-bold mb-2">Subject Line Format</h3>
                  <p className="text-sm">"Seeking Opportunity | [Desired Role]"</p>
                </div>
              </div>
              
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  Our Fellows Program connects emerging AI researchers, developers, and community leaders with meaningful projects while providing valuable professional experience and mentorship. If you're interested in developing your skills while contributing to ethical AI initiatives, we'd love to hear from you.
                </p>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <PrimaryButton href="mailto:hr@humanitarians.ai?subject=Seeking Opportunity | [Your Desired Role]">
                  Apply to Fellows Program
                </PrimaryButton>
                <SecondaryButton href="/fellows">
                  Learn More About Fellows
                </SecondaryButton>
              </div>
            </div>
          </section>

          {/* Project Collaboration & General Inquiries */}
          <section>
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 mr-3 text-primary" />
              <h2 className="text-3xl font-bold">Project Collaboration & General Inquiries</h2>
            </div>
            
            <div className="p-6 border rounded-lg mb-6">
              <div className="prose prose-lg dark:prose-invert mb-6">
                <p>For questions about our projects, partnership opportunities, or to volunteer as a mentor:</p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg mb-6 max-w-md">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  <h3 className="font-bold">Email</h3>
                </div>
                <p className="text-sm">info@humanitarians.ai</p>
              </div>
              
              <div className="prose prose-lg dark:prose-invert mb-6">
                <p>
                  We welcome experienced professionals to serve as mentors for our Fellows, providing technical guidance, educational support, and professional development to the next generation of ethical AI innovators.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Mentors work with Fellows on projects such as:</h3>
                <div className="grid gap-4">
                  <div className="p-4 border-l-4 border-primary bg-muted rounded-lg">
                    <h4 className="font-bold mb-1">AI for Good</h4>
                    <p className="text-sm text-muted-foreground">Research and software development initiatives promoting ethical AI</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted rounded-lg">
                    <h4 className="font-bold mb-1">Lyrical Literacy</h4>
                    <p className="text-sm text-muted-foreground">Enhancing cognitive development through music and AI</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted rounded-lg">
                    <h4 className="font-bold mb-1">Botspeak</h4>
                    <p className="text-sm text-muted-foreground">Teaching effective communication with large language models</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted rounded-lg">
                    <h4 className="font-bold mb-1">Project Dewey</h4>
                    <p className="text-sm text-muted-foreground">Educational AI assistants for STEM subjects</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted rounded-lg">
                    <h4 className="font-bold mb-1">The RAMAN Effect</h4>
                    <p className="text-sm text-muted-foreground">AI-powered public health monitoring systems</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted rounded-lg">
                    <h4 className="font-bold mb-1">Cognitive Type</h4>
                    <p className="text-sm text-muted-foreground">AI-driven accessible typography solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg dark:prose-invert mb-6">
                <p>
                  Mentors typically meet with Fellows weekly, provide structured guidance, and help document their technical and professional growth. Your expertise can make a significant difference in both our Fellows' development and the social impact of our work.
                </p>
                <p>
                  For donations, media inquiries, or other general questions, please also contact info@humanitarians.ai.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <PrimaryButton href="mailto:info@humanitarians.ai?subject=Mentor Application">
                  Become a Mentor
                </PrimaryButton>
                <SecondaryButton href="mailto:info@humanitarians.ai?subject=Partnership Inquiry">
                  Partnership Inquiry
                </SecondaryButton>
                <SecondaryButton href="/mentors">
                  Mentor Guidelines
                </SecondaryButton>
              </div>
            </div>
          </section>

          {/* Quick Contact Summary */}
          <section>
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 mr-3 text-primary" />
              <h2 className="text-3xl font-bold">Quick Contact Summary</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Fellows Program</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm"><strong>Email:</strong> hr@humanitarians.ai</p>
                  <p className="text-sm"><strong>For:</strong> Applications, documentation, position opportunities</p>
                  <p className="text-sm"><strong>Subject:</strong> "Seeking Opportunity | [Desired Role]"</p>
                </div>
                <div className="flex gap-2">
                  <PrimaryButton href="mailto:hr@humanitarians.ai" className="text-xs px-3 py-1">
                    Email HR
                  </PrimaryButton>
                  <SecondaryButton href="/fellows" className="text-xs px-3 py-1">
                    Learn More
                  </SecondaryButton>
                </div>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-4">General & Mentorship</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm"><strong>Email:</strong> info@humanitarians.ai</p>
                  <p className="text-sm"><strong>For:</strong> Projects, partnerships, mentoring, donations, media</p>
                  <p className="text-sm"><strong>Response:</strong> Within 2-3 business days</p>
                </div>
                <div className="flex gap-2">
                  <PrimaryButton href="mailto:info@humanitarians.ai" className="text-xs px-3 py-1">
                    Email Info
                  </PrimaryButton>
                  <SecondaryButton href="/mentors" className="text-xs px-3 py-1">
                    Mentor Info
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-lg font-bold mb-3">Our Programs</h3>
                <p className="text-sm text-muted-foreground mb-4">Learn about our AI for Good initiatives</p>
                <SecondaryButton href="/about">
                  View Programs
                </SecondaryButton>
              </div>
              
                             <div className="p-6 border rounded-lg text-center">
                 <h3 className="text-lg font-bold mb-3">GitHub Projects</h3>
                 <p className="text-sm text-muted-foreground mb-4">Explore our open-source work</p>
<SecondaryButton href="https://github.com/Humanitariansai/">
  View GitHub
</SecondaryButton>
               </div>
              
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-lg font-bold mb-3">Support Our Mission</h3>
                <p className="text-sm text-muted-foreground mb-4">Help us expand our impact</p>
                <PrimaryButton href="/donate">
                  Donate
                </PrimaryButton>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
