'use client';
import React from 'react';
import FlipCard from './components/FlipCard';

export default function About() {
  return (
    <div className="px-4 sm:px-6 md:px-25 py-20 sm:py-24 md:py-30" style={{ backgroundColor: '#DBF9FF', textShadow: '2px 2px 6px rgba(0,0,0,0.3)' }}>
      <h1 
        className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[150px] font-bold text-[#4C3442] tracking-wider flex justify-center mb-8 sm:mb-12" 
        style={{ fontFamily: 'UpheavalTT, Arial, sans-serif' }}
      >
        About
      </h1>
      
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-12">
        <FlipCard
          name="Vivian Jiang"
          position="President"
          bio="Growing up, mental health has always been stigmatized and I would love to give everyone the chance to say something about their own experiences with it! Everything intersects with mental health, and vice versa."
          pronouns="She/Her"
          major="B.S. in Psychology, 2026"
          hobbies="I tend to paint & sketch, but primarily I love to plan the paintings through composition, research, and a lot of reflection."
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
          hobbies="I enjoy finding books to read that invoke meaningful conversations between my friends and I."
          major="B.S. in Neuroscience and Human Development, 2027"
        />
        <FlipCard
          name="Gavin Neubauer"
          position="Treasurer"
          bio="Mental health has been a central issue through my work in politics and legislation. I've assisted many people throughout Maryland facing these issues and helped them to get back on their feet through crises."
          imageUrl="/people/gavin.jpg"
          major="B.A. in Public Policy, Minor in Chinese Language, 2026"
          pronouns="He/Him"
          hobbies="I like to express myself in the Op-Ed format, following my passion for policy, politics, and writing. Other than that, I like to write poetry and short (sometimes longer) stories."
          className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
        />
        <FlipCard
          name="Autumn Brooks"
          position="Editor"
          bio="What interests me about mental health advocacy/MEMO is how deeply intertwined mental, physical, emotional, and spiritual health are. Although this seems fairly obvious, many students still suffer from this health imbalance, myself included at times. Though, when we begin with nurturing the mind, everything else will fall into place."
          imageUrl="/people/autumn.jpg"
          className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
          pronouns="She/Her"
          hobbies="I enjoy writing up literary reviews and analyses. A few years ago, I had a social media account where I posted my ramblings and was surprised to find out others enjoyed them too."
          major="B.A. in English/Minor in Professional Writing, 2027"
        />
        <FlipCard
          name="Ariyana Brittingham"
          position="Editor"
          bio="Mental health impacts all of us, and it definitely impacts me, so MEMO offers a space where I can be vocal about my experience with mental health in a creative format, allowing me to think outside the box but also reflect on my own thoughts and ideas."
          imageUrl="/people/ariyana.jpg"
          className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
          pronouns="She/Her"
          hobbies="I like to express myself through creative writing pieces or journaling. I tend to journal about potential story ideas or yap about any and everything."
          major="English and Professional Writing Minor, 2027"
        />
        <FlipCard
          name="Mahita Kamalahasan"
          position="Technical Director"
          bio="I've always been interested in learning about psychology and how the human experience is impacted by so many different factors. MEMO provides a space for people to share their own experiences and help others learn more about mental health and psychology."
          imageUrl="/people/mahieh.png"
          className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
          pronouns="She/Her"
          hobbies="I love dancing through all my different moods and trying out creative photography project ideas"
          major="Computer Science Major & Sociology Minor, 2027"
        />
        <FlipCard
          name="Swetha Sridaran"
          position="Technical Director"
          bio="I love that MEMO provides a platform for writers and artists to communicate various perspectives and experiences, fostering a positive and safe community. Though my primary work will be developing the website, I'm committed to helping this community flourish while learning a lot about mental health."
          imageUrl="/people/swetha.jpeg"
          className="w-full sm:w-[45%] lg:w-[30%] min-w-[280px] max-w-[350px]"
          pronouns="She/Her"
          hobbies="Music, dance, anything artsy."
          major="Computer Science Major & Linguistics, 2026"
        />
      </div>
    </div>
  );
}