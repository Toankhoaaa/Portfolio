import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, ExternalLink, Code, Layout, Hexagon } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "T|.|N|.|T website",
    description: "このプロジェクトでは、ホストが自分のホテルを投稿して管理できるほか、ユーザーは部屋をレンタル (予約、キャンセルなど) したり、その他多くの機能を利用したりできます。",
    tags: ["JavaScript", "HTML5 & CSS3", "ASP.NET MVC", "Microsoft SQL Server"],
    icon: <Layout className="h-6 w-6" />,
    bgColor: "from-blue-500/20 to-purple-500/20",
    link: "/projects/hotelwebsite"
  },
  {
    id: 2,
    title: "Social Book",
    description: "SocialBookは、ユーザー同士が知識や経験を共有し、交流するためのグローバルなソーシャルネットワークプラットフォームです。投稿、コメント、プロフィール編集、ログイン、新規登録などの便利で安全な機能を備えています。",
    tags: ["Python", "JavaScript", "HTML5 & CSS3", "Django", "SQLite", "Boostrap"],
    icon: <Code className="h-6 w-6" />,
    bgColor: "from-green-500/20 to-teal-500/20",
    link: "/projects/socialbook"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "このポートフォリオサイトは、私のスキル、プロジェクト、経験を紹介するために構築されました。シンプルでモダンなデザインと、レスポンシブなUIで構成されています。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "FireBase"],
    icon: <Hexagon className="h-6 w-6" />,
    bgColor: "from-red-500/20 to-orange-500/20",
    link: "/projects/portfolio"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="px-4 sm:px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hello, I'm <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Le Toan</span>
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl">
                  Full-Stack Developer
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I create elegant, responsive, and user-friendly web applications that solve real-world problems.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Button asChild className="flex items-center gap-2" size="lg">
                  <Link href="/contact">
                    Contact Me <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex items-center gap-2" size="lg">
                  <Link href="/resume.pdf" target="_blank">
                    <Download className="h-4 w-4 mr-1" /> Download Resume
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <Link 
                  href="https://github.com/Toankhoaaa"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <div className="flex items-center">
                  <div className="h-6 border-l border-border"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Live in Da Nang, Viet Nam
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-border bg-muted md:h-80 md:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/images/avatar.jpg"
                  alt="ToanLe"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-3 max-w-[800px] mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Check out some of my recent work
              </p>
            </div>
            <div className="w-full space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {projects.map((project) => (
                  <Link 
                    href={project.link} 
                    key={project.id} 
                    className="group h-full"
                  >
                    <div className="h-full rounded-lg bg-background shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                      <div className="relative h-48 w-full overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}>
                          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm text-primary">
                            {project.icon}
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="inline-flex text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex justify-center pt-4">
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">
                    View All Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
