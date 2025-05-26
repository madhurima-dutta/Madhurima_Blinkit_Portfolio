"use client"
import MainLayout from "@/components/MainLayout"

export default function Home() {
  return <MainLayout />
}

// const BlinkitPortfolio = () => {
//   const [isLoading, setIsLoading] = useState(true)
//   const [progress, setProgress] = useState(0)
//   const [activeSection, setActiveSection] = useState("home")
//   const [isDarkMode, setIsDarkMode] = useState(false)
//   const [cartItems, setCartItems] = useState<string[]>([])

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           setIsLoading(false)
//           clearInterval(timer)
//           return 100
//         }
//         return prev + 2
//       })
//     }, 50)

//     return () => clearInterval(timer)
//   }, [])

//   const addToCart = (item: string) => {
//     setCartItems((prev) => [...prev, item])
//   }

//   const skills = [
//     { name: "Python", level: 95, badge: "🔥 Hot Selling!", rating: 5, projects: 8 },
//     { name: "SQL", level: 90, badge: "⭐ Bestseller", rating: 5, projects: 12 },
//     { name: "Power BI", level: 88, badge: "📊 Premium", rating: 5, projects: 6 },
//     { name: "Machine Learning", level: 85, badge: "🧠 AI Powered", rating: 4, projects: 5 },
//     { name: "Data Visualization", level: 92, badge: "🎨 Creative", rating: 5, projects: 10 },
//     { name: "Statistics", level: 94, badge: "📈 Analytics Pro", rating: 5, projects: 15 },
//   ]

//   const projects = [
//     {
//       name: "Advanced Vehicle Valuation System",
//       skills: ["Python", "ML", "Streamlit"],
//       effort: "2 weeks",
//       impact: "91% Accuracy",
//       description: "KNN model with R² score of 0.0207",
//       github: "#",
//       demo: "#",
//       price: "₹Premium",
//     },
//     {
//       name: "Risk Assessment Tech Companies",
//       skills: ["Python", "Time Series", "Monte Carlo"],
//       effort: "3 weeks",
//       impact: "95% Accuracy",
//       description: "Stock analysis with predictive modeling",
//       github: "#",
//       demo: "#",
//       price: "₹Enterprise",
//     },
//     {
//       name: "Inventory Management System",
//       skills: ["PostgreSQL", "Database Design"],
//       effort: "4 weeks",
//       impact: "40% Efficiency",
//       description: "Complete backend system with 10+ tables",
//       github: "#",
//       demo: "#",
//       price: "₹Business",
//     },
//   ]

//   const experience = [
//     {
//       role: "Assistant Data Analyst",
//       company: "Columbia Shipmanagement",
//       duration: "Nov 2024 - Present",
//       location: "Mumbai, India",
//       achievements: ["40% reduction in manual labor", "50% increase in data accuracy", "35% faster report generation"],
//       badge: "🚀 Current Role",
//     },
//     {
//       role: "Data Scientist Intern",
//       company: "Evoastra Ventures",
//       duration: "Sept 2024 - Oct 2024",
//       location: "India",
//       achievements: ["91.01% F1-score achievement", "Predictive ML pipeline", "Marketing insights optimization"],
//       badge: "🎯 High Impact",
//     },
//     {
//       role: "Subject Matter Expert",
//       company: "Chegg",
//       duration: "Jul 2022 - Jul 2024",
//       location: "India",
//       achievements: ["250+ problems solved", "Advanced Mathematics expertise", "Enhanced conceptual clarity"],
//       badge: "📚 Expert Level",
//     },
//   ]

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 flex items-center justify-center">
//         <div className="text-center space-y-6">
//           <div className="relative">
//             <Image
//               src="/images/blinkit-delivery.png"
//               alt="Delivery Animation"
//               width={200}
//               height={200}
//               className="animate-bounce"
//             />
//           </div>
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold text-gray-800">Delivering Resume...</h2>
//             <Progress value={progress} className="w-80 h-3" />
//             <p className="text-gray-700">{progress}% Complete</p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
//       {/* Header */}
//       <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-b-4 border-yellow-400">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="bg-yellow-400 p-2 rounded-full">
//                 <Package className="h-6 w-6 text-gray-800" />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold text-gray-800 dark:text-white">DataBlinkit</h1>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">Madhurima's Portfolio</p>
//               </div>
//             </div>

