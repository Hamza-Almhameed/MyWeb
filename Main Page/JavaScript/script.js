//document.body.innerHTML = localStorage.getItem(localStorage.getItem("correntProject"))


//vars start

var workspace = document.getElementById("workspace") //getting the main content or the workspace to make elements apper to the user
var cssSection = document.getElementById("cssElements") //css elements user choose to change properties example : (button 3 , input 5)
var attributesSection = document.getElementById("attributesElements")
var correntSelectedElement = ""
var saveProject = document.getElementById("saveProject")
var downloadProject = document.getElementById("downloadProject")
var hoverDiv = document.getElementById("hoverDiv")





var addDiv = document.getElementById("container")
var divOppened = false
var correntDiv = ""
var addH1 = document.getElementById("heading1")
var addH2 = document.getElementById("heading2")
var addH3 = document.getElementById("heading3")
var addH4 = document.getElementById("heading4")
var addH5 = document.getElementById("heading5")
var addH6 = document.getElementById("heading6")
var addBr = document.getElementById("newLine")
var addButton = document.getElementById("button")
var addInput = document.getElementById("input")
var addHr = document.getElementById("visualLine")
var addParagraph = document.getElementById("paragraph")
var addImg = document.getElementById("image")
var addProgress = document.getElementById("progress")
var addLinkedText = document.getElementById("linkedText")
var AddTextArea = document.getElementById("textArea")
var addRange = document.getElementById("range")
var addPasswordInput = document.getElementById("passwordInput")
var addColorInput = document.getElementById("colorInput")
var addDateInput = document.getElementById("dateInput")
var addFileInput = document.getElementById("fileInput")
var addNumberInput = document.getElementById("numberInput")
var addRadioInput = document.getElementById("radioInput")
var addCheckbox = document.getElementById("checkbox")
var addSpan = document.getElementById("span")


//css editors (css editing section)
var widthRange = document.getElementById("widthRange")
var heightRange = document.getElementById("heightRange")
var textColorInput = document.getElementById("textColorInput")
var centerTextAlign = document.getElementById("centerTextAlign")
var leftTextAlign = document.getElementById("leftTextAlign")
var rightTextAlign = document.getElementById("rightTextAlign")
var backgroungColorInput = document.getElementById("backgroungColorInput")
var bgImage = document.getElementById("bgImage")
var noRepeatBgRepeat = document.getElementById("noRepeatBgRepeat")
var repeatBgRepeat = document.getElementById("repeatBgRepeat")
var repeatxBgRepeat = document.getElementById("repeatxBgRepeat")
var repeatyBgRepeat = document.getElementById("repeatyBgRepeat")
var centerBgPosition = document.getElementById("centerBgPosition")
var leftBgPosition = document.getElementById("leftBgPosition")
var rightBgPosition = document.getElementById("BgPosition")
var topBgPosition = document.getElementById("topBgPosition")
var bottomBgPosition = document.getElementById("bottomBgPosition")
var autoBgSize = document.getElementById("autoBgSize")
var containBgSize = document.getElementById("containBgSize")
var coverBgSize = document.getElementById("coverBgSize")
var allSidesRadius = document.getElementById("allSidesRadius")
var allSidesRadiusInput = document.getElementById("allSidesRadiusInput")
var allSidesRadiusValue = document.getElementById("allSidesRadiusValue")
var allSidesSameBorderBool = false
var tlRadiusInput = document.getElementById("tlRadiusInput")
var trRadiusInput = document.getElementById("trRadiusInput")
var blRadiusInput = document.getElementById("blRadiusInput")
var brRadiusInput = document.getElementById("brRadiusInput")
var borderColorInput = document.getElementById("borderColorInput")
var borderWidthInput = document.getElementById("borderWidthInput")
var solidBorderInput = document.getElementById("solidBorder")
var dottedBorderInput = document.getElementById("dottedBorder")
var dashedBorderInput = document.getElementById("dashedBorder")
var doubleBorderInput = document.getElementById("doubleBorder")
var grooveBorderInput = document.getElementById("grooveBorder")
var noneBorderInput = document.getElementById("noneBorder")
var ridgeBorderInput = document.getElementById("ridgeBorder")
var insetBorderInput = document.getElementById("insetBorder")
var outsetBorderInput = document.getElementById("outsetBorder")
var fontSizeInput = document.getElementById("fontSize")
var arialFont = document.getElementById("arialFont")
var cursiveFont = document.getElementById("cursiveFont")
var courierFont = document.getElementById("courierFont")
var verdanaFont = document.getElementById("verdanaFont")
var timesFont = document.getElementById("timesFont")
var georgiaFont = document.getElementById("georgiaFont")
var monospaceFont = document.getElementById("monospaceFont")
var fancyFont = document.getElementById("fancyFont")
var impactFantasyFont = document.getElementById("impactFantasyFont")
var fontWeight = document.getElementById("fontWeight")
var normalFontStyle = document.getElementById("normalFontStyle")
var italicFontStyle = document.getElementById("italicFontStyle")
var xPosition = document.getElementById("xPos")
var yPosition = document.getElementById("yPos")
var topPos = document.getElementById("topPos")
var leftPos = document.getElementById("leftPos")
var absolutePos = document.getElementById("absolutePos")
var relativePos = document.getElementById("relativePos")
var fixedPos = document.getElementById("fixedPos")
var staticPos = document.getElementById("staticPos")
var stickyPos = document.getElementById("stickyPos")
var blockDisplay = document.getElementById("blockDisplay")
var inlineDisplay = document.getElementById("inlineDisplay")
var inlineBlockDisplay = document.getElementById("inlineBlockDisplay")
var zIndex = document.getElementById("zIndex")
var floatLeft = document.getElementById("floatLeft")
var floatRight = document.getElementById("floatRight")
var allSidesSameMarginClick = document.getElementById("allSidesSameMarginClick")
var allSidesMarginInput = document.getElementById("allSidesMarginInput")
var allMarginSides = document.getElementById("allMarginSides")
var allSidesSameMarginBool = false
var leftMargin = document.getElementById("leftMargin")
var rightMargin = document.getElementById("rightMargin")
var topMargin = document.getElementById("topMargin")
var bottomMargin = document.getElementById("bottomMargin")
var allSidesSamePaddingClick = document.getElementById("allSidesSamePaddingClick")
var allSidesPaddingInput = document.getElementById("allSidesPaddingInput")
var allPaddingSides = document.getElementById("allPaddingSides")
var allSidesSamePaddingBool = false
var leftPadding = document.getElementById("leftPadding")
var rightPadding = document.getElementById("rightPadding")
var topPadding = document.getElementById("topPadding")
var bottomPadding = document.getElementById("bottomPadding")
var hBoxShadowOffset = document.getElementById("hBoxShadowOffset")
var vBoxShadowOffset = document.getElementById("vBoxShadowOffset")
var boxShadowColor = document.getElementById("boxShadowColor")
var boxShadowBlur = document.getElementById("boxShadowBlur")
var hTextShadowOffset = document.getElementById("hTextShadowOffset")
var vTextShadowOffset = document.getElementById("vTextShadowOffset")
var textShadowColor = document.getElementById("textShadowColor")
var textShadowBlur = document.getElementById("textShadowBlur")
var hiddenOverflow = document.getElementById("hiddenOverflow")
var scrollOverflow =document.getElementById("scrollOverflow")
var autoOverflow =document.getElementById("autoOverflow")
var noneOverflow = document.getElementById("noneOverflow")
var textDecorationNone = document.getElementById("textDecorationNone")
var textDecorationOverline = document.getElementById("textDecorationOverline")
var textDecorationThrough = document.getElementById("textDecorationThrough")
var textDecorationUnderline = document.getElementById("textDecorationUnderline")
var wordSpacing = document.getElementById("wordSpacing")
var letterSpacing = document.getElementById("letterSpacing")








