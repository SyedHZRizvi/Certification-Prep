---
permalink: /35-Motion-Graphics-UI-Animation/Module-05-Infographic-Data-Viz/Reading/
title: "Module 5: Infographic & Data Viz"
---

# 📊 Module 5: Infographic & Data Viz

## The 60-Second Truth

In 2012, Hans Rosling stood on a TED stage and used animated bubble charts to show 200 years of global health and wealth data in four minutes. The audience gasped. They laughed. They learned something they would remember for years. The data wasn't new, it existed in WHO and World Bank spreadsheets. What was new was the animation. The motion made the data tell a story.

This module teaches you to build the kinds of animated graphics that make data gasp-worthy, not decorative, but revelatory.

---

## 🔬 Animated Chart Types

### Bar Charts

The most-animated chart type. A bar animates from 0 to its final value, typically scaling on the Y-axis from the baseline up.

**AE Setup, Animated Bar Chart:**
1. Create a solid or shape layer for each bar
2. Set the Anchor Point to the bottom center of the bar (so it scales from the baseline up)
3. **Expression on Scale Y:**
   ```javascript
   // Animate from 0% to target height over 1 second
   targetHeight = 200; // pixels, proportional to value
   ease(time, 0, 1.0, 0, targetHeight)
   ```
4. Use a Master Controller (slider expression) to drive all bars simultaneously
5. **Stagger** the bars: each bar starts 4–6 frames after the previous

**Design Principles for Bar Charts:**
- Bars should be 2:1 width-to-gap ratio (bars are wider than the spaces between them)
- Color: one color for all bars unless color encodes a variable
- Labels animate in sync with bar tops (link label position to bar scale via expression)

### Line Charts

Line charts reveal progressively along the X-axis, the line "draws" from left to right.

**AE Setup, Line Chart:**
1. Build the line as a shape layer path matching your data points
2. Apply **Trim Paths** to the shape
3. Keyframe Trim Paths End from 0% to 100% to reveal the line
4. Use a moving dot element that follows the line's path:
   ```javascript
   // Position the dot along the motion path:
   thisComp.layer("Line Path").content("Shape 1").content("Trim Paths 1").end / 100
   ```

### Pie / Donut Charts

Pie segments animate by growing from 0% to their target arc percentage.

**AE Setup, Pie Chart:**
1. Create each segment as a shape layer with a stroke
2. Set **Stroke > Dashes** and animate the dash offset to reveal each segment
3. For a donut chart: use a solid circle cutout on top as a track matte
4. Stagger segment reveals radially (each segment starts as the previous finishes)

### Waffle Charts

Waffle charts display 100 cells (a 10×10 grid) where filled cells = percentage.

**AE Setup, Waffle Chart:**
1. Create one cell as a shape layer
2. Duplicate 99 times → organize in 10×10 grid
3. Use **index** expression to animate each cell in sequence:
   ```javascript
   // Each cell fills when its index falls within the "filled" count
   filledCount = 67; // 67% filled
   if (index <= filledCount) {
       ease(time, (index - 1) * 0.02, index * 0.02, 0, 1)
   } else { 0; }
   ```

---

## 🎯 What the Exam Tests: Infographic & Data Viz

> 🎯 **Exam Callout 1:** Bar chart anchor points must be at the **bottom center** of the bar, not the default center of the layer. If the anchor point is in the center, scaling on the Y-axis causes the bar to grow upward AND downward simultaneously. The exam tests: which anchor point position enables a bar chart to animate from the baseline upward?

> 🎯 **Exam Callout 2:** Waffle charts use a **10×10 grid** (100 cells) to represent percentages. Each cell = 1%. The exam may ask: what grid size is used for a waffle chart showing data in 1% increments? Answer: 10 by 10.

> 🎯 **Exam Callout 3:** The Hans Rosling "200 Countries, 200 Years" TED Talk (2010) is the canonical example of animated data storytelling. The exam may reference it when asking about principles of data animation, specifically: animate one variable at a time and contextualize after the reveal.

