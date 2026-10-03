import { FileText, Trophy } from "lucide-react";
import MotionEffects from "./motion-effects";

const publications = [
  {
    year: "2027",
    venue: "ESWA",
    rank: "中科院一区 TOP",
    authors: "S. Yang, X. Li, K. Yan, C. Wang, W. Ren, Y. Chen, and K. Chen",
    title:
      "EvidenceMalGraph: An evidence-grounded modular framework for Android malware family attribution and campaign analysis",
    note: "第一作者",
    pdf: "./papers/eswa2027-evidencemalgraph.pdf",
  },
  {
    year: "2026",
    venue: "IEEE TSE",
    rank: "Q1, CCF A",
    authors: "Z. Xie, M. Chen, Y. Gao, S. Yang, W. Diao, Xiangyu Liu",
    title:
      "RuleDroid: LLM-Augmented Synthesis of Static Security Detection Rules for Android Apps",
    pdf: "./papers/tse2026-ruledroid.pdf",
  },
  {
    year: "2026",
    venue: "SANER",
    rank: "CCF B · CORE A",
    authors: "R. Lin, S. Yang, F. Xu, and W. Diao",
    title:
      "Dialing Danger: Large-Scale Mining and Risk Assessment of Android Secret Codes in OEM Firmware",
    pdf: "./papers/saner2026-dialing-danger.pdf",
    note: "共同通讯作者",
  },
  {
    year: "2025",
    venue: "ASE",
    rank: "CCF A · CORE A*",
    authors: "W. Li, J. Guo, J. Chen, F. Li, Y. Xing, Y. Xu, S. Yang, and W. Diao",
    title:
      "FirmProj: Detecting Firmware Leakage in IoT Update Processes via Companion App Analysis",
    pdf: "./papers/ase2025-firmproj.pdf",
  },
  {
    year: "2024",
    venue: "ISSRE",
    rank: "CCF B · CORE A",
    authors: "S. Yang, G. Bai, R. Lin, J. Guo, and W. Diao",
    title:
      "Beyond the Horizon: Exploring Cross-Market Security Discrepancies in Parallel Android Apps",
    pdf: "./papers/issre2024-beyond-the-horizon.pdf",
    note: "第一作者",
  },
  {
    year: "2024",
    venue: "ISSRE",
    rank: "CCF B · CORE A",
    authors: "S. Li, R. Li, S. Yang, and W. Diao",
    title:
      "Android's Cat-and-Mouse Game: Understanding Evasion Techniques against Dynamic Analysis",
    pdf: "./papers/issre2024-cat-and-mouse.pdf",
  },
  {
    year: "2024",
    venue: "WWW",
    rank: "CCF A · CORE A*",
    authors:
      "X. Liu, W. Li, Q. Hou, S. Yang, L. Ying, W. Diao, Y. Li, S. Guo, and H. Duan",
    title:
      "From Promises to Practice: Evaluating the Private Browsing Modes of Android Browser Apps",
    pdf: "./papers/www2024-private-browsing.pdf",
  },
  {
    year: "2024",
    venue: "SANER",
    rank: "CCF B · CORE A",
    authors: "S. Li, R. Li, Y. Yu, K. Yan, S. Yang, and W. Diao",
    title:
      "Understanding Android OS Forward Compatibility Support for Legacy Apps: A Data-Driven Analysis",
    pdf: "./papers/saner2024-forward-compatibility.pdf",
  },
  {
    year: "2023",
    venue: "USENIX Security",
    rank: "CCF A · CORE A*",
    authors: "R. Li, W. Diao, S. Yang, X. Liu, S. Guo, and K. Zhang",
    title:
      "Lost in Conversion: Exploit Data Structure Conversion with Attribute Loss to Break Android Systems",
    pdf: "./papers/usenix2023-lost-in-conversion.pdf",
    note: "CVE-2021-39695 · CVE-2022-20392 · CVE-2023-20971",
  },
  {
    year: "2023",
    venue: "APSEC",
    rank: "CCF C · CORE C",
    authors: "S. Yang, Q. Hou, S. Li, and W. Diao",
    title: "Do App Developers Follow the Android Official Security Guidelines?",
    pdf: "./papers/apsec2023-security-guidelines.pdf",
    note: "第一作者",
  },
  {
    year: "2022",
    venue: "ICSE",
    rank: "CCF A · CORE A*",
    authors: "S. Yang, R. Li, J. Chen, W. Diao, and S. Guo",
    title: "Demystifying Android Non-SDK APIs: Measurement and Understanding",
    pdf: "./papers/icse2022-non-sdk-apis.pdf",
    note: "第一作者",
  },
  {
    year: "2022",
    venue: "QRS",
    rank: "CCF C · CORE C",
    authors: "G. Tian, J. Chen, K. Yan, S. Yang, and W. Diao",
    title: "Cast Away: On the Security of DLNA Deployments in the SmartTV Ecosystem",
    pdf: "./papers/qrs2022-cast-away.pdf",
    note: "CNVD-2022-54667 · CNVD-2022-34589",
  },
  {
    year: "—",
    venue: "ESEM",
    rank: "CCF B · JCR Q1",
    authors: "S. Yang, Q. Hou, S. Li, F. Xu, and W. Diao",
    title:
      "From Guidelines to Practice: Assessing Android App Developer Compliance with Google's Security Recommendations",
    pdf: "./papers/emse2025-security-recommendations.pdf",
    note: "第一作者",
  },
  {
    year: "—",
    venue: "ESEM",
    rank: "CCF B · JCR Q1",
    authors: "S. Yang, R. Lin, J. Guo, G. Bai, Y. Luo, and W. Diao",
    title:
      "Investigating Cross-Market Android Apps: Security, Protection, and Components",
    pdf: "./papers/emse2026-cross-market-apps.pdf",
    note: "第一作者",
  },
  {
    year: "—",
    venue: "Cybersecurity",
    rank: "CCF C · JCR Q1",
    authors: "Z. Qiu, S. Yang, Y. Yu, Y. Luo, and W. Diao",
    title:
      "Understanding Security Risks in Mobile-to-PC Screen Mirroring: An Empirical Study",
    pdf: "./papers/cybersecurity2025-screen-mirroring.pdf",
    note: "共同通讯作者",
  },
  {
    year: "—",
    venue: "IEEE TSE",
    rank: "CCF A · JCR Q1",
    authors: "R. Li, W. Diao, Z. Li, S. Yang, S. Li, and S. Guo",
    title:
      "Android Custom Permissions Demystified: A Comprehensive Security Evaluation",
    pdf: "./papers/tse2022-custom-permissions.pdf",
  },
];