//             <nav className="hidden md:flex space-x-6">
//               {[
//                 { id: "home", label: "Home", icon: Package },
//                 { id: "about", label: "Inventory", icon: User },
//                 { id: "projects", label: "Billing", icon: FolderOpen },
//                 { id: "skills", label: "Products", icon: Star },
//                 { id: "why-blinkit", label: "Why Blinkit", icon: Heart },
//                 { id: "contact", label: "Support", icon: Phone },
//               ].map(({ id, label, icon: Icon }) => (
//                 <button
//                   key={id}
//                   onClick={() => setActiveSection(id)}
//                   className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
//                     activeSection === id
//                       ? "bg-yellow-400 text-gray-800"
//                       : "text-gray-600 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700"
//                   }`}
//                 >
//                   <Icon className="h-4 w-4" />
//                   <span className="text-sm font-medium">{label}</span>
//                 </button>
//               ))}
//             </nav>

//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <Sun className="h-4 w-4" />
//                 <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
//                 <Moon className="h-4 w-4" />
//               </div>
//               <Badge variant="secondary" className="bg-green-100 text-green-800">
//                 <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
//                 Online
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         {/* Home Section */}
//         {activeSection === "home" && (
//           <div className="space-y-12">
//             {/* Hero Section */}
//             <div className="text-center space-y-6">
//               <div className="relative inline-block">
//                 <Image
//                   src="/images/madhurima-portfolio.png"
//                   alt="Madhurima Dutta"
//                   width={200}
//                   height={200}
//                   className="rounded-full border-4 border-yellow-400 shadow-lg"
//                 />
//                 <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
//                   <CheckCircle className="h-4 w-4" />
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
//                   Delivering Data Insights
//                 </h1>
//                 <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600">in 10 Minutes or Less! ⚡</h2>
//                 <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//                   Hi! I'm Madhurima Dutta, your data delivery expert. Ready to serve fresh insights with the speed of
//                   Blinkit! 🛵📊
//                 </p>
//               </div>

//               <div className="flex flex-wrap justify-center gap-4">
//                 <Badge className="bg-yellow-400 text-gray-800 px-4 py-2">
//                   <MapPin className="h-4 w-4 mr-2" />
//                   Mumbai, India
//                 </Badge>
//                 <Badge className="bg-green-500 text-white px-4 py-2">
//                   <Clock className="h-4 w-4 mr-2" />
//                   Available 24/7
//                 </Badge>
//                 <Badge className="bg-blue-500 text-white px-4 py-2">
//                   <Award className="h-4 w-4 mr-2" />
//                   4+ Years Experience
//                 </Badge>
//               </div>
//             </div>

//             {/* Product Cards */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   title: "Skills Inventory",
//                   icon: Brain,
//                   description: "Premium Python, SQL & ML",
//                   badge: "🔥 Hot Selling!",
//                   action: () => setActiveSection("skills"),
//                 },
//                 {
//                   title: "Project Portfolio",
//                   icon: FolderOpen,
//                   description: "3 Featured Projects",
//                   badge: "⭐ Bestseller",
//                   action: () => setActiveSection("projects"),
//                 },
//                 {
//                   title: "Work Experience",
//                   icon: Briefcase,
//                   description: "Columbia Shipmanagement",
//                   badge: "🚀 Fresh Stock",
//                   action: () => setActiveSection("about"),
//                 },
//                 {
//                   title: "Contact Support",
//                   icon: Phone,
//                   description: "Live Chat Available",
//                   badge: "💬 24/7 Support",
//                   action: () => setActiveSection("contact"),
//                 },
//               ].map((item, index) => (
//                 <Card
//                   key={index}
//                   className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-yellow-400"
//                   onClick={item.action}
//                 >
//                   <CardHeader className="text-center">
//                     <div className="mx-auto bg-yellow-100 dark:bg-yellow-900 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
//                       <item.icon className="h-8 w-8 text-yellow-600" />
//                     </div>
//                     <Badge className="bg-red-100 text-red-800 text-xs">{item.badge}</Badge>
//                   </CardHeader>
//                   <CardContent className="text-center space-y-2">
//                     <h3 className="font-bold text-lg">{item.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
//                     <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800">
//                       <ShoppingCart className="h-4 w-4 mr-2" />
//                       Add to Cart
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* CTA Section */}
//             <div className="text-center space-y-6 bg-gradient-to-r from-yellow-400 to-orange-400 p-8 rounded-2xl">
//               <h3 className="text-2xl font-bold text-gray-800">Ready to Start Your Data Order?</h3>
//               <p className="text-gray-700">Get premium data insights delivered faster than your favorite snacks!</p>
//               <Button
//                 size="lg"
//                 className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3"
//                 onClick={() => setActiveSection("projects")}
//               >
//                 <Rocket className="h-5 w-5 mr-2" />
//                 Start Order
//               </Button>
//             </div>
//           </div>
//         )}

