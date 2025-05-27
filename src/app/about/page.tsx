import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Award, GraduationCap, Briefcase } from "lucide-react";

export const metadata = {
  title: "About Me | John Doe Portfolio",
  description: "Learn more about John Doe, skills, education, and work experience",
};

const AboutPage = () => {
  // Skill categories with ratings (out of 100)
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Bootstrap", level: 90 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Django", level: 85 },
        { name: "Flask", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "SQLite", level: 95 },
        { name: "Microsoft SQL Server", level: 90 },
      ],
    },
    {
      category: "Other",
      items: [
        { name: "Git", level: 90 },
        { name: "UI/UX Design", level: 80 },
        { name: "Testing", level: 75 },
        { name: "Docker", level: 50 },
        { name: "Trello", level: 90 },  
      ],
    },
  ];

  const timelineItems = [
    {
      type: "education",
      title: "「C++におけるオブジェクト指向プログラミング」修了証",
      organization: "CodeLearn",
      period: "2022 - 2023",
      description: "中級レベルのC++オブジェクト指向プログラミングコースを修了。",
    },
    {
      type: "education",
      title: "「データ構造とアルゴリズム」修了証",
      organization: "CodeLearn",
      period: "2022 - 2023",
      description: "中級レベルのアルゴリズムとデータ構造のコースを修了。",
    },
    {
      type: "education",
      title: "「Python基礎」修了証",
      organization: "CodeLearn",
      period: "2022- 2024",
      description: "Pythonの基本的な構文と概念を学ぶ入門コースを修了。",
    },
    {
      type: "education",
      title: "「Djangoライブラリ」修了証",
      organization: "FreeCodeCamp",
      period: "2022 - 2024",
      description: "Djangoフレームワークの中級コースを修了。",
    },
  ];
  

  return (
    <div className="container space-y-16 py-12 md:py-16 lg:py-24">
      {/* About Me Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
          <p className="text-muted-foreground">My journey, skills, and experiences</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                こんにちは！トアン・レーと申します。私はダナン工科大学で学んでいる、情熱を持ったWebデザイナー兼開発者です。毎日、モダンなWebアプリケーションの開発に取り組んでおり、美しいデザインとクリーンで効率的なコードを組み合わせて、優れたデジタル体験を生み出すことが好きです。
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                私のWeb開発へのアプローチは総合的であり、見た目の美しさだけでなく、高いパフォーマンスと快適なユーザー体験を重視しています。技術は日々進化しているため、常に最新の技術やトレンドを学び続けています。
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                コードを書いていないときは、ハイキングをしたり、SF小説を読んだり、写真を撮ったりするのが好きです。新しいチャンスやコラボレーションには、いつでも前向きに取り組む準備ができています。ご協力いただき、心より感謝申し上げます。
              </p>
            </CardContent>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <BrainCircuit className="h-12 w-12 text-primary" />
                <h3 className="mt-3 text-xl font-bold">問題ソルバー</h3>
                <p className="text-sm text-muted-foreground">
                  私は複雑な問題に取り組み、エレガントなソリューションを見つけることを楽しんでいます。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="mt-3 text-xl font-bold">継続的な学習者</h3>
                <p className="text-sm text-muted-foreground">
                  常に私の知識を拡大し、新しいテクノロジーをマスターします。
                </p>
              </CardContent>
            </Card>
            <Card className="sm:col-span-2">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex flex-wrap justify-center gap-2">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Python", "Django", "Flask", "Flutter", "Firebase", "PostgreSQL", "SQLite", "Bootstrap", "Tailwind CSS", "Git", "Microsoft SQL Server"].map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">My Skills</h2>
          <p className="text-muted-foreground">Technologies and tools I work with</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category}>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">{skillCategory.category}</h3>
                <div className="space-y-4">
                  {skillCategory.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Education & Experience</h2>
          <p className="text-muted-foreground">My academic and professional journey</p>
        </div>
        <div className="relative border-l border-border pl-6">
          {timelineItems.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-background ring-8 ring-background">
                {item.type === "education" ? (
                  <GraduationCap className="h-3 w-3 text-primary" />
                ) : (
                  <Briefcase className="h-3 w-3 text-primary" />
                )}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="flex items-center text-lg font-semibold">
                  {item.title}
                  <span className="ml-3 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {item.period}
                  </span>
                </h3>
                <p className="text-muted-foreground">{item.organization}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 