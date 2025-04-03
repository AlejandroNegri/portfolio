"use client"

import { Button } from "@/components/ui/button"
import { Code, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { experience } from "./data/experience"
import { socialLinks } from "./data/social"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 flex h-14 items-center justify-between">
          <div className="font-bold text-xl">AN</div>
          <nav className="hidden md:flex gap-6">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 space-y-16 py-10">
        {/* Hero Section */}
        <section className="pt-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <div className="md:mr-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-xl" />
              <Image
                src="/image.jpeg"
                alt="Alejandro Negri"
                width={200}
                height={200}
                className="rounded-full relative z-10 border-4 border-background shadow-lg"
                priority
              />
            </div>
            <div className="space-y-4 md:max-w-[60%]">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Alejandro Negri</h1>
              <h2 className="text-xl font-medium text-primary">Senior Full Stack Developer</h2>
              <p className="text-muted-foreground">Building robust and scalable web applications with modern technologies.</p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="pt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">About Me</h2>
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="text-muted-foreground max-w-3xl">
              I&apos;m a product-oriented Frontend Developer with over 10 years of experience crafting user-centric, performant web applications. My background includes working across industries, leading teams, and collaborating closely with design and product to deliver meaningful user experiences.

              I specialize in building interfaces with React and Next.js, and I&apos;m always focused on shipping products that not only work — but feel great to use.

              As the tech landscape shifts, I&apos;m embracing tools like generative AI to enhance my workflow, speed up prototyping, and explore new ways to build smarter, more adaptive frontends.
            </p>
            <br />
            <p className="text-muted-foreground max-w-3xl font-medium">
              What I bring to the table:
            </p>
            <ul className="list-none pl-6 space-y-2 mt-4 text-muted-foreground max-w-3xl">
              {[
                "Strong UX instincts and product thinking",
                "Clean, maintainable code with performance in mind",
                "Leadership experience in cross-functional teams",
                "Curiosity and adaptability to keep up with change",
                "Looking to join a team where quality, ownership, and real-world impact matter"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-8 bg-muted/30 rounded-lg pt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Redux",
              "Angular",
              "React Native",
              "Node.js",
              "Git",
              "PostgreSQL",
              ".NET"
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-md border hover:border-primary/50 transition-colors group">
                <Code className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Work Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors">
                <div className="sm:w-1/4">
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <p className="text-sm text-primary">{job.company}</p>
                  <p className="text-xs text-muted-foreground">{job.period}</p>
                </div>
                <p className="sm:w-3/4 text-sm text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "E-commerce Platform",
                description: "Built a full-stack e-commerce solution with React, Next.js, and TypeScript. Implemented real-time inventory management, payment processing with Stripe, and a responsive design system.",
                image: "/placeholder.svg?height=200&width=300",
                tags: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
                demo: "https://demo.example.com",
                github: "https://github.com/example/ecommerce"
              },
              {
                title: "Task Management App",
                description: "Developed a collaborative task management application with real-time updates using WebSocket. Features include drag-and-drop task organization, team collaboration, and progress tracking.",
                image: "/placeholder.svg?height=200&width=300",
                tags: ["React", "Node.js", "WebSocket", "MongoDB", "Express"],
                demo: "https://demo.example.com",
                github: "https://github.com/example/taskmanager"
              },
              {
                title: "Portfolio Website",
                description: "Created a modern, responsive portfolio website using Next.js and Tailwind CSS. Implemented dark mode, smooth animations, and optimized performance with image optimization.",
                image: "/placeholder.svg?height=200&width=300",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                demo: "https://demo.example.com",
                github: "https://github.com/example/portfolio"
              },
            ].map((project, index) => (
              <div key={index} className="group border rounded-lg overflow-hidden bg-background hover:border-primary/50 transition-colors">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-cover w-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <Link href={project.demo} className="flex items-center text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="mr-1 h-3 w-3" /> Demo
                    </Link>
                    <Link href={project.github} className="flex items-center text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                      <Github className="mr-1 h-3 w-3" /> Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="text-muted-foreground mb-6">
              Have a project in mind? I&apos;m always open to new ideas and collaborations.
            </p>
            <div className="space-y-2">
              {socialLinks.map((social, i) => (
                <div key={i} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <social.icon className="h-4 w-4 text-primary" />
                  <a href={social.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {social.href}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Alejandro Negri. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="text-muted-foreground hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

