import { Dna, Github, Mail, Twitter } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResearchWordCloud from '@/components/ResearchWordCloud';

const Index = () => {
  const personalInfo = {
    name: "Anand Mayakonda",
    subtitle: "Cancer genomics and bioinformatics",
    position: {
      title: "Bioinformatics group leader at DKFZ/KiTZ",
      department: "Functional and structural genomics",
      unit: {
        name: "Neuroblastoma genomics",
        link: "https://www.dkfz.de/en/neuroblastoma-genomics"
      }
    },
    email: "anandmt3@gmail.com",
    github: "https://github.com/PoisonAlien",
    twitter: "https://twitter.com/anand_mt",
    research: {
      coreDomains: [
        "Neuroblastoma genomics and epigenomics",
        "Bioinformatics method development"
      ],
      ongoingProjects: [
        {
          text: "Data visualization platform for the ",
          link: "https://www.pedcanportal.eu",
          linkText: "ITCC",
          endText: " pediatric cancer data portal"
        },
        {
          text: "Characterizing relapse landscape in neuroblastoma (",
          link: "https://www.kitz-heidelberg.de/en/clinical-studies/inform",
          linkText: "INFORM",
          endText: " transnational genome sequencing program)"
        },
        "Utilizing long-read sequencing (ONT and PacBio HiFi) in neuroblastoma research",
        "Investigating the impact of neuroblastoma developmental stages on clinical outcomes"
      ]
    },
    projects: [
      {
        name: "maftools",
        description: "An R package to summarize, analyze and visualize MAF files",
        link: "https://github.com/PoisonAlien/maftools",
        stars: 458,
        language: "R"
      },
      {
        name: "trackplot",
        description: "R package for creating publication quality genomic visualizations",
        link: "https://github.com/PoisonAlien/trackplot",
        stars: 154,
        language: "R"
      },
      {
        name: "TCGAmutations",
        description: "Curated mutation data from TCGA projects",
        link: "https://github.com/PoisonAlien/TCGAmutations",
        stars: 91,
        language: "R"
      },
      {
        name: "basegraphics",
        description: "Base graphics for genomic visualizations",
        link: "https://github.com/PoisonAlien/basegraphics",
        stars: 82,
        language: "R"
      },
      {
        name: "methrix",
        description: "R package for DNA methylation data analysis",
        link: "https://github.com/CompEpigen/methrix",
        stars: 31,
        language: "R"
      },
      {
        name: "somaticfreq",
        description: "Fast somatic variant frequency counter",
        link: "https://github.com/PoisonAlien/somaticfreq",
        stars: 20,
        language: "C"
      }
    ]
  };

  // Calculate percentage based on max stars
  const maxStars = Math.max(...personalInfo.projects.map(p => p.stars));
  const getStarPercentage = (stars: number) => (stars / maxStars) * 100;

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-4xl mx-auto font-mono">
      <header className="mb-16 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          <span className="text-primary">~</span> {personalInfo.name}
        </h1>
        <div className="flex items-center gap-2 text-[#E5DEFF]">
          <span className="text-primary">$</span> {personalInfo.subtitle}
          <Dna className="w-5 h-5 text-primary animate-pulse" />
        </div>
        <div className="flex gap-4 mt-4">
          <a href={`mailto:${personalInfo.email}`} 
             className="glass-card p-3 hover:bg-white/10 transition-colors"
             title="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a href={personalInfo.twitter} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="glass-card p-3 hover:bg-white/10 transition-colors"
             title="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href={personalInfo.github} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="glass-card p-3 hover:bg-white/10 transition-colors"
             title="GitHub">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </header>

      <main className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-circle bg-red-500"></div>
          <div className="terminal-circle bg-yellow-500"></div>
          <div className="terminal-circle bg-green-500"></div>
          <span className="text-sm text-[#D6BCFA] opacity-75">guest@portfolio: ~</span>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <div className="border-b border-white/10">
            <TabsList className="h-10 w-full justify-start bg-transparent p-0">
              <TabsTrigger 
                value="main" 
                className="rounded-none rounded-t-lg border-r border-white/10 px-6 text-[#D6BCFA] data-[state=active]:bg-[#2A2A2A] data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                main.sh
              </TabsTrigger>
              <TabsTrigger 
                value="software" 
                className="rounded-none rounded-t-lg border-r border-white/10 px-6 text-[#D6BCFA] data-[state=active]:bg-[#2A2A2A] data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                software.sh
              </TabsTrigger>
              <TabsTrigger 
                value="publications" 
                className="rounded-none rounded-t-lg border-r border-white/10 px-6 text-[#D6BCFA] data-[state=active]:bg-[#2A2A2A] data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                publications.sh
              </TabsTrigger>
              <TabsTrigger 
                value="history" 
                className="rounded-none rounded-t-lg border-r border-white/10 px-6 text-[#D6BCFA] data-[state=active]:bg-[#2A2A2A] data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                history.sh
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="main" className="terminal-content mt-0">
            <div className="space-y-2">
              <div className="command-line">
                <span className="text-green-400">$</span> cat about.txt
              </div>
              <div className="command-output space-y-2">
                <div className="text-[#E5DEFF]">{personalInfo.position.title}</div>
                <div className="text-sm text-[#D6BCFA]/80">
                  DKFZ/KiTZ {'>'} {personalInfo.position.department} {'>'} {' '}
                  <a 
                    href={personalInfo.position.unit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {personalInfo.position.unit.name}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="command-line">
                <span className="text-green-400">$</span> cd ~/research/ && tree
              </div>
              <div className="command-output space-y-3">
                <div className="pl-4 text-[#E5DEFF] text-[0.825rem]">
                  <span className="text-blue-400">.</span>
                  <div className="space-y-1">
                    <span className="text-blue-400">├── core-domains/</span>
                    {personalInfo.research.coreDomains.map((domain, index) => (
                      <div key={index} className="pl-4">
                        <span className="text-blue-400">
                          {index === personalInfo.research.coreDomains.length - 1 ? '└──' : '├──'} {domain}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-1 mt-2">
                    <span className="text-blue-400">└── ongoing-projects/</span>
                    {personalInfo.research.ongoingProjects.map((project, index) => (
                      <div key={index} className="pl-4">
                        <span className="text-purple-400">
                          {index === personalInfo.research.ongoingProjects.length - 1 ? '└──' : '├──'}{' '}
                          {typeof project === 'string' ? (
                            project
                          ) : (
                            <>
                              {project.text}
                              <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {project.linkText}
                              </a>
                              {project.endText}
                            </>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="software" className="terminal-content mt-0">
            <div className="space-y-4">
              <div className="command-line">
                <span className="text-green-400">$</span> htop --sort-by stars ~/software/
              </div>
              <div className="command-output">
                <div className="flex items-center text-[#E5DEFF] text-sm mb-2 border-b border-white/10 pb-2">
                  <span className="w-16">PID</span>
                  <span className="w-32">Name</span>
                  <span className="w-20">Stars</span>
                  <span className="flex-1">Usage</span>
                  <span className="w-16">Lang</span>
                </div>
                {personalInfo.projects.map((project, index) => (
                  <a 
                    key={index} 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm py-2 hover:bg-white/5 transition-colors rounded px-2"
                  >
                    <span className="w-16 text-[#8B5CF6]">{4560 + index}</span>
                    <span className="w-32 text-primary">{project.name}</span>
                    <span className="w-20 text-[#E5DEFF]">{project.stars}</span>
                    <div className="flex-1 px-4">
                      <Progress 
                        value={getStarPercentage(project.stars)} 
                        className="h-2 [&>div]:bg-[#0EA5E9] bg-white/10" 
                      />
                    </div>
                    <span className="w-16 text-[#E5DEFF]">{project.language}</span>
                  </a>
                ))}
                <div className="mt-4 pt-2 border-t border-white/10 text-xs text-[#E5DEFF]/60 flex gap-4">
                  <span>F1Help</span>
                  <span>F2Setup</span>
                  <span>F3Search</span>
                  <span>F4Filter</span>
                  <span>F5Tree</span>
                  <span>F6SortBy</span>
                  <span>F7Nice</span>
                  <span>F8Kill</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="publications" className="terminal-content mt-0">
            <div className="space-y-4">
              <div className="command-line">
                <span className="text-green-400">$</span> echo $GOOGLE_SCHOLAR_ID
              </div>
              <div className="command-output text-[#E5DEFF]">
                <a 
                  href="https://scholar.google.com/citations?user=dz_bPoEAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  dz_bPoEAAAAJ
                </a>
              </div>

              <div className="command-line">
                <span className="text-green-400">$</span> wordcloud-gen ~/research/publications.txt --theme=terminal
              </div>
              <div className="command-output">
                <div className="text-[#E5DEFF] text-sm mb-4">
                  Generating word cloud from research publications...
                  <div className="text-[#8B5CF6] mt-1">[====================] 100% complete</div>
                </div>
                <ResearchWordCloud />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="terminal-content mt-0">
            <div className="space-y-4">
              <div className="command-line">
                <span className="text-green-400">$</span> history | grep "positions"
              </div>
              <div className="command-output space-y-2 text-[0.825rem]">
                <div className="text-[#E5DEFF]">
                  2022-2023 {'>'} Lead bioinformatician at <a 
                    href="https://www.arcensus-diagnostics.com/en/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >Arcensus diagnostics</a>, Rostock, Germany
                </div>
                <div className="text-[#E5DEFF]">
                  2018-2021 {'>'} Doc and Post-doc at DKFZ, Heidelberg, Germany
                </div>
                <div className="text-[#E5DEFF]">
                  2014-2017 {'>'} Bioinformatician, <a 
                    href="https://csi.nus.edu.sg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >Cancer Science Institute</a>, NUS, Singapore
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
