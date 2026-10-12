export interface ImageItem {
  src: string;
  alt: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface SectionHeading {
  main: string;
  middle?: string;
  highlight?: string;
  end?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  name?: string;
  icon?: string;
}

export interface GlobalData {
  companyName: string;
  logo: {
    text: string;
    highlight: string;
    subtext: string;
    image: string;
    alt: string;
  };
  whiteLogo: ImageItem;
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  socials: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export interface TopbarData {
  address: string;
  phone: string;
  email: string;
  followText: string;
  socials: SocialLink[];
}

export interface HeaderData {
  logo: {
    text: string;
    highlight: string;
    subtext: string;
    image: string;
    alt: string;
  };
  menu: LinkItem[];
  cta: LinkItem;
}

export interface PageBannersData {
  defaultImage: string;
  homeLabel: string;
  breadcrumbLabel: string;
}

export interface HeroFeature {
  icon: string;
  title: string;
}

export interface HeroBannerData {
  image: ImageItem;
  badge: string;
  heading: SectionHeading;
  description: string;
  primaryButton: LinkItem;
  secondaryButton: LinkItem;
  features?: HeroFeature[];
}

export interface AboutUsFeature {
  title: string;
  description: string;
  icon: string;
}

export interface AboutUsData {
  images: {
    main: ImageItem;
    preview: ImageItem;
  };
  badge: string;
  heading: SectionHeading;
  description: string;
  list: AboutUsFeature[];
  cta: LinkItem;
  experience: {
    value: string;
    label: string;
  };
}

export interface ServiceItem {
  title: string;
  description: string;
  slug: string;
  icon: string;
  image: string;
}

export interface ServiceDetailItem {
  name: string;
  slug: string;
}

export interface ServiceDetailsData {
  defaultSlug: string;
  defaultTitle: string;
  sidebarTitle: string;
  sidebarServices: ServiceDetailItem[];
  help: {
    image: ImageItem;
    title: string;
    callText: string;
    phone: string;
  };
  mainImage: ImageItem;
  introParagraphs: string[];
  valuesTitle: string;
  valuesDescription: string;
  values: string[];
  galleryImages: ImageItem[];
  middleParagraphs: string[];
  videoImage: ImageItem;
  closingParagraphs: string[];
}

export interface ServicesData {
  badge: string;
  heading: SectionHeading;
  description: string;
  readMore: string;
  list: ServiceItem[];
  serviceDetails?: ServiceDetailsData;
}

export interface WorkingProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkingProcessFeature {
  title: string;
  subtitle: string;
  icon: string;
}

export interface WorkingProcessData {
  image: ImageItem;
  badge: string;
  heading: SectionHeading;
  description: string;
  list: WorkingProcessStep[];
  features: WorkingProcessFeature[];
}

export interface WhyChooseUsFeature {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsData {
  image: ImageItem;
  badge: string;
  heading: SectionHeading;
  description: string;
  badgeCard: {
    subtitle: string;
    line1: string;
    line2: string;
  };
  list: WhyChooseUsFeature[];
}

export interface StatItem {
  end: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface StatsData {
  background: ImageItem;
  list: StatItem[];
}

export interface CtaBannerData {
  backgroundImage: string;
  badge: string;
  heading: SectionHeading;
  button: LinkItem;
  phoneTitle: string;
  emailTitle: string;
}

export interface GetQuoteFeature {
  title: string;
  icon: string;
}

export interface GetQuoteData {
  image: ImageItem;
  heading: SectionHeading;
  description: string;
  list: GetQuoteFeature[];
  form: {
    badge: string;
    heading: SectionHeading;
    description: string;
    fields: Record<string, { label: string; placeholder?: string }>;
    optionalText: string;
    moveTypes: string[];
    houseSizes: string[];
    buttonText: string;
    successMessage: string;
  };
}

export interface OurApproachCard {
  title: string;
  description: string;
  icon: string;
}

export interface OurApproachData {
  images: ImageItem[];
  stats: {
    subtitle: string;
    value: string;
    label: string;
  };
  badge: string;
  heading: SectionHeading;
  description: string;
  list: OurApproachCard[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  image: ImageItem;
  help: {
    title: string;
    description: string;
  };
  badge: string;
  heading: SectionHeading;
  description: string;
  list: FaqItem[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
}

export interface GalleryData {
  badge: string;
  heading: SectionHeading;
  description: string;
  labels: {
    counterSeparator: string;
    close: string;
    previous: string;
    next: string;
  };
  list: GalleryItem[];
}

export interface ReviewItem {
  rating: number;
  review: string;
  authorName: string;
  authorLocation: string;
}

export interface TestimonialsPageItem {
  rating: number;
  review: string;
  name: string;
  location: string;
  tag: string;
  image: string;
}

export interface TestimonialsData {
  image: ImageItem;
  badge: string;
  heading: SectionHeading;
  autoplayInterval: number;
  labels: {
    previous: string;
    next: string;
  };
  list: ReviewItem[];
  experience: {
    value: string;
    label: string;
  };
  page?: {
    badge: string;
    heading: SectionHeading;
    description: string;
    itemsPerPage: number;
    labels: {
      previous: string;
      next: string;
    };
    list: TestimonialsPageItem[];
  };
}

export interface ContactPageData {
  form: {
    badge: string;
    heading: SectionHeading;
    description: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      movingService: string;
      movingFrom: string;
      movingTo: string;
      additionalDetails: string;
    };
    serviceOptions: string[];
    recaptchaLabel: string;
    recaptchaBrand: string;
    submitButton: string;
    recaptchaAlert: string;
    successMessage: string;
  };
  backgroundImage: string;
  info: {
    badge: string;
    heading: SectionHeading;
    description: string;
    labels: {
      call: string;
      email: string;
      location: string;
    };
    socialTitle: string;
  };
  map: {
    title: string;
    embedUrl: string;
    cardTitle: string;
    linkText: string;
    linkUrl: string;
  };
}

export interface TeamMemberDetails {
  badge: string;
  bio: string;
  stats: {
    icon: string;
    value: string;
    label: string;
  }[];
  contactTitle: string;
  contact: {
    icon: string;
    value: string;
  }[];
  followTitle: string;
  socials: SocialLink[];
  button: {
    label: string;
  };
  personalInfoTitle: string;
  personalInfo: {
    icon: string;
    label: string;
    value: string;
  }[];
  skillsTitle: string;
  skills: {
    label: string;
    value: number;
  }[];
  certificationsTitle: string;
  certifications: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface TeamData {
  badge: string;
  heading: SectionHeading;
  viewProfileLabel: string;
  details?: TeamMemberDetails;
}

export interface BlogItem {
  date: string;
  month: string;
  image: string;
  title: string;
  slug: string;
  description: string;
}

export interface BlogDetailsData {
  authorLabel: string;
  paragraphs: string[];
  quote: {
    text: string;
    author: string;
  };
  subheading: string;
  list: string[];
  sideImage: ImageItem;
}

export interface BlogNewsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  authorLabel: string;
  readMore: string;
  cta: LinkItem;
  details?: BlogDetailsData;
}

export interface FooterData {
  logo: ImageItem;
  backgroundImage: string;
  description: string;
  titles: {
    quickLinks: string;
    services: string;
    contact: string;
  };
  contactLabels: {
    call: string;
    email: string;
    location: string;
    hours: string;
  };
  services: string[];
  workingHours: {
    weekdays: string;
    weekend: string;
  };
  copyright: string;
}

export interface MoveNestSections {
  Global?: { variants?: { MoveNestGlobal1?: GlobalData } };
  Topbar?: { variants?: { MoveNestTopbar1?: TopbarData } };
  Header?: { variants?: { MoveNestHeader1?: HeaderData } };
  PageBanners?: { variants?: { MoveNestPageBanners1?: PageBannersData } };
  HeroBanner?: { variants?: { MoveNestHeroBanner1?: HeroBannerData } };
  AboutUs?: { variants?: { MoveNestAboutUs1?: AboutUsData } };
  Services?: { variants?: { MoveNestServices1?: ServicesData } };
  WorkingProcess?: { variants?: { MoveNestWorkingProcess1?: WorkingProcessData } };
  WhyChooseUs?: { variants?: { MoveNestWhyChooseUs1?: WhyChooseUsData } };
  Stats?: { variants?: { MoveNestStats1?: StatsData } };
  CtaBanner?: { variants?: { MoveNestCtaBanner1?: CtaBannerData } };
  GetQuote?: { variants?: { MoveNestGetQuote1?: GetQuoteData } };
  OurApproach?: { variants?: { MoveNestOurApproach1?: OurApproachData } };
  Faq?: { variants?: { MoveNestFaq1?: FaqData } };
  Gallery?: { variants?: { MoveNestGallery1?: GalleryData } };
  Testimonials?: { variants?: { MoveNestTestimonials1?: TestimonialsData } };
  ContactPage?: { variants?: { MoveNestContactPage1?: ContactPageData } };
  Team?: { variants?: { MoveNestTeam1?: TeamData } };
  BlogNews?: { variants?: { MoveNestBlogNews1?: BlogNewsData } };
  Footer?: { variants?: { MoveNestFooter1?: FooterData } };
}

export interface MoveNestTemplateData {
  categories: {
    MoveNest: {
      templateComponents?: Record<string, unknown>;
      sections: MoveNestSections;
    };
  };
}
