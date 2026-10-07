import { BookOpen, CodeXml, FileText, GraduationCap, Mail, Trophy } from "lucide-react";
import MotionEffects from "./motion-effects";
import PaperFigure from "./paper-figure";
import figureSources from "../public/paper-figures/sources.json";

type Publication = {
  year: string;
  venue: string;
  kind: "conference" | "journal";
  rank: string[];
  casQ1?: boolean;
  authors: string;
  title: string;
  note?: string;
  correspondingAuthors?: string[];
  pdf: string;
};

const publications: Publication[] = [
  {
    year: "2027",
    venue: "ESWA",
    kind: "journal",
    rank: ["Q1"],
    casQ1: true,
    authors: "S. Yang, X. Li, K. Yan, C. Wang, W. Ren, Y. Chen, and K. Chen",
    title:
      "EvidenceMalGraph: An evidence-grounded modular framework for Android malware family attribution and campaign analysis",
    pdf: "./papers/eswa2027-evidencemalgraph.pdf",
    correspondingAuthors: ["W. Ren"],
  },
  {
    year: "2026",
    venue: "IEEE TSE",
    kind: "journal",
    rank: ["Q1", "CCF A"],
    casQ1: true,
    authors: "Z. Xie, M. Chen, Y. Gao, S. Yang, W. Diao, Xiangyu Liu",
    title:
      "RuleDroid: LLM-Augmented Synthesis of Static Security Detection Rules for Android Apps",
    pdf: "./papers/tse2026-ruledroid.pdf",
    correspondingAuthors: ["W. Diao"],
  },
  {
    year: "2026",
    venue: "SANER",
    kind: "conference",
    rank: ["CCF B", "CORE A"],
    authors: "R. Lin, S. Yang, F. Xu, and W. Diao",
    title:
      "Dialing Danger: Large-Scale Mining and Risk Assessment of Android Secret Codes in OEM Firmware",
    pdf: "./papers/saner2026-dialing-danger.pdf",
    correspondingAuthors: ["S. Yang", "W. Diao"],
  },
  {
    year: "2025",
    venue: "ASE",
    kind: "conference",
    rank: ["CCF A", "CORE A*"],
    authors: "W. Li, J. Guo, J. Chen, F. Li, Y. Xing, Y. Xu, S. Yang, and W. Diao",
    title:
      "FirmProj: Detecting Firmware Leakage in IoT Update Processes via Companion App Analysis",
    pdf: "./papers/ase2025-firmproj.pdf",
    correspondingAuthors: ["W. Diao"],
  },
  {
    year: "2024",
    venue: "ISSRE",
    kind: "conference",
    rank: ["CCF B", "CORE A"],
    authors: "S. Yang, G. Bai, R. Lin, J. Guo, and W. Diao",
    title:
      "Beyond the Horizon: Exploring Cross-Market Security Discrepancies in Parallel Android Apps",
    pdf: "./papers/issre2024-beyond-the-horizon.pdf",
    correspondingAuthors: ["G. Bai", "W. Diao"],
  },
  {
    year: "2024",
    venue: "ISSRE",
    kind: "conference",
    rank: ["CCF B", "CORE A"],
    authors: "S. Li, R. Li, S. Yang, and W. Diao",
    title:
      "Android's Cat-and-Mouse Game: Understanding Evasion Techniques against Dynamic Analysis",
    pdf: "./papers/issre2024-cat-and-mouse.pdf",
    correspondingAuthors: ["W. Diao"],
  },
  {
    year: "2024",
    venue: "WWW",
    kind: "conference",
    rank: ["CCF A", "CORE A*"],
    authors:
      "X. Liu, W. Li, Q. Hou, S. Yang, L. Ying, W. Diao, Y. Li, S. Guo, and H. Duan",
    title:
      "From Promises to Practice: Evaluating the Private Browsing Modes of Android Browser Apps",
    pdf: "./papers/www2024-private-browsing.pdf",
    correspondingAuthors: ["L. Ying", "W. Diao"],
  },
  {
    year: "2024",
    venue: "SANER",
    kind: "conference",
    rank: ["CCF B", "CORE A"],
    authors: "S. Li, R. Li, Y. Yu, K. Yan, S. Yang, and W. Diao",
    title:
      "Understanding Android OS Forward Compatibility Support for Legacy Apps: A Data-Driven Analysis",
    pdf: "./papers/saner2024-forward-compatibility.pdf",
    correspondingAuthors: ["W. Diao"],
  },
  {
    year: "2023",
    venue: "USENIX Security",
    kind: "conference",
    rank: ["CCF A", "CORE A*"],
    authors: "R. Li, W. Diao, S. Yang, X. Liu, S. Guo, and K. Zhang",
    title:
      "Lost in Conversion: Exploit Data Structure Conversion with Attribute Loss to Break Android Systems",
    pdf: "./papers/usenix2023-lost-in-conversion.pdf",
    correspondingAuthors: ["W. Diao"],
    note: "CVE-2021-39695 · CVE-2022-20392 · CVE-2023-20971",
  },
  {
    year: "2023",
    venue: "APSEC",
    kind: "conference",
    rank: ["CCF C", "CORE C"],
    authors: "S. Yang, Q. Hou, S. Li, and W. Diao",
    title: "Do App Developers Follow the Android Official Security Guidelines?",
    pdf: "./papers/apsec2023-security-guidelines.pdf",
    correspondingAuthors: ["W. Diao"],
  },
  {
    year: "2022",
    venue: "ICSE",
    kind: "conference",
    rank: ["CCF A", "CORE A*"],
    authors: "S. Yang, R. Li, J. Chen, W. Diao, and S. Guo",
    title: "Demystifying Android Non-SDK APIs: Measurement and Understanding",
    pdf: "./papers/icse2022-non-sdk-apis.pdf",
    correspondingAuthors: ["W. Diao"],
  },
  {
    year: "2022",
    venue: "QRS",
    kind: "conference",
    rank: ["CCF C", "CORE C"],
    authors: "G. Tian, J. Chen, K. Yan, S. Yang, and W. Diao",
    title: "Cast Away: On the Security of DLNA Deployments in the SmartTV Ecosystem",
    pdf: "./papers/qrs2022-cast-away.pdf",
    correspondingAuthors: ["J. Chen", "W. Diao"],
    note: "CNVD-2022-54667 · CNVD-2022-34589",
  },
  {
    year: "—",
    venue: "ESEM",
    kind: "journal",
    rank: ["CCF B", "JCR Q1"],
    authors: "S. Yang, Q. Hou, S. Li, F. Xu, and W. Diao",
    title:
      "From Guidelines to Practice: Assessing Android App Developer Compliance with Google's Security Recommendations",
    pdf: "./papers/emse2025-security-recommendations.pdf",
    correspondingAuthors: ["W. Diao"],
  },
  {
    year: "—",
    venue: "ESEM",
    kind: "journal",
    rank: ["CCF B", "JCR Q1"],
    authors: "S. Yang, R. Lin, J. Guo, G. Bai, Y. Luo, and W. Diao",
    title:
      "Investigating Cross-Market Android Apps: Security, Protection, and Components",
    pdf: "./papers/emse2026-cross-market-apps.pdf",
    correspondingAuthors: ["W. Diao"],
  },
  {
    year: "—",
    venue: "Cybersecurity",
    kind: "journal",
    rank: ["CCF C", "JCR Q1"],
    authors: "Z. Qiu, S. Yang, Y. Yu, Y. Luo, and W. Diao",
    title:
      "Understanding Security Risks in Mobile-to-PC Screen Mirroring: An Empirical Study",
    pdf: "./papers/cybersecurity2025-screen-mirroring.pdf",
    correspondingAuthors: ["S. Yang", "W. Diao"],
  },
  {
    year: "—",
    venue: "IEEE TSE",
    kind: "journal",
    rank: ["Q1", "CCF A"],
    casQ1: true,
    authors: "R. Li, W. Diao, Z. Li, S. Yang, S. Li, and S. Guo",
    title:
      "Android Custom Permissions Demystified: A Comprehensive Security Evaluation",
    pdf: "./papers/tse2022-custom-permissions.pdf",
    correspondingAuthors: ["W. Diao"],
  },
];

