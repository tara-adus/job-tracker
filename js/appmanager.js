
function addJob(){
    alert("addJob has been invoked!")

    let endpoint = 'http://127.0.0.1:3000/applications'

    const xhr = new XMLHttpRequest();
    xhr.open('GET',endpoint);
    xhr.send()

    xhr.onload = function() {
        //let jsonresponse = JSON.parse(xhr.response)
        //alert('sunrise:'+ xhr.status+ jsonresponse.results.sunrise)
        alert(`Received response: ${xhr.status} ${xhr.response}`);
        //document.getElementById("blah").innerHTML = this.response;
    };

    xhr.onerror = function() {
        alert(`Network Error`);
    };
}