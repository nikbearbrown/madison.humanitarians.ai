import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - Humanitarians AI",
  description: "Privacy policy for Humanitarians AI",
}

export default function FinaPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Welcome to Humanitarians AI. We are committed to protecting your personal information and your right to privacy. 
              If you have any questions or concerns about this privacy policy or our practices with regard to your personal information, 
              please contact us at <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on our website, express an interest 
              in obtaining information about us or our products and services, participate in activities on the website, or contact us.
            </p>
            <p className="mt-4">
              The personal information that we collect depends on the context of your interactions with us and the website, the choices 
              you make, and the products and features you use. The personal information we collect may include the following:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Name and Contact Data:</strong> We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
              <li><strong>Credentials:</strong> We collect passwords, password hints, and similar security information used for authentication and account access.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use the information we collect or receive:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To facilitate account creation and logon process</li>
              <li>To send you marketing and promotional communications</li>
              <li>To send administrative information to you</li>
              <li>To fulfill and manage your orders</li>
              <li>To post testimonials</li>
              <li>To request feedback</li>
              <li>To protect our services</li>
              <li>To enforce our terms, conditions, and policies</li>
              <li>To respond to legal requests and prevent harm</li>
              <li>To manage user accounts</li>
              <li>To deliver services to the user</li>
              <li>To respond to user inquiries/offer support to users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
            <p>
              We do not share, sell, rent, or trade any of your information with third parties for their promotional purposes.
            </p>
            <p className="mt-4">
              We may process or share your data that we hold based on the following legal basis:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
              <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
              <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
              <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
              <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, and illegal activities, or as evidence in litigation in which we are involved.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 id="cookies" className="text-2xl font-semibold mb-4">Cookies and Other Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies to access or store information. Specific information about how we use 
              such technologies and how you can refuse certain cookies is set out in our{' '}
              <Link href="/privacy#cookies" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any 
              personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% 
              secure. Although we will do our best to protect your personal information, transmission of personal information to and 
              from our website is at your own risk. You should only access the services within a secure environment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Retention of Your Information</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, 
              unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). 
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize 
              such information, or, if this is not possible (for example, because your personal information has been stored in backup 
              archives), then we will securely store your personal information and isolate it from any further processing until deletion 
              is possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
            <p>
              In some regions, you have certain rights under applicable data protection laws. These may include the right:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To request access and obtain a copy of your personal information</li>
              <li>To request rectification or erasure</li>
              <li>To restrict the processing of your personal information</li>
              <li>If applicable, to data portability</li>
            </ul>
            <p className="mt-4">
              In certain circumstances, you may also have the right to object to the processing of your personal information. 
              To make such a request, please use the contact details provided below. We will consider and act upon any request 
              in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg">
              If you have questions or comments about this privacy policy, please{' '}
              <Link 
                href="/contact" 
                className="text-primary font-medium underline decoration-2 hover:text-primary/90 inline-flex items-center gap-1"
              >
                contact us
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="inline-block"
                >
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for 
              other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new privacy policy on 
              this page. You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy 
              are effective when they are posted on this page.
            </p>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/terms-of-service" className="text-primary hover:underline">
              ← Terms of Service
            </Link>
            <Link href="/contact" className="text-primary hover:underline">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
