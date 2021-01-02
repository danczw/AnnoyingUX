const colorBasicDark = '#292929' // dark grey
const colorBasicLight = '#fffcf5' // white-ish

const colorGlitchGreen = '#1AFE49' // glitch green
const colorGlitchPink = '#FF124F' // glitch pink
const colorGlitchBlue = '#120458' // glitch blue

const colorBGDarkBlue = '#060024' // dark blue
const colorBGDarkPurple = '#410979' // dark purple
const colorBGPurple = '#cd00ff' // pink-purple

const colorAccentGreen = '#86a873' // matte olive green
const colorAccentYellow = '#bb9f06' // matte yellow
const colorAccentRed = '#db3a34' // matte-ish red
const colorAccentTurq = '#177e89' // turqouis
const colorAccentDarkTurq = '#084c61' // dark turquois
const colorAccentLightBlue = '#02fbff' // light turquois blue

const svgOneSelector = document.getElementById('svgOne');
const svgRect = svgOneSelector.getBoundingClientRect();
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
const svgOne = d3.select('#svgOne');
const defs = svgOne.append('defs');

// function for random colour picking
const robotAllColors = [colorAccentGreen, colorAccentYellow, colorAccentRed, colorBasicDark];
const robotSomeColors = [colorAccentGreen, colorAccentYellow, colorAccentRed]
const glitchAllColors = [colorGlitchGreen, colorGlitchPink, colorGlitchBlue, colorBasicLight]
function randColour(colourList) {
    return colourList[Math.floor(Math.random() * colourList.length)];
};

// change website background color
function websiteBackground(gradient, color, speed) {
    const backgrCircle1 = svgOne.append('circle')
        .attr('id', 'backgrCircle')
        .attr('cx', screenMidX)
        .attr('cy', screenMidY)
        .attr('r', 0)
        .attr('fill', color)
    backgrCircle1.transition()
        .attr('r', svgHeight * 2)
        .duration(speed)
        .on('end', websiteColour)
    backgrCircle1.transition()
        .attr('r', 0)
        .duration(speed)
        .delay(speed + 100)
        .on('end', removeCircle)
        
    function websiteColour() {
        document.body.style.backgroundImage = gradient;
    };
    function removeCircle() {
        svgOne.selectAll('#backgrCircle').remove();
    };
};

// randomizing x and y coordinates
function buttonXY() {
    buttonX = ((svgWidth-60) * Math.random()) + 60
    buttonY = ((svgHeight-200) * Math.random()) + 100
    buttonTextX = buttonX
    buttonTextY = buttonY + 50
    buttonShadowX = buttonX
    buttonShadowY = buttonY + 40
};

