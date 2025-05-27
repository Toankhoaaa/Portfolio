import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, Code, Layout, Hexagon, Calendar, User, Tag } from "lucide-react";

// Project data for demo purposes
const projectsData = {
  "hotelwebsite": {
    title: "T|.|N|.|T website",
    description: "このプロジェクトでは、ホストが自分のホテルを投稿して管理できるほか、ユーザーは部屋をレンタル (予約、キャンセルなど) したり、その他多くの機能を利用したりできます。",
    fullDescription: "旅行需要がますます高まる中で、宿泊施設は快適で意味のある旅行において重要な役割を果たしています。そのため、私たちは利用者がホテルを簡単に予約できるウェブサイトを構築しました。旅行や出張の際に、快適な滞在先を確保するためのニーズに応えるためです。お客様が最適な選択をすることで、旅行の快適さを一層高めることができます。",
    tags: ["JavaScript", "HTML5 & CSS3", "ASP.NET MVC", "Microsoft SQL Server"],
    icon: <Layout className="h-6 w-6" />,
    bgColor: "from-blue-500/20 to-purple-500/20",
    demoUrl: "http://cuthao-001-site1.ltempurl.com/",
    repoUrl: "https://github.com/solokill756/PPL3",
    date: "May 2023",
    client: "学内プロジェクト（個人開発）",
    features: [
      "ホテルおよび部屋の登録・管理機能（ホスト向け）",
      "部屋の予約・キャンセル機能（ユーザー向け）",
      "利用者とホストのアカウント登録・ログイン・認証機能",
      "予約履歴・ステータス確認機能",
      "ホテル情報の検索・絞り込み機能",
      "管理者によるシステム全体の監視・管理機能"
    ]
  },  
  "socialbook": {
    title: "Social Book",
    description: "SocialBookは、ユーザー同士が知識や経験を共有し、交流するためのグローバルなソーシャルネットワークプラットフォームです。投稿、コメント、プロフィール編集、ログイン、新規登録などの便利で安全な機能を備えています。",
    fullDescription: "SocialBookは、ユーザー同士が知識や経験を共有し、自由に交流できる場を提供することを目的に開発されたソーシャルネットワークプラットフォームです。このプロジェクトは、親しみやすく使いやすいコミュニティの構築に力を入れており、さまざまな機能を備えています。ユーザーは、記事や画像、興味のある内容を個人ページやグループに投稿でき、投稿はトピックごとに分類されて検索も簡単です。コメント機能を通じて他のユーザーと意見交換ができ、活発なコミュニケーションを促進します。また、プロフィール編集機能では、名前やプロフィール写真、自己紹介を自由に設定でき、自分らしさを表現できます。ログイン機能により、安全かつ迅速にアカウントへアクセスでき、新規登録もシンプルかつセキュアな手順で行えます。**SocialBook**は、こうした機能を通じて世界中の人々をつなぎ、情報共有と対話を促す価値あるオンラインコミュニティの創出を目指しています。",
    tags: ["Python", "JavaScript", "HTML5 & CSS3", "Flask", "SQLite", "Flutter"],
    icon: <Code className="h-6 w-6" />,
    bgColor: "from-green-500/20 to-teal-500/20",
    demoUrl: "https://task-app-demo.example.com",
    repoUrl: "https://github.com/Toankhoaaa/SocialBook.git",
    date: "March 2023",
    client: "個人プロジェクト（ポートフォリオ用）",
    features: [
      "投稿機能（テキスト・画像・リンク対応）",
      "コメントと返信によるスレッド形式の交流",
      "プロフィール編集（名前、写真、自己紹介）",
      "安全なログイン・新規登録フロー",
      "モバイルフレンドリーなUI（Flutterによる一部対応）",
      "トピックごとの投稿分類と検索機能"
    ]
  },
  "portfolio": {
    title: "Portfolio",
    description: "このポートフォリオサイトは、私のスキル、プロジェクト、経験を紹介するために構築されました。シンプルでモダンなデザインと、レスポンシブなUIで構成されています。",
    fullDescription: "このポートフォリオは、自分のWeb開発スキルや取り組んだプロジェクトを他者に分かりやすく伝えるために設計・開発されました。使用した技術や過去の作品を整理して紹介できるように、見やすくナビゲーションしやすいレイアウトにこだわっています。また、モバイル対応のレスポンシブデザインにより、どのデバイスでも快適に閲覧できます。GitHubやSNSとのリンク、問い合わせフォームも備えており、仕事の依頼やコラボレーションの連絡にも活用できます。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "FireBase"],
    icon: <Hexagon className="h-6 w-6" />,
    bgColor: "from-indigo-500/20 to-pink-500/20",
    demoUrl: "https://your-portfolio.example.com",
    repoUrl: "https://github.com/Toankhoaaa/portfolio",
    date: "June 2024",
    client: "個人プロジェクト（自己紹介用Webサイト）",
    features: [
      "シンプルかつ現代的なレスポンシブUIデザイン",
      "プロジェクト一覧と詳細の紹介セクション",
      "スキルタグや技術スタックのビジュアル表示",
      "自己紹介ページと写真付きプロフィール",
      "EmailJSによるお問い合わせフォーム連携",
      "Framer MotionによるアニメーションとスムーズなUX"
    ]
  },
  "plantmedical": {
    title: "Plant Medical",
    description: "現在、天然由来の薬用ハーブを使用する傾向が高まっており、ハーブ製品の生産、収穫、加工、消費に大きな影響を与えています。しかし、薬用植物に関する文書は主に書籍や辞書の形で存在しており、専門家以外の人にとってはアクセスが難しく不便です。形態学的および解剖学的特徴の詳細な説明が不足している場合、一般的な名前や外観に基づいて薬用植物の種を特定することは、容易に混乱を招く可能性があります。",
    fullDescription: "AIを活用した薬草認識アプリは、ユーザーがカメラを使用して薬草の画像を撮影し、その画像をリアルタイムで解析して植物の種類を特定するスマートなツールです。このアプリは、撮影した画像をRaspberry Piに送信し、Vision Transformer（ViT-16）モデルを用いたAIによる高精度な認識プロセスを行います。認識された植物名はアプリに返送され、ユーザーはその場で結果を確認できます。また、認識された植物名をサーバーに送信し、薬草に関する詳細な情報を取得することも可能です。このアプリは、薬草の研究や健康管理を支援するための便利で革新的なソリューションです。",
    tags: ["Flutter", "Python", "Flask", "SQLite", "ViT-16", "JavaScript", "Bootstrap"],
    icon: <Hexagon className="h-6 w-6" />,
    bgColor: "from-indigo-500/20 to-pink-500/20",
    demoUrl: "https://your-plant-app.example.com",
    repoUrl: "https://github.com/Toankhoaaa/PlantMedical",
    date: "June 2024",
    client: "個人プロジェクト（AI × 健康 × 植物認識）",
    features: [
      "カメラで撮影した薬草画像をリアルタイムでAIが分析・分類",
      "Vision Transformer（ViT-16）モデルによる高精度認識",
      "Raspberry Piと連携し、軽量でコスト効率の高い実装",
      "認識された植物名に基づき、薬草の詳細情報をサーバーから取得",
      "Flutterによるクロスプラットフォームなモバイルアプリ設計",
      "ユーザーにやさしいインターフェースと直感的な操作性"
    ]
  }
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="container px-4 py-12 md:py-16 max-w-7xl">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="outline" size="sm">
          <Link href="/projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string, index: number) => (
            <span 
              key={index} 
              className="inline-flex text-sm font-medium px-3 py-1 rounded-md bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project Video */}
      <div className="mb-6 rounded-xl overflow-hidden shadow-md">
        <div className={`relative w-full aspect-[21/9] bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm text-primary">
            {project.icon}
          </div>
        </div>
      </div>


      <div className="grid gap-8 md:grid-cols-3">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-full">
              <p className="text-foreground/80 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex justify-between gap-4">
                <Button asChild variant="outline" className="flex-1">
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Github className="h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <span className="text-sm text-muted-foreground">Completion Date</span>
                      <p className="text-sm font-medium">{project.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <span className="text-sm text-muted-foreground">Client</span>
                      <p className="text-sm font-medium">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Tag className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="text-sm text-muted-foreground">Technologies</span>
                      <p className="text-sm font-medium">{project.tags.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all projects
export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}