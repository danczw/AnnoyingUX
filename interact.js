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

// function xyRand() {
//     buttonX = ((svgWidth-60) * Math.random()) + 40
//     buttonY = ((svgHeight-150) * Math.random()) + 100
//     buttonTextX = buttonX
//     buttonTextY = buttonY + 50
//     buttonShadowX = buttonX
//     buttonShadowY = buttonY + 40
// };
// function buttonTransition(speed) {
//     button.transition()
//         .duration(speed)
//         .attr('cx', buttonX)
//         .attr('cy', buttonY)
//         .ease(d3.easeCubic);
//     buttonPulse.transition()
//         .duration(speed)
//         .attr('cx', buttonX)
//         .attr('cy', buttonY)
//         .ease(d3.easeCubic);
//     buttonTextPath.transition()
//         .duration(speed)
//         .attr('d', `M${buttonX-30},${buttonY+260} A150,150 0 1,1 ${buttonX+30},${buttonY+260}`);
//     buttonShadow.transition()
//         .duration(speed)
//         .attr('cx', buttonShadowX)
//         .attr('cy', buttonShadowY);
// };

// // Define button
// const button = svg1.append('circle')
//     .attr('id', 'startButton')
//     .attr('cx', buttonX)
//     .attr('cy', buttonY)
//     .attr('r', 28)
//     .attr('fill', 'url(#buttonGradient)');

// var buttonGradient = defs.append('radialGradient')
//     .attr('id', 'buttonGradient')
//     .attr('x1', '0%')
//     .attr('x2', '100%')
//     .attr('y1', '0%')
//     .attr('y2', '100%')
//     .attr('spreadMethod', 'pad');
// buttonGradient.append('stop')
//     .attr('offset', '80%')
//     .attr('stop-color', '#323031')
//     .attr('stop-opacity', 1);
// buttonGradient.append('stop')
//     .attr('offset', '100%')
//     .attr('stop-color', '#323031')
//     .attr('stop-opacity', 0.6);

// // Define button pulse
// const buttonPulse = svg1.append('circle')
//     .attr('id', 'buttonPulse')
//     .attr('cx', buttonX)
//     .attr('cy', buttonY)
//     .attr('r', 2)
//     .attr('fill', 'transparent')
//     .attr('stroke', 'url(#buttonPulseGradient)')
//     .attr('stroke-width', 15)

// var buttonPulseGradient = defs.append('radialGradient')
//     .attr('id', 'buttonPulseGradient')
//     .attr('x1', '0%')
//     .attr('x2', '50%')
//     .attr('y1', '0%')
//     .attr('y2', '100%')
//     .attr('spreadMethod', 'pad');
// buttonPulseGradient.append('stop')
//     .attr('offset', '50%')
//     .attr('stop-color', 'white')
//     .attr('stop-opacity', 0.5);
// buttonPulseGradient.append('stop')
//     .attr('offset', '100%')
//     .attr('stop-color', 'white')
//     .attr('stop-opacity', 0);


// // Define button text
// var buttonTextPath = svg1.append('path')
//     .attr('id', 'buttonPath')
//     // M start-x, start-y A radius-x, radius-y, x-axis-rotation, large-arc-flag, sweep-flag, end-x, end-y
//     .attr('d', `M${buttonX-30},${buttonY+260} A150,150 0 1,1 ${buttonX+30},${buttonY+260}`)
//     .style('fill', 'none')

// const buttonText = svg1.append('text')
//     .attr('id', 'buttonText')
//     .append('textPath')
//     .attr('xlink:href', '#buttonPath')
//     .text('Click me!')
//     .attr('font-size', 15)
//     .attr('startOffset', '50%')
//     .style('fill', '#ffc857')
//     .style('text-anchor','middle');

// // Define the shadow and gradient
// const buttonShadow = svg1.append('ellipse')
//     .attr('id', 'buttonShadow')
//     .attr('cx', buttonShadowX)
//     .attr('cy', buttonShadowY)
//     .attr('rx', 35)
//     .attr('ry', 10)
//     .attr('fill', 'url(#shadowGradient)');

