// composables/usePortfolioData.ts

export const usePortfolioData = () => {
  // 1. Informasi Pribadi & Hero Section
  const personalInfo = {
    name: 'Aditya Prayoga',
    role: 'Front End Developer | Designer | Photographer',
    description: 'I am a Frontend Developer with a deep passion for UI/UX design and photography. I believe that presenting an attractive design is crucial in building strong product branding.',
    subDescription: "My approach focuses on proper composition, visual details, and clean code to create professional and dynamic web experiences. Through my lens as a photographer, I've honed my eye for aesthetics.",
    profileImage: '/images/profile.png', 
    cvLink: 'https://www.canva.com/design/DAGscJ-W6gU/7LuO9h1PYhSC_Nv5CkMSBA/view?utm_content=DAGscJ-W6gU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he188196c74' 
  }

  const socialMedia = {
    instagram: 'https://www.instagram.com/aditprygaa_/',
    github: 'https://github.com/aditprayogaw'
  }

  // 2. Layanan (What Do I Offer)
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive websites using modern technologies like Vue, Nuxt, and Tailwind.'
    },
    {
      title: 'UI/UX & Brand Design',
      description: 'Designing user-friendly interfaces and strong brand identities that communicate effectively.'
    },
    {
      title: 'Visual Content',
      description: 'Creating compelling visual assets and photography to enhance digital storytelling.'
    }
  ]

  // 3. Proyek 
  const projects = [
    {
      id: 1,
      title: 'Vintage Marketplace',
      category: 'Vue Project',
      image: '/images/vintage-project.png',
      link: 'https://vintage-marketplace-8i9r6s7a4-aditya-prayogas-projects-59874c81.vercel.app/'
    },
    {
      id: 2,
      title: 'Marketplace Laravel Project', 
      category: 'Laravel Project',
      image: '/images/marketplace-laravel.png',
      link: 'https://github.com/aditprayogaw/marketplace-exercise.git'
    },
  ]

  // 4. Soft Skills (Why Hire Me) 
  const whyHireMe = [
    {
      title: 'Workaholic',
      description: "I'm a kind of person who can't just stand around and doing nothing. I have a tendency to do something productive."
    },
    {
      title: 'Communicative',
      description: "I have a broad understanding of verbal vocabulary. Therefore I can convey a message well to the receiver."
    },
    {
      title: 'Cooperative',
      description: "Behind the successful project there's a great team. I can build good cooperation and remain consistent with the goal."
    },
    {
      title: 'Perfectionist',
      description: "I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result."
    }
  ]

  // 5. Kontak
  const contactInfo = {
    email: 'adityamade2187@gmail.com',
    phone: '0821-4414-xxxx',
    address: 'Pemogan, Denpasar Selatan'
  }

  return {
    personalInfo,
    services,
    projects,
    whyHireMe,
    contactInfo,
    socialMedia 
  }
}