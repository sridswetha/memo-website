'use client';
import React from 'react';
import Image from 'next/image';
import FlipCard from './components/FlipCard';

export default function About() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 py-24 bg-[#DBF9FF]">
      {/* Centered Heading */}
      <h1 
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#3b0d37] tracking-wider text-center mb-6" 
        style={{ fontFamily: 'UpheavalTT, Arial, sans-serif' }}
      >
        ABOUT US
      </h1>

{/* Mission Statement Box (matching the full 3-card grid width) */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="w-full p-6 sm:p-8 rounded-xl bg-[#8AA7B2] text-white shadow-md text-center">
          <p className="text-lg sm:text-xl font-montserrat leading-relaxed">
            M.E.M.O empowers minority students by promoting mental health awareness and reducing stigma in BIPOC spaces. We create a safe, supportive space for students to explore their well-being and connect with others who share similar experiences. Through discussions, movie nights, workshops, and more, we make advocacy engaging and accessible. Our mission is simple: uplift, educate, and build a campus culture where every student feels seen, supported, and encouraged to prioritize their mental health.
          </p>
        </div>
      </div>

      {/* Team Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-[#3b0d37] text-center mb-6"
          style={{ fontFamily: 'UpheavalTT, Arial, sans-serif' }}
        >
          MEET OUR TEAM
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <FlipCard
            name="Vivian Jiang"
            position="President"
            bio="Growing up, mental health has always been stigmatized and I would love to give everyone the chance to say something about their own experiences with it! Everything intersects with mental health, and vice versa."
            pronouns="She/Her"
            major="Psychology Major, 2026"
            hobbies="Mediums of Expression: Painting, sketching, and planning composition"
            imageUrl="/people/bibian.png"
            className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
          />
          <FlipCard
            name="Siya Kothale"
            position="Vice President"
            bio="I'm passionate about mental health advocacy, especially in first-generation immigrant communities, where stigma prevents any conversations about mental health. I have seen many first-generation students struggle to acknowledge their own mental health challenges, especially when comparing their experiences to the sacrifices their parents made for them. I hope to use MEMO to provide UMD students a safe space to express their feelings."
            imageUrl="/people/siya.jpg"
            className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
            pronouns="She/Her"
            hobbies="Mediums of Expression: Books amd meaningful conversations"
            major="Neuroscience & Human Development Major, 2027"
          />
          <FlipCard
            name="Gavin Neubauer"
            position="Treasurer"
            bio="Mental health has been a central issue through my work in politics and legislation. I've assisted many people throughout Maryland facing these issues and helped them to get back on their feet through crises."
            imageUrl="/people/gavin.jpg"
            major="Public Policy Major & Chinese Language Minor, 2026"
            pronouns="He/Him"
            hobbies="Mediums of Expression: Op-Ed pieces, poetry, and short (sometimes longer) stories."
            className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
          />
          <FlipCard
            name="Tulika Kumar"
            position="Secretary"
            bio="Mental health advocacy has always been relevant and crucial in my life. For as long as I can remember, mental health has been the issue I have stood for the most passionately. I feel rewarded by giving back in this space (for example, I volunteer for the National Crisis Text Line), and I’m excited to make a difference for students on our campus through MEMO."
            imageUrl="/people/tulika.png"
            className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
            pronouns="She/Her"
            hobbies="Mediums of Expression: Speech and writing"
            major="Computer Science Major & Business Minor, 2026"
          />
          <FlipCard
            name="Autumn Brooks"
            position="Editor"
            bio="What interests me about mental health advocacy/MEMO is how deeply intertwined mental, physical, emotional, and spiritual health are. Although this seems fairly obvious, many students still suffer from this health imbalance, myself included at times. Though, when we begin with nurturing the mind, everything else will fall into place."
            imageUrl="/people/autumn.jpg"
            className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
            pronouns="She/Her"
            hobbies="Mediums of Expression: Literary reviews, analyses, and social media writing"
            major="English Major & Professional Writing Minor, 2027"
          />
          <FlipCard
            name="Ariyana Brittingham"
            position="Editor"
            bio="Mental health impacts all of us, and it definitely impacts me, so MEMO offers a space where I can be vocal about my experience with mental health in a creative format, allowing me to think outside the box but also reflect on my own thoughts and ideas."
            imageUrl="/people/ariyana.jpg"
            className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
            pronouns="She/Her"
            hobbies="Mediums of Expression: Creative writing pieces and journaling"
            major="English Major & Professional Writing Minor, 2027"
          />
          <FlipCard
            name="Mahita Kamalahasan"
            position="Technical Director"
            bio="I've always been interested in learning about psychology and how the human experience is impacted by so many different factors. MEMO provides a space for people to share their own experiences and help others learn more about mental health and psychology."
            imageUrl="/people/mahieh.png"
            className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
            pronouns="She/Her"
            hobbies="Mediums of Expression: Dance, photography, and painting"
            major="Computer Science Major & Sociology Minor, 2027"
          />
          <FlipCard
            name="Swetha Sridaran"
            position="Technical Director"
            bio="I love that MEMO provides a platform for writers and artists to communicate various perspectives and experiences, fostering a positive and safe community. Though my primary work will be developing the website, I'm committed to helping this community flourish while learning a lot about mental health."
            imageUrl="/people/swetha.jpeg"
            className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
            pronouns="She/Her"
            hobbies="Mediums of Expression: Music, dance, and anything artsy."
            major="Computer Science Major & Linguistics Minor, 2026"
          />
        </div>
      </div>
    </div>
  );
}