//         {/* About Section - My Inventory */}
//         {activeSection === "about" && (
//           <div className="space-y-8">
//             <div className="text-center space-y-4">
//               <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Inventory 📦</h2>
//               <p className="text-gray-600 dark:text-gray-300">Premium verified products in stock!</p>
//             </div>

//             {/* Education */}
//             <Card className="border-2 border-green-400">
//               <CardHeader>
//                 <div className="flex items-center justify-between">
//                   <CardTitle className="flex items-center space-x-2">
//                     <GraduationCap className="h-6 w-6 text-green-600" />
//                     <span>Education Inventory</span>
//                   </CardTitle>
//                   <Badge className="bg-green-100 text-green-800">✅ Premium Verified</Badge>
//                 </div>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
//                     <h4 className="font-bold text-lg">Master of Science in Mathematics</h4>
//                     <p className="text-gray-600 dark:text-gray-300">Indian Institute of Technology Jodhpur</p>
//                     <p className="text-sm text-gray-500">June 2022 - June 2024</p>
//                     <Badge className="mt-2 bg-yellow-400 text-gray-800">CGPA: 8.49</Badge>
//                   </div>
//                   <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
//                     <h4 className="font-bold text-lg">Bachelor of Science (Honours) in Mathematics</h4>
//                     <p className="text-gray-600 dark:text-gray-300">Acharya Prafulla Chandra College</p>
//                     <p className="text-sm text-gray-500">June 2018 - June 2021</p>
//                     <Badge className="mt-2 bg-blue-400 text-white">CGPA: 9.61</Badge>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Quick Facts */}
//             <div className="grid md:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "Delivery Time",
//                   value: "24 hrs/day",
//                   icon: Clock,
//                   color: "bg-green-100 text-green-800",
//                 },
//                 {
//                   title: "Shelf Life",
//                   value: "4+ years in tech",
//                   icon: Timer,
//                   color: "bg-blue-100 text-blue-800",
//                 },
//                 {
//                   title: "Service Area",
//                   value: "Mumbai 🏙️",
//                   icon: MapPin,
//                   color: "bg-yellow-100 text-yellow-800",
//                 },
//               ].map((fact, index) => (
//                 <Card key={index} className="text-center">
//                   <CardContent className="p-6">
//                     <div
//                       className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${fact.color}`}
//                     >
//                       <fact.icon className="h-6 w-6" />
//                     </div>
//                     <h4 className="font-bold text-lg">{fact.title}</h4>
//                     <p className="text-gray-600 dark:text-gray-300">{fact.value}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Experience Timeline */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2">
//                   <Briefcase className="h-6 w-6 text-blue-600" />
//                   <span>Work Experience</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-6">
//                   {experience.map((exp, index) => (
//                     <div key={index} className="border-l-4 border-yellow-400 pl-6 pb-6">
//                       <div className="flex items-start justify-between">
//                         <div className="space-y-2">
//                           <div className="flex items-center space-x-2">
//                             <h4 className="font-bold text-lg">{exp.role}</h4>
//                             <Badge className="bg-red-100 text-red-800 text-xs">{exp.badge}</Badge>
//                           </div>
//                           <p className="text-blue-600 font-medium">{exp.company}</p>
//                           <p className="text-sm text-gray-500">
//                             {exp.duration} • {exp.location}
//                           </p>
//                           <ul className="space-y-1">
//                             {exp.achievements.map((achievement, i) => (
//                               <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
//                                 <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
//                                 {achievement}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}

//         {/* Projects Section - Billing Summary */}
//         {activeSection === "projects" && (
//           <div className="space-y-8">
//             <div className="text-center space-y-4">
//               <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Billing Summary 🧾</h2>
//               <p className="text-gray-600 dark:text-gray-300">Your order details and project invoices</p>
//             </div>

//             {/* Filter Chips */}
//             <div className="flex flex-wrap gap-2 justify-center">
//               {["All", "Power BI", "SQL", "Python", "Machine Learning", "Dashboards"].map((filter) => (
//                 <Badge
//                   key={filter}
//                   variant="outline"
//                   className="cursor-pointer hover:bg-yellow-400 hover:text-gray-800"
//                 >
//                   <Filter className="h-3 w-3 mr-1" />
//                   {filter}
//                 </Badge>
//               ))}
//             </div>

