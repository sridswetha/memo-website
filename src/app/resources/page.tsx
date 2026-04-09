export default function Resources() {
  return (
    <div className="px-4 sm:px-6 md:px-25 py-20 sm:py-24 md:py-30" style={{ backgroundColor: '#DBF9FF' }}>
      <h1
        className="text-6xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[100px] font-bold text-[#4C3442] tracking-wider flex justify-center mb-8 sm:mb-12"
        style={{
          fontFamily: 'UpheavalTT, Arial, sans-serif',
          textShadow: '2px 2px 6px rgba(0,0,0,0.3)'
        }}
      >
        Need Some Help? 
      </h1>

      {/* COMMUNITY */}
      <div className="text-[#4C3442] text-base sm:text-sm md:text-lg space-y-2 font-montserrat">
        <p className="font-bold">COMMUNITY</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://www.firstgenterps.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              First Generation Terps
            </a>{" "}
            - A resource for students who are the first in their family to attend college
          </li>
          <li>
            <a href="https://stamp.umd.edu/get_involved/transfer_and_offcampus_student_life/new_transfer_campus_students" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              New Transfer and Off Campus Students
            </a>
          </li>
          <li>
            <a href="https://belonging.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Office of Diversity and Inclusion
            </a>
          </li>
          <li>
            <a href="https://lgbtq.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LGBTQ Equity Center
            </a>{" "}
            - Networking, advocacy, and support for LGBTQ Terps
          </li>
          <li>
            <a href="https://stamp.umd.edu/get_involved/multicultural_involvement_community_advocacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Multicultural Involvement & Community Advocacy (MICA)
            </a>{" "}
            - Empowers students through education on race, ethnicity, gender, religion, and intersections
          </li>
          <li>
            <a href="https://omse.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Office of Multi-Ethnic Student Education
            </a>
          </li>
          <li>
            <a href="https://stamp.umd.edu/get_involved/veteran_student_life" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Veteran Student Life
            </a>
          </li>
          <li>
            <a href="https://stamp.umd.edu/visit/memorial_chapel/chaplains" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              University Chaplains
            </a>{" "}
            - Looking for a faith community?
          </li>
          <li>
            <a href="https://terrapinstrong.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              TerrapinSTRONG
            </a>
          </li>
        </ul>
      </div>

      {/* LEGAL ISSUES */}
      <div className="text-[#4C3442] text-base sm:text-sm md:text-lg space-y-2 font-montserrat mt-6">
        <p className="font-bold">LEGAL ISSUES</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://legalaid.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              UMD Legal Aid
            </a>{" "}
            - Free legal aid for full-time UMD students on a range of issues
          </li>
          <li>
            <a href="https://maryland.freelegalanswers.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Maryland Free Legal Answers
            </a>{" "}
            - Free legal advice
          </li>
        </ul>
      </div>

      {/* PHYSICAL VIOLENCE AND SEXUAL ASSAULT */}
      <div className="text-[#4C3442] text-base sm:text-sm md:text-lg space-y-2 font-montserrat mt-6">
        <p className="font-bold">PHYSICAL VIOLENCE AND SEXUAL ASSAULT</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://health.umd.edu/wellness-advocacy/care-stop-violence" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              CARE Center
            </a>{" "}
            - Confidential resource for victims of violence, 24/7 crisis hotline: 301-741-3442
          </li>
          <li>
            <a href="https://ocrsm.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Office of Civil Rights & Sexual Misconduct
            </a>{" "}
            - Includes Title IX office
          </li>
          <li>
            <a href="https://umpd.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              UMD Police
            </a>
          </li>
          <li>
            <a href="https://www.nsvrc.org/blog_post/online-communities-survivors-websites-and-resources-offering-support-and-help1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              National Sexual Violence Resource Center
            </a>{" "}
            - Listing of online communities and resources for survivors
          </li>
        </ul>
      </div>

      {/* TECHNICAL SUPPORT */}
      <div className="text-[#4C3442] text-base sm:text-sm md:text-lg space-y-2 font-montserrat mt-6">
        <p className="font-bold">TECHNICAL SUPPORT</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://umd.service-now.com/itsupport/?id=getsupport" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Tech Issues
            </a>
          </li>
          <li>
            <a href="https://community.instructure.com/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              ELMS-Canvas How-to Guides
            </a>
          </li>
          <li>
            <a href="https://support.zoom.com/hc/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Zoom Technical Support
            </a>
          </li>
        </ul>
      </div>

      {/* FOOD */}
      <div className="text-[#4C3442] text-base sm:text-sm md:text-lg space-y-2 font-montserrat mt-6">
        <p className="font-bold">FOOD</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://dining.umd.edu/sustainability/campus-pantry" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              UMD Campus Pantry
            </a>{" "}
            - Open to students, faculty, and staff experiencing food insecurity
          </li>
          <li>
            <a href="https://www.collegeparkfoodbank.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              College Park Community Food Bank
            </a>
          </li>
          <li>
            <a href="https://dhs.maryland.gov/supplemental-nutrition-assistance-program/eligibility-rules/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Supplemental Nutrition Assistance Program (SNAP)
            </a>
          </li>
          <li>
            <a href="https://www.foodpantries.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Food Pantries in Your Neighborhood
            </a>
          </li>
        </ul>
      </div>

      {/* MONEY */}
      <div className="text-[#4C3442] text-base sm:text-sm md:text-lg space-y-2 font-montserrat mt-6">
        <p className="font-bold">MONEY</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://financialaid.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              UMD Financial Aid Office
            </a>{" "}
            - Student loans and financial supports
          </li>
          <li>
            <a href="https://studentaffairs.umd.edu/division-of-student-affairs-crisis-fund" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              UMD Student Crisis Fund
            </a>{" "}
            - Emergency funds for students in need
          </li>
          <li>
            <a href="https://studentaffairs.umd.edu/thrive-center-essential-needs/fostering-terp-success" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Fostering Terp Success
            </a>{" "}
            - Assistance for unhoused students or those with limited family support
          </li>
        </ul>
      </div>

      {/* CAMPUS EMERGENCIES */}
      <div className="text-[#4C3442] text-base sm:text-sm md:text-lg space-y-2 font-montserrat mt-6">
        <p className="font-bold">CAMPUS EMERGENCIES</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://umpd.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              UMD Police
            </a>
          </li>
          <li>
            <a href="https://umd.edu/weather" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              UMD Inclement Weather Page
            </a>
          </li>
          <li>
            <a href="https://umd.edu/app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              UMD Apps
            </a>{" "}
            - Stay up to date with campus news
          </li>
          <li>
            <a href="https://prepare.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              UMD Office of Emergency Management
            </a>
          </li>
          <li>
            <a href="https://www.princegeorgescountymd.gov/departments-offices/homeland-security/emergency-management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Prince George’s County Office of Emergency Management
            </a>
          </li>
        </ul>
      </div>
      <p className="font-montserrat mt-6 text-gray-800">
        Adapted from a similar list originally compiled and circulated by colleagues in AGNR.
      </p>    
</div>
  );
}
