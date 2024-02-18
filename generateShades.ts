export function generateShadesAndTints(color: string): string[] {
  const parsedColor = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  if (!parsedColor) {
    throw new Error("Invalid color format. Please provide a valid hex color.");
  }
  const [, red, green, blue] = parsedColor.map((value) => parseInt(value, 16));

  const r = red / 255,
    g = green / 255,
    b = blue / 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  const shadesAndTints: string[] = [];
  for (let i = 0; i < 10; i++) {
    const lightness = (i / 10) * 80 + 10;
    shadesAndTints.push(
      `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
        lightness
      )}%)`
    );
  }

  return shadesAndTints;
}
