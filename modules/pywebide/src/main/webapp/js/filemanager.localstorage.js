/**
 * This file manager class is a thin-abstraction on top of a storage
 * mechanism (for instance, HTML5 local storage, cloud-based storage, local
 * file system storage)
 *
 * This particular implementation relies on the localstorage, and prefixes
 * every key with a "file." prefix.
 */
 
 
function FileManager() {
  
  // Test if localStorage is available
  try {
    this.isAvailable = ( 'localStorage' in window && window['localStorage'] !== null );
  } catch (e) {
    this.isAvailable = false;
  };
  
}

FileManager.prototype.isSupported = function(){
    return this.isAvailable;
}

FileManager.prototype.list = function(pattern){
    // Returns a list of "files" matching the given pattern
    for(int i = 0; i < localStorage.length ; i++){
        if(/^file\.(.*)$/.test(localStorage.key(i))){
            // a file - capture the file path and name and add it to the list
        }
    }
}

FileManager.prototype.saveAs = function(fileName, contents){
    localStorage.setKey("file."+fileName,contents);
}

FileManager.prototype.open = function(fileName){
    return localStorage.getKey("file."+fileName);
}

FileManager.prototype.remove = function(fileName){
    // Remove key
}

FileManager.prototype.rename = function(oldFileName, newFileName){
    // Save As, then remove
}

