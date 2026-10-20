"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { photos } from "@/lib/photos";
import { photosFor } from "@/lib/sitePhotos";

/** Client only to read the path; the markup is rendered on the server with the page. */
export function HeroPhotos({ priority = true }: { priority?: boolean }) {
  const [a, b] = photosFor(usePathname() || "/");
  const left = photos[a];
  const right = photos[b];

  return (
    <div className="relative mx-auto flex h-[330px] w-full max-w-[460px] items-end justify-center gap-4 sm:h-[400px] lg:mx-0 lg:ml-auto">
      <div className="shoulder relative h-[86%] w-1/2 overflow-hidden bg-mist shadow-card">
        <Image src={left.src} alt={left.alt} fill priority={priority} sizes="(max-width: 1024px) 50vw, 230px" className="object-cover" />
      </div>
      <div className="shoulder relative mb-10 h-[86%] w-1/2 overflow-hidden bg-mist shadow-card">
        <Image src={right.src} alt={right.alt} fill priority={priority} sizes="(max-width: 1024px) 50vw, 230px" className="object-cover" />
      </div>
      {/* The held document from the monogram, set between the two frames */}
      <div className="absolute bottom-3 left-1/2 flex h-16 w-14 -translate-x-1/2 flex-col justify-end gap-1.5 bg-white p-3 shadow-card-hover" aria-hidden="true">
        <span className="absolute right-0 top-0 h-4 w-4 bg-accent-muted [clip-path:polygon(0_0,100%_100%,0_100%)]" />
        <span className="h-[3px] w-full bg-accent" />
        <span className="h-[3px] w-full bg-accent" />
      </div>
    </div>
  );
}
