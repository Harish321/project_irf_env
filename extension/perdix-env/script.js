var setEnv = function(event){
    var env = event.target.value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        if (response.status == "success"){
            chrome.storage.local.set({'currentEnv':env},function(){});
            event.target.classList.add('btn-success');
        }
    }
};
xhttp.open("GET", "http://localhost:3000/api/setenv?data="+env, true);
xhttp.send();
}
document.addEventListener('DOMContentLoaded', function() {
    var currentEnv;
    chrome.storage.local.get(['currentEnv'],function(value){
        currentEnv = value.currentEnv ? value.currentEnv : null;
        var classname = document.getElementsByClassName('env_button');
    Array.from(classname).forEach(function(element) {
        if (element.value == currentEnv)
            element.classList.add('btn-success');
        element.addEventListener('click', function(event){
            var classname = document.getElementsByClassName('env_button');
            Array.from(classname).forEach(function(element) {
                element.classList.remove('btn-success');
            })
            setEnv(event);
        });
      })
    })
    
});