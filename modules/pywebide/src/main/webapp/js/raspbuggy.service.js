function Raspbuggy() {
  this.statusTimer = null;
  this.statusUpdateCallbacks = [];
  this.m_scriptOutputCallback = null;
}


Raspbuggy.prototype.start = function(){
    console.log( "Started");
    this.invokeGetStatusTimeout();
};

Raspbuggy.prototype.addStatusUpdateCallback = function(listener){
    this.statusUpdateCallbacks.push(listener);
};

Raspbuggy.prototype.setScriptOutputCallback = function(listener){
    this.m_scriptOutputCallback = listener;
};


Raspbuggy.prototype.invokeGetStatusTimeout = function(){
    raspbuggy.updateStatus();
    raspbuggy.tailStdOut();
    raspbuggy.statusTimer = setTimeout(function(){raspbuggy.invokeGetStatusTimeout()}, 3000);
};

Raspbuggy.prototype.updateStatus= function() {
    var thisRaspbuggy = this;
  $.getJSON( "/status", function(reply) {
    //console.log( "Raspbuggy Status > Running? "+reply.running+" Exit Code : " +reply.exitCode );
    
    $.each(thisRaspbuggy.statusUpdateCallbacks, function(cb){
            try{
                this(reply);
            }catch(err){
                console.log("Could not update service status : "+err);
            }
    }, reply);

  })
  .fail(function() {
    console.log( "error : Could not obtain raspbuggy  status." );
    $.each(thisRaspbuggy.statusUpdateCallbacks, function( cb ){
            try{
                this({running: -3, exitCode: -1});
            }catch(err){
                console.log("Could not update service status : "+err);
            }
    });
   

  });
};

Raspbuggy.prototype.tailStdOut= function() {
  var thisRaspbuggy = this;
  $.getJSON( "/tailStdOut", function(reply) {
    if(reply.tail && thisRaspbuggy.m_scriptOutputCallback){
        // Send the tail array to the listener
        thisRaspbuggy.m_scriptOutputCallback(reply.tail);
    }
  })
  .fail(function() {
    console.log( "error : Could not flush raspbuggy standard output." );
  });
};


Raspbuggy.prototype.executeScript= function(scriptContents) {
  var thisRaspbuggy = this;
  $.ajaxSetup({ 
    contentType: "application/json"
  });
  $.post( "/execute","{\"scriptText\":\"import time\\nfor i in range(10):\\n    print 'hello world '+str(i)\\n    time.sleep(1)\"}", function(reply) {
    if(reply.success){
      // Update the status immediately
      thisRaspbuggy.updateStatus();
    }else{
      window.alert("Script execution failed : "+reply.message);
    }
  },"json")
//  .fail(function() {
//    console.log( "error : Could not execute raspbuggy script." );
//  });
};

raspbuggy = new Raspbuggy();
