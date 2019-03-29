var setEnv = function(event){
    var env = event.target.value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};
xhttp.open("GET", "http://localhost:3000/api/setenv?data="+env, true);
xhttp.send();
}
document.addEventListener('DOMContentLoaded', function() {
    var classname = document.getElementsByClassName('env_button');
    Array.from(classname).forEach(function(element) {
        element.addEventListener('click', function(event){
            setEnv(event);
        });
      })
});