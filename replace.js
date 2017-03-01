function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function giveMHTML(data) {
    var textFile = window.URL.createObjectURL(data);
    return textFile;
}

document.addEventListener('DOMContentLoaded', function() {
    
});

//Жуткий тлен.
/*document.addEventListener('DOMContentLoaded', function() {
    var tab_id, tab, promise, newWIN;
  chooseDesktopMedia("tab", function(string uniqStreamId--adsfasdffasg324r3rs){})
    promise = new Promise((resolve, reject) => {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            tab_id = tabs[0].id;
            if (tab_id > 0) {
                resolve("result");
            } else {
                reject("error");
            }
    })});
    promise
        .then(
            result => {
                chrome.pageCapture.saveAsMHTML({tabId: tab_id}, function(mhtmlData) {
                    //TODO learn to work with blob
                    var reader = new FileReader();
                    reader.addEventListener("loadend", function() {
                        alert(giveMHTML(reader.result));
                    });
                    reader.readAsBinaryString(mhtmlData);
                    newWIN = window.open(giveMHTML(mhtmlData));
                });
            }
        );  
});
*/