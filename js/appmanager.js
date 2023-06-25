
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

function getJobApplications(){
    let endpoint = 'http://127.0.0.1:3000/applications'
    let jobApplication = {jobId, cname}

    const xhr = new XMLHttpRequest();
   // xhr.withCredentials = true; //For CORS requests
    xhr.open('GET',endpoint);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //xhr.responseType = 'json';
    xhr.send()

    xhr.onload = function() {
        let jobApplications = JSON.parse(xhr.response);
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let jobA of jobApplications){
            out = out + `<tr><td>${jobA.jobId}</td><td>${jobA.cname}</td></tr>`
        }
        placeholder.innerHTML = out;
    };

    xhr.onerror = function() {
        console.log("error")
        alert(`Network Error`);
    };
}

function addJobApplication(){
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