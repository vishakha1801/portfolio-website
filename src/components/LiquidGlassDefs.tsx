// src/components/LiquidGlassDefs.tsx
import React, { useMemo } from "react";
import { buildDisplacementDataURL } from "@/lib/liquidGlass";

type Props = {
    id?: string;
    width: number;
    height: number;
    bezel?: number;     // default 24
    maxShift?: number;  // default 24
};

const LiquidGlassDefs: React.FC<Props> = ({ id = "liquidGlass", width, height, bezel = 24, maxShift = 24 }) => {
    const url = useMemo(
        () => (typeof window !== "undefined"
            ? buildDisplacementDataURL({ width, height, bezel, maxShift })
            : ""),
        [width, height, bezel, maxShift]
    );

    return (
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
            <filter id={id} colorInterpolationFilters="sRGB" x="0" y="0" width="100%" height="100%">
                {/* Displacement field */}
                <feImage href={url} x="0" y="0" width={width} height={height} result="disp" />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="disp"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    scale={maxShift}
                />

                {/* Simple specular rim (creative, not physically exact) */}
                <feSpecularLighting in="SourceGraphic" surfaceScale="2" specularConstant="1"
                                    specularExponent="30" lightingColor="white" result="spec">
                    <fePointLight x={-width} y={-height} z="200" />
                </feSpecularLighting>
                <feComposite in="spec" in2="SourceAlpha" operator="in" result="specMasked" />
                <feBlend in="SourceGraphic" in2="specMasked" mode="screen" />
            </filter>
        </svg>
    );
};

export default LiquidGlassDefs;
