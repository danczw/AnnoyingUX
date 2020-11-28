const svg1selector = document.querySelector('.svg1');
const svgRect = svg1selector.getBoundingClientRect();
const svgWidth = svgRect.width;
const svgHeight = svgRect.height;

var buttonX = svgWidth / 2
var buttonY = svgHeight / 2

var buttonTextX = buttonX
var buttonTextY = buttonY + 50

var buttonShadowX = buttonX
var buttonShadowY = buttonY + 40

const svg1 = d3.select('.svg1');
const defs = svg1.append("defs");

// Define button
const button = svg1.append('circle')
    .attr('cx', buttonX)
    .attr('cy', buttonY)
    .attr('r', 28)
    .attr('fill', 'url(#buttonGradient)');

var buttonGradient = defs.append("radialGradient")
    .attr("id", "buttonGradient")
    .attr("x1", "0%")
    .attr("x2", "100%")
    .attr("y1", "0%")
    .attr("y2", "100%")
    .attr('spreadMethod', 'pad');

buttonGradient.append("stop")
    .attr('class', 'start')
    .attr("offset", "80%")
    .attr("stop-color", "#323031")
    .attr("stop-opacity", 1);

buttonGradient.append("stop")
    .attr('class', 'end')
    .attr("offset", "100%")
    .attr("stop-color", "#323031")
    .attr("stop-opacity", 0.6);

// Define button text
var buttonTextPath = svg1.append('path')
    .attr('id', 'buttonPath')
    // M start-x, start-y A radius-x, radius-y, x-axis-rotation, large-arc-flag, sweep-flag, end-x, end-y
    .attr('d', `M${buttonX-30},${buttonY+260} A150,150 0 1,1 ${buttonX+30},${buttonY+260}`)
    .style('fill', 'none')

const buttonText = svg1.append('text')
    .append('textPath')
    .attr('xlink:href', '#buttonPath')
    .style('fill', '#ffc857')
    .text('Click me!')
    .attr('font-size', 12)
    .attr("startOffset", "50%")
    .style("text-anchor","middle");

// Define the shadow and gradient
const buttonShadow = svg1.append('ellipse')
    .attr('cx', buttonShadowX)
    .attr('cy', buttonShadowY)
    .attr('rx', 35)
    .attr('ry', 10)
    .attr('fill', 'url(#shadowGradient)');

var shadowGradient = defs.append("radialGradient")
    .attr("id", "shadowGradient")
    .attr("x1", "0%")
    .attr("x2", "100%")
    .attr("y1", "0%")
    .attr("y2", "100%")
    .attr('spreadMethod', 'pad');

shadowGradient.append("stop")
    .attr('class', 'start')
    .attr("offset", "0%")
    .attr("stop-color", "#323031")
    .attr("stop-opacity", 0.6);

shadowGradient.append("stop")
    .attr('class', 'end')
    .attr("offset", "100%")
    .attr("stop-color", "#323031")
    .attr("stop-opacity", 0);


// Start button interaction
d3.selectAll("circle")
    .on("mouseover", function() {
        
        buttonX = svgWidth * Math.random()
        buttonY = svgHeight * Math.random()
        buttonTextX = buttonX
        buttonTextY = buttonY + 50
        buttonShadowX = buttonX
        buttonShadowY = buttonY + 40

        button.transition()
            .duration(0)
            .attr('cx', buttonX)
            .attr('cy', buttonY)
        buttonTextPath.transition()
            .duration(0)
            .attr('d', `M${buttonX-30},${buttonY+260} A150,150 0 1,1 ${buttonX+30},${buttonY+260}`)
        buttonShadow.transition()
            .duration(0)
            .attr('cx', buttonShadowX)
            .attr('cy', buttonShadowY)
        bounceUp();
    });

// Loop bouncing button
function bounceUp() {
    button.transition()
        .duration(1500)
        .attr('cy', buttonY - 70)
        .ease(d3.easeCubic)
        .on('end', bounceDown)
    buttonTextPath.transition()
        .duration(1500)
        .attr('d', `M${buttonX-30},${buttonY+190} A150,150 0 1,1 ${buttonX+30},${buttonY+190}`)
        .ease(d3.easeCubic)
        .on('end', bounceDown)
};

function bounceDown() {
    button.transition()
        .duration(1500)
        .attr('cy', buttonY)
        .ease(d3.easeCubic)
        .on('end', bounceUp)
    buttonTextPath.transition()
        .duration(1500)
        .attr('d', `M${buttonX-30},${buttonY+260} A150,150 0 1,1 ${buttonX+30},${buttonY+260}`)
        .ease(d3.easeCubic)
        .on('end', bounceUp)
};

bounceUp();