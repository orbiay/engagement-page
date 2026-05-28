import styles from './page.module.css';

export default function CommitmentsPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Welcome to Experience Morocco
          </h1>
          <p className={styles.heroSubtitle}>
            Delve into our unique culture and enjoy a journey like no other
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="container">
        <div className={styles.introSection}>
          <span className={styles.introEyebrow}>Notre approche</span>
          <h2 className={styles.introTitle}>Voyager mieux, c’est possible</h2>
          <p className={styles.introText}>
            Depuis nos débuts, nous sommes convaincus que voyager local, c’est donner tout
            son sens au tourisme. En connectant directement les voyageurs avec des guides,
            artisans et hôteliers marocains, nous créons des expériences plus authentiques,
            plus humaines, et plus enrichissantes pour tous.
          </p>
          <p className={styles.introText}>
            Chaque dirham investi dans un voyage Experience Morocco soutient des familles,
            préserve un savoir-faire ou protège un paysage. C’est notre engagement&nbsp;: un
            tourisme qui prend soin du Maroc, de ses habitants et de ceux qui viennent le découvrir.
          </p>
          <a href="#engagements" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
            Découvrir nos engagements
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsStrip}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Partenaires marocains</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>+85%</div>
              <div className={styles.statLabel}>Du budget reste au Maroc</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>12</div>
              <div className={styles.statLabel}>Régions couvertes</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4.9/5</div>
              <div className={styles.statLabel}>Note de nos voyageurs</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="engagements" className={`${styles.pillarsSection} container`}>
        <span className="section-eyebrow">Nos trois piliers</span>
        <h2 className="section-title">Pour qui faisons-nous la différence ?</h2>
        <p className="section-lead">
          Trois engagements concrets guident chacune de nos décisions, de la conception
          d’un itinéraire au choix de nos hébergements.
        </p>

        <div className={styles.pillarsGrid}>
          <article className={styles.pillarCard}>
            <img
              className={styles.pillarImage}
              src="https://images.unsplash.com/photo-1531219432768-9f540ec7a4ff?auto=format&fit=crop&q=80&w=900"
              alt="Artisans et habitants marocains"
            />
            <div className={styles.pillarBody}>
              <div className={styles.pillarNumber}>Engagement 01</div>
              <h3 className={styles.pillarTitle}>Agir pour les populations</h3>
              <p className={styles.pillarText}>
                Nous travaillons exclusivement avec des guides, chauffeurs, cuisiniers et
                artisans marocains, rémunérés à leur juste valeur. Notre approche
                local-first soutient l’économie des médinas comme celle des villages de l’Atlas.
              </p>
              <a href="#populations" className={styles.pillarLink}>En savoir plus →</a>
            </div>
          </article>

          <article className={styles.pillarCard}>
            <img
              className={styles.pillarImage}
              src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&q=80&w=900"
              alt="Paysages naturels marocains"
            />
            <div className={styles.pillarBody}>
              <div className={styles.pillarNumber}>Engagement 02</div>
              <h3 className={styles.pillarTitle}>Agir pour la planète</h3>
              <p className={styles.pillarText}>
                Du désert d’Erg Chebbi aux oasis du Drâa, nous protégeons les écosystèmes
                fragiles du Maroc. Nous réinvestissons une partie de chaque voyage dans
                des projets de reforestation et de gestion durable de l’eau.
              </p>
              <a href="#planete" className={styles.pillarLink}>En savoir plus →</a>
            </div>
          </article>

          <article className={styles.pillarCard}>
            <img
              className={styles.pillarImage}
              src="https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&q=80&w=900"
              alt="Voyageurs explorant le Maroc autrement"
            />
            <div className={styles.pillarBody}>
              <div className={styles.pillarNumber}>Engagement 03</div>
              <h3 className={styles.pillarTitle}>Transformer le tourisme</h3>
              <p className={styles.pillarText}>
                Hors-saison, hors des sentiers battus, à pied, en train ou à dos de
                mulet&nbsp;: nous proposons des manières de voyager qui ont du sens, et qui
                évitent le tourisme de masse des grandes villes impériales.
              </p>
              <a href="#tourisme" className={styles.pillarLink}>En savoir plus →</a>
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
                alt="Coopérative de femmes au Maroc"
              />
              <div className={styles.deepBadge}>
                <strong>+200</strong>
                <span>Familles partenaires soutenues</span>
              </div>
            </div>
            <div>
              <span className={styles.deepEyebrow}>Engagement 01 — Populations</span>
              <h2 className={styles.deepTitle}>Un tourisme qui profite aux Marocains</h2>
              <p className={styles.deepText}>
                Nous croyons que la meilleure manière de découvrir le Maroc, c’est de
                rencontrer ceux qui le font vivre. C’est pourquoi 100&nbsp;% de nos guides
                sont marocains, 100&nbsp;% de nos riads sont indépendants et familiaux, et
                chaque expérience est conçue pour faire circuler la valeur localement.
              </p>
              <ul className={styles.deepList}>
                <li>Rémunération transparente et au-dessus des standards locaux</li>
                <li>Partenariats long terme avec coopératives de femmes (argan, tapis, poterie)</li>
                <li>Formation continue de nos guides aux pratiques responsables</li>
                <li>Hébergements indépendants privilégiés aux grandes chaînes</li>
              </ul>
              <a href="#" className="btn btn-primary">Découvrir nos partenaires</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className={styles.quoteSection}>
        <p className={styles.quoteText}>
          “Voyager autrement, c’est laisser une trace positive partout où l’on passe.
          Au Maroc, cela veut dire écouter, apprendre, et redonner aux communautés qui
          nous accueillent.”
        </p>
        <div className={styles.quoteAuthor}>— L’équipe Experience Morocco</div>
      </section>

      {/* DEEP DIVE 2 */}
      <section id="planete" className={`${styles.deepSection} ${styles.alt}`}>
        <div className="container">
          <div className={`${styles.deepRow} ${styles.reverse}`}>
            <div className={styles.deepImageWrap}>
              <img
                className={styles.deepImage}
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200"
                alt="Désert et palmeraies du Maroc"
              />
              <div className={styles.deepBadge}>
                <strong>5 000+</strong>
                <span>Arbres plantés depuis 2022</span>
              </div>
            </div>
            <div>
              <span className={styles.deepEyebrow}>Engagement 02 — Planète</span>
              <h2 className={styles.deepTitle}>Préserver les paysages qui nous font rêver</h2>
              <p className={styles.deepText}>
                Le Maroc fait face à des défis climatiques majeurs&nbsp;: stress hydrique,
                désertification, érosion côtière. Nous agissons à notre échelle pour
                que les paysages que nos voyageurs admirent aujourd’hui soient encore là
                pour les générations à venir.
              </p>
              <ul className={styles.deepList}>
                <li>Compensation carbone obligatoire sur chaque vol intérieur</li>
                <li>Soutien à des projets de reforestation dans l’Atlas et le Souss</li>
                <li>Hébergements à faible empreinte (eau, électricité, déchets)</li>
                <li>Itinéraires construits pour limiter les distances en 4×4</li>
              </ul>
              <a href="#" className="btn btn-primary">Lire notre charte environnementale</a>
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
                alt="Marché traditionnel au Maroc"
              />
              <div className={styles.deepBadge}>
                <strong>70%</strong>
                <span>De voyages hors haute saison</span>
              </div>
            </div>
            <div>
              <span className={styles.deepEyebrow}>Engagement 03 — Tourisme</span>
              <h2 className={styles.deepTitle}>Réinventer la manière de visiter le Maroc</h2>
              <p className={styles.deepText}>
                Sortir des médinas surchargées de Marrakech ou Fès en haute saison.
                Privilégier les rencontres aux selfies. Préférer une nuit chez l’habitant
                à un hôtel international. Voici, concrètement, ce que nous proposons à
                chacun de nos voyageurs.
              </p>
              <ul className={styles.deepList}>
                <li>Itinéraires hors-saison pour désengorger les hauts-lieux</li>
                <li>Rencontres avec habitants, artisans, agriculteurs</li>
                <li>Slow travel&nbsp;: moins de kilomètres, plus de temps sur place</li>
                <li>Promotion des régions méconnues (Rif, Anti-Atlas, Sahara oriental)</li>
              </ul>
              <a href="#" className="btn btn-primary">Voir nos itinéraires engagés</a>
            </div>
          </div>
        </div>
      </section>

      {/* REPORT */}
      <section className={styles.reportSection}>
        <div className={styles.reportContent}>
          <h2 className={styles.reportTitle}>Notre rapport d’impact 2025</h2>
          <p className={styles.reportText}>
            Transparence totale&nbsp;: chaque année, nous publions un bilan complet de nos
            engagements. Découvrez comment vos voyages se traduisent en impact concret,
            chiffres à l’appui.
          </p>
          <a href="#" className="btn btn-light">Lire le rapport (PDF)</a>
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
            <h3>Espace presse</h3>
            <p>
              Journalistes, blogueurs, créateurs&nbsp;: retrouvez nos communiqués, visuels
              haute définition, et contacts presse pour vos reportages sur le tourisme
              responsable au Maroc.
            </p>
            <a href="mailto:press@experiencemorocco.com" className="btn">Contacter la presse</a>
          </article>

          <article className={styles.dualCard}>
            <div
              className={styles.dualCardImage}
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=900')" }}
            />
            <h3>Signaler une pratique contraire à nos engagements</h3>
            <p>
              Nous prenons très au sérieux toute pratique qui irait à l’encontre de nos
              valeurs. Si vous êtes témoin d’une situation problématique au cours d’un
              voyage, écrivez-nous en toute confidentialité.
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
        <strong>PREVIEW</strong> Maquette de la page « Nos engagements » pour Experience Morocco — contenu d’exemple, à valider avant intégration.
      </div>
    </>
  );
}
