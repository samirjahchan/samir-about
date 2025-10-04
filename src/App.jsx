import { useMemo } from "react";
import "./App.css";

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <main className="wrap">
      <header>
        <h1>
          About <span className="accent">Samir Duenhas Jahchan</span>
        </h1>
        <p className="subtitle">
          Data Engineering &amp; Architecture • MDM &amp; Data Governance • Big Data Platforms (AWS, Azure, GCP) • 30+ years building data-driven systems.
        </p>
      </header>

      <div className="grid">
        {/* Left column */}
        <div className="left">
          <section aria-labelledby="intro">
            <h2 id="intro">Profile</h2>
            <p>
              I’m a hands-on data specialist with deep experience across <strong>Data Engineering, Data Architecture, Master Data Management (MDM), and Data Governance</strong>.
              I’ve shipped large-scale pipelines and lakehouse architectures for companies in Brazil, the US, and EMEA/APAC—spanning education, retail, insurance,
              consumer goods, and adtech. I love understanding systems in depth and turning messy data into reliable, governed assets that power products and decisions.
            </p>
            <div className="kpis" role="list" aria-label="Career highlights">
              <div className="kpi" role="listitem"><strong>30+ yrs</strong><span className="small">Software &amp; Data</span></div>
              <div className="kpi" role="listitem"><strong>Multi-cloud</strong><span className="small">AWS • Azure • GCP</span></div>
              <div className="kpi" role="listitem"><strong>End-to-end</strong><span className="small">Ingestion → Governance</span></div>
            </div>
          </section>

          <section aria-labelledby="now">
            <h2 id="now">What I’m Working On</h2>
            <ul>
              <li><strong>AdRoll/NextRoll:</strong> Audience segmentation pipelines at scale (Apache Spark/Flink/Kafka, Airflow on AWS), ClickHouse integrations, and API work across Python, Go, and Java.</li>
              <li><strong>Consulting (Brazil &amp; International):</strong> Lakehouse &amp; medallion architectures (raw/bronze/silver/gold), <strong>MDM &amp; Data Governance</strong> frameworks, and real-time ingestion with Kafka/Flink.</li>
              <li><strong>Ongoing R&amp;D:</strong> Delta Lake best practices, performance tuning, and governance standards for multi-domain 360 views (Customer, Student, Supplier, Product).</li>
            </ul>
          </section>

          <section aria-labelledby="xp">
            <h2 id="xp">Selected Experience</h2>
            <ul>
              <li><strong>Data Engineering @ AdRoll/NextRoll:</strong> High-throughput audience &amp; CTV pipelines, OMFG (minute-file) event flows, segment generation, and ClickHouse loading; API v1/v2 compatibility and rule-conversion tooling.</li>
              <li><strong>Beverages &amp; CPG:</strong> Sell-in / sell-out / sell-through analytics on Azure (ADF + Databricks + Delta), SAP integrations, SharePoint ingestion, medallion architecture.</li>
              <li><strong>Education Group:</strong> Data lakehouse from raw to gold; ODS (silver) consolidation, star schema modeling, and governance processes across student lifecycle domains.</li>
              <li><strong>MDM/DG Programs:</strong> Golden-record modeling, match-trust-merge, stewardship workflows, data quality KPIs, and lineage/catalog enablement (Purview and peers).</li>
            </ul>
          </section>

          <section aria-labelledby="talks">
            <h2 id="talks">Talks &amp; Teaching</h2>
            <ul className="list-compact">
              <li>Master Data Management (MDM) &amp; Reference Data Management (RDM): principles, candidate selection, and operating models.</li>
              <li>Data Quality: metrics, contracts, expectations, and pipeline-level enforcement.</li>
              <li>Spark/Databricks: schema management, withColumn/filter/select patterns, and Delta Lake internals.</li>
            </ul>
          </section>
        </div>

        {/* Right column */}
        <aside>
          <section aria-labelledby="skills">
            <h2 id="skills">Core Skills</h2>
            <div className="pillset">
              <span className="pill">Apache Spark (Py/Java)</span>
              <span className="pill">Flink</span>
              <span className="pill">Kafka</span>
              <span className="pill">Airflow/MWAA</span>
              <span className="pill">Delta Lake</span>
              <span className="pill">ClickHouse</span>
              <span className="pill">Databricks</span>
              <span className="pill">AWS • Azure • GCP</span>
              <span className="pill">MDM &amp; Data Governance</span>
              <span className="pill">SQL (Postgres/Redshift)</span>
              <span className="pill">Data Modeling (Star/3NF)</span>
              <span className="pill">Python • Java • Go</span>
              <span className="pill">REST/GraphQL APIs</span>
            </div>
          </section>

          <section aria-labelledby="stack">
            <h2 id="stack">Recent Stack</h2>
            <div className="two-col">
              <ul>
                <li>AWS (S3, EMR, EC2, IAM)</li>
                <li>Azure (ADF, ADLS2, Databricks, Entra)</li>
                <li>GCP (BigQuery, Dataflow)</li>
                <li>Databricks (Delta, Unity-like patterns)</li>
                <li>Airflow DAGs (MWAA)</li>
              </ul>
              <ul>
                <li>ClickHouse</li>
                <li>Terraform, Jenkins, Docker</li>
                <li>VS Code, Git (feature branches)</li>
                <li>Observability &amp; logging (Loguru, metrics)</li>
                <li>Confluence/Obsidian docs</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="goals">
            <h2 id="goals">Interests &amp; Goals</h2>
            <ul>
              <li>Databricks &amp; Spark performance patterns</li>
              <li>Robust MDM platforms for Open Banking/Insurance</li>
              <li>Governed, real-time 360s (Customer/Student)</li>
              <li>GenAI applied to data quality &amp; governance</li>
            </ul>
          </section>

          <section aria-labelledby="contact">
            <h2 id="contact">Links</h2>
            <ul>
              <li><a href="https://github.com/YOUR_GH_USERNAME" target="_blank" rel="noopener">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="mailto:you@example.com">you@example.com</a></li>
            </ul>
          </section>
        </aside>
      </div>

      <footer>
        <p>© <span>{year}</span> Samir Duenhas Jahchan — Built with care for clarity, accessibility, and speed.</p>
      </footer>
    </main>
  );
}
