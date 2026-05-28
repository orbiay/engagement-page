import styles from './page.module.css';

export default function CommitmentsPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Experience Morocco more deeply, and leave it better.
          </h1>
        </div>
        <div className={styles.heroBottomText}>
          <p>
            At Experience Morocco, we believe travel should create value for those who welcome you as much as for those who explore. Every journey is designed to support local communities, preserve traditions, and reveal Morocco in its most authentic form.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="container">
        <div className={styles.introSection}>
          <span className={styles.introEyebrow}>Our approach</span>
          <h2 className={styles.introTitle}>“Authentic. Local. Thoughtful.”</h2>
          <p className={styles.introText}>
            Our approach is simple: stay close to what makes Morocco truly special. By collaborating with selected local partners, we design journeys that feel genuine, immersive, and mindful of the places and people behind every experience.
          </p>
          <a href="#engagements" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
            DISCOVER BEYOND
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsStrip}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>MOROCCAN PARTNERS</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>+85%</div>
              <div className={styles.statLabel}>OF BUDGET STAYS IN MOROCCO</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>12</div>
              <div className={styles.statLabel}>REGIONS COVERED</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4.9/5</div>
              <div className={styles.statLabel}>TRAVELERS' RATING</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="engagements" className={`${styles.pillarsSection} container`}>
        <span className="section-eyebrow">CAUSES CLOSE TO OUR HEART</span>
        <h2 className="section-title">why do they matter?</h2>
        <p className="section-lead">
          Behind every journey lie real people and initiatives shaping Morocco’s future. Through meaningful partnerships, we support projects that create opportunity, foster inclusion, and strengthen local communities.
        </p>

        <div className={styles.pillarsGrid}>
          <article className={styles.pillarCard}>
            <img
              className={styles.pillarImage}
              src="https://images.unsplash.com/photo-1531219432768-9f540ec7a4ff?auto=format&fit=crop&q=80&w=900"
              alt="Jadara Foundation"
            />
            <div className={styles.pillarBody}>
              <div className={styles.pillarNumber}>CAUSE 1 — JADARA FOUNDATION</div>
              <h3 className={styles.pillarTitle}>Investing in the next generation</h3>
              <p className={styles.pillarText}>
                Through our partnership with the Jadara Foundation, we support talented Moroccan youth by helping them access education, mentorship, and new opportunities — empowering them to build their future.
              </p>
              <a href="#populations" className={styles.pillarLink}>LEARN MORE →</a>
            </div>
          </article>

          <article className={styles.pillarCard}>
            <img
              className={styles.pillarImage}
              src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&q=80&w=900"
              alt="Sporting Club Casablanca"
            />
            <div className={styles.pillarBody}>
              <div className={styles.pillarNumber}>CAUSE 2 — SPORTING CLUB CASABLANCA</div>
              <h3 className={styles.pillarTitle}>Empowering women through sport</h3>
              <p className={styles.pillarText}>
                By supporting Sporting Club Casablanca, we contribute to a project that promotes women’s empowerment and opportunity, through a team that is redefining the future of football in Morocco.
              </p>
              <a href="#planete" className={styles.pillarLink}>LEARN MORE →</a>
            </div>
          </article>

          <article className={styles.pillarCard}>
            <img
              className={styles.pillarImage}
              src="https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&q=80&w=900"
              alt="Women-led Cooperatives"
            />
            <div className={styles.pillarBody}>
              <div className={styles.pillarNumber}>CAUSE 3 — WOMEN-LED COOPERATIVES</div>
              <h3 className={styles.pillarTitle}>Supporting local women, one journey at a time</h3>
              <p className={styles.pillarText}>
                Across Morocco, we actively work with women-led cooperatives and encourage our guests to visit and engage with at least one during their journey. Through these encounters, we help create direct opportunities for local women while offering travelers a more authentic connection to the culture.
              </p>
              <a href="#tourisme" className={styles.pillarLink}>LEARN MORE →</a>
            </div>
          </article>
        </div>
      </section>

      {/* DEEP DIVE 1 */}
      <section id="populations" className={styles.deepSection}>
        <div className="container">
          <div className={styles.deepRow}>
            <div className={styles.deepImageWrap}>
              <img
                className={styles.deepImage}
                src="https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&q=80&w=1200"
                alt="Jadara Foundation"
              />
              <div className={styles.deepBadge}>
                <strong>+200</strong>
                <span>Youth supported</span>
              </div>
            </div>
            <div>
              <span className={styles.deepEyebrow}>CAUSE 01 — JADARA FOUNDATION</span>
              <h2 className={styles.deepTitle}>Investing in the next generation</h2>
              <p className={styles.deepText}>
                Through our partnership with the Jadara Foundation, we support talented Moroccan youth by helping them access education, mentorship, and new opportunities — empowering them to build their future.
              </p>
              <ul className={styles.deepList}>
                <li>Scholarships for higher education</li>
                <li>Mentorship programs with industry professionals</li>
                <li>Career guidance and professional development</li>
                <li>Creating pathways for social mobility</li>
              </ul>
              <a href="#" className="btn btn-primary">Discover our partners</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className={styles.quoteSection}>
        <p className={styles.quoteText}>
          “Traveling differently means leaving a positive mark wherever we go. In Morocco, that means listening, learning, and giving back to the communities that welcome us.”
        </p>
        <div className={styles.quoteAuthor}>— EXPERIENCE MOROCCO TEAM</div>
      </section>

      {/* DEEP DIVE 2 */}
      <section id="planete" className={`${styles.deepSection} ${styles.alt}`}>
        <div className="container">
          <div className={`${styles.deepRow} ${styles.reverse}`}>
            <div className={styles.deepImageWrap}>
              <img
                className={styles.deepImage}
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200"
                alt="Sporting Club Casablanca"
              />
              <div className={styles.deepBadge}>
                <strong>1st</strong>
                <span>Women's Champions League Finalists</span>
              </div>
            </div>
            <div>
              <span className={styles.deepEyebrow}>CAUSE 02 — SPORTING CLUB CASABLANCA</span>
              <h2 className={styles.deepTitle}>Empowering women through sport</h2>
              <p className={styles.deepText}>
                By supporting Sporting Club Casablanca, we contribute to a project that promotes women’s empowerment and opportunity, through a team that is redefining the future of football in Morocco.
              </p>
              <ul className={styles.deepList}>
                <li>Aiding professional development for female athletes</li>
                <li>Championing gender equality in sports</li>
                <li>Inspiring young girls across the country</li>
                <li>Investing in world-class training facilities</li>
              </ul>
              <a href="#" className="btn btn-primary">Support the team</a>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE 3 */}
      <section id="tourisme" className={styles.deepSection}>
        <div className="container">
          <div className={styles.deepRow}>
            <div className={styles.deepImageWrap}>
              <img
                className={styles.deepImage}
                src="https://images.unsplash.com/photo-1565689876697-e467b6c54da2?auto=format&fit=crop&q=80&w=1200"
                alt="Women-led Cooperatives"
              />
              <div className={styles.deepBadge}>
                <strong>50+</strong>
                <span>Cooperatives supported</span>
              </div>
            </div>
            <div>
              <span className={styles.deepEyebrow}>CAUSE 03 — WOMEN-LED COOPERATIVES</span>
              <h2 className={styles.deepTitle}>Supporting local women, one journey at a time</h2>
              <p className={styles.deepText}>
                Across Morocco, we actively work with women-led cooperatives and encourage our guests to visit and engage with at least one during their journey. Through these encounters, we help create direct opportunities for local women while offering travelers a more authentic connection to the culture.
              </p>
              <ul className={styles.deepList}>
                <li>Direct income for women artisans and producers</li>
                <li>Preservation of traditional craftsmanship</li>
                <li>Ethical sourcing of argan oil, textiles, and pottery</li>
                <li>Promoting financial independence in rural areas</li>
              </ul>
              <a href="#" className="btn btn-primary">See our partner cooperatives</a>
            </div>
          </div>
        </div>
      </section>

      {/* REPORT */}
      <section className={styles.reportSection}>
        <div className={styles.reportContent}>
          <h2 className={styles.reportTitle}>Our 2025 impact report</h2>
          <p className={styles.reportText}>
            Total transparency: every year, we publish a comprehensive review of our commitments. Discover how your travels translate into concrete impact, backed by numbers.
          </p>
          <a href="#" className="btn btn-light">READ THE REPORT (PDF)</a>
        </div>
      </section>

      {/* PRESS + ETHICS */}
      <section className={`${styles.dualSection} container`}>
        <div className={styles.dualGrid}>
          <article className={styles.dualCard}>
            <div
              className={styles.dualCardImage}
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=900')" }}
            />
            <h3>Press area</h3>
            <p>
              Journalists, bloggers, creators: find our press releases, high-definition visuals, and press contacts for your reports on responsible tourism in Morocco.
            </p>
            <a href="mailto:press@experiencemorocco.com" className="btn">Contact press</a>
          </article>

          <article className={styles.dualCard}>
            <div
              className={styles.dualCardImage}
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=900')" }}
            />
            <h3>Report a practice contrary to our commitments</h3>
            <p>
              We take any practice that goes against our values very seriously. If you witness a problematic situation during a trip, write to us in complete confidentiality.
            </p>
            <p>
              <a href="mailto:ethics@experiencemorocco.com" className={styles.contactLink}>
                ethics@experiencemorocco.com
              </a>
            </p>
          </article>
        </div>
      </section>

      {/* PREVIEW BANNER */}
      <div className={styles.previewBanner}>
        <strong>PREVIEW</strong> "Our commitments" page mockup for Experience Morocco — sample content, to be validated before integration.
      </div>
    </>
  );
}
