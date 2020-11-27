const svg1selector = document.querySelector('.svg1');
const svgRect = svg1selector.getBoundingClientRect();
const svgWidth = svgRect.width;
const svgHeight = svgRect.height;
buttonX = svgWidth / 2
buttonY = svgHeight / 2

const svg1 = d3.select('.svg1');

// Define start button
const button = svg1.append('circle')
    .attr('cx', buttonX)
    .attr('cy', buttonY)
    .attr('r', 28)
    .style('fill', '#323031');

// Define the shadow and gradient
const buttonShadow = svg1.append('ellipse')
    .attr('cx', buttonX)
    .attr('cy', buttonY + 40)
    .attr('rx', 35)
    .attr('ry', 10)
    .attr('fill', 'url(#shadowGradient)');
var shadowGradient = svg1.append('svg1:defs')
    .append('svg1:radialGradient')
    .attr('id', 'shadowGradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '100%')
    .attr('y2', '100%')
    .attr('spreadMethod', 'pad');
shadowGradient.append('svg1:stop')
    .attr('offset', '0%')
    .attr('stop-color', '#323031')
    .attr('stop-opacity', 0.6);
shadowGradient.append('svg1:stop')
    .attr('offset', '100%')
    .attr('stop-color', '#323031')
    .attr('stop-opacity', 0);

// Start button interaction
d3.selectAll("circle")
    .on("mouseover", function() {
        buttonX = svgWidth * Math.random()
        buttonY = svgHeight * Math.random()
        button.transition()
            .duration(0)
            .attr('cx', buttonX)
            .attr('cy', buttonY)
        buttonShadow.transition()
            .duration(0)
            .attr('cx', buttonX)
            .attr('cy', buttonY + 40)
        bounceUp();
    });

// Loop bouncing button
function bounceUp() {
    button.transition()
        .duration(1500)
        .attr('cy', buttonY - 70)
        .ease(d3.easeCubic)
        .on('end', bounceDown)
};
function bounceDown() {
    button.transition()
        .duration(1500)
        .attr('cy', buttonY)
        .ease(d3.easeCubic)
        .on('end', bounceUp)
};
bounceUp();