//             {/* Projects as Invoice Items */}
//             <div className="space-y-6">
//               {projects.map((project, index) => (
//                 <Card key={index} className="border-2 hover:border-yellow-400 transition-colors">
//                   <CardHeader>
//                     <div className="flex items-start justify-between">
//                       <div className="space-y-2">
//                         <CardTitle className="text-xl">{project.name}</CardTitle>
//                         <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
//                       </div>
//                       <Badge className="bg-green-100 text-green-800">{project.price}</Badge>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="grid md:grid-cols-4 gap-4 mb-4">
//                       <div>
//                         <p className="text-sm text-gray-500">Skills Used (Quantity)</p>
//                         <div className="flex flex-wrap gap-1 mt-1">
//                           {project.skills.map((skill) => (
//                             <Badge key={skill} variant="secondary" className="text-xs">
//                               {skill}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Development Time</p>
//                         <p className="font-medium">{project.effort}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Impact/Results</p>
//                         <p className="font-medium text-green-600">{project.impact}</p>
//                       </div>
//                       <div className="space-y-2">
//                         <Button
//                           size="sm"
//                           className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800"
//                           onClick={() => addToCart(project.name)}
//                         >
//                           <ShoppingCart className="h-4 w-4 mr-2" />
//                           Reorder Project
//                         </Button>
//                         <div className="flex space-x-2">
//                           <Button size="sm" variant="outline" className="flex-1">
//                             <Github className="h-4 w-4 mr-1" />
//                             Code
//                           </Button>
//                           <Button size="sm" variant="outline" className="flex-1">
//                             <ExternalLink className="h-4 w-4 mr-1" />
//                             Demo
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Order Summary */}
//             <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400">
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2">
//                   <Package className="h-6 w-6 text-yellow-600" />
//                   <span>Order Summary</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span>Total Projects:</span>
//                     <span className="font-bold">3 items</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Technologies Used:</span>
//                     <span className="font-bold">8+ skills</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Success Rate:</span>
//                     <span className="font-bold text-green-600">95%+</span>
//                   </div>
//                   <div className="border-t pt-2 mt-4">
//                     <div className="flex justify-between text-lg font-bold">
//                       <span>Total Value:</span>
//                       <span className="text-green-600">Priceless Experience! 💎</span>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}

//         {/* Skills Section - Featured Products */}
//         {activeSection === "skills" && (
//           <div className="space-y-8">
//             <div className="text-center space-y-4">
//               <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Featured Products 🛍️</h2>
//               <p className="text-gray-600 dark:text-gray-300">Premium skills with fastest delivery!</p>
//             </div>

//             {/* Skills Grid */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {skills.map((skill, index) => (
//                 <Card
//                   key={index}
//                   className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-400"
//                 >
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <CardTitle className="text-lg">{skill.name}</CardTitle>
//                       <Badge className="bg-red-100 text-red-800 text-xs">{skill.badge}</Badge>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <div className="flex">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`h-4 w-4 ${i < skill.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-sm text-gray-500">
//                         Rated {skill.rating}⭐ by {skill.projects} Projects
//                       </span>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="space-y-2">
//                       <div className="flex justify-between text-sm">
//                         <span>Proficiency Level</span>
//                         <span className="font-bold">{skill.level}%</span>
//                       </div>
//                       <Progress value={skill.level} className="h-2" />
//                     </div>

//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-gray-500">Used in {skill.projects} projects</span>
//                       <Badge variant="outline" className="text-green-600">
//                         <Truck className="h-3 w-3 mr-1" />
//                         Fast Delivery
//                       </Badge>
//                     </div>