// glitch function
function glitch(wait) {
    svgOne.append('rect')
        .attr('id', 'glitchBackground')
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .attr('fill', colorBasicDark);
    
    function glitchRect(glitchRectY) {
        svgOne.append('rect')
            .attr('id', 'glitchRect')
            .attr('y', glitchRectY)
            .attr('width', svgWidth)
            .attr('height', 1)
            .attr('fill', randColour(glitchAllColors));
    };

    var glitchList = [];
    for (i = 0; i < 300; i++) {
        glitchList.push(Math.floor(Math.random() * svgHeight))
    }
    glitchList.forEach(glitchRect)
    setTimeout(() => svgOne.selectAll('#glitchRect, #glitchBackground').remove(), wait);

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

// CONTENT //

// welcome text
const welcomeText = svgOne.append('text')
    .attr('id', 'welcomeText')
    .attr('x', screenMidX)
    .attr('y', screenMidY / 3)
    .style('text-anchor', 'middle')
    .style('fill', colorBasicLight)
    .attr('font-size', 30)
    .text('Welcome!');

// Define button
const button = svgOne.append('circle')
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
    .attr('offset', '70%')
    .attr('stop-color', colorBasicDark)
    .attr('stop-opacity', 1);
buttonGradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', colorBasicDark)
    .attr('stop-opacity', 0.2);

// Define button pulse
const buttonPulse = svgOne.append('circle')
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
    .attr('stop-color', colorAccentLightBlue)
    .attr('stop-opacity', 0.5);
buttonPulseGradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', colorAccentLightBlue)
    .attr('stop-opacity', 0);

// Define button text
var buttonTextPath = svgOne.append('path')
    .attr('id', 'buttonPath')
    // M start-x, start-y A radius-x, radius-y, x-axis-rotation, large-arc-flag, sweep-flag, end-x, end-y
    .attr('d', `M${buttonX-30},${buttonY+260} A150,150 0 1,1 ${buttonX+30},${buttonY+260}`)
    .style('fill', 'none')
const buttonText = svgOne.append('text')
    .attr('id', 'buttonText')
    .append('textPath')
    .attr('xlink:href', '#buttonPath')
    .text('Click me!')
    .attr('font-size', 15)
    .attr('startOffset', '50%')
    .style('fill', colorBasicLight)
    .style('text-anchor','middle');

// Define the shadow and gradient
const buttonShadow = svgOne.append('ellipse')
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
    .attr('stop-color', colorBasicDark)
    .attr('stop-opacity', 0.6);
shadowGradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', colorBasicDark)
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
        svgOne.selectAll('#welcomeText').remove();
        if (counter < 3) {
            buttonXY();
            buttonTransition(0);
            bounceUp();
            counter += 1;
        } else if (counter < 5) {
            buttonXY();
            buttonTransition(0);
            bounceUp();
            buttonText.transition()
                .text('To fast?');
            counter += 1;
        } else if (counter < 6) {
            buttonXY();
            buttonTransition(200);
            bounceUp();
            buttonText.transition()
                .text('Crazy! Once more!');
            counter += 1; 
        } else if (counter < 7) {
            buttonXY();
            buttonTransition(500);
            svgOne.selectAll('#buttonPulse').remove();
            buttonText.transition()
                .text('Click me already!');
            counter += 1;
        };
});

// loading bar after button click
function lBar() {
    var lBarWidth = svgWidth * 0.01
    const loadingBarFull = svgOne.append('rect')
        .attr('id', 'loadingBarFull')
        .attr('x', screenMidX - ((svgWidth * 0.95) / 2))
        .attr('y', screenMidY)
        .attr('width', svgWidth * 0.95)
        .attr('height', 12)
        .attr('fill', 'url(#loadingBarFullGradient)')
        .attr('rx', 4);
    var loadingBarFullGradient = defs.append('linearGradient')
        .attr('id', 'loadingBarFullGradient')
        .attr('x1', '0%')
        .attr('x2', '100%')
        .attr('y1', '0%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad')
        .attr('gradientTransform', `rotate(330,${0},${0})`);
    loadingBarFullGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', colorBGDarkBlue)
        .attr('stop-opacity', 0.8);
    loadingBarFullGradient.append('stop')
        .attr('offset', '50%')
        .attr('stop-color', colorBGDarkPurple)
        .attr('stop-opacity', 0.8);
    loadingBarFullGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', colorBGPurple)
        .attr('stop-opacity', 0.8);
    
    const loadingBar = svgOne.append('rect')
        .attr('id', 'loadingBar')
        .attr('x', screenMidX - (lBarWidth / 2))
        .attr('y', screenMidY)
        .attr('width', lBarWidth)
        .attr('height', 12)
        .attr('fill', colorBasicLight)
        .attr('rx', 4);
    const loadingText = svgOne.append('text')
        .attr('id', 'loadingText')
        .attr('x', screenMidX)
        .attr('y', screenMidY - 30)
        .style('text-anchor', 'middle')
        .style('fill', colorBasicLight)
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
            .delay(23600)
            .style('fill', colorBasicDark)
            .text('loading complete!');
        loadingText.transition()
            .delay(24500)
            .duration(1000)
            .style('fill', 'transparent')
    };

    function loadingBarTransition(delay, duration, multiplier) {
        loadingBar.transition()
            .delay(delay)
            .duration(duration)
            .attr('x', screenMidX - ((svgWidth * multiplier) / 2))
            .attr('width', svgWidth * multiplier)
            .ease(d3.easeQuadInOut);
    };

    function loadingBarSequence() {
        loadingBarTransition(500, 1000, 0.02);
        loadingBarTransition(1500, 2000, 0.035);
        loadingBarTransition(3500, 800, 0.06);
        loadingBarTransition(4300, 1500, 0.1);
        loadingBarTransition(5800, 1800, 0.3);
        loadingBarTransition(7600, 2000, 0.6);
        loadingBarTransition(9600, 5000, 0.45);
        loadingBarTransition(14600, 1500, 0.7);
        loadingBarTransition(16100, 2000, 0.93);
        loadingBarTransition(18100, 4500, 0.95);
        loadingBar.transition()
            .delay(22600)
            .duration(2000)
            .attr('x', screenMidX - ((svgWidth * 0.95) / 2))
            .attr('width', svgWidth * 0.95)
            .attr('fill', colorBasicDark);
        loadingBar.transition()
            .delay(24500)
            .duration(1000)
            .attr('fill', 'transparent')
            .on('end', robotTransition); // on end of loading bar call robot task
        loadingBarFull.transition()
            .delay(24000)
            .duration(1000)
            .attr('fill', 'transparent');
    };

    loadingTextSequence();
    loadingBarSequence();
};

