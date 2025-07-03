"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  User,
  Code,
  Briefcase,
  BookOpen,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

export default function DeveloperBlog() {
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "hero", label: "홈", icon: User },
    { id: "about", label: "소개", icon: User },
    { id: "skills", label: "기술", icon: Code },
    { id: "projects", label: "프로젝트", icon: Briefcase },
    { id: "blog", label: "블로그", icon: BookOpen },
    { id: "contact", label: "연락처", icon: MessageCircle },
  ]

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description: "React와 Node.js로 구축한 풀스택 이커머스 플랫폼",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "팀 협업을 위한 실시간 태스크 관리 애플리케이션",
      tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "실시간 날씨 정보와 예보를 제공하는 대시보드",
      tech: ["Vue.js", "Express", "Weather API", "Chart.js"],
      link: "#",
    },
  ]

  const blogPosts = [
    {
      title: "React 18의 새로운 기능들",
      excerpt: "React 18에서 도입된 Concurrent Features와 Suspense의 활용법에 대해 알아봅시다.",
      date: "2024-01-15",
      readTime: "5분",
    },
    {
      title: "Next.js App Router 완전 정복",
      excerpt: "Next.js 13의 App Router를 활용한 현대적인 웹 애플리케이션 개발 가이드",
      date: "2024-01-10",
      readTime: "8분",
    },
    {
      title: "TypeScript 고급 타입 활용하기",
      excerpt: "TypeScript의 고급 타입 시스템을 활용하여 더 안전한 코드 작성하기",
      date: "2024-01-05",
      readTime: "6분",
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-brown-200 dark:border-brown-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-brown-800 dark:text-brown-200">DevBlog</div>
              <div className="hidden md:flex space-x-6">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === item.id
                          ? "text-brown-800 dark:text-brown-200 bg-brown-100 dark:bg-brown-800"
                          : "text-brown-600 dark:text-brown-400 hover:text-brown-800 dark:hover:text-brown-200"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-brown-600 dark:text-brown-400"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-brown-50 to-brown-100 dark:from-brown-950 dark:to-brown-900"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-brown-200 dark:bg-brown-800 flex items-center justify-center">
              <User className="w-16 h-16 text-brown-600 dark:text-brown-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-brown-900 dark:text-brown-100 mb-4">
              안녕하세요, 개발자 김개발입니다
            </h1>
            <p className="text-xl md:text-2xl text-brown-700 dark:text-brown-300 mb-8">
              풀스택 개발자로서 사용자 경험을 중시하는 웹 애플리케이션을 만듭니다
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-brown-600 hover:bg-brown-700 text-white"
              >
                프로젝트 보기
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-brown-600 text-brown-600 hover:bg-brown-600 hover:text-white"
              >
                연락하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-900 dark:text-brown-100 mb-12">소개</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-brown-800 dark:text-brown-200 mb-4">개발자로서의 여정</h3>
              <p className="text-brown-700 dark:text-brown-300 mb-4">
                5년간의 웹 개발 경험을 바탕으로 사용자 중심의 애플리케이션을 개발하고 있습니다. 프론트엔드부터
                백엔드까지 전체 스택을 다루며, 특히 React와 Node.js 생태계에 깊은 관심을 가지고 있습니다.
              </p>
              <p className="text-brown-700 dark:text-brown-300">
                새로운 기술을 배우는 것을 좋아하며, 복잡한 문제를 단순하고 효율적인 솔루션으로 해결하는 것에 보람을
                느낍니다. 팀워크를 중시하며, 코드 리뷰와 지식 공유를 통해 함께 성장하는 것을 추구합니다.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-brown-50 dark:bg-brown-900 p-6 rounded-lg">
                <h4 className="font-semibold text-brown-800 dark:text-brown-200 mb-2">경력</h4>
                <p className="text-brown-600 dark:text-brown-400">5년+ 웹 개발</p>
              </div>
              <div className="bg-brown-50 dark:bg-brown-900 p-6 rounded-lg">
                <h4 className="font-semibold text-brown-800 dark:text-brown-200 mb-2">전문 분야</h4>
                <p className="text-brown-600 dark:text-brown-400">풀스택 웹 개발</p>
              </div>
              <div className="bg-brown-50 dark:bg-brown-900 p-6 rounded-lg">
                <h4 className="font-semibold text-brown-800 dark:text-brown-200 mb-2">관심사</h4>
                <p className="text-brown-600 dark:text-brown-400">UX/UI, 성능 최적화</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-brown-50 dark:bg-brown-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-900 dark:text-brown-100 mb-12">
            기술 스택
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-brown-800 dark:text-brown-200 mb-4">Frontend</h3>
              <div className="space-y-2">
                {["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-brown-200 dark:bg-brown-800 text-brown-800 dark:text-brown-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brown-800 dark:text-brown-200 mb-4">Backend</h3>
              <div className="space-y-2">
                {["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-brown-200 dark:bg-brown-800 text-brown-800 dark:text-brown-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brown-800 dark:text-brown-200 mb-4">Tools</h3>
              <div className="space-y-2">
                {["Git", "Docker", "Figma", "VS Code"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-brown-200 dark:bg-brown-800 text-brown-800 dark:text-brown-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-900 dark:text-brown-100 mb-12">
            프로젝트
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-brown-200 dark:border-brown-800 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brown-800 dark:text-brown-200">{project.title}</CardTitle>
                  <CardDescription className="text-brown-600 dark:text-brown-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-brown-300 dark:border-brown-700 text-brown-700 dark:text-brown-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brown-600 text-brown-600 hover:bg-brown-600 hover:text-white bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    프로젝트 보기
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-brown-50 dark:bg-brown-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-900 dark:text-brown-100 mb-12">
            최근 블로그 포스트
          </h2>
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-brown-200 dark:border-brown-800 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-brown-800 dark:text-brown-200">{post.title}</CardTitle>
                    <div className="flex items-center text-sm text-brown-600 dark:text-brown-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardDescription className="text-brown-600 dark:text-brown-400">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brown-600 dark:text-brown-400">읽는 시간: {post.readTime}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brown-600 text-brown-600 hover:bg-brown-600 hover:text-white bg-transparent"
                    >
                      읽어보기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 dark:text-brown-100 mb-8">연락하기</h2>
          <p className="text-xl text-brown-700 dark:text-brown-300 mb-12">
            새로운 프로젝트나 협업 기회에 대해 이야기해보세요!
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="lg"
              className="border-brown-600 text-brown-600 hover:bg-brown-600 hover:text-white bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              이메일
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-brown-600 text-brown-600 hover:bg-brown-600 hover:text-white bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-brown-600 text-brown-600 hover:bg-brown-600 hover:text-white bg-transparent"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-brown-100 dark:bg-brown-900 border-t border-brown-200 dark:border-brown-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brown-600 dark:text-brown-400">© 2024 김개발. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
