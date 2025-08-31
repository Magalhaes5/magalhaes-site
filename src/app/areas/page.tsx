"use client";

const AREAS = [
  { name: "Luxembourg City", slug: "luxembourg-city", brief: "Historic centre, Kirchberg finance, excellent transport." },
  { name: "Strassen", slug: "strassen", brief: "Residential, shopping, quick access to city and highways." },
  { name: "Bertrange", slug: "bertrange", brief: "Family-friendly, schools, parks, Cactus Belle Étoile nearby." },
  { name: "Esch-sur-Alzette", slug: "esch-sur-alzette", brief: "Dynamic, University district, emerging neighbourhoods." },
];

export default function AreasIndex() {
  return (
    <section className="section card">
      <h1>Neighbourhoods in Luxembourg</h1>
      <p>Explore selected areas. Each page includes an overview, highlights, and a snapshot of average prices (examples).</p>
      <div className="grid3" style={{marginTop:12}}>
        {AREAS.map(a => (
          <a key={a.slug} className="card mini" href={`/areas/${a.slug}`}>
            <h3>{a.name}</h3>
            <p>{a.brief}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
