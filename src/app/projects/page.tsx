import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Layout, Hexagon } from "lucide-react";

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
  },
  // Additional projects to show full catalog
  {
    id: 4,
    title: "Plant Medical",
    description: "現在、天然由来の薬用ハーブを使用する傾向が高まっており、ハーブ製品の生産、収穫、加工、消費に大きな影響を与えています。しかし、薬用植物に関する文書は主に書籍や辞書の形で存在しており、専門家以外の人にとってはアクセスが難しく不便です。形態学的および解剖学的特徴の詳細な説明が不足している場合、一般的な名前や外観に基づいて薬用植物の種を特定することは、容易に混乱を招く可能性があります",
    tags: ["Flutter", "Python", "Flask", "SQLite", "ViT-16", "JavaScript", "Boostrap"],
    icon: <Layout className="h-6 w-6" />,
    bgColor: "from-cyan-500/20 to-blue-500/20",
    link: "/projects/plantmedical"
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "Recipe search platform with filtering by dietary restrictions, ingredients, and cooking time.",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    icon: <Code className="h-6 w-6" />,
    bgColor: "from-amber-500/20 to-yellow-500/20",
    link: "/projects/recipe"
  },
  {
    id: 6,
    title: "Music Streaming Service",
    description: "Audio streaming platform with playlist creation, recommendations, and artist profiles.",
    tags: ["React", "Express", "PostgreSQL"],
    icon: <Hexagon className="h-6 w-6" />,
    bgColor: "from-purple-500/20 to-pink-500/20",
    link: "/projects/music"
  }
];

export default function Projects() {
  return (
    <div className="container py-12 md:py-16 max-w-7xl px-4 md:px-8">
      {/* Header */}
      <div className="mb-12 md:mb-16 max-w-[800px]">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground">
          Explore my portfolio of projects showcasing my skills and experience in web and mobile development.
        </p>
      </div>

      {/* Project Filter (can be expanded with actual filtering in the future) */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">
          All Projects
        </Button>
        <Button variant="outline" className="hover:bg-primary/10 hover:text-primary">
          Web Apps
        </Button>
        <Button variant="outline" className="hover:bg-primary/10 hover:text-primary">
          Mobile
        </Button>
        <Button variant="outline" className="hover:bg-primary/10 hover:text-primary">
          UI/UX
        </Button>
        <Button variant="outline" className="hover:bg-primary/10 hover:text-primary">
          Backend
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Call to Action */}
      <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium mb-2">Want to work together?</h3>
          <p className="text-muted-foreground">I'm always open to discussing new projects and opportunities.</p>
        </div>
        <Button asChild className="px-6">
          <Link href="/contact">
            Get in Touch
          </Link>
        </Button>
      </div>
    </div>
  );
} 