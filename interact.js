const svg1selector = document.querySelector('.svg1');
const svgRect = svg1selector.getBoundingClientRect();
const svgWidth = svgRect.width;
const svgHeight = svgRect.height;

const screenMidX = svgWidth / 2
const screenMidY = svgHeight / 2
var buttonX = screenMidX
var buttonY = screenMidY
var buttonTextX = buttonX
var buttonTextY = buttonY + 50
var buttonShadowX = buttonX
var buttonShadowY = buttonY + 40
const svg1 = d3.select('.svg1');
const defs = svg1.append('defs');

// function for random colour picking
const coloursFull = ['#bb9f06', '#db3a34', '#86a873', '#323031'];
const coloursNotFull = ['#bb9f06', '#db3a34', '#86a873']
function randColour(colourList) {
    return colourList[Math.floor(Math.random() * colourList.length)];
};

// change website background color
function websiteBackground(colour) {
    const backgrCircle1 = svg1.append('circle')
        .attr('id', 'backgrCircle')
        .attr('cx', screenMidX)
        .attr('cy', screenMidY)
        .attr('r', 1)
        .attr('fill', colour)
    const backgrCircle2 = svg1.append('circle')
        .attr('id', 'backgrCircle')
        .attr('cx', screenMidX)
        .attr('cy', screenMidY)
        .attr('r', 1)
        .attr('fill', 'transparent')
        .attr('stroke', 'url(#backgrCircle2Gradiant)')
        .attr('stroke-width', 15)
    var backgrCircle2Gradiant = defs.append('radialGradient')
        .attr('id', 'backgrCircle2Gradiant')
        .attr('x1', '0%')
        .attr('x2', '50%')
        .attr('y1', '0%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad');
    backgrCircle2Gradiant.append('stop')
        .attr('offset', '70%')
        .attr('stop-color', colour)
        .attr('stop-opacity', 0.9);
    backgrCircle2Gradiant.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', colour)
        .attr('stop-opacity', 0.01);
    backgrCircle1.transition()
        .attr('r', svgHeight * 2)
        .duration(3000)
    backgrCircle2.transition()
        .attr('r', svgHeight * 2)
        .duration(3000)
        .on('end', websiteColour)
        
    function websiteColour() {
        document.body.style.backgroundColor = colour;
        svg1.selectAll('#backgrCircle').remove();
    };
};

// randomizing x and y coordinates
function xyRand() {
    buttonX = ((svgWidth-60) * Math.random()) + 40
    buttonY = ((svgHeight-150) * Math.random()) + 100
    buttonTextX = buttonX
    buttonTextY = buttonY + 50
    buttonShadowX = buttonX
    buttonShadowY = buttonY + 40
};