const publicationStats = [
  {
    key: "conference",
    label: "Conference Papers",
    count: publications.filter((paper) => paper.kind === "conference").length,
  },
  {
    key: "journal",
    label: "Journal Papers",
    count: publications.filter((paper) => paper.kind === "journal").length,
  },
  {
    key: "cas-q1",
    label: "CAS Q1",
    count: publications.filter((paper) => paper.casQ1).length,
  },
  {
    key: "ccf-a",
    label: "CCF A",
    count: publications.filter((paper) => paper.rank.includes("CCF A")).length,
  },
];

const publicationFigures = new Map(
  figureSources.map((figure) => [`./papers/${figure.file}`, figure]),
);

const courses = [
  { title: "《恶意代码分析》", type: "选修课", theory: 32, practical: 16 },
  { title: "《网络安全概论》", type: "必修课", theory: 32, practical: 16 },
  { title: "《数字取证技术》", type: "选修课", theory: 40, practical: 8 },
];

const studentAwards = [
  {
    competition: "河南省“金盾信安杯”网络与数据安全大赛",
    edition: "第七届",
    prizes: [{ text: "省级三等奖", place: 3 }],
  },
  {
    competition: "“御网杯”网络安全大赛",
    edition: "第十届 · 线上挑战赛",
    prizes: [
      { text: "一等奖 × 3", place: 1 },
      { text: "二等奖 × 6", place: 2 },
      { text: "三等奖 × 3", place: 3 },
    ],
  },
  {
    competition: "C4 网络技术挑战赛",
    edition: "2026年 · 选拔赛",
    prizes: [{ text: "三等奖", place: 3 }],
  },
  {
    competition: "中国研究生电子设计竞赛",
    edition: "第二十一届 · 华中赛区",
    prizes: [{ text: "二等奖", place: 2 }],
  },
];

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell nav-row">
          <a className="wordmark" href="#top" aria-label="Back to top">
            <span>YS</span>
            <strong>Shishuai Yang</strong>
          </a>
          <nav aria-label="Main navigation">
            <a href="#news">News</a>
            <a href="#publications">Publications</a>
            <a href="#opensource">Open Source</a>
            <a href="#service">Service</a>
            <a href="#teaching">Teaching</a>
            <a href="#awards">Awards</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>Shishuai Yang</h1>
            <div className="intro" lang="en">
              <p>
                Dr. Shishuai Yang is a lecturer at Zhengzhou University of Aeronautics.
                His research focuses on automated vulnerability discovery, LLM-driven
                security analysis, and the security of mobile ecosystems and IoT systems.
                {" "}He received his doctorate from the School of Cyber Science and Engineering,
                Shandong University, through a combined master&apos;s-doctoral program (advisor: {" "}
                <a href="https://diaowenrui.github.io/" target="_blank" rel="noreferrer">
                  Prof. Wenrui Diao
                </a>
                ). During his doctoral studies, he was a visiting student at the National
                University of Singapore under the supervision of {" "}
                <a href="https://baigd.github.io/" target="_blank" rel="noreferrer">
                  Prof. Guangdong Bai
                </a>
                . He earned his bachelor&apos;s degree from Henan University.
              </p>
            </div>
            <div className="hero-actions">
              <a className="primary-action" href="mailto:shishuai@zua.edu.cn">
                <Mail size={16} aria-hidden="true" />
                shishuai@zua.edu.cn
              </a>
              <a
                className="text-action"
                href="https://scholar.google.com/citations?user=_uV7ob4AAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                <GraduationCap size={17} aria-hidden="true" />
                Google Scholar <span aria-hidden="true">↗</span>
              </a>
              <a className="text-action" href="https://github.com/shishuai-y" target="_blank" rel="noreferrer">
                <CodeXml size={16} aria-hidden="true" />
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img
                src="./profile.jpg"
                alt="Portrait of Shishuai Yang"
                width="900"
                height="1200"
              />
            </div>
            <div className="portrait-note">
              <span>Research focus</span>
              <strong>Security at scale</strong>
            </div>
          </div>
        </div>
      </section>

      <div id="content">
        <section className="section news-section" id="news" aria-labelledby="news-heading">
          <div className="shell news-layout">
            <h2 id="news-heading">
              <span className="news-heading-icon" aria-hidden="true">🔥</span>
              <span>News</span>
            </h2>
            <ul className="news-list">
              <li>
                <span className="news-entry-icon" aria-hidden="true">🎉</span>
                <div className="news-entry-text">
                  <time dateTime="2026-09">Sep 2026:</time>
                  <span>One paper accepted by ESWA 2027</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="shell">
            <div className="section-heading publication-heading">
              <div>
                <p className="section-kicker">01 · Publications</p>
                <h2>Publications</h2>
              </div>
              <div className="publication-count">
                <strong>{publications.length}</strong>
                <span>papers</span>
              </div>
            </div>

            <dl className="publication-stats" aria-label="Publication statistics">
              {publicationStats.map((stat) => (
                <div key={stat.key} data-stat={stat.key}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.count}<span>papers</span></dd>
                </div>
              ))}
            </dl>

            <div className="publication-list">
              {publications.map((publication) => {
                const figure = publicationFigures.get(publication.pdf);
                if (!figure) throw new Error(`Missing figure for ${publication.title}`);
                const figureUrl = `./paper-figures/${figure.file.slice(0, -4)}.webp?v=${figure.clip.join("-")}`;
                return (
                <article className="publication" data-kind={publication.kind} key={publication.title}>
                  <PaperFigure
                      src={figureUrl}
                      alt={`Framework diagram for ${publication.title}`}
                      title={publication.title}
                      width={Math.round((figure.clip[2] - figure.clip[0]) * 3)}
                      height={Math.round((figure.clip[3] - figure.clip[1]) * 3)}
                  />
                  <div className="pub-body">
                    <div className="pub-labels">
                      <span>{publication.year}</span>
                      <strong>{publication.venue}</strong>
                      {publication.rank.map((rank) => (
                        <span
                          key={rank}
                          className={rank === "CCF A" ? "rank-ccf-a" : rank === "Q1" && publication.casQ1 ? "rank-cas-q1" : undefined}
                        >
                          {rank}
                        </span>
                      ))}
                      <a
                        className="paper-link"
                        href={publication.pdf}
                        target="_blank"
                        rel="noreferrer"
                        type="application/pdf"
                        aria-label={`View PDF: ${publication.title}`}
                        title="View paper PDF"
                      >
                        <FileText size={14} aria-hidden="true" />
                        PDF
                      </a>
                    </div>
                    <h3>{publication.title}</h3>
                    <p>
                      {publication.authors.split(", ").map((entry, index) => {
                        const author = entry.replace(/^and /, "");
                        return (
                          <span key={index}>
                            {index > 0 && ", "}
                            {entry.startsWith("and ") && "and "}
                            <span className="author-name">
                              {author === "S. Yang" ? <strong>{author}</strong> : author}
                              {publication.correspondingAuthors?.includes(author) && (
                              <span className="corresponding-author" title="Corresponding author" role="img" aria-label="Corresponding author">
                                (
                                <Mail size={13} aria-hidden="true" />
                                )
                              </span>
                              )}
                            </span>
                          </span>
                        );
                      })}
                    </p>
                    {publication.note && <small>{publication.note}</small>}
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section opensource-section" id="opensource">
          <div className="shell opensource-layout">
            <div className="section-heading">
              <div>
                <p className="section-kicker">02 · Open Source</p>
                <h2>Open Source</h2>
              </div>
            </div>
            <article className="repository">
              <div className="repository-body">
                <h3>
                  <a
                    href="https://github.com/shishuai-y/Android-Permission-Mappings"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Android-Permission-Mappings
                  </a>
                </h3>
                <p className="repository-description">
                  Permission mappings for Android API levels 16–33, covering SDK APIs,
                  ContentProviders, and Intents for app security analysis and cross-version research.
                </p>
                <ul className="repository-topics" aria-label="Permission mapping types">
                  <li>SDK</li>
                  <li>ContentProvider</li>
                  <li>Intent</li>
                </ul>
                <p className="repository-paper">
                  Related Paper · ISSRE 2024
                  <a
                    href="https://doi.org/10.1109/ISSRE62328.2024.00059"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Beyond the Horizon: Exploring Cross-Market Security Discrepancies in Parallel Android Apps
                  </a>
                </p>
              </div>
              <div className="repository-details">
                <dl>
                  <div>
                    <dt>Android API</dt>
                    <dd>16–33</dd>
                  </div>
                  <div>
                    <dt>Mapping Types</dt>
                    <dd>3</dd>
                  </div>
                </dl>
                <a
                  className="repository-link"
                  href="https://github.com/shishuai-y/Android-Permission-Mappings"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section community-section service-section" id="service">
          <div className="shell community-layout">
            <div className="section-heading">
              <div>
                <p className="section-kicker">03 · Academic Service</p>
                <h2>Academic Service</h2>
              </div>
            </div>
            <dl className="academic-service-list community-body">
              <div>
                <dt>Reviewer</dt>
                <dd>Cluster Computing</dd>
              </div>
              <div>
                <dt>External Reviewer</dt>
                <dd>USENIX Security 2025, ACM CCS 2024, EURO S&amp;P 2024, TDSC 2023, ESORICS, TOSEM, and others</dd>
              </div>
              <div>
                <dt>AEC Member</dt>
                <dd>31st ACM Conference on Computer and Communications Security</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section community-section teaching-section" id="teaching">
          <div className="shell community-layout">
            <div className="section-heading">
              <div>
                <p className="section-kicker">04 · Teaching</p>
                <h2>Teaching</h2>
              </div>
            </div>
            <ul className="course-list community-body" lang="zh-CN">
              {courses.map((course) => (
                <li key={course.title}>
                  <div className="course-heading">
                    <h3 className="course-title">
                      <BookOpen size={18} aria-hidden="true" />
                      {course.title}
                    </h3>
                    <span className="course-type">{course.type}</span>
                  </div>
                  <div className="course-details">
                    <span className="course-hours">{course.theory + course.practical} 学时</span>
                    <span className="course-split">理论 {course.theory} 学时 + 上机 {course.practical} 学时</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section awards-section" id="awards">
          <div className="shell">
            <div className="section-heading awards-heading">
              <h2>Student Awards</h2>
              <p className="award-count">{studentAwards.length} competitions</p>
            </div>
            <div className="award-scroll" role="region" aria-label="Awards of supervised students" tabIndex={0}>
            <ol className="award-list" lang="zh-CN">
              {studentAwards.map((award) => (
                <li className="award-item" key={award.competition}>
                  <div className="award-symbol" aria-hidden="true">
                    <Trophy size={18} strokeWidth={1.7} />
                  </div>
                  <div className="award-body">
                    <h3>{award.competition}</h3>
                    <p className="award-edition">{award.edition}</p>
                  </div>
                  <ul className="award-results" aria-label="Prizes">
                    {award.prizes.map((prize) => (
                      <li className="award-prize" data-place={prize.place} key={prize.text}>
                        {prize.text}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="shell footer-grid">
          <div>
            <p className="footer-name">Shishuai Yang</p>
            <p>Cybersecurity researcher and lecturer.</p>
          </div>
          <a href="mailto:shishuai@zua.edu.cn">shishuai@zua.edu.cn</a>
          <p className="updated">Last updated: October 7, 2026</p>
        </div>
      </footer>
    </main>
  );
}