//attributes editors (attributes section)
var inerText = document.getElementById("inerText")
var trueDisabled = document.getElementById("trueDisabled")
var falseDisabled = document.getElementById("falseDisabled")
var placeholder = document.getElementById("placeholder")
var trueDraggable = document.getElementById("trueDraggable")
var falseDraggable = document.getElementById("falseDraggable")
var source = document.getElementById("source")
var textSource = document.getElementById("textSource")
var defaultValue = document.getElementById("defaultValue")

var deleteElement = document.getElementById("deleteElement")




//theme changing variables
var root = document.documentElement;
var defaultTheme = document.getElementById("defaultTheme")
var blueTheme = document.getElementById("blueTheme")
var greenTheme = document.getElementById("greenTheme")


//counters for giving the new added elements IDs
var divCount = 1
var buttonCount = 1
var inputCount = 1
var h1Count = 1
var h2Count = 1
var h3Count = 1
var h4Count = 1
var h5Count = 1
var h6Count = 1
var brCount = 1
var hrCount = 1
var paragraphCount = 1
var imgCount = 1
var progressCount = 1
var linkedTextCount = 1
var textAreaCount = 1
var rangeCount = 1
var passwordInputCount = 1
var colorInputCount = 1
var dateInputCount = 1
var fileInputCount = 1
var numberInputCount = 1
var radioInputCount = 1
var checkboxCount = 1
var spanCount = 1

//vars end









//when user clicks on "more" on toolbar
document.getElementById("more").onclick = function() {
    $("#htmlElements").css("display", "none");
    $("#cssElements").css("display", "none");
    $("#moreElements").css("display", "block");
    $("#cssEditingSection").css("display", "none");
    $("#aboutDev").css("display", "none");
    $("#settings").css("display", "none");
    $("#attributesElements").css("display", "none")
    $("#attributesSection").css("display", "none")
    $("#cssEditor").css("color", "black")
    $("#attributes").css("color", "black")
    $("#htmlEditor").css("color", "black")
    $("#htmlEditor").css("backgroundColor", "transparent")
    $("#cssEditor").css("backgroundColor", "transparent")
    $("#attributes").css("backgroundColor", "transparent")
    this.style.backgroundColor = "var(--toolbar-text-hover-color)"
    this.style.color = "white"
}

//when user clicks on "about developer" on toolbar from more section
document.getElementById("aboutDevClick").onclick = function() {
    $("#moreElements").css("display", "none");
    $("#aboutDev").css("display", "block");
}

//when user clicks on "settings" on toolbar from more section
document.getElementById("settingsClick").onclick = function() {
    $("#moreElements").css("display", "none");
    $("#settings").css("display", "block");
}

//when user clicks on "basic shape" on toolbar
document.getElementById("htmlEditor").onclick = function() {
    $("#htmlElements").css("display", "block");
    $("#cssElements").css("display", "none");
    $("#moreElements").css("display", "none");
    $("#cssEditingSection").css("display", "none");
    $("#aboutDev").css("display", "none");
    $("#settings").css("display", "none");
    $("#attributesElements").css("display", "none")
    $("#attributesSection").css("display", "none")
    $("#cssEditor").css("color", "black")
    $("#attributes").css("color", "black")
    $("#more").css("color", "black")
    $("#more").css("backgroundColor", "transparent")
    $("#cssEditor").css("backgroundColor", "transparent")
    $("#attributes").css("backgroundColor", "transparent")
    this.style.backgroundColor = "var(--toolbar-text-hover-color)"
    this.style.color = "white"
}

//when user clicks on "Style" on toolbar
document.getElementById("cssEditor").onclick = function() {
    $("#htmlElements").css("display", "none");
    $("#cssElements").css("display", "block");
    $("#moreElements").css("display", "none");
    $("#cssEditingSection").css("display", "none");
    $("#aboutDev").css("display", "none");
    $("#settings").css("display", "none");
    $("#attributesElements").css("display", "none")
    $("#attributesSection").css("display", "none")
    $("#htmlEditor").css("color", "black")
    $("#attributes").css("color", "black")
    $("#more").css("color", "black")
    $("#htmlEditor").css("backgroundColor", "transparent")
    $("#more").css("backgroundColor", "transparent")
    $("#attributes").css("backgroundColor", "transparent")
    this.style.backgroundColor = "var(--toolbar-text-hover-color)"
    this.style.color = "white"
}

