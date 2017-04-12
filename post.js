
function PostButton(){
var city = document.getElementById("String").value;
  var Submit = new XMLHttpRequest();					
  var payload =  document.getElementById("String").value;
  Submit.open('POST', 'http://httpbin.org/post', true);		
  Submit.setRequestHeader('Content-Type', 'application/json');
  Submit.addEventListener('load', function(){					
    if (Submit.status >= 200 && Submit.status < 400){
      var response = JSON.parse(Submit.responseText);
      document.getElementById("resp").textContent = JSON.stringify(response.data);
    }
  });
  Submit.send(JSON.stringify(payload));
  event.preventDefault();					
};

