import HomeHero from "./HomeHero";
import MarqueeRow from "./MarqueeRow";
import { getHeroItems, getFrenchMovies, getMoviesByGenre, getTopRatedMovies, GENRES } from "@/lib/tmdb/queries";
import styles from "./tmdb.module.css";

export async function HomeHeroSection() {
  const hero = await getHeroItems(6);
  return <HomeHero items={hero} />;
}

export async function MovieCatalogSection() {
  const [featured, sciFi, topRated] = await Promise.all([
    getFrenchMovies(),
    getMoviesByGenre(GENRES.sciFi),
    getTopRatedMovies(),
  ]);

  const rows = [
    { title: "Hollywood Blockbusters", subtitle: "Latest box-office releases in true 4K Ultra HD.", items: featured, speed: 0.4 },
    { title: "Action & Sci-Fi Thrillers", subtitle: "High-octane entertainment with Dolby 5.1 surround sound.", items: sciFi, speed: 0.5 },
    { title: "Top-Rated Classics & Series", subtitle: "Critically acclaimed movies and complete multi-season series.", items: topRated, speed: 0.45 },
  ].filter((r) => r.items.length > 0);

  if (rows.length === 0) return null;

  return (
    <section className={styles.cine} aria-label="Featured Movies and TV Series">
      <div className="container">
        <div className={styles.cineIntro}>
          <span className={styles.sectionLabel}>On-Demand Library</span>
          <h2 className={styles.sectionTitle}>180,000+ Movies &amp; Shows Included</h2>
          <p className={styles.sectionText}>
            Sample selection from our on-demand catalog. Enjoy unlimited access to major cinema releases, TV series, documentaries, and kids programming included with every subscription.
          </p>
        </div>

        {rows.map((r) => (
          <MarqueeRow key={r.title} title={r.title} subtitle={r.subtitle} items={r.items} speed={r.speed} />
        ))}

        <p className={styles.cineAttribution}>
          Film and television metadata provided by{" "}
          <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
            The Movie Database (TMDB)
          </a>
          . This service uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>
    </section>
  );
}

export default async function MediaSection() {
  const [hero, featured, sciFi, topRated] = await Promise.all([
    getHeroItems(6),
    getFrenchMovies(),
    getMoviesByGenre(GENRES.sciFi),
    getTopRatedMovies(),
  ]);

  const rows = [
    { title: "Hollywood Blockbusters", subtitle: "Latest box-office releases in true 4K Ultra HD.", items: featured, speed: 0.4 },
    { title: "Action & Sci-Fi Thrillers", subtitle: "High-octane entertainment with Dolby 5.1 surround sound.", items: sciFi, speed: 0.5 },
    { title: "Top-Rated Classics & Series", subtitle: "Critically acclaimed movies and complete multi-season series.", items: topRated, speed: 0.45 },
  ].filter((r) => r.items.length > 0);

  return (
    <>
      <HomeHero items={hero} />

      {rows.length > 0 && (
        <section className={styles.cine} aria-label="Featured Movies and TV Series">
          <div className="container">
            <div className={styles.cineIntro}>
              <span className={styles.sectionLabel}>On-Demand Library</span>
              <h2 className={styles.sectionTitle}>180,000+ Movies &amp; Shows Included</h2>
              <p className={styles.sectionText}>
                Sample selection from our on-demand catalog. Enjoy unlimited access to major cinema releases, TV series, documentaries, and kids programming included with every subscription.
              </p>
            </div>

            {rows.map((r) => (
              <MarqueeRow key={r.title} title={r.title} subtitle={r.subtitle} items={r.items} speed={r.speed} />
            ))}

            <p className={styles.cineAttribution}>
              Film and television metadata provided by{" "}
              <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
                The Movie Database (TMDB)
              </a>
              . This service uses the TMDB API but is not endorsed or certified by TMDB.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