> 🎯 **Exam Callout 4:** Pie/donut chart segments are animated using **Stroke Dash offset** (not Scale or Opacity). A circle with a very thick stroke whose dash length equals the circumference, with an animated offset, creates a filling arc effect. The exam tests: which AE technique animates a pie chart segment filling?

> 🎯 **Exam Callout 5:** The data storytelling insight should arrive at the **2/3 mark** of the animation. First third: context. Middle third: change. Final third: absorption. The exam tests which part of the animation contains the key insight.

> 🎯 **Exam Callout 6:** AEJuice presets are starting points, not finished deliverables. The exam may phrase a question as: "A designer applies an unmodified AEJuice preset to a client project. What is the most significant professional problem with this approach?" Answer: the animation is identifiably templated and not custom to the client's brand.

> 🎯 **Exam Callout 7:** In map animations, converting an SVG to Shape Layers in AE is done via **Layer > Create Shapes from Vector Layer**. After conversion, each SVG path becomes an editable AE shape layer. The exam tests which AE command converts vector imports to shape layers.

---

## ⚠️ Common Traps: Data Visualization

**Trap 1, Proportion vs. Data Accuracy:** Animated bar charts that use aesthetic scaling (taller bars look more dramatic) can misrepresent the underlying data. The bar heights must be mathematically proportional to the values. A bar representing 80 must be exactly 4x the height of a bar representing 20.

**Trap 2, Color as Decoration:** Using five different colors for five bars in a bar chart implies the colors encode variables. If the colors are purely decorative, you're training viewers to look for meaning that isn't there. Single-color bars with one highlight color for the key data point is the correct approach.

**Trap 3, SVG Import Resolution:** Importing an SVG map into AE at a small composition size and then scaling up creates rasterization. SVGs must be imported as compositions (not footage) to remain resolution-independent. The option appears in the Import dialog: import as Composition vs. Footage.

**Trap 4 AEJuice Template Modification:** Students who apply AEJuice presets without understanding the underlying animation structure can't make targeted changes when the client requests revisions. Always deconstruct a preset before using it understand what each keyframe does, then modify from knowledge, not guesswork.

---

## 🗺️ Map Animations

Map animations are used in news graphics, documentary, and data journalism to show geographic relationships, travel routes, or regional data.

### Types of Map Animations

| Type | Use | Technique |
|------|-----|-----------|
| **Route Animation** | Travel paths, logistics | Trim Paths on a line layer |
| **Choropleth** | Regional data (e.g., election maps) | Fill color expression per region |
| **Dot Map** | Density/distribution | Particle system or randomized dots |
| **Zoom & Pan** | Focus on a specific region | Camera position animation |

### Importing Maps

1. Export SVG from Mapbox, Google Maps, or a GIS tool
2. Import into Illustrator, clean up, export cleaned SVG
3. Import into AE as a Composition (preserves layers)
4. Convert to Shape Layers

---

## 📖 Data Storytelling for News Graphics

Good data animation tells a story, not just a chart. The structure:

1. **Establish the metric**, introduce the variable (e.g., "Global CO₂ emissions")
2. **Show the baseline**, reveal the starting state (e.g., 1990 levels)
3. **Show the change**, animate the data as it changes
4. **Reveal the insight**, highlight the key moment (the year emissions peaked, the country that changed fastest)
5. **Contextualize**, add comparison lines, annotations, or secondary data

> 🎯 **Exam Tip:** The insight should come at the 2/3 mark of the animation. The first third establishes context; the last third gives the viewer time to absorb the insight. Don't rush to the reveal.

---

## 🔢 Advanced Data Animation: Counter Expressions

The animated counter a number that ticks up (or down) to a final value is one of the most-requested infographic elements. A robust counter expression handles formatting, easing, and edge cases.

### The Professional Counter Expression

