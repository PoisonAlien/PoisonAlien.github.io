
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

const wordCloudData = [
  { text: "leukemia", value: 40 },
  { text: "mutational", value: 40 },
  { text: "cancer", value: 30 },
  { text: "cell", value: 30 },
  { text: "maftools", value: 30 },
  { text: "relapse", value: 30 },
  { text: "arid1a", value: 20 },
  { text: "carcinoma", value: 20 },
  { text: "comprehensive", value: 20 },
  { text: "differentiation", value: 20 },
  { text: "efficient", value: 20 },
  { text: "files", value: 20 },
  { text: "heterogeneity", value: 20 },
  { text: "identification", value: 20 },
  { text: "maf", value: 20 },
  { text: "mll-ptd", value: 20 },
  { text: "normal", value: 20 },
  { text: "profiling", value: 20 },
  { text: "squamous", value: 20 },
  { text: "transcriptional", value: 20 },
  { text: "3-g34w-mutant", value: 10 },
  { text: "adenocarcinomas", value: 10 },
  { text: "aggregation", value: 10 },
  { text: "altered", value: 10 },
  { text: "analyze", value: 10 },
  { text: "based", value: 10 },
  { text: "BCL6", value: 10 },
  { text: "bet", value: 10 },
  { text: "bisulfite", value: 10 },
  { text: "bone", value: 10 },
  { text: "breast", value: 10 },
  { text: "bromodomain", value: 10 },
  { text: "carcinomas", value: 10 },
  { text: "cebpe", value: 10 }
];

const ResearchWordCloud = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 500;
    const height = 200; // Reduced height

    // Clear any existing content
    d3.select(svgRef.current).selectAll("*").remove();

    // Create the layout
    const layout = cloud()
      .size([width, height])
      .words(wordCloudData.map(d => ({
        text: d.text,
        size: 6 + (d.value / 10) * 2, // Reduced base font size
        value: d.value
      })))
      .padding(2) // Further reduced padding between words
      .rotate(0)
      .font("JetBrains Mono")
      .fontSize(d => d.size)
      .on("end", draw);

    // Draw the word cloud
    function draw(words: any[]) {
      const svg = d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      const colorScale = d3.scaleLinear<string>()
        .domain([0, 100])
        .range(["#E5DEFF", "#D6BCFA"]);

      svg.selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-family", "JetBrains Mono")
        .style("fill", (d: any) => colorScale(d.value))
        .style("cursor", "pointer")
        .attr("text-anchor", "middle")
        .attr("transform", (d: any) => `translate(${d.x},${d.y})`)
        .attr("font-size", (d: any) => `${d.size}px`)
        .text((d: any) => d.text)
        .on("mouseover", function(event, d: any) {
          d3.select(this)
            .transition()
            .duration(200)
            .style("fill", "#8B5CF6");
        })
        .on("mouseout", function(event, d: any) {
          d3.select(this)
            .transition()
            .duration(200)
            .style("fill", (d: any) => colorScale(d.value));
        });
    }

    layout.start();
  }, []);

  return (
    <div className="word-cloud-container bg-black/20 rounded-lg p-2 mt-2">
      <svg ref={svgRef} className="w-full" />
    </div>
  );
};

export default ResearchWordCloud;
