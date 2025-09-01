"use client";

// Use relative import (same folder)
import CanvasSparkleTrail from "./CanvasSparkleTrail";
// If you want a different effect later, swap the import above:
// import LensCursor from "./LensCursor";
// import MagneticCursor from "./MagneticCursor";
// import ClickRipple from "./ClickRipple";

export default function ClientEffects() {
  return (
    <>
      <CanvasSparkleTrail />
      {/* <LensCursor /> */}
      {/* <MagneticCursor /> */}
      {/* <ClickRipple /> */}
    </>
  );
}