//when user clicks on "attributes" on toolbar
document.getElementById("attributes").onclick = function() {
    $("#htmlElements").css("display", "none");
    $("#cssElements").css("display", "none");
    $("#moreElements").css("display", "none");
    $("#cssEditingSection").css("display", "none");
    $("#aboutDev").css("display", "none");
    $("#settings").css("display", "none");
    $("#attributesElements").css("display", "block")
    $("#attributesSection").css("display", "none")
    $("#htmlEditor").css("color", "black")
    $("#cssEditor").css("color", "black")
    $("#more").css("color", "black")
    $("#htmlEditor").css("backgroundColor", "transparent")
    $("#cssEditor").css("backgroundColor", "transparent")
    $("#more").css("backgroundColor", "transparent")
    this.style.backgroundColor = "var(--toolbar-text-hover-color)"
    this.style.color = "white"
}


//when user clicks on "back" from the css editing section
document.getElementById("cssEditingSectionBack").onclick = function() {
    $("#htmlElements").css("display", "none");
    $("#cssElements").css("display", "block");
    $("#moreElements").css("display", "none");
    $("#cssEditingSection").css("display", "none");
    $("#attributesElements").css("display", "none")
    $("#attributesSection").css("display", "none")
}


//when user clicks on "back" from the attributes section
document.getElementById("attributesSectionBack").onclick = function() {
    $("#htmlElements").css("display", "none");
    $("#cssElements").css("display", "none");
    $("#moreElements").css("display", "none");
    $("#cssEditingSection").css("display", "none");
    $("#attributesElements").css("display", "block")
    $("#attributesSection").css("display", "none")
}

//when user clicks on "back" from the about developer section
document.getElementById("aboutDevBack").onclick = function() {;
    $("#moreElements").css("display", "block");
    $("#aboutDev").css("display", "none");
}

//when user clicks on "back" from the settings section
document.getElementById("settingsBack").onclick = function() {;
    $("#moreElements").css("display", "block");
    $("#settings").css("display", "none");
}


//when user clicks on download project from the more section
downloadProject.onclick = function() {
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob([`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${localStorage.getItem("correntProject")}</title>
        <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            outline: none;
        }
        </style>
    </head>
        <body style="margin: 0; padding: 0; box-sizing: border-box; outline: none;">${workspace.innerHTML}
        </body>
    </html>`], {type: "text/plain"}));
    a.download = `${localStorage.getItem("correntProject")}.html`;
    a.click();
}


//when user click on save project from the more section
saveProject.onclick = function () {
    if(localStorage.getItem("correntProject") === '') {
        alert("ERROR! : NO PROJECT SELECTED")
    }else{
        localStorage.setItem(localStorage.getItem("correntProject"), document.body.innerHTML)
    }
    
}










//setting the default theme using the local storage
if (localStorage.getItem("theme") == "green") {
    root.style.setProperty('--main-bg-color', '#e9f1e8');
    root.style.setProperty('--borders-color', 'black');
    root.style.setProperty('--hover-bg-color', 'rgb(250, 250, 250)');
    root.style.setProperty('--text-hover-color', 'white');
    root.style.setProperty('--toolbar-text-hover-color', '#2C6975');
    root.style.setProperty('--element-hover-color', '#2C6975');
} else if (localStorage.getItem("theme") == "blue") {
    root.style.setProperty('--main-bg-color', '#d0e7f5');
    root.style.setProperty('--borders-color', 'black');
    root.style.setProperty('--hover-bg-color', '#f8fcff');
    root.style.setProperty('--text-hover-color', 'white');
    root.style.setProperty('--toolbar-text-hover-color', '#015C92');
    root.style.setProperty('--element-hover-color', '#2D82B5');
} else {
    root.style.setProperty('--main-bg-color', 'rgb(221, 221, 221)');
    root.style.setProperty('--borders-color', 'black');
    root.style.setProperty('--hover-bg-color', 'rgb(236, 236, 236)');
    root.style.setProperty('--text-hover-color', 'white');
    root.style.setProperty('--toolbar-text-hover-color', '#00c0fa');
    root.style.setProperty('--element-hover-color', '#5f5cdd');
}



//when user click on default theme
defaultTheme.onclick = function () {
    root.style.setProperty('--main-bg-color', 'rgb(221, 221, 221)');
    root.style.setProperty('--borders-color', 'black');
    root.style.setProperty('--hover-bg-color', 'rgb(236, 236, 236)');
    root.style.setProperty('--text-hover-color', 'white');
    root.style.setProperty('--toolbar-text-hover-color', '#00c0fa');
    root.style.setProperty('--element-hover-color', '#5f5cdd');
    localStorage.setItem("theme", "default")
}

//when user click on blue theme
blueTheme.onclick = function () {
    root.style.setProperty('--main-bg-color', '#d0e7f5');
    root.style.setProperty('--borders-color', 'black');
    root.style.setProperty('--hover-bg-color', '#f8fcff');
    root.style.setProperty('--text-hover-color', 'white');
    root.style.setProperty('--toolbar-text-hover-color', '#015C92');
    root.style.setProperty('--element-hover-color', '#2D82B5');
    localStorage.setItem("theme", "blue")
}

//when user click on green theme
greenTheme.onclick = function () {
    root.style.setProperty('--main-bg-color', '#e9f1e8');
    root.style.setProperty('--borders-color', 'black');
    root.style.setProperty('--hover-bg-color', 'rgb(250, 250, 250)');
    root.style.setProperty('--text-hover-color', 'white');
    root.style.setProperty('--toolbar-text-hover-color', '#2C6975');
    root.style.setProperty('--element-hover-color', '#2C6975');
    localStorage.setItem("theme", "green")
}











//when user click on the "container" from sidebar (html elements)
addDiv.onclick = function () {
    if(divOppened == false) {
        workspace.innerHTML = workspace.innerHTML + `
        <div id="container${divCount}"></div>` //add new container to the work space

        cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="ontainer${divCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('c' + this.id)" onclick="correntSelectedElement = 'c' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Container ${divCount}</h2><hr>`
        attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="ontainer${divCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('c' + this.id)" onclick="correntSelectedElement = 'c' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Container ${divCount}</h2><hr>`
        correntDiv = `container${divCount}`

        alert("Everything you add now is going inside that container until you close it .")

        addDiv.innerText = "Close Container"

        divOppened = true

        divCount++
    } else {
        addDiv.innerText = "Container"
        correntDiv = ""
        divOppened = false
    }
    
}