// var shadowGradient = defs.append('radialGradient')
//     .attr('id', 'shadowGradient')
//     .attr('x1', '0%')
//     .attr('x2', '100%')
//     .attr('y1', '0%')
//     .attr('y2', '100%')
//     .attr('spreadMethod', 'pad');
// shadowGradient.append('stop')
//     .attr('offset', '0%')
//     .attr('stop-color', '#323031')
//     .attr('stop-opacity', 0.6);
// shadowGradient.append('stop')
//     .attr('offset', '100%')
//     .attr('stop-color', '#323031')
//     .attr('stop-opacity', 0);

// // Loop bouncing button
// function bounceUp() {
//     button.transition()
//         .duration(1500)
//         .attr('cy', buttonY - 70)
//         .ease(d3.easeCubic)
//         .on('end', bounceDown);
//     buttonPulse.transition()
//         .duration(1500)
//         .attr('cy', buttonY - 70)
//         .ease(d3.easeCubic)
//         .attr('r', 28)
//         .attr('stroke-width', 2);
//     buttonTextPath.transition()
//         .duration(1500)
//         .attr('d', `M${buttonX-30},${buttonY+190} A150,150 0 1,1 ${buttonX+30},${buttonY+190}`)
//         .ease(d3.easeCubic);
//     buttonShadow.transition()
//         .duration(1500)
//         .attr('rx', 25)
//         .attr('ry', 7);
// };
// function bounceDown() {
//     button.transition()
//         .duration(1500)
//         .attr('cy', buttonY)
//         .ease(d3.easeCubic)
//         .on('end', bounceUp);
//     buttonPulse.transition()
//         .duration(1500)
//         .attr('cy', buttonY)
//         .ease(d3.easeCubic)
//         .attr('r', 2)
//         .attr('stroke-width', 10);
//     buttonTextPath.transition()
//         .duration(1500)
//         .attr('d', `M${buttonX-30},${buttonY+260} A150,150 0 1,1 ${buttonX+30},${buttonY+260}`)
//         .ease(d3.easeCubic);
//     buttonShadow.transition()
//         .duration(1500)
//         .attr('rx', 35)
//         .attr('ry', 10);
// };
// bounceUp();

// // Button interaction
// var counter = 0

// d3.selectAll('#buttonPulse, #startButton')
//     .on('mouseover', function() {
//         if (counter < 3) {
//             xyRand();
//             buttonTransition(0);
//             bounceUp();
//             counter += 1;
//         } else if (counter < 5) {
//             xyRand();
//             buttonTransition(0);
//             bounceUp();
//             buttonText.transition()
//                 .text('To fast?');
//             counter += 1;
//         } else if (counter < 6) {
//             xyRand();
//             buttonTransition(500);
//             bounceUp();
//             buttonText.transition()
//                 .text('Crazy! Once more!');
//             counter += 1; 
//         } else if (counter < 7) {
//             xyRand();
//             buttonTransition(1000);
//             svg1.selectAll('#buttonPulse').remove();
//             buttonText.transition()
//                 .text('I am tired.\nClick me already!');
//             counter += 1; 
//         };
//     });

// // TODO: Click me already ... double click...

// // loading bar after button click
// function lBar() {
//     var lBarWidth = svgWidth * 0.01
//     const loadingBarFull = svg1.append('rect')
//         .attr('id', 'loadingBarFull')
//         .attr('x', screenMidX - ((svgWidth * 0.95) / 2))
//         .attr('y', screenMidY)
//         .attr('width', svgWidth * 0.95)
//         .attr('height', 10)
//         .attr('fill', '#084c61')
//         .attr('rx', 4);
//     const loadingBar = svg1.append('rect')
//         .attr('id', 'loadingBar')
//         .attr('x', screenMidX - (lBarWidth / 2))
//         .attr('y', screenMidY)
//         .attr('width', lBarWidth)
//         .attr('height', 10)
//         .attr('fill', '#ffc857')
//         .attr('rx', 4);
//     const loadingText = svg1.append('text')
//         .attr('id', 'loadingText')
//         .attr('x', screenMidX)
//         .attr('y', screenMidY - 30)
//         .style('text-anchor', 'middle')
//         .style('fill', 'white')
//         .attr('font-size', 20)
//         .text('loading');
    
