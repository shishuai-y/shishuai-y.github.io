const publications = [
  {
     year: "2026",
    venue: "IEEE TSE",
    rank: "Q1, CCF A",
    authors: "Z. Xie, M. Chen, Y. Gao, S. Yang, W. Diao, Xiangyu Liu",
    title:
      "RuleDroid: LLM-Augmented Synthesis of Static Security Detection Rules for Android Apps",
  },
  {
    year: "2026",
    venue: "SANER",
    rank: "CCF B · CORE A",
    authors: "R. Lin, S. Yang, F. Xu, and W. Diao",
    title:
      "Dialing Danger: Large-Scale Mining and Risk Assessment of Android Secret Codes in OEM Firmware",
    note: "共同通讯作者",
  },
  {
    year: "2025",
    venue: "ASE",
    rank: "CCF A · CORE A*",
    authors: "W. Li, J. Guo, J. Chen, F. Li, Y. Xing, Y. Xu, S. Yang, and W. Diao",
    title:
      "FirmProj: Detecting Firmware Leakage in IoT Update Processes via Companion App Analysis",
  },
  {
    year: "2024",
    venue: "ISSRE",
    rank: "CCF B · CORE A",
    authors: "S. Yang, G. Bai, R. Lin, J. Guo, and W. Diao",
    title:
      "Beyond the Horizon: Exploring Cross-Market Security Discrepancies in Parallel Android Apps",
  },
  {
    year: "2024",
    venue: "ISSRE",
    rank: "CCF B · CORE A",
    authors: "S. Li, R. Li, S. Yang, and W. Diao",
    title:
      "Android's Cat-and-Mouse Game: Understanding Evasion Techniques against Dynamic Analysis",
  },
  {
    year: "2024",
    venue: "WWW",
    rank: "CCF A · CORE A*",
    authors:
      "X. Liu, W. Li, Q. Hou, S. Yang, L. Ying, W. Diao, Y. Li, S. Guo, and H. Duan",
    title:
      "From Promises to Practice: Evaluating the Private Browsing Modes of Android Browser Apps",
  },
  {
    year: "2024",
    venue: "SANER",
    rank: "CCF B · CORE A",
    authors: "S. Li, R. Li, Y. Yu, K. Yan, S. Yang, and W. Diao",
    title:
      "Understanding Android OS Forward Compatibility Support for Legacy Apps: A Data-Driven Analysis",
  },
  {
    year: "2023",
    venue: "USENIX Security",
    rank: "CCF A · CORE A*",
    authors: "R. Li, W. Diao, S. Yang, X. Liu, S. Guo, and K. Zhang",
    title:
      "Lost in Conversion: Exploit Data Structure Conversion with Attribute Loss to Break Android Systems",
    note: "CVE-2021-39695 · CVE-2022-20392 · CVE-2023-20971",
  },
  {
    year: "2023",
    venue: "APSEC",
    rank: "CCF C · CORE C",
    authors: "S. Yang, Q. Hou, S. Li, and W. Diao",
    title: "Do App Developers Follow the Android Official Security Guidelines?",
  },
  {
    year: "2022",
    venue: "ICSE",
    rank: "CCF A · CORE A*",
    authors: "S. Yang, R. Li, J. Chen, W. Diao, and S. Guo",
    title: "Demystifying Android Non-SDK APIs: Measurement and Understanding",
  },
  {
    year: "2022",
    venue: "QRS",
    rank: "CCF C · CORE C",
    authors: "G. Tian, J. Chen, K. Yan, S. Yang, and W. Diao",
    title: "Cast Away: On the Security of DLNA Deployments in the SmartTV Ecosystem",
    note: "CNVD-2022-54667 · CNVD-2022-34589",
  },
  {
    year: "—",
    venue: "ESEM",
    rank: "CCF B · JCR Q1",
    authors: "S. Yang, Q. Hou, S. Li, F. Xu, and W. Diao",
    title:
      "From Guidelines to Practice: Assessing Android App Developer Compliance with Google's Security Recommendations",
  },
  {
    year: "—",
    venue: "ESEM",
    rank: "CCF B · JCR Q1",
    authors: "S. Yang, R. Lin, J. Guo, G. Bai, Y. Luo, and W. Diao",
    title:
      "Investigating Cross-Market Android Apps: Security, Protection, and Components",
  },
  {
    year: "—",
    venue: "Cybersecurity",
    rank: "CCF C · JCR Q1",
    authors: "Z. Qiu, S. Yang, Y. Yu, Y. Luo, and W. Diao",
    title:
      "Understanding Security Risks in Mobile-to-PC Screen Mirroring: An Empirical Study",
    note: "共同通讯作者",
  },
  {
    year: "—",
    venue: "IEEE TSE",
    rank: "CCF A · JCR Q1",
    authors: "R. Li, W. Diao, Z. Li, S. Yang, S. Li, and S. Guo",
    title:
      "Android Custom Permissions Demystified: A Comprehensive Security Evaluation",
  },
];