const interests = [
  "自动化漏洞挖掘",
  "LLM 驱动安全分析",
  "移动生态安全",
  "物联网系统安全",
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
        跳到主要内容
      </a>

      <header className="site-header">
        <div className="shell nav-row">
          <a className="wordmark" href="#top" aria-label="返回首页">
            <span>YS</span>
            <strong>杨士帅</strong>
          </a>
          <nav aria-label="主要导航">
            <a href="#publications">论文</a>
            <a href="#opensource">开源</a>
            <a href="#service">服务</a>
            <a href="#awards">获奖</a>
          </nav>
          <a className="nav-contact" href="mailto:shishuai@zua.edu.cn">
            联系我
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Cybersecurity Researcher · Lecturer</p>
            <h1>
              杨士帅
              <span>Shishuai Yang</span>
            </h1>
            <p className="role">郑州航空工业管理学院 · 讲师</p>
            <p className="intro">
              博士毕业于山东大学网络空间安全学院，师从
              <a href="https://diaowenrui.github.io/" target="_blank" rel="noreferrer">
                刁文瑞教授
              </a>
              。博士期间曾赴新加坡国立大学访学，在
              <a href="https://baigd.github.io/" target="_blank" rel="noreferrer">
                Guangdong Bai 教授
              </a>
              的指导下开展研究。研究聚焦自动化漏洞挖掘、大模型驱动安全分析、
              移动生态与物联网系统安全。
            </p>
            <div className="interest-list" aria-label="研究方向">
              {interests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="primary-action" href="mailto:shishuai@zua.edu.cn">
                shishuai@zua.edu.cn
              </a>
              <a
                className="text-action"
                href="https://scholar.google.com/citations?user=_uV7ob4AAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img
                src="./profile.jpg"
                alt="杨士帅的个人照片"
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
        <section className="section publications-section" id="publications">
          <div className="shell">
            <div className="section-heading publication-heading">
              <div>
                <p className="section-kicker">01 · Publications</p>
                <h2>科研成果</h2>
              </div>
              <div className="publication-count">
                <strong>{publications.length}</strong>
                <span>selected works</span>
              </div>
            </div>

            <div className="publication-list">
              {publications.map((publication, index) => (
                <article className="publication" key={publication.title}>
                  <div className="pub-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="pub-body">
                    <div className="pub-labels">
                      <span>{publication.year}</span>
                      <strong>{publication.venue}</strong>
                      <span>{publication.rank}</span>
                      <a
                        className="paper-link"
                        href={publication.pdf}
                        target="_blank"
                        rel="noreferrer"
                        type="application/pdf"
                        aria-label={`查看 PDF：${publication.title}`}
                        title="查看论文 PDF"
                      >
                        <FileText size={14} aria-hidden="true" />
                        PDF
                      </a>
                    </div>
                    <h3>{publication.title}</h3>
                    <p>{publication.authors}</p>
                    {publication.note && <small>{publication.note}</small>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section opensource-section" id="opensource">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">02 · Open Source</p>
                <h2>开源项目</h2>
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
                  面向 Android API 16–33 的权限映射数据集，整理 SDK API、
                  ContentProvider 与 Intent 的权限关联，为 Android 应用安全分析与跨版本研究提供数据支持。
                </p>
                <ul className="repository-topics" aria-label="权限映射类型">
                  <li>SDK</li>
                  <li>ContentProvider</li>
                  <li>Intent</li>
                </ul>
                <p className="repository-paper">
                  关联论文 · ISSRE 2024
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
                    <dt>权限映射类型</dt>
                    <dd>3</dd>
                  </div>
                </dl>
                <a
                  className="repository-link"
                  href="https://github.com/shishuai-y/Android-Permission-Mappings"
                  target="_blank"
                  rel="noreferrer"
                >
                  查看 GitHub 仓库 <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section service-section" id="service">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">03 · Community</p>
                <h2>学术服务与教学</h2>
              </div>
              <p>参与国际安全会议审稿与 Artifact Evaluation，并承担网络空间安全专业课程教学。</p>
            </div>

            <div className="service-grid">
              <article>
                <span className="service-label">Academic Service</span>
                <h3>学术服务</h3>
                <ul>
                  <li>Reviewer：Cluster Computing</li>
                  <li>
                    External Reviewer：USENIX Security 2025、ACM CCS 2024、EURO S&amp;P 2024、TDSC 2023、ESORICS、TOSEM 等
                  </li>
                  <li>AEC Member：31st ACM Conference on Computer and Communications Security</li>
                </ul>
              </article>
              <article>
                <span className="service-label">Teaching</span>
                <h3>课程教学</h3>
                <ul>
                  <li>《恶意代码分析》</li>
                  <li>《网络安全概论》</li>
                  <li>《数字取证技术》</li>
                </ul>
              </article>
              <article>
                <span className="service-label">Projects</span>
                <h3>主持项目</h3>
                <ul>
                  <li>青年基金</li>
                  <li>一流网络安全创新资助计划</li>
                  <li>河南省重点科研项目</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section awards-section" id="awards">
          <div className="shell">
            <div className="section-heading awards-heading">
              <div>
                <p className="section-kicker">04 · Student Awards</p>
                <h2>指导学生获奖</h2>
              </div>
              <p className="award-count">{studentAwards.length} 项赛事</p>
            </div>
            <ol className="award-list">
              {studentAwards.map((award) => (
                <li className="award-item" key={award.competition}>
                  <div className="award-symbol" aria-hidden="true">
                    <Trophy size={22} strokeWidth={1.7} />
                  </div>
                  <div className="award-body">
                    <p className="award-edition">{award.edition}</p>
                    <h3>{award.competition}</h3>
                  </div>
                  <ul className="award-results" aria-label="所获奖项">
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
        </section>
      </div>

      <footer>
        <div className="shell footer-grid">
          <div>
            <p className="footer-name">杨士帅 · Shishuai Yang</p>
            <p>Cybersecurity researcher and lecturer.</p>
          </div>
          <a href="mailto:shishuai@zua.edu.cn">shishuai@zua.edu.cn</a>
          <p className="updated">最后更新于 2026.10.03</p>
        </div>
      </footer>
    </main>
  );
}
