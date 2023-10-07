import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import React from "react";
function privacypolicy() {
  return (
    <>
      <NavBar />
      <div className="[&>*]:py-6 px-5 md:px-10 lg:px-20 xl:px-36 ">
        <div className="space-y-2">
          <h3 className="text-2xl lg:text-3xl font-semibold">Privacy Policy</h3>
          <h3 className="text-lg lg:text-xl font-medium">
            Effective Date: 4th June 2023.
          </h3>
        </div>
        <p className="text-lg">
          This Privacy Policy (<q>Policy</q>) outlines how Esquire Resorts (
          <q>we</q>, <q>us</q>, or <q>our</q>) collects, uses, discloses, and
          protects the personal information of users (<q>you</q> or
          <q>your</q>) when you access or use our website (<q>Website</q>). We
          are committed to protecting your privacy and ensuring the security of
          your personal information.
        </p>
        <div className="space-y-2 lg:space-y-5 ">
          <h3 className="text-lg lg:text-xl font-medium">
            1. Information We Collect
          </h3>
          <ul className="space-y-4 w-11/12 text-md lg:[&>*]:leading-[3rem] [&>*]:leading-[2rem]">
            <li>
              a.<b> Personal Information:</b> We may collect personal
              information that you voluntarily provide to us, such as your name
              and email address when you submit feedback or complaints through
              our Website.
            </li>
            <li>
              b.<b> Usage Information:</b> We may collect non-personal
              information about your interactions with the Website, such as your
              IP address, browser type, referring website, pages visited, and
              the date and time of each visit. This information is collected
              automatically through cookies and similar technologies.
            </li>
          </ul>
        </div>
        <div className="space-y-2 lg:space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">
            2. Use of Personal Information
          </h3>
          <ul className="space-y-4 w-11/12 text-md leading-6">
            <li>
              a. We use the personal information you provide to respond to your
              feedback or complaints, communicate with you, and improve our
              services.
            </li>
            <li>
              b. We may also use your personal information to send you updates,
              newsletters, or promotional materials if you have opted to receive
              such communications.
            </li>
            <li>
              c. We do not sell, rent, or lease your personal information to
              third parties unless we have obtained your explicit consent or are
              required by law to do so.
            </li>
          </ul>
        </div>
        <div className="space-y-2 lg:space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">
            3. Disclosure of Personal Information
          </h3>
          <ul className="space-y-4 w-11/12 text-md leading-6">
            <li>
              a. We may share your personal information with trusted third-party
              service providers who assist us in operating our Website and
              providing services to you. These service providers are
              contractually obligated to protect your personal information and
              use it only for the purposes for which we disclose it to them.
            </li>
            <li>
              b. We may disclose your personal information if required by law,
              regulation, or legal process, or if we believe it is necessary to
              protect our rights, property, or safety, or the rights, property,
              or safety of others.
            </li>
          </ul>
        </div>
        <div className="space-y-2 lg:space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">4. Data Security</h3>
          <ul className="space-y-4 w-11/12 text-md leading-6">
            <li>
              a. We implement reasonable security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction. However, no method of transmission
              over the internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </li>
          </ul>
        </div>
        <div className="space-y-2 lg:space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">
            5. Third-Party Websites
          </h3>
          <ul className="space-y-4 w-11/12 text-md leading-6">
            <li>
              a. Our Website may contain links to third-party websites. This
              Policy does not apply to those websites. We recommend reviewing
              the privacy policies of those websites before providing any
              personal information.
            </li>
          </ul>
        </div>

        <div className="space-y-2 lg:space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">
            6. Children&apos;s Privacy
          </h3>
          <ul className="space-y-4 w-11/12 text-md leading-6">
            <li>
              a. Our Website is not intended for children under the age of 13.
              We do not knowingly collect personal information from children
              under the age of 13. If we become aware that we have collected
              personal information from a child under the age of 13, we will
              take steps to delete it as soon as possible.
            </li>
          </ul>
        </div>

        <div className="space-y-2 lg:space-y-5">
          <h3 className="text-lg lg:text-xlfont-medium">
            7. Changes to this Privacy Policy
          </h3>
          <ul className="space-y-4 w-11/12 text-md leading-6">
            <li>
              a. We may update this Policy from time to time. The updated
              version will be indicated by an updated <q>Effective Date</q> at
              the beginning of this Policy. We encourage you to review this
              Policy periodically to stay informed about our privacy practices.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg lg:text-xlfont-medium">8. Contact Us</h3>
          <p className="text-lg">
            a. If you have any questions or concerns about these Terms, please
            contact us at
            <a href="mailto:esquireresorts@gmail.com" className="text-blue-500">
              {" "}
              esquireresorts@gmail.com .
            </a>
          </p>
        </div>
        <p className="text-lg">
          Please read this Privacy Policy carefully before using the Website. By
          using the Website, you signify your agreement to this Privacy Policy.
        </p>
        <h3 className="text-lg lg:text-xlfont-medium">
          Last Updated: 4th June 2023.
        </h3>
      </div>
      <Footer />
    </>
  );
}

export default privacypolicy;