const education = [
  {
    period: "2020.09 — 2025.06",
    school: "山东大学",
    detail: "网络空间安全 · 博士（硕博连读）",
    note: "导师：刁文瑞教授",
  },
  {
    period: "2024.01 — 2024.06",
    school: "National University of Singapore",
    detail: "School of Computing · 联合培养博士",
    note: "国家留学基金委资助 · 导师：Guangdong Bai、Jinsong Dong",
  },
  {
    period: "2016.09 — 2020.06",
    school: "河南大学",
    detail: "软件工程 · 本科",
    note: "GPA 3.69/4.00 · 保研",
  },
];

const interests = [
  "自动化漏洞挖掘",
  "LLM 驱动安全分析",
  "移动生态安全",
  "物联网系统安全",
];

export default function Home() {
  return (
    <main>
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
            <a href="#research">研究</a>
            <a href="#publications">论文</a>
            <a href="#experience">经历</a>
            <a href="#service">服务</a>
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
              博士毕业于山东大学网络空间安全学院，研究聚焦自动化漏洞挖掘、
              大模型驱动安全分析、移动生态与物联网系统安全。
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
              <a className="text-action" href="./cv.pdf" download>
                下载简历 <span aria-hidden="true">↓</span>
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
        <section className="section research-section" id="research">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">01 · Research</p>
                <h2>研究项目</h2>
              </div>
              <p>
                从真实软件生态中识别系统性安全风险，并将大规模测量转化为可验证、可复用的研究结论。
              </p>
            </div>

            <div className="project-grid">
              <article className="project-card featured-project">
                <p className="project-index">01 / Android Security</p>
                <h3>Android Apps 漏洞静态检测方法探究</h3>
                <p>
                  基于 Android 安全开发最佳实践，评估任意文件读写、路径遍历、不安全网络通信和组件导出等常见风险，覆盖第三方市场
                  251,749 个应用及 Google Play 108,091 个应用。
                </p>
                <div className="project-meta">
                  <span>网安创新计划资助</span>
                  <span>6 万元</span>
                  <span>武汉网络安全创新论坛优秀成果</span>
                </div>
                <a
                  className="inline-link"
                  href="https://www.cybersac.cn/detail/1702256698066042881"
                  target="_blank"
                  rel="noreferrer"
                >
                  查看项目报道 <span aria-hidden="true">↗</span>
                </a>
              </article>

              <article className="project-card">
                <p className="project-index">02 / Ecosystem Measurement</p>
                <h3>跨市场 Apps 的安全与隐私差分分析</h3>
                <p>
                  系统研究同一 Android 应用在 Google Play 与第三方市场版本间的安全、保护机制和权限使用差异，并开源研究数据及
                  Android APIs 16–33 权限映射。
                </p>
                <div className="project-meta">
                  <span>跨市场测量</span>
                  <span>安全与隐私</span>
                  <span>开放数据</span>
                </div>
                <a
                  className="inline-link"
                  href="https://doi.org/10.5281/zenodo.13232037"
                  target="_blank"
                  rel="noreferrer"
                >
                  访问开放数据 <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="shell">
            <div className="section-heading publication-heading">
              <div>
                <p className="section-kicker">02 · Publications</p>
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

        <section className="section experience-section" id="experience">
          <div className="shell experience-grid">
            <div>
              <p className="section-kicker">03 · Experience</p>
              <h2>教育与经历</h2>
              <p className="section-intro">
                现任郑州航空工业管理学院讲师，持续开展移动安全与软件生态测量研究。
              </p>
            </div>
            <div className="timeline">
              {education.map((item) => (
                <article key={item.period}>
                  <time>{item.period}</time>
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.detail}</p>
                    <small>{item.note}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section service-section" id="service">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">04 · Community</p>
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
                <h3>教学与指导</h3>
                <ul>
                  <li>《恶意代码分析》</li>
                  <li>《网络安全概论》</li>
                  <li>《数字取证技术》</li>
                  <li>指导学生获河南省第七届“金盾信安杯”网络与数据安全大赛省级三等奖</li>
                  <li>指导学生获第十届“御网杯”网络安全大赛线上挑战赛一等奖*3、二等奖*6、三等奖*3</li>
                  <li>2026年C4网络技术挑战赛选拔赛三等奖</li>
                </ul>
              </article>
              <article>
                <span className="service-label">Honors</span>
                <h3>主持项目</h3>
                <ul>
                  <li>青年基金 [5w]</li>
                  <li>一流网络安全创新资助计划 [6w]</li>
     
                </ul>
              </article>
            </div>
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
          <p className="updated">最后更新于 2026.07.15</p>
        </div>
      </footer>
    </main>
  );
}