// remove button and play loading bar sequence once button is clicked
d3.selectAll('#startButton, #buttonPulse')
    .on('click', function() {
        if (counter == 7) {
            svgOne.selectAll('#startButton, #buttonText, #buttonShadow').remove()
        };
        newGradient = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
        websiteBackground(newGradient, colorAccentTurq, 2000);
        lBar();
});

// are you a robot?
function robotTransition() {
    d3.selectAll('#loadingText, #loadingBar, #loadingBarFull').remove()

    const robotQuestion = svgOne.append('text')
        .attr('id', 'robotQuestion')
        .text('')
        .attr('x', svgWidth / 3)
        .attr('y', svgHeight / 3)
        .attr('font-size', 25)
        .style('text-anchor', 'middle')
        .style('fill', colorBasicDark);
    
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
            // robot glitch effect:
            setTimeout(() => glitch(100), 400);
            setTimeout(() => glitch(300), 700);
            setTimeout(() => glitch(200), 1100);
            setTimeout(typeWriter, 2000);
        } else if (i < txt.length) {
            document.getElementById("robotQuestion").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        };
    };
    typeWriter();
    setTimeout(robotTaskPrep, 6000) // initialize robot task after text is writen
};

var robotTaskCounter = 5
function robotTaskPrep() {
    const robotGroup = svgOne.append('svg:g')
        .attr('id', 'robotGroup')
    
    // create svg elements positioned in a square for robot task
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

    // shadow for robot element group
    const robotShadow = svgOne.append('ellipse')
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
        .attr('stop-color', colorBasicDark)
        .attr('stop-opacity', 0.6);
    robotShadowGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', colorBasicDark)
        .attr('stop-opacity', 0);

    // text for robot task
    const robotText = svgOne.append('text')
        .attr('id', 'robotText')
        .text('Select enough grey-ish shapes...')
        .attr('x', screenMidX)
        .attr('y', screenMidY + 290)
        .attr('font-size', 15)
        .style('text-anchor', 'middle')
        .style('fill', colorBasicDark);
    const taskCounterText = svgOne.append('text')
        .attr('id', 'taskCounterText')
        .text(robotTaskCounter)
        .attr('x', screenMidX * 1.5)
        .attr('y', screenMidY + 100)
        .attr('font-size', svgHeight / 3)
        .style('text-anchor', 'middle')
        .style('fill', colorBasicDark);

    // function to dynamically create fill colour of robot task group elements
    var colourCounter = 16
    d3.selectAll('#robotRect, #robotCircle, #robotRotateRect')
        .each(function() {
            if (colourCounter > 2) {
                d3.select(this).transition()
                    .duration(Math.floor(Math.random() * 2000))
                    .attr('fill', randColour(robotSomeColors));
                colourCounter --;
            } else {
                d3.select(this).transition()
                    .duration(Math.floor(Math.random() * 2000))
                    .attr('fill', colorBasicDark);
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
    
    // call actual robotask items
    robotItemHover();
    robotItemClick();
};

// add event listener to change color on hove for all items
function robotItemHover() {
    const robotItemArray = document.querySelectorAll('#robotRect, #robotCircle, #robotRotateRect');
    robotItemArray.forEach(function(elem) {
        elem.addEventListener('mouseover', robotItemColor);
    });
};
// change item color randomly on hover if not grey
function robotItemColor(elem) {
    if (d3.select(this).attr('fill') != 'rgb(41, 41, 41)') { // if item is not grey change color on hover
        d3.select(this).transition()
            .attr('fill', randColour(robotAllColors));
    };
};
// if item grey and event click change counter
function robotItemClick() {
    const robotItemArray = document.querySelectorAll('#robotRect, #robotCircle, #robotRotateRect');
    robotItemArray.forEach(function(elem) {
        elem.addEventListener('click', robotItemRemove);
    });
};
// roboTask: click and remove 5 grey-ish items to pass robot exam
function robotItemRemove(elem) {
    if ((d3.select(this).attr('fill') == 'rgb(41, 41, 41)') && (robotTaskCounter > 1)) {
        d3.select(this).remove();
        robotTaskCounter --;
        d3.select('#taskCounterText').transition()
            .text(robotTaskCounter)
            .duration(0);
    } else if ((d3.select(this).attr('fill') == 'rgb(41, 41, 41)') && (robotTaskCounter < 2)) {
        const robotItemArray = document.querySelectorAll('#robotRect, #robotCircle, #robotRotateRect');
        robotItemArray.forEach(function(elem) {
            elem.removeEventListener('mouseover', robotItemColor);
        });
        robotTaskCounter --;
        d3.select('#taskCounterText').transition()
            .text(robotTaskCounter)
            .attr('fontSize', +100)
            .duration(0);
        d3.selectAll('*').each(function() {
            d3.select(this).transition()
                .duration(Math.floor(Math.random() * 3000))
                .attr('fill', 'transparent');
        });
        d3.selectAll('#taskCounterText, #robotText, #robotQuestion').transition()
            .style('fill', 'transparent')
            .duration(1000)
        d3.select('#taskCounterText').transition()
            .attr('font-size', svgWidth * 8)
            .attr('y', screenMidY * 10)
            .duration(3000)
            .on('end', scrollDown); // on end add scrolldown transition
    };
};

function scrollDown() {
    newGrad = 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)'
    websiteBackground(newGrad, colorBGDarkBlue, 2000); // change website background with transition effect
    svgOne.selectAll('#robotGroup, #taskCounterText,\
        #robotShadow, #robotText, #robotQuestion').remove();
    const scrollDownText = svgOne.append('text')
        .attr('id', 'scrollDownText')
        .attr('x', screenMidX)
        .attr('y', screenMidY / 3)
        .style('text-anchor', 'middle')
        .style('fill', 'transparent')
        .style('font-size', '30px')
        .text('Scroll down.');
    d3.select('#scrollDownText').transition() 
        .style('fill', colorBasicDark)
        .duration(2000)
        .delay(2000);
    
    // add new svg below first for scroll down, on scroll down start loading circle
    function newSvg() {
        var canvasTwo = document.createElement('div')
        canvasTwo.className = 'canvas'
        canvasTwo.id = 'canvasTwo'    
        document.body.appendChild(canvasTwo)
        
        var svgTwoDocElem = document.createElement('svg')
        svgTwoDocElem.className = 'svg'
        svgTwoDocElem.id = 'svgTwo'
        canvasTwo.appendChild(svgTwoDocElem)
        const svgTwo = d3.select('#svgTwo');

        const scrollUpText = svgTwo.append('text')
            .attr('id', 'scrollUpText')
            .attr('x', screenMidX)
            .attr('y', screenMidY / 3)
            .style('text-anchor', 'middle')
            .style('color', colorBasicDark)
            .style('font-size', '30px')
            .text('A bit more!');

        const startScrollOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px 0px 0px'
        };
        const startScroll = new IntersectionObserver(function(
            entries, startScroll) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        alert('Error!\nNothing has gone wrong! Keep scrolling...');
                        startScroll.unobserve(canvasTwo);
                    };
                })
            }, startScrollOptions
        );
        startScroll.observe(canvasTwo);

        const finishDownScrollOptions = {
            threshold: 0.95,
            rootMargin: '0px 0px 0px 0px'
        };
        const finishDownScroll = new IntersectionObserver(function(
            entries, finishDownScroll) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        finishDownScroll.unobserve(canvasTwo);
                        scrollDownText.transition() 
                            .text('Enter password and hit enter:');
                        scrollUpText.transition()
                            .text('Just kidding - You can scroll back up...')
                            .style('color', colorBasicDark)
                            .duration(1000)
                            .delay(1000);
                        scrolledUp();
                    };
                })
            }, finishDownScrollOptions
        );
        finishDownScroll.observe(canvasTwo);
    };
    setTimeout(newSvg, 2500)
};

