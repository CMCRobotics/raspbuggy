function Raspbuggy() {
  this.statusTimer = null;
  this.statusUpdateCallbacks = [];
  this.m_abortScriptCallback = null;
  this.m_scriptOutputCallback = null;
  this.SCRIPT_PREFIX = "from Drivar import Drivar\nfrom DrivarNxt import DrivarNxt\ndrivar = DrivarNxt()\ndrivar.initialize()\n\n"
//  this.SCRIPT_PREFIX = "from Drivar import Drivar\nfrom DrivarNoop import DrivarNoop\ndrivar = DrivarNoop()\nimport logging\nlogging.basicConfig(level=logging.DEBUG)\ndrivar.initialize()\n\n"
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
Raspbuggy.prototype.setAbortScriptCallback = function(listener){
    this.m_abortScriptCallback = listener;
};

Raspbuggy.prototype.getCompleteScriptCode = function(inputScript){
    return this.SCRIPT_PREFIX + inputScript;
}


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
  .fail(function(httpReply) {
    console.log( "Error - Could not obtain raspbuggy  status : "+httpReply.statusText+" ("+httpReply.status+")" );
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
  .fail(function(httpReply) {
    console.log( "Error - Could not flush raspbuggy standard output: "+httpReply.statusText+" ("+httpReply.status+")" );
  });
};

Raspbuggy.prototype.abortScript= function() {
  var thisRaspbuggy = this;
  $.getJSON( "/abort", function(reply) {
    if(reply.result && thisRaspbuggy.m_abortScriptCallback){
        thisRaspbuggy.m_abortScriptCallback(reply);
    }
  })
  .fail(function(httpReply) {
    console.log( "Error - Could not abort raspbuggy script : "+httpReply.statusText+" ("+httpReply.status+")" );
  });
};

Raspbuggy.prototype.executeScript= function(scriptContents) {
  var thisRaspbuggy = this;
  $.ajaxSetup({ 
    contentType: "application/json"
  });
  var scriptToExecute = scriptContents;
  scriptToExecute = scriptToExecute.replace(/\n/g,'\\n');
  scriptToExecute = scriptToExecute.replace(/"/g,'\\"');
  $.post( "/execute","{\"scriptText\":\""+scriptToExecute+"\"}", function(reply) {
    if(reply.success){
      // Update the status immediately
      thisRaspbuggy.updateStatus();
    }else{
      window.alert("Script execution failed : "+reply.message);
    }
  },"json")
  .fail(function(httpReply) {
    window.alert( "Error - Could not execute raspbuggy script : "+httpReply.statusText+" ("+httpReply.status+")" );
  });
};

raspbuggy = new Raspbuggy();
