---
permalink: /35-Motion-Graphics-UI-Animation/Module-05-Infographic-Data-Viz/Reading/
title: "Module 5: Infographic & Data Viz"
---

# 📊 Module 5: Infographic & Data Viz

## The 60-Second Truth

In 2012, Hans Rosling stood on a TED stage and used animated bubble charts to show 200 years of global health and wealth data in four minutes. The audience gasped. They laughed. They learned something they would remember for years. The data wasn't new — it existed in WHO and World Bank spreadsheets. What was new was the animation. The motion made the data tell a story.

This module teaches you to build the kinds of animated graphics that make data gasp-worthy — not decorative, but revelatory.

---

## 🔬 Animated Chart Types

### Bar Charts

The most-animated chart type. A bar animates from 0 to its final value, typically scaling on the Y-axis from the baseline up.

**AE Setup — Animated Bar Chart:**
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

Line charts reveal progressively along the X-axis — the line "draws" from left to right.

**AE Setup — Line Chart:**
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

**AE Setup — Pie Chart:**
1. Create each segment as a shape layer with a stroke
2. Set **Stroke > Dashes** and animate the dash offset to reveal each segment
3. For a donut chart: use a solid circle cutout on top as a track matte
4. Stagger segment reveals radially (each segment starts as the previous finishes)

### Waffle Charts

Waffle charts display 100 cells (a 10×10 grid) where filled cells = percentage.

**AE Setup — Waffle Chart:**
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

1. **Establish the metric** — introduce the variable (e.g., "Global CO₂ emissions")
2. **Show the baseline** — reveal the starting state (e.g., 1990 levels)
3. **Show the change** — animate the data as it changes
4. **Reveal the insight** — highlight the key moment (the year emissions peaked, the country that changed fastest)
5. **Contextualize** — add comparison lines, annotations, or secondary data

> 🎯 **Exam Tip:** The insight should come at the 2/3 mark of the animation. The first third establishes context; the last third gives the viewer time to absorb the insight. Don't rush to the reveal.

---

## 🔌 Motion Bro and AEJuice Workflows

### Motion Bro

Motion Bro is a panel extension for AE that manages third-party preset packs. It allows you to preview, install, and apply animation presets from providers like AEJuice, Videohive, and custom packs.

**Workflow:**
1. Install Motion Bro from aescripts.com
2. Install preset packs (AEJuice has a free starter pack)
3. Preview animations in the Motion Bro panel
4. Drag to the composition to apply

**Best Use:** Motion Bro is a time-saver for infographic elements — animated counters, map pins, chart bars, dividers, and text reveals.

### AEJuice

AEJuice offers 900+ free animations across their "AEJuice Starter Pack." Key categories:
- **Transitions:** Wipes, glitches, zooms
- **Text Presets:** Entrance/exit animations for headlines
- **Elements:** Icons, shapes, dividers
- **Infographic:** Animated charts, meters, gauges

> 🚨 **Trap on the Exam:** AEJuice presets are designed to be starting points, not final deliverables. Using an unmodified AEJuice preset on a client project is immediately identifiable by any experienced motion designer. Always customize timing, color, and typography.

---

## 📐 Design Principles for Animated Infographics

### Principle 1: Animate What Carries the Data

Animate the quantity that represents the data. In a bar chart: animate the bar height. In a map: animate the route or region fill. Don't add decorative motion to titles, labels, or frames unless it serves clarity.

### Principle 2: One Variable Changes at a Time

If multiple variables change simultaneously, viewers can't track either. The Hans Rosling approach: use play controls so the viewer can pause, rewind, and understand the causality.

### Principle 3: Proportional Duration

The time an animation takes should be proportional to the magnitude of the change. A value doubling should animate for roughly twice as long as one increasing by 10%. This preserves the viewer's intuitive sense of scale.

### Principle 4: Annotation at the Right Time

Text labels and callouts should appear at the moment of the data event they describe — not before (premature) and not after (missed). Use time markers in AE to align annotations precisely.

### Principle 5: Color Carries Meaning — Don't Waste It

Use color to encode variables, not to decorate. If the chart is showing profit (positive) and loss (negative), use green/red. Don't use green/red for two arbitrary categories — viewers will assume the meaning.

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

## 📚 Further Reading

- *The Functional Art* — Alberto Cairo (New Riders) — best book on data visualization design
- *Information Dashboard Design* — Stephen Few (Analytics Press)
- [Hans Rosling TED Talk — 200 Countries, 200 Years](https://www.youtube.com/results?search_query=hans+rosling+200+countries+200+years+ted+talk)
- [Flowing Data](https://flowingdata.com/) — Nathan Yau's site; examples and tutorials
- [AEJuice Free Starter Pack](https://www.youtube.com/results?search_query=aejuice+starter+pack+free+download+after+effects)