//when user click on the "button" from sidebar (html elements)
addButton.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <button id="button${buttonCount}">${prompt("Choose a text for this button")}</button>` //add new button to the corrent div
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <button id="button${buttonCount}">${prompt("Choose a text for this button")}</button>` //add new button to the work space
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="utton${buttonCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('b' + this.id)" onclick="correntSelectedElement = 'b' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Button ${buttonCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="utton${buttonCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('b' + this.id)" onclick="correntSelectedElement = 'b' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Button ${buttonCount}</h2><hr>`

    buttonCount++
}

//when user click on the "heading1" from sidebar (html elements)
addH1.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <h1 id="headingOne${h1Count}">${prompt("Choose a text for this heading")}</h1>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <h1 id="headingOne${h1Count}">${prompt("Choose a text for this heading")}</h1>` //add new h1 to the work space
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="eadingOne${h1Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Heading One ${h1Count}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="eadingOne${h1Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Heading One ${h1Count}</h2><hr>`

    h1Count++
}

//when user click on the "heading2" from sidebar (html elements)
addH2.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <h2 id="headingTwo${h2Count}">${prompt("Choose a text for this heading")}</h2>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <h2 id="headingTwo${h2Count}">${prompt("Choose a text for this heading")}</h2>` //add new h2 to the work space
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="eadingTwo${h2Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Heading Two ${h2Count}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="eadingTwo${h2Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Heading Two ${h2Count}</h2><hr>`

    h2Count++
}

//when user click on the "heading3" from sidebar (html elements)
addH3.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <h3 id="headingThree${h3Count}">${prompt("Choose a text for this heading")}</h3>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <h3 id="headingThree${h3Count}">${prompt("Choose a text for this heading")}</h3>` //add new h3 to the work space   
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="eadingThree${h3Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Heading Three ${h3Count}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="eadingThree${h3Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Heading Three ${h3Count}</h2><hr>`

    h3Count++
}

//when user click on the "heading4" from sidebar (html elements)
addH4.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <h4 id="headingFour${h4Count}">${prompt("Choose a text for this heading")}</h4>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <h4 id="headingFour${h4Count}">${prompt("Choose a text for this heading")}</h4>` //add new h4 to the work space   
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="eadingFour${h4Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Heading Four ${h4Count}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="eadingFour${h4Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Heading Four ${h4Count}</h2><hr>`

    h4Count++
}

//when user click on the "heading5" from sidebar (html elements)
addH5.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <h5 id="headingFive${h5Count}">${prompt("Choose a text for this heading")}</h5>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <h5 id="headingFive${h5Count}">${prompt("Choose a text for this heading")}</h5>` //add new h5 to the work space
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="eadingFive${h5Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Heading Five ${h5Count}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="eadingFive${h5Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Heading Five ${h5Count}</h2><hr>`

    h5Count++
}

//when user click on the "heading6" from sidebar (html elements)
addH6.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <h6 id="headingSix${h6Count}">${prompt("Choose a text for this heading")}</h6>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <h6 id="headingSix${h6Count}">${prompt("Choose a text for this heading")}</h6>` //add new h6 to the work space
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="eadingSix${h6Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Heading Six ${h6Count}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="eadingSix${h6Count}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Heading Six ${h6Count}</h2><hr>`

    h6Count++
}

//when user click on the "input" from sidebar (html elements)
addInput.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <input id="input${inputCount}" placeholder=${prompt("placeholder")}>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <input id="input${inputCount}" placeholder=${prompt("placeholder")}>` // add new input to the workspace
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="nput${inputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('i' + this.id)" onclick="correntSelectedElement = 'i' + this.id; $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Input ${inputCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="nput${inputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('i' + this.id)" onclick="correntSelectedElement = 'i' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Input ${inputCount}</h2><hr>`

    inputCount++
}

//when user click on the "new line" from sidebar (html elements)
addBr.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <br id="br${brCount}">`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <br id="br${brCount}">` // add new br to the workspace  
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="rb${brCount}" onclick="alert('You can not use styles for this element')">Line ${brCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="r${brCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('b' + this.id)" onclick="correntSelectedElement = 'b' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Line ${brCount}</h2><hr>`

    brCount++
}

//when user click on the "visual line" from sidebar (html elements)
addHr.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <hr id="hr${hrCount}">`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <hr id="hr${hrCount}">` // add new hr to the workspace 
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="rh${hrCount}" onclick="alert('You can not use styles for this element')">Visual Line ${hrCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="r${hrCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('h' + this.id)" onclick="correntSelectedElement = 'h' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Visual Line ${hrCount}</h2><hr>`

    hrCount++
}

//when user click on the "paragraph" from sidebar (html elements)
addParagraph.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <p id="paragraph${paragraphCount}">${prompt("Choose a text for this Paragraph")}</p>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <p id="paragraph${paragraphCount}">${prompt("Choose a text for this Paragraph")}</p>` //add new p to the work space
    }
    
    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="aragraph${paragraphCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('p' + this.id)" onclick="correntSelectedElement = 'p' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Paragraph ${paragraphCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="aragraph${paragraphCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('p' + this.id)" onclick="correntSelectedElement = 'p' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Paragraph ${paragraphCount}</h2><hr>`

    paragraphCount++
}

//when user click on the "image" from sidebar (html elements)
addImg.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <img src="${prompt("Enter image link")}" id="image${imgCount}">`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <img src="${prompt("Enter image link")}" id="image${imgCount}">` //add new img to the work space  
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="mage${imgCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('i' + this.id)" onclick="correntSelectedElement = 'i' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Image ${imgCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="mage${imgCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('i' + this.id)" onclick="correntSelectedElement = 'i' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Image ${imgCount}</h2><hr>`

    imgCount++
}

//when user click on the "progress" from sidebar (html elements)
addProgress.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <progress id="progress${progressCount}">`
    }else{
       workspace.innerHTML = workspace.innerHTML + `
        <progress id="progress${progressCount}">` //add new prog to the work space 
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="rogress${progressCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('p' + this.id)" onclick="correntSelectedElement = 'p' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Progress ${progressCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="rogress${progressCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('p' + this.id)" onclick="correntSelectedElement = 'p' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Progress ${progressCount}</h2><hr>`

    progressCount++
}

//when user click on the "linked text" from sidebar (html elements)
addLinkedText.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <a href="${prompt("Enter link")}" id="linkedText${linkedTextCount}">${prompt("Enter text for that link")}</a>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <a href="${prompt("Enter link")}" id="linkedText${linkedTextCount}">${prompt("Enter text for that link")}</a>` //add new (a href) to the work space 
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="inkedText${linkedTextCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('l' + this.id)" onclick="correntSelectedElement = 'l' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Linked Text ${linkedTextCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="inkedText${linkedTextCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('l' + this.id)" onclick="correntSelectedElement = 'l' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Linked Text ${linkedTextCount}</h2><hr>`

    linkedTextCount++
}

//when user click on the "text area" from sidebar (html elements)
AddTextArea.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <textarea placeholder="${prompt("Placeholder")}" id="textarea${textAreaCount}"></textarea>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <textarea placeholder="${prompt("Placeholder")}" id="textarea${textAreaCount}"></textarea>` //add new textarea to the work space
    }
    
    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="extarea${textAreaCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('t' + this.id)" onclick="correntSelectedElement = 't' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Text Area ${textAreaCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="extarea${textAreaCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('t' + this.id)" onclick="correntSelectedElement = 't' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Text Area ${textAreaCount}</h2><hr>`

    textAreaCount++
}

//when user click on the "range" from sidebar (html elements)
addRange.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <input type="range" id="range${rangeCount}">`
    }else{
       workspace.innerHTML = workspace.innerHTML + `
        <input type="range" id="range${rangeCount}">` //add new range to the work space 
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="ange${rangeCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('r' + this.id)" onclick="correntSelectedElement = 'r' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Range ${rangeCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="ange${rangeCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('r' + this.id)" onclick="correntSelectedElement = 'r' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Range ${rangeCount}</h2><hr>`

    rangeCount++
}

//when user click on the "password input" from sidebar (html elements)
addPasswordInput.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <input type="password" placeholder="${prompt('Placeholder')}" id="passwordInput${passwordInputCount}">`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <input type="password" placeholder="${prompt('Placeholder')}" id="passwordInput${passwordInputCount}">` //add new password input to the work space
    }
    
    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="asswordInput${passwordInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('p' + this.id)" onclick="correntSelectedElement = 'p' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Password input ${passwordInputCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="asswordInput${passwordInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('p' + this.id)" onclick="correntSelectedElement = 'p' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Password input ${passwordInputCount}</h2><hr>`

    passwordInputCount++
}

//when user click on the "color input" from sidebar (html elements)
addColorInput.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <input type="color" id="colorInput${colorInputCount}">`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <input type="color" id="colorInput${colorInputCount}">` //add new color input to the work space
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="olorInput${colorInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('c' + this.id)" onclick="correntSelectedElement = 'c' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Color input ${colorInputCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="olorInput${colorInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('c' + this.id)" onclick="correntSelectedElement = 'c' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Color input ${colorInputCount}</h2><hr>`

    colorInputCount++
}

//when user click on the "date input" from sidebar (html elements)
addDateInput.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <input type="date" id="dateInput${dateInputCount}">`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <input type="date" id="dateInput${dateInputCount}">` //add new date input to the work space 
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="ateInput${dateInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('d' + this.id)" onclick="correntSelectedElement = 'd' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Date input ${dateInputCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="ateInput${dateInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('d' + this.id)" onclick="correntSelectedElement = 'd' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Date input ${dateInputCount}</h2><hr>`

    dateInputCount++
}

//when user click on the "file input" from sidebar (html elements)
addFileInput.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <input type="file" id="fileInput${fileInputCount}">`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <input type="file" id="fileInput${fileInputCount}">` //add new file input to the work space
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="ileInput${fileInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('f' + this.id)" onclick="correntSelectedElement = 'f' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">File input ${fileInputCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="ileInput${fileInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('f' + this.id)" onclick="correntSelectedElement = 'f' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">File input ${fileInputCount}</h2><hr>`

    fileInputCount++
}

//when user click on the "number input" from sidebar (html elements)
addNumberInput.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <input type="number" id="numberInput${numberInputCount}">`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <input type="number" id="numberInput${numberInputCount}">` //add new number input to the work space
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="umberInput${numberInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('n' + this.id)" onclick="correntSelectedElement = 'n' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Number input ${numberInputCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="umberInput${numberInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('n' + this.id)" onclick="correntSelectedElement = 'n' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Number input ${numberInputCount}</h2><hr>`

    numberInputCount++
}

//when user click on the "radio input" from sidebar (html elements)
addRadioInput.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <input type="radio" id="radioInput${radioInputCount}">`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <input type="radio" id="radioInput${radioInputCount}">` //add new radio input to the work space 
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="adioInput${radioInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('r' + this.id)" onclick="correntSelectedElement = 'r' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Radio input ${radioInputCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="adioInput${radioInputCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('r' + this.id)" onclick="correntSelectedElement = 'r' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Radio input ${radioInputCount}</h2><hr>`

    radioInputCount++
}

//when user click on the "checkbox" from sidebar (html elements)
addCheckbox.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <input type="checkbox" id="checkbox${checkboxCount}">`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <input type="checkbox" id="checkbox${checkboxCount}">` //add new checkbox input to the work space 
    }
    

    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="heckbox${checkboxCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('c' + this.id)" onclick="correntSelectedElement = 'c' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Checkbox ${checkboxCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="heckbox${checkboxCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('c' + this.id)" onclick="correntSelectedElement = 'c' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Checkbox ${checkboxCount}</h2><hr>`

    checkboxCount++
}

//when user click on the "span" from sidebar (html elements)
addSpan.onclick = function () {
    if(correntDiv != "") {
        document.getElementById(correntDiv).innerHTML = document.getElementById(correntDiv).innerHTML + `
        <span id="span${spanCount}">${prompt("Enter a text for this span")}</span>`
    }else{
        workspace.innerHTML = workspace.innerHTML + `
        <span id="span${spanCount}">${prompt("Enter a text for this span")}</span>` //add new span input to the work space
    }
    
    cssSection.innerHTML = cssSection.innerHTML + `<h2 class="element" id="pan${spanCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('s' + this.id)" onclick="correntSelectedElement = 's' + this.id;  $('#cssEditingSection').css('display', 'block'); $('#cssElements').css('display', 'none');">Span ${spanCount}</h2><hr>`
    attributesSection.innerHTML = attributesSection.innerHTML + `<h2 class="element" id="pan${spanCount}" onmouseleave="redBoxLeave()" onmouseenter="redBoxShow('s' + this.id)" onclick="correntSelectedElement = 's' + this.id;  $('#attributesSection').css('display', 'block'); $('#attributesElements').css('display', 'none');">Span ${spanCount}</h2><hr>`

    spanCount++
}











//changing the width for the corrent selected element
widthRange.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.width = widthRange.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the height for the corrent selected element
heightRange.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.height = heightRange.value + "vh"
    }else{
        alert("You have to select element first !")
    }
}

//changing the text color for the corrent selected element
textColorInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.color = textColorInput.value
    }else{
        alert("You have to select element first !")
    }
}

//changing the text align to center for the corrent selected element
centerTextAlign.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textAlign = "center"
    }else{
        alert("You have to select element first !")
    }
}

//changing the text align to left for the corrent selected element
leftTextAlign.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textAlign = "left"
    }else{
        alert("You have to select element first !")
    }
}