// button running away transition
function buttonTransition(speed) {
    button.transition()
        .duration(speed)
        .attr('cx', buttonX)
        .attr('cy', buttonY)
        .ease(d3.easeCubic);
    buttonPulse.transition()
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

// welcome text
const welcomeText = svg1.append('text')
        .attr('id', 'welcomeText')
        .attr('x', screenMidX)
        .attr('y', screenMidY / 3)
        .style('text-anchor', 'middle')
        .style('fill', 'white')
        .attr('font-size', 30)
        .text('Welcome!');

// Define button
const button = svg1.append('circle')
    .attr('id', 'startButton')
    .attr('cx', buttonX)
    .attr('cy', buttonY)
    .attr('r', 28)
    .attr('fill', 'url(#buttonGradient)');
var buttonGradient = defs.append('radialGradient')
    .attr('id', 'buttonGradient')
    .attr('x1', '0%')
    .attr('x2', '100%')
    .attr('y1', '0%')
    .attr('y2', '100%')
    .attr('spreadMethod', 'pad');
buttonGradient.append('stop')
    .attr('offset', '80%')
    .attr('stop-color', '#323031')
    .attr('stop-opacity', 1);
buttonGradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#323031')
    .attr('stop-opacity', 0.6);

// Define button pulse
const buttonPulse = svg1.append('circle')
    .attr('id', 'buttonPulse')
    .attr('cx', buttonX)
    .attr('cy', buttonY)
    .attr('r', 2)
    .attr('fill', 'transparent')
    .attr('stroke', 'url(#buttonPulseGradient)')
    .attr('stroke-width', 15)
var buttonPulseGradient = defs.append('radialGradient')
    .attr('id', 'buttonPulseGradient')
    .attr('x1', '0%')
    .attr('x2', '50%')
    .attr('y1', '0%')
    .attr('y2', '100%')
    .attr('spreadMethod', 'pad');
buttonPulseGradient.append('stop')
    .attr('offset', '50%')
    .attr('stop-color', 'white')
    .attr('stop-opacity', 0.5);
buttonPulseGradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', 'white')
    .attr('stop-opacity', 0);

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
    .text('Click me!')
    .attr('font-size', 15)
    .attr('startOffset', '50%')
    .style('fill', '#ffc857')
    .style('text-anchor','middle');

// Define the shadow and gradient
const buttonShadow = svg1.append('ellipse')
    .attr('id', 'buttonShadow')
    .attr('cx', buttonShadowX)
    .attr('cy', buttonShadowY)
    .attr('rx', 35)
    .attr('ry', 10)
    .attr('fill', 'url(#shadowGradient)');
var shadowGradient = defs.append('radialGradient')
    .attr('id', 'shadowGradient')
    .attr('x1', '0%')
    .attr('x2', '100%')
    .attr('y1', '0%')
    .attr('y2', '100%')
    .attr('spreadMethod', 'pad');
shadowGradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#323031')
    .attr('stop-opacity', 0.6);
shadowGradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#323031')
    .attr('stop-opacity', 0);

// Loop bouncing animation of button
function bounceUp() {
    button.transition()
        .duration(1500)
        .attr('cy', buttonY - 70)
        .ease(d3.easeCubic)
        .on('end', bounceDown);
    buttonPulse.transition()
        .duration(1500)
        .attr('cy', buttonY - 70)
        .ease(d3.easeCubic)
        .attr('r', 28)
        .attr('stroke-width', 2);
    buttonTextPath.transition()
        .duration(1500)
        .attr('d', `M${buttonX-30},${buttonY+190} A150,150 0 1,1 ${buttonX+30},${buttonY+190}`)
        .ease(d3.easeCubic);
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
    buttonPulse.transition()
        .duration(1500)
        .attr('cy', buttonY)
        .ease(d3.easeCubic)
        .attr('r', 2)
        .attr('stroke-width', 10);
    buttonTextPath.transition()
        .duration(1500)
        .attr('d', `M${buttonX-30},${buttonY+260} A150,150 0 1,1 ${buttonX+30},${buttonY+260}`)
        .ease(d3.easeCubic);
    buttonShadow.transition()
        .duration(1500)
        .attr('rx', 35)
        .attr('ry', 10);
};
bounceUp();

// Button interaction
var counter = 0

d3.selectAll('#buttonPulse, #startButton')
    .on('mouseover', function() {
        svg1.selectAll('#welcomeText').remove();
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
            xyRand();
            buttonTransition(1000);
            svg1.selectAll('#buttonPulse').remove();
            buttonText.transition()
                .text('Click me already!');
            counter += 1;
        };
    });

// loading bar after button click
function lBar() {
    var lBarWidth = svgWidth * 0.01
    const loadingBarFull = svg1.append('rect')
        .attr('id', 'loadingBarFull')
        .attr('x', screenMidX - ((svgWidth * 0.95) / 2))
        .attr('y', screenMidY)
        .attr('width', svgWidth * 0.95)
        .attr('height', 10)
        .attr('fill', '#177e89')
        .attr('rx', 4);
    const loadingBar = svg1.append('rect')
        .attr('id', 'loadingBar')
        .attr('x', screenMidX - (lBarWidth / 2))
        .attr('y', screenMidY)
        .attr('width', lBarWidth)
        .attr('height', 10)
        .attr('fill', '#ffc857')
        .attr('rx', 4);
    const loadingText = svg1.append('text')
        .attr('id', 'loadingText')
        .attr('x', screenMidX)
        .attr('y', screenMidY - 30)
        .style('text-anchor', 'middle')
        .style('fill', 'white')
        .attr('font-size', 20)
        .text('loading');
    
    function loadingTextTransition(delay) {
        loadingText.transition()
            .delay(delay)
            .duration(1000)
            .text('loading');
        loadingText.transition()
            .delay(delay + 1000)
            .duration(1000)
            .text('loading .');
        loadingText.transition()
            .delay(delay + 2000)
            .duration(1000)
            .text('loading . .');
        loadingText.transition()
            .delay(delay + 3000)
            .duration(1000)
            .text('loading . . .')
    };
    function loadingTextSequence() {
        loadingTextTransition(0);
        loadingTextTransition(4000);
        loadingTextTransition(8000);
        loadingTextTransition(12000);
        loadingTextTransition(16000);
        loadingTextTransition(20000);
        loadingText.transition()
            .delay(24000)
            .duration(1000)
            .text('loading complete!');
        loadingText.transition()
            .delay(25000)
            .duration(1000)
            .style('fill', 'transparent')
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
        loadingBarTransition(2000, 2000, 0.035);
        loadingBarTransition(4000, 1000, 0.06);
        loadingBarTransition(5000, 2000, 0.1);
        loadingBarTransition(7000, 2000, 0.3);
        loadingBarTransition(9000, 2000, 0.6);
        loadingBarTransition(11000, 4000, 0.45);
        loadingBarTransition(15000, 1500, 0.7);
        loadingBarTransition(16500, 2000, 0.93);
        loadingBarTransition(18500, 4500, 0.95);
        loadingBar.transition()
            .delay(23000)
            .duration(2000)
            .attr('x', screenMidX - ((svgWidth * 0.95) / 2))
            .attr('width', svgWidth * 0.95)
            .attr('fill', '#323031');
        loadingBar.transition()
            .delay(25000)
            .duration(1000)
            .attr('fill', 'transparent');
        loadingBarFull.transition()
            .delay(25000)
            .duration(1000)
            .attr('fill', 'transparent')
            .on('end', roboTransition); // on end of loading bar call robot task
    };

    loadingTextSequence();
    loadingBarSequence();
};

