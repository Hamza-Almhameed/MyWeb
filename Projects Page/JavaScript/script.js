var addNewProject = document.getElementById("newProject")
var projectsList = document.getElementById("projects")
var removeModeOn = false



if(localStorage.getItem("AllProjects") != null) {
    projectsList.innerHTML = projectsList.innerHTML + localStorage.getItem("AllProjects")
}




addNewProject.onclick = function() {
    var projectName = prompt("Please enter your project name")
    var defaultSourceCode = `
    <div id="all">
        <div id="toolbar">
            <div id="htmlEditor" class="editorSelectionDiv">
                <h1 class="editorSelection">Basic Shape</h1>
            </div>
            <div id="cssEditor" class="editorSelectionDiv">
                <h1 class="editorSelection">Style</h1>
            </div>
            <div id="attributes" class="editorSelectionDiv">
                <h1 class="editorSelection">Attributes</h1>
            </div>
            <div id="more" class="editorSelectionDiv">
                <h1 class="editorSelection">More</h1>
            </div>
        </div>

        <div id="editWindow">

            <div id="htmlElements">
                <h2 id="container" class="element">Container</h2><hr>
                <h2 id="heading1" class="element">Heading 1</h2><hr>
                <h2 id="heading2" class="element">Heading 2</h2><hr>
                <h2 id="heading3" class="element">Heading 3</h2><hr>
                <h2 id="heading4" class="element">Heading 4</h2><hr>
                <h2 id="heading5" class="element">Heading 5</h2><hr>
                <h2 id="heading6" class="element">Heading 6</h2><hr>
                <h2 id="paragraph" class="element">Paragraph</h2><hr>
                <h2 id="span" class="element">Span</h2><hr>
                <h2 id="button" class="element">Button</h2><hr>
                <h2 id="input" class="element">input</h2><hr>
                <h2 id="newLine" class="element">New Line</h2><hr>
                <h2 id="visualLine" class="element">Visual Line</h2><hr>
                <h2 id="image" class="element">Image</h2><hr>
                <h2 id="progress" class="element">Progress</h2><hr>
                <h2 id="linkedText" class="element">Linked Text</h2><hr>
                <h2 id="textArea" class="element">Text Area</h2><hr>
                <h2 id="range" class="element">Range</h2><hr>
                <h2 id="passwordInput" class="element">Password input</h2><hr>
                <h2 id="colorInput" class="element">Color input</h2><hr>
                <h2 id="dateInput" class="element">Date input</h2><hr>
                <h2 id="fileInput" class="element">File input</h2><hr>
                <h2 id="numberInput" class="element">Number input</h2><hr>
                <h2 id="radioInput" class="element">Radio input</h2><hr>
                <h2 id="checkbox" class="element">Checkbox</h2><hr>
                <h2 class="element">More Elements Coming Soon</h2>
            </div>
            
            

            <div class="hidden" id="cssEditingSection">
                <h2 id="cssEditingSectionBack" class="element">Back</h2><hr>
                
                <h2 class="property">Width</h2>
                <input class="propertyRange" id="widthRange" type="number" min="0" max="999"><hr>

                <h2 class="property">Height</h2>
                <input class="propertyRange" id="heightRange" type="number" min="0" max="999"><hr>

                <h2 class="property">Text Color</h2>
                <input class="propertyRange" id="textColorInput" type="color"><hr>

                <h2 class="property">Text align</h2>
                <h2 class="element" id="centerTextAlign">Center</h2>
                <h2 class="element" id="leftTextAlign">Left</h2>
                <h2 class="element" id="rightTextAlign">Right</h2><hr>

                <h2 class="property">Background Color</h2>
                <input class="propertyRange" id="backgroungColorInput" type="color"><hr>

                <h2 id="bgImage" class="element">Background image</h2><hr>

                <h2 class="property">Background Repeat</h2>
                <h2 class="element" id="noRepeatBgRepeat">No Repeat</h2>
                <h2 class="element" id="repeatBgRepeat">Repeat</h2>
                <h2 class="element" id="repeatxBgRepeat">Repeat X</h2>
                <h2 class="element" id="repeatyBgRepeat">Repeat Y</h2><hr>

                <h2 class="property">Background Position</h2>
                <h2 class="element" id="centerBgPosition">Center</h2>
                <h2 class="element" id="leftBgPosition">Left</h2>
                <h2 class="element" id="rightBgPosition">Right</h2>
                <h2 class="element" id="bottomBgPosition">Bottom</h2>
                <h2 class="element" id="topBgPosition">Top</h2><hr>

                <h2 class="property">Background Size</h2>
                <h2 class="element" id="autoBgSize">Auto</h2>
                <h2 class="element" id="containBgSize">Contain</h2>
                <h2 class="element" id="coverBgSize">Cover</h2><hr>

                <h2 class="element" id="allSidesRadius">Not all sides have the same radius</h2>
                <input min="0" max="500" type="number" class="propertyRange" id="allSidesRadiusInput">
                <h2 id="allSidesRadiusValue" class="propertyValue"></h2><hr>

                <div id="allRadiuses">
                    <h2 class="property">Top-left radius</h2>
                    <input class="propertyRange" id="tlRadiusInput" min="0" max="500" type="number"><hr>

                    <h2 class="property">Top-right radius</h2>
                    <input class="propertyRange" id="trRadiusInput" min="0" max="500" type="number"><hr>

                    <h2 class="property">Bottom-left radius</h2>
                    <input class="propertyRange" id="blRadiusInput" min="0" max="500" type="number"><hr>

                    <h2 class="property">Bottom-right radius</h2>
                    <input class="propertyRange" id="brRadiusInput" min="0" max="500" type="number"><hr>
                </div>

                <h2 class="property">Border Color</h2>
                <input class="propertyRange" id="borderColorInput" type="color"><hr>

                <h2 class="property">Border Width</h2>
                <input class="propertyRange" id="borderWidthInput" type="number" min="0" max="500"><hr>

                <h2 class="property">Border style</h2>
                <h2 class="element" id="solidBorder">Solid</h2>
                <h2 class="element" id="dottedBorder">Dotted</h2>
                <h2 class="element" id="doubleBorder">Double</h2>
                <h2 class="element" id="grooveBorder">Groove</h2>
                <h2 class="element" id="dashedBorder">Dashed</h2>
                <h2 class="element" id="ridgeBorder">Ridge</h2>
                <h2 class="element" id="insetBorder">Inset</h2>
                <h2 class="element" id="outsetBorder">Outset</h2>
                <h2 class="element" id="noneBorder">None</h2><hr>
                
                <h2 class="property">Font Size</h2>
                <input class="propertyRange" id="fontSize" type="number" min="1"><hr>

                <h2 class="property">Font family</h2>
                <h2 style="font-family: arial;" class="element" id="arialFont">Sample</h2>
                <h2 style="font-family: cursive;" class="element" id="cursiveFont">Sample</h2>
                <h2 style="font-family: courier;" class="element" id="courierFont">Sample</h2>
                <h2 style="font-family: Verdana;" class="element" id="verdanaFont">Sample</h2>
                <h2 style="font-family: Times;" class="element" id="timesFont">Sample</h2>
                <h2 style="font-family: Georgia;" class="element" id="georgiaFont">Sample</h2>
                <h2 style="font-family: monospace;" class="element" id="monospaceFont">Sample</h2>
                <h2 style="font-family: Brush Script MT, Brush Script Std, cursive;" class="element" id="fancyFont">Sample</h2>
                <h2 style="font-family: Impact, fantasy;" class="element" id="impactFantasyFont">Sample</h2><hr>

                <h2 class="property">Font Weight</h2>
                <input class="propertyRange" id="fontWeight" min="1" max="9" type="number"><hr>

                <h2 class="property">Font style</h2>
                <h2 class="element" id="normalFontStyle">Normal</h2>
                <h2 style="font-style: italic;" class="element" id="italicFontStyle">Italic</h2><hr>

                <h2 class="property">Translate</h2>
                <h2 class="property">Horizontal</h2><input value="0" class="propertyRange" id="xPos" type="number">
                <h2 class="property">Vertical</h2><input value="0" class="propertyRange" id="yPos" type="number"><hr>

                <h2 class="property">Top</h2><input value="0" class="propertyRange" id="topPos" type="number">
                <h2 class="property">Left</h2><input value="0" class="propertyRange" id="leftPos" type="number"><hr>

                <h2 class="property">Position</h2>
                <h2 class="element" id="absolutePos">Absolute</h2>
                <h2 class="element" id="relativePos">Relative</h2>
                <h2 class="element" id="staticPos">Staic</h2>
                <h2 class="element" id="fixedPos">Fixed</h2>
                <h2 class="element" id="stickyPos">Sticky</h2><hr>

                <h2 class="property">z-index</h2>
                <input value="0" class="propertyRange" id="zIndex" type="number"><hr>

                <h2 class="property">Float</h2>
                <h2 id="floatLeft" class="element">Left</h2>
                <h2 id="floatRight" class="element">Right</h2><hr>

                <h2 class="property">Margin</h2>
                <h2 class="element" id="allSidesSameMarginClick">Not all sides have the same margin</h2>
                <input class="propertyRange" type="number" id="allSidesMarginInput" min="0" max="100"><hr>

                <div id="allMarginSides">
                    <h2 class="property">Left Margin</h2>
                    <input class="propertyRange" type="number" id="leftMargin" min="0" max="100">
                    <h2 class="property">Right Margin</h2>
                    <input class="propertyRange" type="number" id="rightMargin" min="0" max="100">
                    <h2 class="property">Top Margin</h2>
                    <input class="propertyRange" type="number" id="topMargin" min="0" max="100">
                    <h2 class="property">Bottom Margin</h2>
                    <input class="propertyRange" type="number" id="bottomMargin" min="0" max="100"><hr>
                </div>

                <h2 class="property">Padding</h2>
                <h2 class="element" id="allSidesSamePaddingClick">Not all sides have the same padding</h2>
                <input class="propertyRange" type="number" id="allSidesPaddingInput" min="0" max="100"><hr>

                <div id="allPaddingSides">
                    <h2 class="property">Left Padding</h2>
                    <input class="propertyRange" type="number" id="leftPadding" min="0" max="100">
                    <h2 class="property">Right Padding</h2>
                    <input class="propertyRange" type="number" id="rightPadding" min="0" max="100">
                    <h2 class="property">Top Padding</h2>
                    <input class="propertyRange" type="number" id="topPadding" min="0" max="100">
                    <h2 class="property">Bottom Padding</h2>
                    <input class="propertyRange" type="number" id="bottomPadding" min="0" max="100"><hr>
                </div>

                <h2 class="property">Box Shadow</h2>
                <h2 class="property">Horizontal box shadow offset</h2>
                <input class="propertyRange" type="number" id="hBoxShadowOffset">

                <h2 class="property">Vertical box shadow offset</h2>
                <input class="propertyRange" type="number" id="vBoxShadowOffset">

                <h2 class="property">Box shadow Color</h2>
                <input class="propertyRange" id="boxShadowColor" type="color">

                <h2 class="property">Box shadow blur</h2>
                <input class="propertyRange" type="number" id="boxShadowBlur" min="0" max="300"><hr>

                

                <h2 class="property">Text Shadow</h2>
                <h2 class="property">Horizontal text shadow offset</h2>
                <input class="propertyRange" type="number" id="hTextShadowOffset">

                <h2 class="property">Vertical text shadow offset</h2>
                <input class="propertyRange" type="number" id="vTextShadowOffset">

                <h2 class="property">Text shadow Color</h2>
                <input class="propertyRange" id="textShadowColor" type="color">

                <h2 class="property">Text shadow blur</h2>
                <input class="propertyRange" type="number" id="textShadowBlur" min="0" max="300"><hr>

                <h2 class="property">Overflow</h2>
                <h2 class="element" id="hiddenOverflow">Hidden</h2>
                <h2 class="element" id="noneOverflow">None</h2><hr>

                <h2 class="property">Text Decoration</h2>
                <h2 class="element" id="textDecorationNone">None</h2>
                <h2 class="element" id="textDecorationOverline">Overline</h2>
                <h2 class="element" id="textDecorationThrough">Line Through</h2>
                <h2 class="element" id="textDecorationUnderline">Underline</h2><hr>

                <h2 class="property">Word Spacing</h2>
                <input class="propertyRange" type="number" id="wordSpacing" min="0" max="100"><hr>

                <h2 class="property">Letter Spacing</h2>
                <input class="propertyRange" type="number" id="letterSpacing">
                
            </div>
            
            <div class="hidden" id="cssElements"></div>



            <div class="hidden" id="attributesSection">
                <h2 id="attributesSectionBack" class="element">Back</h2><hr>

                <h2 class="element" id="inerText">Inner Text</h2><hr>

                <h2 class="property">Disabled</h2>
                <h2 class="element" id="trueDisabled">True</h2>
                <h2 class="element" id="falseDisabled">False</h2><hr>

                <h2 class="element" id="placeholder">Placeholder (only for text inputs)</h2><hr>

                <h2 class="property">Draggable</h2>
                <h2 class="element" id="trueDraggable">True</h2>
                <h2 class="element" id="falseDraggable">False</h2><hr>

                <h2 id="source" class="element">Source (only for images)</h2><hr>

                <h2 id="textSource" class="element">Source (only for linked text)</h2><hr>

                <h2 class="element" id="defaultValue">Default Value (only for inputs)</h2><hr>
                

                
                <h2 id="deleteElement" class="element">Delete Element</h2>
            </div>



            <div class="hidden" id="attributesElements"></div>

            <div class="hidden" id="moreElements">
                <a style="text-decoration: none; color: black;" href="../(How to use) Page/index.html"><h2 id="how2use" class="element">How to use MyWeb?</h2></a><hr>
                <a style="text-decoration: none; color: black;" href="../Projects Page/index.html"><h2 id="backToProjects" class="element">Back To Projects Page</h2></a><hr>
                <h2 id="saveProject" class="element">Save Project</h2><hr>
                <h2 id="downloadProject" class="element">Download Project</h2><hr>
                <h2 id="aboutDevClick" class="element">About Developer</h2><hr>
                <h2 id="settingsClick" class="element">Settings</h2><hr><br>
                <p>All Rights reserved © Hamza Almhameed 2022</p>
            </div>

            <div class="hidden" id="aboutDev">
                <h2 id="aboutDevBack" class="element">Back</h2><hr>
                <h2 class="property">Hi, My name is Hamza Almhameed, Arabian front-end developer I live in Jordan (Arabian country in Asia), I like making things easier for all by making websites, You can check <a href="">MyPic</a> and <a href="">MyGame</a></h2>
            </div>

            <div class="hidden" id="settings">
                <h2 class="element" id="settingsBack">Back</h2><hr>
                <h2 class="property">Theme</h2>
                <h2 class="element" id="defaultTheme">Default</h2>
                <h2 class="element" id="greenTheme">Green</h2>
                <h2 class="element" id="blueTheme">Blue</h2><hr>
            </div>
        </div>

    </div>
    <div id="workspace"></div>

    <div id="hoverDiv" class="hidden"></div>


    <script src="JavaScript/jquery-3.6.0.min.js"></script>
    <script src="JavaScript/script.js"></script>
    `
    
    localStorage.setItem(projectName, defaultSourceCode)
    projectsList.innerHTML = projectsList.innerHTML + `<h2 id="${projectName}" class="project" onclick="if(removeModeOn == true){localStorage.removeItem(this.id); projectsList.removeChild(document.getElementById(this.id)); localStorage.setItem('AllProjects', projectsList.innerHTML); localStorage.setItem('correntProject', '');}else{window.location.href = '../Main Page/index.html'; localStorage.setItem('correntProject', this.id)}">${projectName}</h2>`
    localStorage.setItem("AllProjects", projectsList.innerHTML)
}


document.getElementById("removeMode").onclick = function() {
    if(removeModeOn == false) {
        removeModeOn = true
        document.getElementById("removeMode").innerText = "Remove Mode : on"
        document.getElementById("removeMode").style.backgroundColor = "rgb(226, 43, 43)"
        document.getElementById("removeMode").style.color = "white"
        alert("WARNING!!! Every project you will click on will be deleted FOREVER.")
    } else {
        removeModeOn = false
        document.getElementById("removeMode").innerText = "Remove Mode : off"
        document.getElementById("removeMode").style.backgroundColor = "rgb(216, 171, 171)"
        document.getElementById("removeMode").style.color = "black"
        alert("Remove mode is off")
    }
}