function scrolledUp() {
    const finishUpScrollOptions = {
        threshold: 0.95,
        rootMargin: '0px 0px 0px 0px'
    };
    const finishUpScroll = new IntersectionObserver(function(
        entries, finishUpScroll) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    var canvasTwo = document.getElementById('canvasTwo');
                    canvasTwo.parentNode.removeChild(canvasTwo);
                    pwInput();
                };
            })
        }, finishUpScrollOptions
    );
    finishUpScroll.observe(canvasOne);
};

function pwInput() {
    var inputElem = document.createElement('input');
    inputElem.className = 'inputPW';
    inputElem.id = 'inputPW';
    inputElem.placeholder = ' password goes here ';
    canvasOne.appendChild(inputElem);

    document.getElementById('inputPW').addEventListener('keypress', function (k) {
        if (k.key === 'Enter') {
            loadingCircles();
            setTimeout(pwRules, 12000);
            inputElem.parentNode.removeChild(inputElem)
        }
    })
};

function loadingCircles() {
    const loadCircleOne = svgOne.append('circle')
        .attr('id', 'loadCircleOne')
        .attr('cx', screenMidX - 15)
        .attr('cy', screenMidY + 100)
        .attr('r', 25)
        .attr('fill', 'transparent');
    const loadCircleTwo = svgOne.append('circle')
        .attr('id', 'loadCircleTwo')
        .attr('cx', screenMidX + 15)
        .attr('cy', screenMidY + 100)
        .attr('r', 25)
        .attr('fill', 'transparent');
    const loadCircleThree = svgOne.append('circle')
        .attr('id', 'loadCircleThree')
        .attr('cx', screenMidX + 15)
        .attr('cy', screenMidY + 70)
        .attr('r', 25)
        .attr('fill', 'transparent');
    const loadCircleFour = svgOne.append('circle')
        .attr('id', 'loadCircleFour')
        .attr('cx', screenMidX - 15)
        .attr('cy', screenMidY + 70)
        .attr('r', 25)
        .attr('fill', 'transparent');

    function loadingCircleTransition(circle, color, delayMultiplier) {
        circle.transition()
            .attr('fill', color)
            .duration(800)
            .delay(delayMultiplier*500);
        circle.transition()
            .attr('fill', 'transparent')
            .duration(800)
            .delay(delayMultiplier*500+600);
    };

    var counter = 0;
    var circleIndex = 1;
    while (counter<20) {
        if (circleIndex == 1) {
            loadingCircleTransition(loadCircleOne, colorAccentDarkTurq, counter);
            circleIndex = 2;
        } else if (circleIndex == 2) {
            loadingCircleTransition(loadCircleTwo, colorAccentRed, counter);
            circleIndex = 3;
        } else if (circleIndex == 3) {
            loadingCircleTransition(loadCircleThree, colorAccentYellow, counter);
            circleIndex = 4;
        } else if (circleIndex == 4) {
            loadingCircleTransition(loadCircleFour, colorAccentGreen, counter);
            circleIndex = 1;
        };
        counter ++;
    };
};

