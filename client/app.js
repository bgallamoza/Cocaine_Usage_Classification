function get_iralcfy() {
    var uiIralcfy = document.getElementById("iralcfy");
    var input = parseInt(uiIralcfy.value);
    if ((input >= 0) & (input <= 365)) {
        return input;
    }
    else {
        return "Error";
    }
}

function get_catag3() {
    var uiCatag3 = document.getElementsByName("uiCatag3");
    for (var i in uiCatag3) {
        // if a radio button is checked, we return the index + 1
        if (uiCatag3[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function get_health() {
    var uiHealth = document.getElementsByName("uiHealth");
    for (var i in uiHealth) {
        // if a radio button is checked, we return the index + 1
        if (uiHealth[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function get_ireduhighst2() {
    return document.getElementById("ireduhighst2").value;
}

function get_irpinc3() {
    return document.getElementById("irpinc3").value;
}

function get_irki17_2() {
    var uiIrki17_2 = document.getElementsByName("uiIrki17_2");
    for (var i in uiIrki17_2) {
        // if a radio button is checked, we return the index + 1
        if (uiIrki17_2[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function get_irmjfy() {
    var uiIrmjfy = document.getElementById("irmjfy");
    var input = parseInt(uiIrmjfy.value);
    if ((input >= 0) & (input <= 365)) {
        return input;
    }
    else {
        return "Error";
    }
}

function get_wrkdhrswk2() {
    var uiWrkdhrswk2 = document.getElementById("wrkdhrswk2");
    var input = parseInt(uiWrkdhrswk2.value);
    if ((input >= 0)) {
        return input;
    }
    else {
        return "Error";
    }
}

function get_irhhsiz2() {
    var uiIrhhsiz2 = document.getElementsByName("uiIrhhsiz2");
    for (var i in uiIrhhsiz2) {
        // if a radio button is checked, we return the index + 1
        if (uiIrhhsiz2[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function get_cig30use() {
    var uiCig30use = document.getElementById("cig30use");
    var input = parseInt(uiCig30use.value);
    if ((input >= 0) & (input <= 31)) {
        return input;
    }
    else {
        return "Error";
    }
}

function get_irherfy() {
    var uiIrherfy = document.getElementById("irherfy");
    var input = parseInt(uiIrherfy.value);
    if ((input >= 0) & (input <= 365)) {
        return input;
    }
    else {
        return "Error";
    }
}

function get_irmethamyfq() {
    var uiIrmethamyfq = document.getElementById("irmethamyfq");
    var input = parseInt(uiIrmethamyfq.value);
    if ((input >= 0) & (input <= 365)) {
        return input;
    }
    else {
        return "Error";
    }
}

function get_irsex() {
    var uiIrsex = document.getElementsByName("uiIrsex")
    for (var i in uiIrsex) {
        // if a radio button is checked, we return the index + 1
        if (uiIrsex[i].checked) {
            return parseInt(i);
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
    var uiError = document.getElementById("uiError");
    input = parseInt(input);
    switch (input) {
        case 0:
            uiError.innerHTML = "<h3>Days consumed alcohol must be between 0 and 365</h3>";
            break;
        case 6:
            uiError.innerHTML = "<h3>Days used marijuana must be between 0 and 365</h3>";
            break;
        case 7:
            uiError.innerHTML = "<h3>Hours worked last week must be non-negative</h3>";
            break;
        case 9:
            uiError.innerHTML = "<h3>Days smoked cigarettes must be between 0 and 31</h3>";
            break;
        case 10:
            uiError.innerHTML = "<h3>Days used heroine must be between 0 and 365</h3>";
            break;
        case 11:
            uiError.innerHTML = "<h3>Days used methamphetamine must be between 0 and 365</h3>";
            break;
        default:
            uiError.innerHTML = "<h3></h3>";
            break;
    }
}

function on_clicked_coccrk_pred() {
    console.log("Coccrk prediction button clicked")
    
    var prediction = document.getElementById("uiCoccrk_pred");
    var url = "http://127.0.0.1:5000/predict_crkcoc_usage"; // Use if NOT using nginx
    // var url = "/api/predict_home_price"; // Use if using nginx

    $.post(url, {
        iralcfy: get_iralcfy(),
        catag3: get_catag3(),
        health: get_health(),
        ireduhighst2: get_ireduhighst2(),
        irpinc3: get_irpinc3(),
        irki17_2: get_irki17_2(),
        irmjfy: get_irmjfy(),
        wrkdhrswk2: get_wrkdhrswk2(),
        irhhsiz2: get_irhhsiz2(),
        cig30use: get_cig30use(),
        irherfy: get_irherfy(),
        irmethamyfq: get_irmethamyfq(),
        irsex: get_irsex()
    }, function(data, status) {
        console.log(data.crkcoc_pred);

        // Append this string into the html to show the estimated price
        response = data.crkcoc_pred.toString();
        if ((response != "Yes") & (response != "No")) {
            post_error(response);
            prediction.innerHTML = "<h3>Invalid Values!</h3>";
            console.log(status);
        }
        else {
            prediction.innerHTML = "<h3>" + response + "</h3>";
            post_error("");
            console.log(status);
        }
    })
}