//changing the text align to right for the corrent selected element
rightTextAlign.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textAlign = "right"
    }else{
        alert("You have to select element first !")
    }
}

//changing the background color for the corrent selected element
backgroungColorInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundColor = backgroungColorInput.value
    }else{
        alert("You have to select element first !")
    }
}

//changing the background image for the corrent selected element
bgImage.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundImage = `url(${prompt("Enter image link")})`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background repeat to repeat for the corrent selected element
repeatBgRepeat.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundRepeat = `repeat`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background no repeat to repeat for the corrent selected element
noRepeatBgRepeat.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundRepeat = `no-repeat`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background repeat x to repeat for the corrent selected element
repeatxBgRepeat.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundRepeat = `repeat-x`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background repeat y to repeat for the corrent selected element
repeatyBgRepeat.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundRepeat = `repeat-y`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background position to center for the corrent selected element
centerBgPosition.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundPosition = `center`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background position to top for the corrent selected element
topBgPosition.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundPosition = `top`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background position to bottom for the corrent selected element
bottomBgPosition.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundPosition = `bottom`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background position to left for the corrent selected element
leftBgPosition.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundPosition = `left`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background position to center for the corrent selected element
centerBgPosition.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundPosition = `center`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background size to center for the corrent selected element
autoBgSize.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundSize = `auto`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background size to center for the corrent selected element
containBgSize.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundSize = `contain`
    }else{
        alert("You have to select element first !")
    }
}

