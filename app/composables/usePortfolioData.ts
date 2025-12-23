// composables/usePortfolioData.ts

export const usePortfolioData = () => {
  // 1. Informasi Pribadi & Hero Section
  const personalInfo = {
    name: 'Aditya Prayoga',
    role: 'Front End Developer | Designer | Photographer',
    description: 'I am a Frontend Developer with a deep passion for UI/UX design and photography. I believe that presenting an attractive design is crucial in building strong product branding.',
    subDescription: "My approach focuses on proper composition, visual details, and clean code to create professional and dynamic web experiences. Through my lens as a photographer, I've honed my eye for aesthetics.",
    profileImage: '/images/profile.png', // Pastikan nama file di folder public sesuai
    cvLink: '#' // Link download CV nanti bisa diisi
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

  // 3. Proyek (Latest Project)
  const projects = [
    {
      id: 1,
      title: 'Vintage Marketplace',
      category: 'Laravel Project',
      image: '/images/project-1.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Dashboard', // Contoh nama proyek kedua
      category: 'Vue Project',
      image: '/images/project-2.jpg',
      link: '#'
    },
    // Tambahkan project lain di sini jika ada
  ]

  // 4. Soft Skills (Why Hire Me) - Teks asli dari PDF
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
    phone: '0021-xxxx-xxxx', // Silakan update dengan nomor asli
    address: 'Permagan, Denpasar Selatan'
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