// TODO: Click me already ... double click...
// d3.selectAll('#startButton, #buttonPulse')
//     .on('click', function() {
//         buttonText.transition()
//             .text('I am tired. Double click me already!')
//             .duration(1000)
//     });

// remove button and play loading bar once button is double clicked
d3.selectAll('#startButton, #buttonPulse')
    .on('click', function() {
        if (counter == 7) {
            svg1.selectAll('#startButton').remove()
            svg1.selectAll('#buttonText').remove()
            svg1.selectAll('#buttonShadow').remove()
        };
        websiteBackground('#095256');
        lBar();
    });

// are you a robot?
function roboTransition() {
    const robotQuestion = svg1.append('text')
        .attr('id', 'robotQuestion')
        .text('')
        .attr('x', svgWidth / 3)
        .attr('y', svgHeight / 3)
        .attr('font-size', 25)
        .style('text-anchor', 'middle')
        .style('fill', 'white');
    
    // typewriter effect for robot question
    var i = 0;
    const txt = 'You are not a robot, are you?';
    function typeWriter() {
        if (i < txt.length - 11) {
            document.getElementById("robotQuestion").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else if (i < txt.length - 10) {
            document.getElementById("robotQuestion").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 2000);
        } else if (i < txt.length) {
            document.getElementById("robotQuestion").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        };
    };
    typeWriter();
    setTimeout(robotTaskPrep, 6000) // start robot task after text is writen
};