//changing the background size to center for the corrent selected element
coverBgSize.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.backgroundSize = `cover`
    }else{
        alert("You have to select element first !")
    }
}

//changing the top left radius for the corrent selected element
tlRadiusInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderTopLeftRadius = tlRadiusInput.value + "px"
    }else{
        alert("You have to select element first !")
    }
}

//changing the top right radius for the corrent selected element
trRadiusInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderTopRightRadius = trRadiusInput.value + "px"
    }else{
        alert("You have to select element first !")
    }
}

//changing the bottom left radius for the corrent selected element
blRadiusInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderBottomLeftRadius = blRadiusInput.value + "px"
    }else{
        alert("You have to select element first !")
    }
}

//changing the bottom right radius for the corrent selected element
brRadiusInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderBottomRightRadius = brRadiusInput.value + "px"
    }else{
        alert("You have to select element first !")
    }
}

//changing the border color for the corrent selected element
borderColorInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderColor = borderColorInput.value
    }else{
        alert("You have to select element first !")
    }
}

//changing the border width for the corrent selected element
borderWidthInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderWidth = borderWidthInput.value + "px"
    }else{
        alert("You have to select element first !")
    }
}


//changing the border style to solid for the corrent selected element
solidBorderInput.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderStyle = "solid"
    }else{
        alert("You have to select element first !")
    }
}

//changing the border style to dotted for the corrent selected element
dottedBorderInput.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderStyle = "dotted"
    }else{
        alert("You have to select element first !")
    }
}


//changing the border style to dashed for the corrent selected element
dashedBorderInput.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderStyle = "dashed"
    }else{
        alert("You have to select element first !")
    }
}

//changing the border style to groove for the corrent selected element
grooveBorderInput.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderStyle = "groove"
    }else{
        alert("You have to select element first !")
    }
}

//changing the border style to double for the corrent selected element
doubleBorderInput.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderStyle = "double"
    }else{
        alert("You have to select element first !")
    }
}

//changing the border style to ridge for the corrent selected element
ridgeBorderInput.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderStyle = "ridge"
    }else{
        alert("You have to select element first !")
    }
}

//changing the border style to inset for the corrent selected element
insetBorderInput.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderStyle = "inset"
    }else{
        alert("You have to select element first !")
    }
}

//changing the border style to outset for the corrent selected element
outsetBorderInput.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderStyle = "outset"
    }else{
        alert("You have to select element first !")
    }
}

//changing the border style to none for the corrent selected element
noneBorderInput.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderStyle = "none"
    }else{
        alert("You have to select element first !")
    }
}


//changing the font size for the corrent selected element
fontSizeInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontSize = fontSizeInput.value + "px"
    }else{
        alert("You have to select element first !")
    }
}

//changing the font to arial for the corrent selected element
arialFont.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontFamily = "arial"
    }else{
        alert("You have to select element first !")
    }
}

//changing the font to cursive for the corrent selected element
cursiveFont.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontFamily = "cursive"
    }else{
        alert("You have to select element first !")
    }
}

//changing the courier for the corrent selected element
courierFont.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontFamily = "courier"
    }else{
        alert("You have to select element first !")
    }
}

//changing the font to verdana for the corrent selected element
verdanaFont.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontFamily = "verdana"
    }else{
        alert("You have to select element first !")
    }
}

//changing the font to times for the corrent selected element
timesFont.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontFamily = "Times"
    }else{
        alert("You have to select element first !")
    }
}

//changing the font to georgia for the corrent selected element
georgiaFont.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontFamily = "Georgia"
    }else{
        alert("You have to select element first !")
    }
}

//changing the font to monospace for the corrent selected element
monospaceFont.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontFamily = "monospace"
    }else{
        alert("You have to select element first !")
    }
}

