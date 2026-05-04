import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BiodiversityOS — Marine Biodiversity Data Platform",
    short_name: "BiodiversityOS",
    description:
      "Community-driven platform for collecting, structuring, and visualizing marine biodiversity data. Track shark sightings and contribute to conservation.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#1C4D8D",
    icons: [
      {
        src: "/image.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/image.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["science", "environment", "education"],
    lang: "en",
    dir: "ltr",
  };
}