var taskCounter = 5
function robotTaskPrep() {
    const robotGroup = svg1.append('svg:g')
        .attr('id', 'robotGroup')
    
    // create svg elements positioned in a square for robot task
    function robotGroupItems() {
        // create 5 rectangles
        const robotRects = [
            ['robotRect', screenMidX, screenMidY], 
            ['robotRect', screenMidX + 55, screenMidY],
            ['robotRect', screenMidX, screenMidY - 55],
            ['robotRect', screenMidX - 55, screenMidY],
            ['robotRect', screenMidX + 55, screenMidY + 55],
            ['robotRect', screenMidX - 55, screenMidY + 110]];
        function createRobotRect(rect) {
            robotGroup.append('rect')
                .attr('id', rect[0])
                .attr('x', rect[1])
                .attr('y', rect[2])
                .attr('width', 50)
                .attr('height', 50)
                .attr('fill', 'transparent')
                .attr('rx', 4);     
        };
        robotRects.forEach(createRobotRect);

        // create 5 circles
        const robotCircles = [
            ['robotCircle', screenMidX + 80, screenMidY + 135], 
            ['robotCircle', screenMidX - 85, screenMidY + 26],
            ['robotCircle', screenMidX - 30, screenMidY - 30],
            ['robotCircle', screenMidX + 24, screenMidY + 80],
            ['robotCircle', screenMidX - 85, screenMidY + 135]];
        function createRobotCircle(circle) {
            robotGroup.append('circle')
                .attr('id', circle[0])
                .attr('cx', circle[1])
                .attr('cy', circle[2])
                .attr('r', 25)
                .attr('fill', 'transparent')
        };
        robotCircles.forEach(createRobotCircle);

        // create 5 rectangles rotated by 90 degrees
        const robotRotateRects = [
            ['robotRotateRect', screenMidX - 85, screenMidY - 55],
            ['robotRotateRect', screenMidX + 80, screenMidY - 55],
            ['robotRotateRect', screenMidX - 85, screenMidY + 55],
            ['robotRotateRect', screenMidX - 30, screenMidY + 55],
            ['robotRotateRect', screenMidX + 24, screenMidY + 111]];
        function createRobotRotateRect(rect) {
            robotGroup.append('rect')
                .attr('id', rect[0])
                .attr('x', rect[1])
                .attr('y', rect[2])
                .attr('width', 35)
                .attr('height', 35)
                .attr('fill', 'transparent')
                .attr('rx', 2)
                .attr('transform', `rotate(45 ${rect[1]} ${rect[2]})`);     
        };
        robotRotateRects.forEach(createRobotRotateRect);
    };
    // call group to create items
    robotGroupItems();

    // shadow for robot element group
    const robotShadow = svg1.append('ellipse')
        .attr('id', 'robotShadow')
        .attr('cx', screenMidX)
        .attr('cy', screenMidY + 200)
        .attr('rx', 180)
        .attr('ry', 15)
        .attr('fill', 'url(#robotShadowGradient)');
    var robotShadowGradient = defs.append('radialGradient')
        .attr('id', 'robotShadowGradient')
        .attr('x1', '0%')
        .attr('x2', '100%')
        .attr('y1', '0%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad');
    robotShadowGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#323031')
        .attr('stop-opacity', 0.6);
    robotShadowGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#323031')
        .attr('stop-opacity', 0);

    // text for robot task
    const robotText = svg1.append('text')
        .attr('id', 'robotText')
        .text('Select all grey-ish shapes...')
        .attr('x', screenMidX)
        .attr('y', screenMidY + 290)
        .attr('font-size', 15)
        .style('text-anchor', 'middle')
        .style('fill', 'white');
    const taskCounterText = svg1.append('text')
        .attr('id', 'taskCounterText')
        .text(taskCounter)
        .attr('x', screenMidX * 1.5)
        .attr('y', screenMidY + 100)
        .attr('font-size', svgHeight / 3)
        .style('text-anchor', 'middle')
        .style('fill', '#084c61');

    // function to dynamically create fill colour of robot task group elements
    var colourCounter = 16
    d3.selectAll('#robotRect, #robotCircle, #robotRotateRect')
        .each(function() {
            if (colourCounter > 1) {
                d3.select(this).transition()
                    .duration(Math.floor(Math.random() * 2000))
                    .attr('fill', randColour(coloursFull));
                colourCounter --;
            } else {
                d3.select(this).transition()
                    .duration(Math.floor(Math.random() * 2000))
                    .attr('fill', '#323031');
                colourCounter --;
            };
        });

    // robotGroup hover effect
    function RobotBounceUp() {
        robotGroup.transition()
            .duration(3000)
            .attr("transform", "translate(0, -15)")
            .ease(d3.easeCubic)
            .on('end', RobotBounceDown);
        robotShadow.transition()
            .duration(3000)
            .attr('rx', 150)
            .attr('ry', 9)
    };
    function RobotBounceDown() {
        robotGroup.transition()
            .duration(3000)
            .attr("transform", "translate(0, 0)")
            .ease(d3.easeCubic)
            .on('end', RobotBounceUp);
        robotShadow.transition()
            .duration(3000)
            .attr('rx', 160)
            .attr('ry', 14);
    };
    // call hover effect
    robotGroup.transition()
        .delay(1000)
        .duration(0)
        .on('end', RobotBounceUp)
    
    // call actual robotask
    robotTask();
};

// robottask remove 5 grey items from screen to trigger next step
function robotTask() {
    var removeCounter = 0
    const robotItemArray = document.querySelectorAll('#robotRect, #robotCircle, #robotRotateRect');
    robotItemArray.forEach(function(elem) {
        elem.addEventListener('mouseover', function test() {
            if (d3.select(this).attr('fill') != 'rgb(50, 48, 49)') { // if item is not grey change color on hover
                d3.select(this).transition()
                    .attr('fill', randColour(coloursFull));
            } else if (d3.select(this).attr('fill') == 'rgb(50, 48, 49)') {
                if (removeCounter < 4) {
                    elem.addEventListener('click', function() {
                        d3.select(this).remove();
                        removeCounter ++;
                        taskCounter --;
                        d3.select('#taskCounterText').transition()
                            .text(taskCounter)
                            .duration(0)
                    });
                } else {
                    elem.addEventListener('click', function() {
                        d3.selectAll('*').each(function() {
                            d3.select(this).transition()
                                .duration(Math.floor(Math.random() * 3000))
                                .attr('fill', 'transparent')
                        });
                        taskCounter --;
                        d3.select('#taskCounterText').transition()
                            .text(taskCounter)
                            .duration(0)
                            .attr('fill', 'transparent')
                        const removeText = svg1.append('text')
                            .attr('id', 'removeText')
                            .text('removeText')
                            .attr('x', screenMidX)
                            .attr('y', screenMidY + 290)
                            .attr('font-size', 15)
                            .style('text-anchor', 'middle')
                            .style('fill', 'transparent');
                        function removeRobotTask() {
                            svg1.selectAll('*').remove();
                        };
                        removeText.transition()
                            .duration(2800)
                            .on('end', removeRobotTask);
                    });
                };
            };
        });
    });
};

// TODO: learn callback for ;