function pwRules() {
    const x = screenMidX / 2 - 100
    const y = screenMidY / 1.5
    const pwRulesTextOne = svgOne.append('text')
        .attr('id', 'pwRulesText')
        .attr('x', x - 30)
        .attr('y', y)
        .style('text-anchor', 'left')
        .style('fill', colorAccentDarkTurq)
        .style('font-size', '12px')
        .text('The password must include:');
    const pwRulesTextTwo = svgOne.append('text')
        .attr('id', 'pwRulesText')
        .attr('x', x)
        .attr('y', y + 22)
        .style('text-anchor', 'left')
        .style('fill', colorAccentDarkTurq)
        .style('font-size', '12px')
        .text('- at least one upper case letter');
    const pwRulesTextThree = svgOne.append('text')
        .attr('id', 'pwRulesText')
        .attr('x', x)
        .attr('y', y + 44)
        .style('text-anchor', 'left')
        .style('fill', colorAccentDarkTurq)
        .style('font-size', '12px')
        .text('- not more than seven lower case letter');
    const pwRulesTextFour = svgOne.append('text')
        .attr('id', 'pwRulesText')
        .attr('x', x)
        .attr('y', y + 66)
        .style('text-anchor', 'left')
        .style('fill', colorAccentDarkTurq)
        .style('font-size', '12px')
        .text('- a number bigger than 1492');
    const pwRulesTextFive = svgOne.append('text')
        .attr('id', 'pwRulesText')
        .attr('x', x)
        .attr('y', y + 88)
        .style('text-anchor', 'left')
        .style('fill', colorAccentDarkTurq)
        .style('font-size', '12px')
        .text('- every special character exactly once: #+*-:,;_');
    const pwRulesTextSix = svgOne.append('text')
        .attr('id', 'pwRulesText')
        .attr('x', x)
        .attr('y', y + 110)
        .style('text-anchor', 'left')
        .style('fill', colorAccentDarkTurq)
        .style('font-size', '12px')
        .text('- at least two favorite animals');
    const pwRulesTextSeven = svgOne.append('text')
        .attr('id', 'pwRulesText')
        .attr('x', x)
        .attr('y', y + 132)
        .style('text-anchor', 'left')
        .style('fill', colorAccentDarkTurq)
        .style('font-size', '12px')
        .text('- one of your grandparents names');
    const pwRulesTextEight = svgOne.append('text')
        .attr('id', 'pwRulesText')
        .attr('x', x)
        .attr('y', y + 154)
        .style('text-anchor', 'left')
        .style('fill', colorAccentDarkTurq)
        .style('font-size', '12px')
        .text('- one kidney');

    var inputElem = document.createElement('input');
    inputElem.className = 'inputPW';
    inputElem.id = 'inputPW';
    inputElem.placeholder = ' password goes here ';
    canvasOne.appendChild(inputElem);

    d3.select('#scrollDownText').transition() 
        .text('Please try again:')
    
    document.getElementById('inputPW').addEventListener('keypress', function (k) {
        if (k.key === 'Enter') {
            loadingCircles();
            d3.selectAll('#pwRulesText, #scrollDownText').remove();
            inputElem.parentNode.removeChild(inputElem);
            setTimeout(doneText, 12000)
        }
    });
};

function doneText() {
    svgOne.append('text')
        .attr('x', screenMidX)
        .attr('y', screenMidY - 30)
        .style('text-anchor', 'middle')
        .style('fill', colorAccentDarkTurq)
        .style('font-size', '30px')
        .text('You did it!');
    
    var github = document.createElement('a');
    github.className = 'githubLink'
    github.href = 'https://github.com/danczw/Website_AnnoyingUX';
    github.innerHTML = 'github: Annoying UX';
    canvasOne.appendChild(github)
};