const svg1selector = document.querySelector('.svg1');
const svgRect = svg1selector.getBoundingClientRect();
const svgWidth = svgRect.width;
const svgHeight = svgRect.height;

var screenMidX = svgWidth / 2
var screenMidY = svgHeight / 2
var buttonX = screenMidX
var buttonY = screenMidY
var buttonTextX = buttonX
var buttonTextY = buttonY + 50
var buttonShadowX = buttonX
var buttonShadowY = buttonY + 40

function xyRand() {
    buttonX = ((svgWidth-60) * Math.random()) + 40
    buttonY = ((svgHeight-150) * Math.random()) + 100
    buttonTextX = buttonX
    buttonTextY = buttonY + 50
    buttonShadowX = buttonX
    buttonShadowY = buttonY + 40
};
function buttonTransition(speed) {
    button.transition()
        .duration(speed)
        .attr('cx', buttonX)
        .attr('cy', buttonY)
        .ease(d3.easeCubic);
    buttonTextPath.transition()
        .duration(speed)
        .attr('d', `M${buttonX-30},${buttonY+260} A150,150 0 1,1 ${buttonX+30},${buttonY+260}`);
    buttonShadow.transition()
        .duration(speed)
        .attr('cx', buttonShadowX)
        .attr('cy', buttonShadowY);
};


const svg1 = d3.select('.svg1');
const defs = svg1.append("defs");

// Define button
const button = svg1.append('circle')
    .attr('id', 'startButton')
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
    .attr('id', 'buttonText')
    .append('textPath')
    .attr('xlink:href', '#buttonPath')
    .style('fill', '#ffc857')
    .text('Click me!')
    .attr('font-size', 15)
    .attr("startOffset", "50%")
    .style("text-anchor","middle");

// Define the shadow and gradient
const buttonShadow = svg1.append('ellipse')
    .attr('id', 'buttonShadow')
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

// Loop bouncing button
function bounceUp() {
    button.transition()
        .duration(1500)
        .attr('cy', buttonY - 70)
        .ease(d3.easeCubic)
        .on('end', bounceDown);
    buttonTextPath.transition()
        .duration(1500)
        .attr('d', `M${buttonX-30},${buttonY+190} A150,150 0 1,1 ${buttonX+30},${buttonY+190}`)
        .ease(d3.easeCubic)
    buttonShadow.transition()
        .duration(1500)
        .attr('rx', 25)
        .attr('ry', 7);
};
function bounceDown() {
    button.transition()
        .duration(1500)
        .attr('cy', buttonY)
        .ease(d3.easeCubic)
        .on('end', bounceUp);
    buttonTextPath.transition()
        .duration(1500)
        .attr('d', `M${buttonX-30},${buttonY+260} A150,150 0 1,1 ${buttonX+30},${buttonY+260}`)
        .ease(d3.easeCubic)
    buttonShadow.transition()
        .duration(1500)
        .attr('rx', 35)
        .attr('ry', 10);
};
bounceUp();

// Button interaction
var counter = 0

d3.selectAll('#startButton')
    .on('mouseover', function() {
        if (counter < 3) {
            xyRand();
            buttonTransition(0);
            bounceUp();
            counter += 1;
        } else if (counter < 5) {
            xyRand();
            buttonTransition(0);
            bounceUp();
            buttonText.transition()
                .text('To fast?');
            counter += 1;
        } else if (counter < 6) {
            xyRand();
            buttonTransition(500);
            bounceUp();
            buttonText.transition()
                .text('Crazy! Once more!');
            counter += 1; 
        } else if (counter < 7) {
            xyRand()
            buttonTransition(1000);
            buttonText.transition()
                .text('I am tired.\nClick me already!');
            counter += 1; 
        };
    });

// TODO: Click me already ... double click...

// loading bar after button click
function lBar() {
    var lBarWidth = svgWidth * 0.01
    const loadingBarFull = svg1.append('rect')
        .attr('id', 'loadingBarFull')
        .attr('x', screenMidX - ((svgWidth * 0.95) / 2))
        .attr('y', screenMidY)
        .attr('width', svgWidth * 0.95)
        .attr('height', 10)
        .attr('fill', '#323031')
        .attr("rx", 4);
    const loadingBar = svg1.append('rect')
        .attr('id', 'loadingBar')
        .attr('x', screenMidX - (lBarWidth / 2))
        .attr('y', screenMidY)
        .attr('width', lBarWidth)
        .attr('height', 10)
        .attr('fill', '#ffc857')
        .attr("rx", 4);
    const loadingText = svg1.append('text')
        .attr('id', 'loadingText')
        .attr('x', screenMidX)
        .attr('y', screenMidY - 30)
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .attr('font-size', 20)
        .text('loading');
    
    function loadingTextTransition(delay, text) {
        loadingText.transition()
            .delay(delay)
            .duration(1000)
            .text(text);
    };
    function loadingTextSequence() {
        loadingTextTransition(0, 'loading');
        loadingTextTransition(1000, 'loading .');
        loadingTextTransition(2000, 'loading . .');
        loadingTextTransition(3000, 'loading . . .');
        loadingTextTransition(4000, 'loading');
        loadingTextTransition(5000, 'loading .');
        loadingTextTransition(6000, 'loading . .');
        loadingTextTransition(7000, 'loading . . .');
        loadingTextTransition(8000, 'loading');
        loadingTextTransition(9000, 'loading .');
        loadingTextTransition(10000, 'loading . .');
        loadingTextTransition(11000, 'loading . . .');
        loadingTextTransition(12000, 'loading');
        loadingTextTransition(13000, 'loading .');
        loadingTextTransition(14000, 'loading . .');
        loadingTextTransition(15000, 'loading . . .');
        loadingText.transition()
            .delay(16000)
            .duration(1000)
            .text('loading complete!');
    };

    function loadingBarTransition(delay, duration, multiplier) {
        loadingBar.transition()
            .delay(delay)
            .duration(duration)
            .attr('x', screenMidX - ((svgWidth * multiplier) / 2))
            .attr('width', svgWidth * multiplier);
    };
    function loadingBarSequence() {
        loadingBarTransition(1000, 1000, 0.02);
        loadingBarTransition(2000, 1200, 0.035);
        loadingBarTransition(3000, 1000, 0.06);
        loadingBarTransition(4000, 2000, 0.1);
        loadingBarTransition(6000, 1000, 0.3);
        loadingBarTransition(7500, 1500, 0.6);
        loadingBarTransition(9000, 3000, 0.45);
        loadingBarTransition(12000, 1500, 0.7);
        loadingBarTransition(13500, 2000, 0.95);
        loadingBar.transition()
            .delay(16000)
            .duration(2000)
            .attr('x', screenMidX - ((svgWidth * 0.95) / 2))
            .attr('width', svgWidth * 0.95)
            .attr('fill', '#084c61');
    };
    loadingTextSequence();
    loadingBarSequence();
};

d3.selectAll('#startButton')
    .on('click', function() {
        if (counter = 7) {
            svg1.selectAll('#startButton').remove()
            svg1.selectAll('#buttonShadow').remove()
            svg1.selectAll('#buttonText').remove()
        };
        lBar();
    });