//     function loadingTextTransition(delay) {
//         loadingText.transition()
//             .delay(delay)
//             .duration(1000)
//             .text('loading');
//         loadingText.transition()
//             .delay(delay + 1000)
//             .duration(1000)
//             .text('loading .');
//         loadingText.transition()
//             .delay(delay + 2000)
//             .duration(1000)
//             .text('loading . .');
//         loadingText.transition()
//             .delay(delay + 3000)
//             .duration(1000)
//             .text('loading . . .')
//     };
//     function loadingTextSequence() {
//         loadingTextTransition(0);
//         loadingTextTransition(4000);
//         loadingTextTransition(8000);
//         loadingTextTransition(12000);
//         loadingTextTransition(16000);
//         loadingTextTransition(20000);
//         loadingText.transition()
//             .delay(24000)
//             .duration(1000)
//             .text('loading complete!');
//         loadingText.transition()
//             .delay(25000)
//             .duration(1000)
//             .style('fill', 'transparent')
//     };

//     function loadingBarTransition(delay, duration, multiplier) {
//         loadingBar.transition()
//             .delay(delay)
//             .duration(duration)
//             .attr('x', screenMidX - ((svgWidth * multiplier) / 2))
//             .attr('width', svgWidth * multiplier);
//     };
//     function loadingBarSequence() {
//         loadingBarTransition(1000, 1000, 0.02);
//         loadingBarTransition(2000, 2000, 0.035);
//         loadingBarTransition(4000, 1000, 0.06);
//         loadingBarTransition(5000, 2000, 0.1);
//         loadingBarTransition(7000, 2000, 0.3);
//         loadingBarTransition(9000, 2000, 0.6);
//         loadingBarTransition(11000, 4000, 0.45);
//         loadingBarTransition(15000, 1500, 0.7);
//         loadingBarTransition(16500, 2000, 0.93);
//         loadingBarTransition(18500, 4500, 0.95);
//         loadingBar.transition()
//             .delay(23000)
//             .duration(2000)
//             .attr('x', screenMidX - ((svgWidth * 0.95) / 2))
//             .attr('width', svgWidth * 0.95)
//             .attr('fill', '#323031');
//         loadingBar.transition()
//             .delay(25000)
//             .duration(1000)
//             .attr('fill', 'transparent');
//         loadingBarFull.transition()
//             .delay(25000)
//             .duration(1000)
//             .attr('fill', 'transparent')
//             .on('end', roboTransition);
//     };
//     loadingTextSequence();
//     loadingBarSequence();
// };

