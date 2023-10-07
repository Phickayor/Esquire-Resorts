import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import React from "react";
function terms() {
  return (
    <>
      <NavBar />
      <div className="[&>*]:py-6 px-5 md:px-10 lg:px-20 xl:px-36 ">
        <div className="space-y-2 ">
          <h2 className="text-3xl font-semibold">Terms Of Service</h2>
          <h3 className="text-lg lg:text-xl font-medium">
            Effective Date: 4th June 2023
          </h3>
        </div>
        <p className="text-lg">
          These Terms of Service <q>Terms</q> govern your use of Esquire Resorts
          website (<q>Website</q>) and the services provided through the
          Website. By accessing or using the Website, you agree to be bound by
          these Terms. If you do not agree to these Terms, please do not use the
          Website.
        </p>
        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">
            1. Informational Purposes Only
          </h3>
          <p className="text-lg">
            The content on the Website is provided for informational purposes
            only. It does not constitute professional advice, including but not
            limited to legal, financial, or any other professional advice.
            Esquire Resorts does not accept any responsibility for any decisions
            made based on the information provided on the Website.
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">
            2. User Feedback and Complaints
          </h3>
          <p className="text-lg">
            The Website provides a platform for users to provide feedback or
            submit complaints to Esquire Resorts. By using this feature, you
            acknowledge and agree to the following:
          </p>
          <ul className="space-y-4 text-md lg:[&>*]:leading-[3rem] [&>*]:leading-[2rem]">
            <li>
              a.<b> Accuracy of Information:</b> You represent and warrant that
              the information you provide, including your name and email
              address, is accurate and truthful.
            </li>
            <li>
              b.<b> Consent to Communication:</b> By submitting feedback or a
              complaint, you consent to Esquire Resorts contacting you via the
              email address provided for the purpose of resolving your feedback
              or complaint.
            </li>
            <li>
              c.<b> Confidentiality:</b> While Esquire Resorts will take
              reasonable measures to protect the information you provide, you
              acknowledge that the transmission of information over the internet
              is not completely secure. Therefore, Esquire Resorts cannot
              guarantee the absolute confidentiality of your information.
            </li>
            <li>
              d.<b> Non-Confidentiality of Feedback:</b> You acknowledge and
              agree that any feedback or suggestions you provide to Esquire
              Resorts through the Website may be used by Esquire Resorts without
              any obligation to compensate you or maintain the confidentiality
              of such feedback.
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium mt-5">
            3. Intellectual Property
          </h3>
          <p className="text-lg">
            The content, design, and layout of the Website are protected by
            intellectual property laws, including copyright and trademark laws.
            You may not reproduce, distribute, modify, or create derivative
            works of any materials on the Website without prior written consent
            from Esquire Resorts.
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium mt-5">
            4. Disclaimer of Warranty
          </h3>
          <p className="text-lg">
            The Website and its content are provided on an <q>as-is</q> basis.
            Esquire Resorts makes no warranties, expressed or implied, regarding
            the accuracy, reliability, or availability of the Website. You
            acknowledge that your use of the Website is at your own risk.
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium mt-5">
            5. Limitation of Liability
          </h3>
          <p className="text-lg">
            To the fullest extent permitted by applicable law, Esquire Resorts
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including but not limited to
            damages for loss of profits, goodwill, use, data, or other
            intangible losses, arising out of or in connection with your use of
            the Website.
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">6. Modifications</h3>
          <p className="text-lg">
            Esquire Resorts reserves the right to modify or update these Terms
            at any time without prior notice. Your continued use of the Website
            after the posting of any changes constitutes your acceptance of such
            changes.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">7. Governing Law</h3>
          <p className="text-lg">
            These Terms shall be governed by and construed in accordance with
            the laws of NIgeria. Any disputes arising under or in connection
            with these Terms shall be subject to the exclusive jurisdiction of
            the courts located in Federal High Court.
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">8. Severability</h3>
          <p className="text-lg">
            If any provision of these Terms is found to be unenforceable or
            invalid, such provision shall be limited or eliminated to the
            minimum extent necessary, and the remaining provisions shall remain
            in full force and effect.
          </p>
        </div>
        <p className="text-lg">
          If you have any questions or concerns about these Terms, please
          contact us at
          <a href="mailto:esquireresorts@gmail.com" className="text-blue-500">
            {" "}
            esquireresorts@gmail.com .
          </a>
        </p>
        <p className="text-lg">
          Please read these Terms of Service carefully before using the Website.
          By using the Website, you signify your agreement to these Terms.
        </p>
      </div>
      <Footer />
    </>
  );
}
export default terms;