//                     <Button
//                       className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800"
//                       onClick={() => addToCart(skill.name)}
//                     >
//                       <Plus className="h-4 w-4 mr-2" />
//                       Add to Skill Pack
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Combo Packs */}
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Combo Packs 🎁</h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     name: "Data Science Combo",
//                     skills: ["Python", "Pandas", "Machine Learning"],
//                     discount: "20% OFF",
//                     badge: "🔥 Bestseller Combo!",
//                   },
//                   {
//                     name: "Analytics Pro Pack",
//                     skills: ["SQL", "Power BI", "Statistics"],
//                     discount: "25% OFF",
//                     badge: "⚡ Fastest Delivery!",
//                   },
//                 ].map((combo, index) => (
//                   <Card key={index} className="border-2 border-green-400 bg-green-50 dark:bg-green-900/20">
//                     <CardHeader>
//                       <div className="flex items-center justify-between">
//                         <CardTitle>{combo.name}</CardTitle>
//                         <Badge className="bg-red-500 text-white">{combo.discount}</Badge>
//                       </div>
//                       <Badge className="bg-orange-100 text-orange-800 w-fit">{combo.badge}</Badge>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4">
//                         <div className="flex flex-wrap gap-2">
//                           {combo.skills.map((skill) => (
//                             <Badge key={skill} className="bg-white text-gray-800">
//                               {skill}
//                             </Badge>
//                           ))}
//                         </div>
//                         <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
//                           <ShoppingCart className="h-4 w-4 mr-2" />
//                           Order Combo Pack
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Why Blinkit Section */}
//         {activeSection === "why-blinkit" && (
//           <div className="space-y-8">
//             <div className="text-center space-y-4">
//               <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Why Blinkit? 🚀</h2>
//               <p className="text-gray-600 dark:text-gray-300">Delivery Zone Justification</p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "📦 Fast Culture = Fast Data",
//                   description:
//                     "Just like Blinkit delivers groceries in minutes, I deliver data insights with lightning speed. No waiting around for reports!",
//                   icon: Zap,
//                 },
//                 {
//                   title: "⚙️ Engineering-Led = Data-Driven",
//                   description:
//                     "Blinkit's engineering excellence mirrors my approach to data - systematic, scalable, and solution-oriented.",
//                   icon: Code,
//                 },
//                 {
//                   title: "🌍 Impact @ Scale",
//                   description:
//                     "From serving millions of customers to analyzing massive datasets - I thrive in high-impact, scalable environments.",
//                   icon: TrendingUp,
//                 },
//               ].map((reason, index) => (
//                 <Card key={index} className="text-center hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <div className="mx-auto bg-yellow-100 dark:bg-yellow-900 p-4 rounded-full w-16 h-16 flex items-center justify-center">
//                       <reason.icon className="h-8 w-8 text-yellow-600" />
//                     </div>
//                     <CardTitle className="text-lg">{reason.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Delivery Coverage Map */}
//             <Card className="bg-gradient-to-r from-yellow-400 to-orange-400">
//               <CardHeader>
//                 <CardTitle className="text-center text-gray-800">
//                   <MapPinIcon className="h-6 w-6 inline mr-2" />
//                   Current Delivery Zone
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-center space-y-4">
//                 <div className="relative">
//                   <Image
//                     src="/images/blinkit-competition.png"
//                     alt="Delivery Coverage"
//                     width={400}
//                     height={200}
//                     className="mx-auto rounded-lg"
//                   />
//                   <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow">
//                     <p className="text-sm font-bold text-gray-800">📍 Currently delivering from Mumbai</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-800 font-medium">Ready to expand delivery zones for the right opportunity!</p>
//               </CardContent>
//             </Card>

//             {/* CTA */}
//             <div className="text-center space-y-6 bg-gray-800 text-white p-8 rounded-2xl">
//               <h3 className="text-2xl font-bold">Ready to Start My Trial Delivery? 🚀</h3>
//               <p className="text-gray-300">Experience the Blinkit speed in data analytics!</p>
//               <Button
//                 size="lg"
//                 className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3"
//                 onClick={() => setActiveSection("contact")}
//               >
//                 <Rocket className="h-5 w-5 mr-2" />
//                 Start Trial
//               </Button>
//             </div>
//           </div>
//         )}

//         {/* Contact Section - Live Order Support */}
//         {activeSection === "contact" && (
//           <div className="space-y-8">
//             <div className="text-center space-y-4">
//               <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Live Order Support 📞</h2>
//               <p className="text-gray-600 dark:text-gray-300">Hi, I'm your delivery agent. Let's connect!</p>
//             </div>

