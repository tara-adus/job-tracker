
function addJobApplication(){
    alert("addJobApplication has been invoked!")

    let jobId = document.getElementById("jobId").value
    let cname = document.getElementById("cname").value
    console.log('adding job: '+ jobId+ ', '+ cname)
    let endpoint = 'http://127.0.0.1:3000/application'

    let jobApplication = {jobId, cname}

    const xhr = new XMLHttpRequest();
   // xhr.withCredentials = true; //For CORS requests
    xhr.open('POST',endpoint);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //xhr.responseType = 'json';
    
    xhr.send(JSON.stringify(jobApplication))

    xhr.onload = function() {
        //let jsonresponse = JSON.parse(xhr.response)
        //alert('sunrise:'+ xhr.status+ jsonresponse.results.sunrise)
        alert(`Received response: ${xhr.status} ${xhr.response}`);
        console.log('xhr.response='+xhr.response)
        //document.getElementById("blah").innerHTML = this.response;
    };

    xhr.onerror = function() {
        console.log("error")
        alert(`Network Error`);
    };
}

function addJobApplications(){
    alert("addJob has been invoked!")

    let jobId = document.getElementById("jobId").value
    let cname = document.getElementById("cname").value
    console.log('adding job: '+ jobId+ ', '+ cname)
    let endpoint = 'http://127.0.0.1:3000/application'

    let jobApplication = {jobId, cname}

    const xhr = new XMLHttpRequest();
   // xhr.withCredentials = true; //For CORS requests
    xhr.open('POST',endpoint);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //xhr.responseType = 'json';
    
    xhr.send(JSON.stringify(jobApplication))

    xhr.onload = function() {
        //let jsonresponse = JSON.parse(xhr.response)
        //alert('sunrise:'+ xhr.status+ jsonresponse.results.sunrise)
        alert(`Received response: ${xhr.status} ${xhr.response}`);
        console.log('xhr.response='+xhr.response)
        //document.getElementById("blah").innerHTML = this.response;
    };

    xhr.onerror = function() {
        console.log("error")
        alert(`Network Error`);
    };
}