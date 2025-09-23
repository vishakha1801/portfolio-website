// src/lib/liquidGlass.ts
// Minimal, fast displacement map generator for a convex "squircle-ish" bezel.
// Chrome-only when used as backdrop-filter; falls back elsewhere.

export type LiquidGlassParams = {
    width: number;     // px
    height: number;    // px
    bezel: number;     // px from edge where curvature exists (0..min/2)
    maxShift: number;  // px maximum displacement (used as feDisplacementMap.scale)
    samples?: number;  // 127 is ideal for 8-bit map
};

// Squircle-like convex profile: y = 1 - (1 - x)^4
function convexProfile01(x: number) {
    const t = 1 - x;
    return 1 - t * t * t * t;
}

// Build a RGBA dataURL where R=dx, G=dy mapped to [0..255] with 128 = no shift.
export function buildDisplacementDataURL({
                                             width,
                                             height,
                                             bezel,
                                             maxShift,
                                             samples = 127,
                                         }: LiquidGlassParams) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;
    const img = ctx.createImageData(width, height);
    const data = img.data;

    // Precompute normalized radial displacement magnitudes along one radius.
    const mag = new Float32Array(samples + 1); // index = distance (0..bezel) mapped to 0..samples
    for (let i = 0; i <= samples; i++) {
        const d = i / samples;                     // 0..1 across bezel
        const curve = convexProfile01(d);          // 0..1 elevated near inner bezel
        mag[i] = curve;                            // normalized
    }

    // Helper to fetch normalized magnitude for any distance 0..bezel
    function getMag(dist: number) {
        if (dist <= 0) return mag[0];
        if (dist >= bezel) return 0;
        const idx = (dist / bezel) * samples;
        const i0 = Math.floor(idx);
        const i1 = Math.min(samples, i0 + 1);
        const t = idx - i0;
        return mag[i0] * (1 - t) + mag[i1] * t;
    }

    const cx = width / 2;
    const cy = height / 2;
    const rx = Math.max(1, width / 2);
    const ry = Math.max(1, height / 2);

    // For each pixel: compute distance to nearest border (ellipse), direction = outward normal.
    // Displace inward (toward center) with magnitude derived from bezel profile.
    let p = 0;
    for (let y = 0; y < height; y++) {
        const ny = (y - cy) / ry;
        for (let x = 0; x < width; x++) {
            const nx = (x - cx) / rx;

            // Signed radius for ellipse; r=1 at edge
            const r = Math.hypot(nx, ny);
            const distFromEdgePx = Math.max(0, (r - 1) * Math.min(rx, ry)); // outside→positive, inside→negative→clamped 0
            const within = distFromEdgePx <= bezel;

            let dx = 0, dy = 0;
            if (within) {
                // Outward normal ≈ radial direction
                const len = Math.hypot(nx, ny) || 1;
                const dirx = nx / len;
                const diry = ny / len;

                // Shift inward (opposite outward) proportional to profile magnitude
                const m = getMag(distFromEdgePx) * maxShift; // pixels
                dx = -dirx * m;
                dy = -diry * m;
            }

            // Map dx,dy (px) → normalized [-1..1] via maxShift, then to [0..255] with 128 bias.
            const rx8 = 128 + Math.max(-1, Math.min(1, dx / maxShift)) * 127;
            const gy8 = 128 + Math.max(-1, Math.min(1, dy / maxShift)) * 127;

            data[p++] = rx8;   // R = X
            data[p++] = gy8;   // G = Y
            data[p++] = 128;   // B ignored
            data[p++] = 255;   // A
        }
    }

    ctx.putImageData(img, 0, 0);
    return canvas.toDataURL("image/png");
}