```javascript
// Text layer Source Text expression
// Replace startVal, endVal, duration, and decimals as needed

startVal = 0;
endVal = 2847391;  // target number
duration = 3;       // animation duration in seconds
decimals = 0;       // decimal places (0 for integers)

// Progress (0 to 1) with ease-in-out
t = Math.min(time / duration, 1);
t = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;  // ease-in-out

// Calculate current value
current = startVal + (endVal - startVal) * t;

// Format with commas (toLocaleString)
if (decimals === 0) {
  Math.round(current).toLocaleString();
} else {
  current.toFixed(decimals);
}
```

### Counter Variations

| Variation | Change to Expression |
|-----------|---------------------|
| Percentage counter | Add `+ "%"` after the value |
| Currency counter | Add `"$"` prefix; use `.toFixed(2)` |
| Negative count (countdown) | Set `endVal` lower than `startVal` |
| Decimal (e.g., 4.7 stars) | Set `decimals = 1`, remove `.toLocaleString()` |
| Eased only at end (data reveal) | Replace ease function with `Math.pow(t, 0.5)` |

### The Master Controller for Multi-Chart Comps

For infographic pieces with 3–5 chart types, a single Master Controller null drives all reveals:

```javascript
// On MASTER CONTROLLER null:
// Add Slider named "Reveal" (range: 0–100)

// On Bar Chart bars' scale expression:
masterProgress = thisComp.layer("MASTER CONTROLLER")
  .effect("Reveal")("Slider") / 100;
barMax = 200;  // max bar height in px
[scale[0], barMax * masterProgress]
```

Scrubbing the single "Reveal" slider from 0 to 100 animates every chart in the composition simultaneously, in perfect sync.

---

## 🔌 Motion Bro and AEJuice Workflows

### Motion Bro

Motion Bro is a panel extension for AE that manages third-party preset packs. It allows you to preview, install, and apply animation presets from providers like AEJuice, Videohive, and custom packs.

**Workflow:**
1. Install Motion Bro from aescripts.com
2. Install preset packs (AEJuice has a free starter pack)
3. Preview animations in the Motion Bro panel
4. Drag to the composition to apply

**Best Use:** Motion Bro is a time-saver for infographic elements, animated counters, map pins, chart bars, dividers, and text reveals.

### AEJuice

AEJuice offers 900+ free animations across their "AEJuice Starter Pack." Key categories:
- **Transitions:** Wipes, glitches, zooms
- **Text Presets:** Entrance/exit animations for headlines
- **Elements:** Icons, shapes, dividers
- **Infographic:** Animated charts, meters, gauges

> 🚨 **Trap on the Exam:** AEJuice presets are designed to be starting points, not final deliverables. Using an unmodified AEJuice preset on a client project is immediately identifiable by any experienced motion designer. Always customize timing, color, and typography.

---

## 🎨 Color Theory for Data Animation

Color in animated data visualization operates under constraints that don't exist in static visualization: the viewer must process color meaning while tracking motion.

### The Color Load Principle

The brain processes color and motion through overlapping cognitive channels. When an animated infographic uses more than 5 distinct colors simultaneously, and those elements are in motion, color meaning degrades, the brain can no longer track which color means what while also tracking the motion.

**Rule:** Use no more than 4–5 colors in an animated data piece. Reserve color for encoding variables; use opacity and size for secondary differentiation.

### Colorblind-Safe Palettes for Animation

Approximately 8% of men have red-green color deficiency. In an animated infographic that encodes profit (green) and loss (red), 8% of the male audience is receiving no color information. Use:

| Safe Alternative | Encodes | Avoids |
|-----------------|---------|--------|
| Blue vs Orange | Contrast pair | Red-green confusion |
| Dark Blue vs Light Blue | Sequential | Same |
| Blue vs Red (carefully) | OK for most users | Tritan-type issues |
| Shape + Color combined | Redundant encoding | Any single-channel failure |

### Motion-Accessible Color Transitions