//changing the font to fancy for the corrent selected element
fancyFont.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontFamily = "Brush Script MT, Brush Script Std, cursive"
    }else{
        alert("You have to select element first !")
    }
}

//changing the font to impact fantasy for the corrent selected element
impactFantasyFont.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontFamily = "Impact, fantasy"
    }else{
        alert("You have to select element first !")
    }
}

//changing the font weight for the corrent selected element
fontWeight.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontWeight = fontWeight.value * 100
    }else{
        alert("You have to select element first !")
    }
}

//changing the font style to normal for the corrent selected element
normalFontStyle.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontStyle = "normal"
    }else{
        alert("You have to select element first !")
    }
}

//changing the font style to italic for the corrent selected element
italicFontStyle.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.fontStyle = "italic"
    }else{
        alert("You have to select element first !")
    }
}

//changing the x pos for the corrent selected element
xPosition.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.transform = `translate(${xPosition.value}%, ${yPosition.value}%)`
    }else{
        alert("You have to select element first !")
    }
}

//changing the y pos for the corrent selected element
yPosition.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.transform = `translate(${xPosition.value}%, ${yPosition.value}%)`
    }else{
        alert("You have to select element first !")
    }
}

//changing the top pos for the corrent selected element
topPos.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.top = topPos.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the top pos for the corrent selected element
leftPos.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.left = leftPos.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the position to absolute for the corrent selected element
absolutePos.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.position = "absolute"
    }else{
        alert("You have to select element first !")
    }
}

//changing the position to relative for the corrent selected element
relativePos.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.position = "relative"
    }else{
        alert("You have to select element first !")
    }
}

//changing the position to fixed for the corrent selected element
fixedPos.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.position = "fixed"
    }else{
        alert("You have to select element first !")
    }
}

//changing the position to static for the corrent selected element
staticPos.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.position = "static"
    }else{
        alert("You have to select element first !")
    }
}

//changing the position to sticky for the corrent selected element
stickyPos.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.position = "sticky"
    }else{
        alert("You have to select element first !")
    }
}

//changing the display to block for the corrent selected element
blockDisplay.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.display = "block"
    }else{
        alert("You have to select element first !")
    }
}

//changing the display to inline for the corrent selected element
inlineDisplay.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.display = "inline"
    }else{
        alert("You have to select element first !")
    }
}

//changing the display to inline-block for the corrent selected element
inlineBlockDisplay.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.display = "inline-block"
    }else{
        alert("You have to select element first !")
    }
}

//changing the z index for the corrent selected element
zIndex.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.zIndex = zIndex.value
    }else{
        alert("You have to select element first !")
    }
}

//changing the float to right for the corrent selected element
floatRight.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.float = "right"
    }else{
        alert("You have to select element first !")
    }
}

//changing the float to left for the corrent selected element
floatLeft.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.float = "left"
    }else{
        alert("You have to select element first !")
    }
}

allSidesRadius.onclick = function () {
    if (allSidesSameBorderBool == false) {
        $("#allRadiuses").css("display", "none");
        $("#allSidesRadiusInput").css("display", "block")
        this.innerText = "All sides have the same radius"
        allSidesSameBorderBool = true
    }else{
        $("#allRadiuses").css("display", "block");
        $("#allSidesRadiusInput").css("display", "none")
        this.innerText = "Not all sides have the same radius"
        allSidesSameBorderBool = false
    }
}

//changing the radius for all sides for the corrent selected element
allSidesRadiusInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.borderRadius = allSidesRadiusInput.value + "px"
        allSidesRadiusValue.innerText = allSidesRadiusInput.value + "px"
    }else{
        alert("You have to select element first !")
    }
}

//changing the left margin for the corrent selected element
leftMargin.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.marginLeft = leftMargin.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the right margin for the corrent selected element
rightMargin.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.marginRight = rightMargin.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the top margin for the corrent selected element
topMargin.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.marginTop = topMargin.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the bottom margin for the corrent selected element
bottomMargin.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.marginBottom = bottomMargin.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

allSidesSameMarginClick.onclick = function () {
    if (allSidesSameMarginBool == false) {
        $("#allMarginSides").css("display", "none");
        $("#allSidesMarginInput").css("display", "block")
        this.innerText = "All sides have the same margin"
        allSidesSameMarginBool = true
    }else{
        $("#allMarginSides").css("display", "block");
        $("#allSidesMarginInput").css("display", "none")
        this.innerText = "Not all sides have the same margin"
        allSidesSameMarginBool = false
    }
}

//changing the margin for all sides for the corrent selected element
allSidesMarginInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.margin = allSidesMarginInput.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the left padding for the corrent selected element
leftPadding.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.paddingLeft = leftPadding.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the right padding for the corrent selected element
rightPadding.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.paddingRight = rightPadding.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the top padding for the corrent selected element
topPadding.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.paddingTop = topPadding.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the bottom padding for the corrent selected element
bottomPadding.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.paddingBottom = bottomPadding.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

allSidesSamePaddingClick.onclick = function () {
    if (allSidesSamePaddingBool == false) {
        $("#allPaddingSides").css("display", "none");
        $("#allSidesPaddingInput").css("display", "block")
        this.innerText = "All sides have the same padding"
        allSidesSamePaddingBool = true
    }else{
        $("#allPaddingSides").css("display", "block");
        $("#allSidesPaddingInput").css("display", "none")
        this.innerText = "Not all sides have the same padding"
        allSidesSamePaddingBool = false
    }
}

//changing the padding for all sides for the corrent selected element
allSidesPaddingInput.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.padding = allSidesPaddingInput.value + "%"
    }else{
        alert("You have to select element first !")
    }
}

//changing the horizontal box shadow offset for the corrent selected element
hBoxShadowOffset.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.boxShadow = `${hBoxShadowOffset.value + "px"} ${vBoxShadowOffset.value + "px"} ${boxShadowBlur.value + "px"} ${boxShadowColor.value}`
    }else{
        alert("You have to select element first !")
    }
}

//changing the vertical  box shadow offset for the corrent selected element
vBoxShadowOffset.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.boxShadow = `${hBoxShadowOffset.value + "px"} ${vBoxShadowOffset.value + "px"} ${boxShadowBlur.value + "px"} ${boxShadowColor.value}`
    }else{
        alert("You have to select element first !")
    }
}

