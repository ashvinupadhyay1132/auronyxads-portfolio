import { ExternalLink, Code, Smartphone, TrendingUp, Star, Calendar, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const portfolioItems = [
  {
    id: 1,
    title: 'Tender Details',
    category: 'App Development',
    description:
      'A mobile-first tender management app that helps users discover and track government tenders. Features include push notifications, document viewing, and tender status tracking.',
    tags: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    image:
      'https://cdn.dribbble.com/userupload/25350598/file/original-245c5064a7874a3a7d8045c00145fe96.png?format=webp&resize=400x300&vertical=center',
    demoLink:
      'https://play.google.com/store/apps/details?id=com.cnettechnologies.tenderdetail&hl=en_IN&pli=1',
    githubLink:
      'https://play.google.com/store/apps/details?id=com.cnettechnologies.tenderdetail&hl=en_IN&pli=1',
    featured: true,
    icon: Code,
    color: 'from-indigo-600 to-purple-600',
    stats: { rating: '5.0' },
  },
  {
    id: 2,
    title: 'News Hunt',
    category: 'Web Development',
    description:
      'A content management system for blogs with markdown support, image uploads, user roles, and SEO optimization.',
    tags: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT', 'Material UI', 'Shadcn'],
    image:
      'https://cdn.dribbble.com/userupload/4171124/file/original-345de0be93c3ac84e27f202fd13b7ee6.jpg?format=webp&resize=400x300&vertical=center',
    demoLink: 'https://www.newshunt.blog/',
    githubLink: 'https://github.com/ashvinupadhyay1132/news',
    featured: true,
    icon: Code,
    color: 'from-indigo-600 to-purple-600',
    stats: { rating: '5.0' },
  },
  {
    id: 3,
    title: 'Calculate More',
    category: 'Web Development',
    description:
      'Calculate More is your all-in-one calculator hub with a sleek modern UI—fast, simple, and powerful for every calculation you need',
    tags: ['React.js', 'Next.js', 'Typescript', 'Tailwind CSS', 'JavaScript'],
    image: 'https://cdn.dribbble.com/userupload/26170609/file/original-9f6b250fb27c765ef69c52a78367200d.jpg?resize=1024x768&vertical=center',
    demoLink: 'https://www.calculatemore.org/',
    githubLink: 'https://github.com/ashvinupadhyay1132',
    featured: true,
    icon: Code,
    color: 'from-indigo-600 to-purple-600',
    stats: { rating: '5.0' },
  },
  {
    id: 4,
    title: 'EasyCV - Resume Maker',
    category: 'Web Development',
    description:
      'A modern resume builder with customizable templates, real-time preview, and PDF export. Create professional, ATS-friendly CVs with multiple themes.',
    tags: ['React', 'Redux', 'HTML', 'CSS', 'JavaScript'],
    image:
      'https://images01.nicepagecdn.com/page/15/45/website-design-preview-154534.jpg',
    demoLink: 'https://testanalytics-5e6e3.web.app/',
    githubLink: 'https://github.com/ashvinupadhyay1132/Resume-Builder',
    icon: Code,
    color: 'from-indigo-600 to-purple-600',
    stats: { rating: '5.0' },
  },
  {
    id: 5,
    title: "Performance Excellence",
    category: "Performance Marketing",
    description: "Data-driven marketing campaign achieving 400% ROI through optimized ad targeting and conversion tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["PPC", "Conversion Optimization", "A/B Testing", "ROI Tracking"],
    icon: TrendingUp,
    color: "from-orange-500 to-red-600",
    stats: { roi: "400%", conversions: "+250%", cost: "-40%" },
    duration: "5 months",
    client: "Growth Dynamics",
    // demoLink: "https://performance.com",
    // githubLink: "https://github.com/example/performance"
  },
  {
    id: 6,
    title: "Brand Boost Campaign",
    category: "Digital Marketing",
    description: "360-degree digital marketing campaign that increased brand awareness by 300% in 6 months.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Social Media", "Content Strategy", "Influencer Marketing", "Analytics"],
    icon: TrendingUp,
    color: "from-green-500 to-teal-600",
    stats: { reach: "2M+", engagement: "+300%", followers: "+250%" },
    duration: "6 months",
    client: "StyleCorp Fashion",
    // demoLink: "https://brandboost.com",
    // githubLink: "https://github.com/example/brandboost"
  },
];