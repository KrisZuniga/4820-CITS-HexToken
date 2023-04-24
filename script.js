    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var button = document.getElementById("graph-view-button");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal
    button.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";}
    }

    
    var select = document.getElementById("button-select");
    var buttons = document.querySelectorAll(".button-container button");
    document.getElementById("graph-view-button").addEventListener("click", function() {
    select.innerHTML = "";
    for (var i = 0; i < buttons.length-3; i++) {
        var option = document.createElement("option");
        option.text = buttons[i].textContent;
        option.value = buttons[i].id;
        select.add(option);
    }
    });
    // When the form is submitted, update the button link and text
    var form = document.getElementById("change-link-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var buttonSelect = document.getElementById("button-select");
        var selectedButton = document.getElementById(buttonSelect.value);
        var newLink = document.getElementById("button-link").value;
        var newButtonText = document.getElementById("button-text").value;
        selectedButton.onclick = function() {
            window.location.href = newLink;
        }
        selectedButton.innerHTML = newButtonText;
        modal.style.display = "none";

        // Store the updated link and button text in local storage
        localStorage.setItem(selectedButton.id + "-link", newLink);
        localStorage.setItem(selectedButton.id + "-text", newButtonText);
    });


     // Retrieve the stored link and button text from local storage
     var canvasButtonLink = localStorage.getItem("canvas-button-link");
     var canvasButtonText = localStorage.getItem("canvas-button-text");
     var discordButtonLink = localStorage.getItem("discord-button-link");
     var discordButtonText = localStorage.getItem("discord-button-text");
     var myclemsonButtonLink = localStorage.getItem("myclemson-button-link");
     var myclemsonButtonText = localStorage.getItem("myclemson-button-text");
     var tigerflixButtonLink = localStorage.getItem("tigerflix-button-link");
     var tigerflixButtonText = localStorage.getItem("tigerflix-button-text");
     var gmailButtonLink = localStorage.getItem("gmail-button-link");
     var gmailButtonText = localStorage.getItem("gmail-button-text");
     var clemsonButtonLink = localStorage.getItem("clemson-button-link");
     var clemsonButtonText = localStorage.getItem("clemson-button-text");

    window.onload = function() {
        // Update the button links and text if they exist in local storage
        if (canvasButtonLink && canvasButtonText) {
            var canvasButton = document.getElementById("canvas-button");
            canvasButton.onclick = function() {
            window.location.href = canvasButtonLink;
            }
            canvasButton.innerHTML = canvasButtonText;
        }
        if (discordButtonLink && discordButtonText) {
            var discordButton = document.getElementById("discord-button");
            discordButton.onclick = function() {
            window.location.href = discordButtonLink;
            }
            discordButton.innerHTML = discordButtonText;
        }
        if (myclemsonButtonLink && myclemsonButtonText) {
            var myclemsonButton = document.getElementById("myclemson-button");
            myclemsonButton.onclick = function() {
            window.location.href = myclemsonButtonLink;
            }
            myclemsonButton.innerHTML = myclemsonButtonText;
        }
        if (tigerflixButtonLink && tigerflixButtonText) {
            var tigerflixButton = document.getElementById("tigerflix-button");
            tigerflixButton.onclick = function() {
            window.location.href = tigerflixButtonLink;
            }
            tigerflixButton.innerHTML = tigerflixButtonText;
        }
        if (gmailButtonLink && gmailButtonText) {
            var gmailButton = document.getElementById("gmail-button");
            gmailButton.onclick = function() {
            window.location.href = gmailButtonLink;
            }
            gmailButton.innerHTML = gmailButtonText;
        }
        if (clemsonButtonLink && clemsonButtonText) {
            var clemsonButton = document.getElementById("clemson-button");
            clemsonButton.onclick = function(){
            window.location.href = clemsonButtonLink;
            }
            clemsonButtonLink.innerHTML = gmailButtonLink
        }
    }


    //code to reset buttons to default
    var resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", function(event) { 
        event.preventDefault();
        // Define default values for each button
        var defaultValues = {
        "canvas-button": {
        link: "https://clemson.instructure.com/",
        text: "Canvas"
        },
        "discord-button": {
        link: "https://discord.com/channels/882703499161378839/882703499962507305",
        text: "Discord"
        },
        "myclemson-button": {
        link: "https://my.clemson.edu/",
        text: "MyClemson"
        },
        "tigerflix-button": {
        link: "https://tigerflix.clemson.edu/Login?ReturnUrl=%2F",
        text: "Tigerflix"
        },
        "gmail-button": {
        link: "https://accounts.google.com/ServiceLogin?service=mail",
        text: "Gmail"
        },
        "clemson-button": {
        link: "https://www.clemson.edu/",
        text: "Clemson.edu"
        }
        };

        // Loop through the buttons and set their links and text to the default values
        var buttons = document.querySelectorAll(".button-container button");
        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            var id = button.id;
            var defaultLink = defaultValues[id].link;
            var defaultText = defaultValues[id].text;
            button.setAttribute("onclick", "window.location.href='" + defaultLink + "';");
            button.innerHTML = defaultText;

            // Save the default link and text to local storage
            localStorage.setItem(id + "-link", defaultLink);
            localStorage.setItem(id + "-text", defaultText);
        }
    });


  
  // Create a function that generates a QR code for the selected button
  function generateQRCode() {
    var buttons = document.querySelectorAll(".button-container button");
        var imgCount = 1;
        for (var i = 0; i < buttons.length-2; i++) {
            var button = buttons[i];
            var id = button.id;
            var url = localStorage.getItem(id +"-link");
            console.log(url)
            // Generate the QR code
            console.log(false)
            var qr = new QRCode(document.getElementById("qrcode" + imgCount), {
            text: url,
            width: 150,
            height: 150,
            colorDark: "#000000",
            colorLight: "#ffffff",
            padding: 100,
            correctLevel: QRCode.CorrectLevel.H
            });
            var qrcodeImg = document.getElementById("qrcode" + imgCount);
            qrcodeImg.src = document.getElementById("qrcode" + imgCount).querySelector('canvas').toDataURL(); 
            imgCount++
            }
        
    }
    // Call the generateQRCode function when the page loads
    window.addEventListener("load", generateQRCode);
    // Call the generateQRCode function when the button select changes
    //window.addEventListener("submit", generateQRCode);