// d3.selectAll('#startButton, #buttonPulse')
//     .on('click', function() {
//         if (counter = 7) {
//             svg1.selectAll('#startButton').remove()
//             svg1.selectAll('#buttonText').remove()
//             svg1.selectAll('#buttonShadow').remove()
//         };
//         lBar();
//     });
roboTransition()
// are you a robot?
function roboTransition() {
    const robotQuestion = svg1.append('text')
        .attr('id', 'robotQuestion')
        .text('You are not a robot, are you?')
        .attr('x', 0)
        .attr('y', svgHeight / 4)
        .attr('font-size', 20)
        .style('text-anchor', 'middle')
        .style('fill', 'transparent');
    robotQuestion.transition()
        .style('fill', 'white')
        .attr('x', svgWidth / 3)
        .delay(1000)
        .duration(200); 

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
    
    const robotGroup = svg1.append('svg:g')
        .attr('id', 'robotGroup')

    const robotText = robotGroup.append('text')
        .attr('id', 'robotText')
        .text('Select all grey-ish shapes.')
        .attr('x', screenMidX)
        .attr('y', screenMidY - 90)
        .attr('font-size', 17)
        .style('text-anchor', 'middle')
        .style('fill', 'transparent');  

    const colours = ['#bb9f06', '#db3a34', '#86a873', '#323031']
    function colour() {
        return colours[Math.floor(Math.random() * colours.length)];
    };

    const robotRects = [
        ['robotRect1', screenMidX, screenMidY, colour()], 
        ['robotRect2', screenMidX + 55, screenMidY, colour()],
        ['robotRect3', screenMidX, screenMidY - 55, colour()],
        ['robotRect4', screenMidX - 55, screenMidY, colour()],
        ['robotRect5', screenMidX + 55, screenMidY + 55, '#323031'],
        ['robotRect6', screenMidX - 55, screenMidY + 110, colour()]];
    function createRobotRect(rect) {
        robotGroup.append('rect')
            .attr('id', rect[0])
            .attr('x', rect[1])
            .attr('y', rect[2])
            .attr('width', 50)
            .attr('height', 50)
            .attr('fill', rect[3])
            .attr('rx', 4);     
    };
    robotRects.forEach(createRobotRect);

    const robotCircles = [
        ['robotCircle1', screenMidX + 80, screenMidY + 135, colour()], 
        ['robotCircle2', screenMidX - 85, screenMidY + 26, colour()],
        ['robotCircle3', screenMidX - 30, screenMidY - 30, colour()],
        ['robotCircle4', screenMidX + 24, screenMidY + 80, colour()],
        ['robotCircle1', screenMidX - 85, screenMidY + 135, colour()]];
    function createRobotCircle(circle) {
        robotGroup.append('circle')
            .attr('id', circle[0])
            .attr('cx', circle[1])
            .attr('cy', circle[2])
            .attr('r', 25)
            .attr('fill', circle[3])
    };
    robotCircles.forEach(createRobotCircle);

    const robotRotateRects = [
        ['robotRotateRect1', screenMidX - 85, screenMidY - 55, colour()],
        ['robotRotateRect2', screenMidX + 80, screenMidY - 55, colour()],
        ['robotRotateRect3', screenMidX - 85, screenMidY + 55, colour()],
        ['robotRotateRect4', screenMidX - 30, screenMidY + 55, colour()],
        ['robotRotateRect5', screenMidX + 24, screenMidY + 111, colour()]];
    function createRobotRotateRect(rect) {
        robotGroup.append('rect')
            .attr('id', rect[0])
            .attr('x', rect[1])
            .attr('y', rect[2])
            .attr('width', 35)
            .attr('height', 35)
            .attr('fill', rect[3])
            .attr('rx', 2)
            .attr('transform', `rotate(45 ${rect[1]} ${rect[2]})`);     
    };
    robotRotateRects.forEach(createRobotRotateRect);

    // robotGroup hover effect
    function RobotBounceUp() {
        robotGroup.transition()
            .duration(3000)
            .attr("transform", "translate(0, -10)")
            .ease(d3.easeCubic)
            .on('end', RobotBounceDown);
        robotShadow.transition()
            .duration(3000)
            .attr('rx', 170)
            .attr('ry', 11)
        robotText.transition()
            .style('fill', 'white')
            .duration(3000); ;
    };
    function RobotBounceDown() {
        robotGroup.transition()
            .duration(3000)
            .attr("transform", "translate(0, 0)")
            .ease(d3.easeCubic)
            .on('end', RobotBounceUp);
        robotShadow.transition()
            .duration(3000)
            .attr('rx', 180)
            .attr('ry', 15);
    };
    robotGroup.transition()
        .delay(1000)
        .duration(0)
        .on('end', RobotBounceUp)
};

// TODO: on press disapear if grey, else reshuffle