When bars change color during animation (e.g., a bar turns red when it exceeds a threshold), the color change should be accompanied by a **non-color signal** as well shape change, size change, or text label to ensure the meaning is conveyed across all color perception types.

---

## 📐 Design Principles for Animated Infographics

### Principle 1: Animate What Carries the Data

Animate the quantity that represents the data. In a bar chart: animate the bar height. In a map: animate the route or region fill. Don't add decorative motion to titles, labels, or frames unless it serves clarity.

### Principle 2: One Variable Changes at a Time

If multiple variables change simultaneously, viewers can't track either. The Hans Rosling approach: use play controls so the viewer can pause, rewind, and understand the causality.

### Principle 3: Proportional Duration

The time an animation takes should be proportional to the magnitude of the change. A value doubling should animate for roughly twice as long as one increasing by 10%. This preserves the viewer's intuitive sense of scale.

### Principle 4: Annotation at the Right Time

Text labels and callouts should appear at the moment of the data event they describe, not before (premature) and not after (missed). Use time markers in AE to align annotations precisely.

### Principle 5: Color Carries Meaning, Don't Waste It

Use color to encode variables, not to decorate. If the chart is showing profit (positive) and loss (negative), use green/red. Don't use green/red for two arbitrary categories, viewers will assume the meaning.

---

## 🗂️ Deliverable Standards for Animated Infographics

Professional animated infographic delivery includes more than a single video file. Clients typically request:

| Deliverable | Format | Notes |
|------------|--------|-------|
| Master animation | ProRes 4444, 1920×1080 | Highest quality; client archives |
| Social version | H.264 .mp4, 1080×1920 | 9:16 reformatted, trimmed |
| GIF (short pieces only) | GIF, max 600KB | Presentation use; quality loss acceptable |
| Subtitled version | H.264 with burned-in captions | Accessibility + silent viewing |
| Editable AE project | .aep + assets folder | Client may need to update data |
| Font licenses | Documentation | Proof that fonts are licensed |
| Source data file | .csv or .xlsx | The underlying data; archival |

**The "Update Ready" AE Project Standard:**
For infographics that will be updated (quarterly reports, live dashboards), the AE project should be structured so a non-expert can change the numbers:
- All data values in a single "DATA" composition or as text sources
- All bar heights driven by a Master Controller slider, not hardcoded
- All text labels as editable text layers (not baked into pre-comps)
- A README text layer at the top of the layer stack explaining the update process

---

## 📋 Summary

| Chart Type | AE Technique | Key Setup |
|------------|-------------|-----------|
| Bar Chart | Scale Y from baseline | Anchor point at bottom |
| Line Chart | Trim Paths End 0%→100% | Plus moving dot |
| Pie/Donut | Stroke Dash offset | Track matte for donut |
| Waffle | Index expression + grid | 10×10 = 100 cells |
| Map Route | Trim Paths on line | SVG import, shape conversion |

---

## 🔗 Next Steps

[Module 6: UI Micro-Interactions →](../Module-06-UI-Micro-Interactions/Reading.md)

---

## 🎬 Case Study: Stripe's Animated Gradient, Motion That Sells

The Stripe homepage hero features three animated gradient orbs on a dark background. As of 2025 it has become the most-copied hero animation on the web. Understanding exactly how it works illuminates why it's effective.

**The Technical Construction:**
The orbs are not After Effects animations, they are WebGL or CSS gradient animations running in the browser. Each orb is a radial gradient with:
- A center color (saturated purple, teal, or pink)
- A transparent edge (blends naturally with the dark background)
- A motion path driven by Perlin noise (slow, organic, non-repeating)
- A cycle time of approximately 6–8 seconds

**Why Perlin Noise, Not Bezier Curves:**
Bezier curves repeat. A bezier-based loop will be imperceptibly identical every 6 seconds. Perlin noise generates slightly different paths each cycle, the animation never exactly repeats. This is psychologically important: the viewer's brain stays engaged because "something is always changing."

