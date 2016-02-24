var ajax = function(optionsObj) {
  //console.log(optionsObj)
  optionsObj = optionsObj || {};

  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function(data) {
    if(httpRequest.readyState === 4) {
      if(httpRequest.status < 400) {
        optionsObj.success(data.target.response);
      } else {
        optionsObj.error({
          "status": data.target.status,
          "message": data.target.statusText
        });
      }
    }
  }
  contentTypes = {
    json: "application/json",
    text: "text/plain"
  }

  httpRequest.open(((optionsObj.type || "").toUpperCase() || "GET"), optionsObj.url);
  httpRequest.setRequestHeader("Content-Type", `${contentTypes[(optionsObj.dataType || "json")]}; charset=UTF-8`);
  //httpRequest.send((JSON.stringify(optionsObj.data) || null));
  httpRequest.send((optionsObj.data || null));
};

Array.prototype.include = function(data) {
  return this.indexOf(data) >= 0;
};