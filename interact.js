const startButton = d3.select(".startButton");

const buttonShadow = startButton.append("ellipse")
    .attr("cx", 75)
    .attr("cy", 130)
    .attr("rx", 35)
    .attr("ry", 10)
    .attr('fill', 'url(#gradient)');

// Define the gradient
var gradient = startButton.append("startButton:defs")
    .append("startButton:radialGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

// Define the gradient colors
gradient.append("startButton:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#323031")
    .attr("stop-opacity", 0.6);
gradient.append("startButton:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#323031")
    .attr("stop-opacity", 0);

const button = startButton.append("circle")
    .attr("cx", 75)
    .attr("cy", 75)
    .attr("r", 40)
    .style("fill", "#323031");