//             {/* Status Card */}
//             <Card className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400">
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-center space-x-4">
//                   <div className="relative">
//                     <Image
//                       src="/images/madhurima-portfolio.png"
//                       alt="Madhurima"
//                       width={80}
//                       height={80}
//                       className="rounded-full"
//                     />
//                     <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
//                       <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <h3 className="font-bold text-lg">Madhurima Dutta</h3>
//                     <p className="text-green-600 font-medium">🟢 Online - Accepting Interview Slots Now</p>
//                     <Badge className="bg-yellow-400 text-gray-800 mt-2">
//                       <Headphones className="h-4 w-4 mr-1" />
//                       Ready for Delivery
//                     </Badge>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Contact Options */}
//             <div className="grid md:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "Email Delivery",
//                   value: "madhurimadutta2001@gmail.com",
//                   icon: Mail,
//                   action: "mailto:madhurimadutta2001@gmail.com",
//                   badge: "📧 Instant Response",
//                 },
//                 {
//                   title: "Phone Support",
//                   value: "+91-8481016734",
//                   icon: Phone,
//                   action: "tel:+918481016734",
//                   badge: "📱 Quick Call",
//                 },
//                 {
//                   title: "LinkedIn Connect",
//                   value: "madhu-rima-dutta",
//                   icon: Linkedin,
//                   action: "https://linkedin.com/in/madhu-rima-dutta",
//                   badge: "💼 Professional",
//                 },
//               ].map((contact, index) => (
//                 <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
//                   <CardHeader className="text-center">
//                     <div className="mx-auto bg-yellow-100 dark:bg-yellow-900 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
//                       <contact.icon className="h-8 w-8 text-yellow-600" />
//                     </div>
//                     <Badge className="bg-blue-100 text-blue-800 text-xs">{contact.badge}</Badge>
//                   </CardHeader>
//                   <CardContent className="text-center space-y-2">
//                     <h4 className="font-bold">{contact.title}</h4>
//                     <p className="text-sm text-gray-600 dark:text-gray-300">{contact.value}</p>
//                     <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800">
//                       <MessageCircle className="h-4 w-4 mr-2" />
//                       Connect Now
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Live Resume Tracker */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2">
//                   <Package className="h-6 w-6 text-blue-600" />
//                   <span>Live Resume Tracker</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {[
//                     { status: "Resume Received", completed: true, icon: CheckCircle },
//                     { status: "Analyzing with ATS", completed: true, icon: Brain },
//                     { status: "Delivered to Hiring Manager", completed: false, icon: Truck },
//                     { status: "Interview Scheduled", completed: false, icon: Calendar },
//                   ].map((step, index) => (
//                     <div key={index} className="flex items-center space-x-4">
//                       <div
//                         className={`p-2 rounded-full ${step.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
//                       >
//                         <step.icon className="h-5 w-5" />
//                       </div>
//                       <div className="flex-1">
//                         <p className={`font-medium ${step.completed ? "text-green-600" : "text-gray-500"}`}>
//                           {step.status} {step.completed ? "✅" : "⏳"}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* CTA */}
//             <div className="text-center space-y-6 bg-gradient-to-r from-yellow-400 to-orange-400 p-8 rounded-2xl">
//               <h3 className="text-2xl font-bold text-gray-800">Want Data Delivered To You? 📊</h3>
//               <p className="text-gray-700">Let's discuss how I can add value to your team!</p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white">
//                   <Download className="h-5 w-5 mr-2" />
//                   Download Resume
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
//                 >
//                   <Calendar className="h-5 w-5 mr-2" />
//                   Schedule Interview
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>

//       {/* Cart Notification */}
//       {cartItems.length > 0 && (
//         <div className="fixed bottom-4 right-4 bg-yellow-400 text-gray-800 p-4 rounded-lg shadow-lg">
//           <div className="flex items-center space-x-2">
//             <ShoppingCart className="h-5 w-5" />
//             <span className="font-medium">{cartItems.length} items in cart</span>
//             <Button size="sm" variant="outline" onClick={() => setCartItems([])}>
//               Clear
//             </Button>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8 mt-16">
//         <div className="container mx-auto px-4 text-center space-y-4">
//           <div className="flex justify-center space-x-6">
//             <a href="https://github.com/madhurima-dutta" className="hover:text-yellow-400 transition-colors">
//               <Github className="h-6 w-6" />
//             </a>
//             <a href="https://linkedin.com/in/madhu-rima-dutta" className="hover:text-yellow-400 transition-colors">
//               <Linkedin className="h-6 w-6" />
//             </a>
//             <a href="mailto:madhurimadutta2001@gmail.com" className="hover:text-yellow-400 transition-colors">
//               <Mail className="h-6 w-6" />
//             </a>
//           </div>
//           <p className="text-gray-400">© 2025 Madhurima Dutta - Delivering Data Excellence with Blinkit Speed! 🚀</p>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default BlinkitPortfolio