**The Brand Claim:**
The animated gradient communicates "complex technology working quietly." Stripe processes billions of dollars of transactions invisibly. The motion is: slow (not urgent), blending (not sharp or confrontational), beautiful (not utilitarian). Every motion design choice reinforces the brand narrative.

**The Contrast Between Hero and Dashboard:**
The Stripe dashboard where users actually manage their payments uses almost no animation. Static tables, simple fade transitions, nothing playful. This contrast is intentional: the hero speaks to the brand feeling; the dashboard speaks to the work. Mixing them would create cognitive dissonance.

**The Lesson for Data Viz:**
In animated infographics, the "ambient" layer (background motion, decorative elements) should follow Stripe's principle: slow, organic, never competing with the data. A Perlin noise-based background texture at 0.2 frequency and 5px amplitude will add life without distracting from the bar chart in front of it.

---

## 📊 Animated Chart Type Selection Guide

| Data Type | Chart Type | AE Technique | Story Pattern | Duration Range |
|-----------|-----------|-------------|---------------|----------------|
| Single value over time | Line chart | Trim Paths + moving dot | Trend reveal | 3–6s |
| Multiple values compared | Bar chart | Scale Y + stagger | Ranking reveal | 2–4s |
| Parts of whole | Pie / Donut | Stroke dash offset | Sequential reveal | 3–5s |
| Percentage (whole = 100) | Waffle chart | Index expression | Fill left-to-right | 2–4s |
| Geographic distribution | Choropleth map | Fill color expression | Region-by-region | 4–8s |
| Change over time (many) | Animated scatter | Position expression | Animated transition | 5–10s |
| Single large number | Counting text | Counter expression | Count to final | 2–3s |

---

## 🗣️ Socratic Discussion Questions

1. Hans Rosling animated data at the variable level, each bubble moved to represent a country's change over time. But most commercial infographic animation simply animates bars appearing in a sequence. What is the difference in storytelling power between these two approaches, and when is the simpler approach actually better?

2. The principle says: animate only what carries the data. But many professional infographics animate titles, dividers, icons, and decorative elements. Is this always wrong, or are there cases where animating non-data elements serves the viewer?

3. A bar chart with 12 bars needs to be animated. If all bars animate simultaneously in 1 second, the viewer can't read individual values. If they animate sequentially 0.5s each, the total animation takes 6 seconds, too long for social media. How do you design the stagger for maximum readability within a 2-second window?

4. Color encodes meaning in data visualization. But your client's brand colors are red and green, which create immediate positive/negative associations for most viewers. The data being visualized (customer segments) has no positive/negative quality. How do you handle this?

5. AEJuice provides excellent free animated chart templates. If you use and modify them for client work, who owns the result, you, AEJuice, or the client? How do template licenses interact with work-for-hire contracts?

---

## 📚 Further Reading

- *The Functional Art* Alberto Cairo (New Riders, 2012) the best book on the principles of data visualization design; distinguishes between decorative and functional visualization
- *Information Dashboard Design* Stephen Few (Analytics Press, 2nd ed. 2013) specific to dashboard contexts; covers the principles of visual encoding that apply directly to animated charts
- *The Visual Display of Quantitative Information* Edward Tufte (Graphics Press, 2nd ed. 2001) the foundational data visualization text; the concept of "data-ink ratio" is essential for animated infographics
- *Storytelling with Data* Cole Nussbaumer Knaflic (Wiley, 2015) bridges the gap between data analysis and visual storytelling; practical and accessible
- [Hans Rosling TED Talk 200 Countries, 200 Years](https://www.youtube.com/results?search_query=hans+rosling+200+countries+200+years+ted+talk) the most important 4 minutes in animated data visualization history; study how variables are introduced and layered
- [Flowing Data Nathan Yau](https://flowingdata.com/) daily examples of data visualization; searchable by chart type and technique
- [AEJuice Free Starter Pack](https://www.youtube.com/results?search_query=aejuice+starter+pack+free+download+after+effects), 900+ free elements; use as learning material, always customize before client delivery
