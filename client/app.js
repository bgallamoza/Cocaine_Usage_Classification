function get_iralcfy() {
    var uiSqft = document.getElementById("uiSqft");
    return parseFloat(uiSqft.value);
}

function get_catag3() {
    var uiBathrooms = document.getElementsByName("uiBathrooms")
    for (var i in uiBathrooms) {
        // if a radio button is checked, we return it
        if (uiBathrooms[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function get_health() {
    var uiBathrooms = document.getElementsByName("uiBathrooms")
    for (var i in uiBathrooms) {
        // if a radio button is checked, we return it
        if (uiBathrooms[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function get_ireduhighst2() {
    return document.getElementById("uiLocations").value
}

function get_irpinc3() {
    return document.getElementById("uiLocations").value
}

function get_irki17_2() {
    var uiBathrooms = document.getElementsByName("uiBathrooms")
    for (var i in uiBathrooms) {
        // if a radio button is checked, we return it
        if (uiBathrooms[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function get_irmjfy() {
    var uiSqft = document.getElementById("uiSqft");
    return parseFloat(uiSqft.value);
}

function get_wrkdhrswk2() {
    var uiSqft = document.getElementById("uiSqft");
    return parseFloat(uiSqft.value);
}

function get_irhhsiz2() {
    var uiBathrooms = document.getElementsByName("uiBathrooms")
    for (var i in uiBathrooms) {
        // if a radio button is checked, we return it
        if (uiBathrooms[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function get_cig30us() {
    var uiSqft = document.getElementById("uiSqft");
    return parseFloat(uiSqft.value);
}

function get_irherfy() {
    var uiSqft = document.getElementById("uiSqft");
    return parseFloat(uiSqft.value);
}

function get_irmethmyfq() {
    var uiSqft = document.getElementById("uiSqft");
    return parseFloat(uiSqft.value);
}

function get_newrace2() {
    return document.getElementById("uiLocations").value
}

function get_irsex() {
    var uiBathrooms = document.getElementsByName("uiBathrooms")
    for (var i in uiBathrooms) {
        // if a radio button is checked, we return it
        if (uiBathrooms[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function get_columns() {
    console.log("Document loaded");
    var url = "http://127.0.0.1:5000/get_column_info"; // Use if NOT using nginx
    // var url = "/api/get_location_names"; // Use if using nginx
    
    // $ is an alias for jQuery
    // Makes GET call at our url, the response is returned as the data variable
    $.get(url, function(data, status) {
        console.log("Got response for get_column_info request");
        if(data) {
            // "data_columns" is a key in data, which is a JSON
            var data_columns = data.data_columns;
            return data_columns;
        }
    });
}

function post_error(input) {
    var error = document.getElementById("uiError");
    prediction.innerHTML = "<h2>" + input.toString() + "</h2>";
}

function on_clicked_coccrk_pred() {
    console.log("Coccrk prediction button clicked")
    
    var prediction = document.getElementById("UIcoccrk_pred");
    var url = "http://127.0.0.1:5000/predict_crkcoc_usage"; // Use if NOT using nginx
    // var url = "/api/predict_home_price"; // Use if using nginx
    var answers = {};
    var columns = get_columns();
    for (col in columns) {
        var input = window["get_" + col];
        if (Number.isInteger(input)) {
            answers[col] = input;
        }
        else {
            post_error(input);
            prediction.innerHTML = "<h2>Invalid Input</h2>";
            return null;
        }
    }

    $.post(url, answers, function(data, status) {
        console.log(data.crkcoc_pred);

        // Append this string into the html to show the estimated price
        prediction.innerHTML = "<h2>" + data.crkcoc_pred.toString() + "</h2>";
        console.log(status);
    })
}