//changing the  box shadow blur for the corrent selected element
boxShadowBlur.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.boxShadow = `${hBoxShadowOffset.value + "px"} ${vBoxShadowOffset.value + "px"} ${boxShadowBlur.value + "px"} ${boxShadowColor.value}`
    }else{
        alert("You have to select element first !")
    }
}

//changing the box shadow color for the corrent selected element
boxShadowColor.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.boxShadow = `${hBoxShadowOffset.value + "px"} ${vBoxShadowOffset.value + "px"} ${boxShadowBlur.value + "px"} ${boxShadowColor.value}`
    }else{
        alert("You have to select element first !")
    }
}

//changing horizontal text shadow offset for the corrent selected element
hTextShadowOffset.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textShadow = `${hTextShadowOffset.value + "px"} ${vTextShadowOffset.value + "px"} ${textShadowBlur.value + "px"} ${textShadowColor.value}`
    }else{
        alert("You have to select element first !")
    }
}

//changing verical text shadow offset for the corrent selected element
vTextShadowOffset.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textShadow = `${hTextShadowOffset.value + "px"} ${vTextShadowOffset.value + "px"} ${textShadowBlur.value + "px"} ${textShadowColor.value}`
    }else{
        alert("You have to select element first !")
    }
}

//changing text shadow blur for the corrent selected element
textShadowBlur.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textShadow = `${hTextShadowOffset.value + "px"} ${vTextShadowOffset.value + "px"} ${textShadowBlur.value + "px"} ${textShadowColor.value}`
    }else{
        alert("You have to select element first !")
    }
}

//changing text shadow color for the corrent selected element
textShadowColor.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textShadow = `${hTextShadowOffset.value + "px"} ${vTextShadowOffset.value + "px"} ${textShadowBlur.value + "px"} ${textShadowColor.value}`
    }else{
        alert("You have to select element first !")
    }
}

//changing the overflow to hidden for the corrent selected element
hiddenOverflow.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.overflow = `hidden`
    }else{
        alert("You have to select element first !")
    }
}

//changing the overflow to scroll for the corrent selected element
scrollOverflow.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.overflow = `scroll`
    }else{
        alert("You have to select element first !")
    }
}

//changing the overflow to auto for the corrent selected element
autoOverflow.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.overflow = `auto`
    }else{
        alert("You have to select element first !")
    }
}

//changing the overflow to none for the corrent selected element
noneOverflow.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.overflow = `visible`
    }else{
        alert("You have to select element first !")
    }
}

//changing the text decoration to none for the corrent selected element
textDecorationNone.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textDecoration = "none"
    }else{
        alert("You have to select element first !")
    }
}

//changing the text decoration to overline for the corrent selected element
textDecorationOverline.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textDecoration = "overline"
    }else{
        alert("You have to select element first !")
    }
}

//changing the text decoration to through for the corrent selected element
textDecorationThrough.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textDecoration = "line-through"
    }else{
        alert("You have to select element first !")
    }
}

//changing the text decoration to underline for the corrent selected element
textDecorationUnderline.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.textDecoration = "underline"
    }else{
        alert("You have to select element first !")
    }
}

//changing the word spacing for the corrent selected element
wordSpacing.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.wordSpacing = wordSpacing.value + "px"
    }else{
        alert("You have to select element first !")
    }
}

//changing the letter spacing for the corrent selected element
letterSpacing.oninput = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).style.letterSpacing = letterSpacing.value + "px"
    }else{
        alert("You have to select element first !")
    }
}










//attributes section events :

//changing the inner text for the corrent selected element
inerText.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).innerText = prompt("enter a new text")
    }else{
        alert("You have to select element first !")
    }
}

//changing the disabled to true for the corrent selected element
trueDisabled.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).setAttribute("disabled", "true")
    }else{
        alert("You have to select element first !")
    }
}

//changing the disabled to false for the corrent selected element
falseDisabled.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).removeAttribute("disabled")
    }else{
        alert("You have to select element first !")
    }
}

//changing the placeholder for the corrent selected element
placeholder.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).setAttribute("placeholder", prompt("Enter new placeholder"))
    }else{
        alert("You have to select element first !")
    }
}

//changing the Draggable to true for the corrent selected element
trueDraggable.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).setAttribute("draggable", "true")
    }else{
        alert("You have to select element first !")
    }
}

//changing the Draggable to false for the corrent selected element
falseDraggable.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).removeAttribute("draggable")
    }else{
        alert("You have to select element first !")
    }
}

//changing the src for the corrent selected element
source.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).setAttribute("src", prompt("Please enter a link"))
    }else{
        alert("You have to select element first !")
    }
}

//changing the href for the corrent selected element
textSource.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).setAttribute("href", prompt("Please enter a link"))
    }else{
        alert("You have to select element first !")
    }
}

//changing the value for the corrent selected element
defaultValue.onclick = function () {
    if (correntSelectedElement != "") {
        document.getElementById(correntSelectedElement).setAttribute("value", prompt("Please enter a value"))
    }else{
        alert("You have to select element first !")
    }
}











//delete the corrent selected element
deleteElement.onclick = function () {
    if (confirm("Are You Sure (YOU CAN NOT UNDO THIS)")  == true) {
        $(`#${correntSelectedElement}`).remove()
        cssSection.removeChild(document.getElementById(correntSelectedElement.substring(1)))
        attributesSection.removeChild(document.getElementById(correntSelectedElement.substring(1)))
        $("#attributesElements").css("display", "block");
        $("#attributesSection").css("display", "none");
        correntSelectedElement = ""
    }
}








//when user hover on a element name in css section a box with red borders will show up and have the same position, width and height for the hovered element
function redBoxShow(elementId, hovered) {
        var elementRect = document.getElementById(elementId).getBoundingClientRect()
        hoverDiv.style.width = elementRect.width + "px"
        hoverDiv.style.height = elementRect.height + "px"
        hoverDiv.style.top = elementRect.y + "px"
        hoverDiv.style.left = elementRect.x + "px"
        hoverDiv.style.display = "block"
}

function redBoxLeave() {
    hoverDiv.style.display = "none"
}




//confirm when user try to leave or reload the site
window.onbeforeunload = function (e) {
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Changes you made may not be saved.'
    }

    // For Safari
    return 'Changes you made may not be saved.'
};