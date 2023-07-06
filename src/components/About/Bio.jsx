import React, {  useRef, Suspense } from "react";

import {BioDescription} from "./BioDescription";
import {InfoTable} from "./InfoTable";

export function Bio() {
  
  return (
    <article
      className="relative w-full text-left flex flex-col items-center gap-10 animate-show"
    >
      <BioDescription />
      <InfoTable/>
    </article>
  );
}
