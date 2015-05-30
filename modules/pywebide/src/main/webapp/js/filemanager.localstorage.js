/**
 * This file manager class is a thin-abstraction on top of a storage
 * mechanism (for instance, HTML5 local storage, cloud-based storage, local
 * file system storage) - it represents a flat storage, but up to 
 * you to use custom separators in the file names to implement a tree-like
 * structure.
 *
 * This particular implementation relies on the localstorage, and prefixes
 * every key with a "_file." prefix.
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
    var result = [];
    // Returns a list of "files" matching the given pattern
    for(int i = 0; i < localStorage.length ; i++){
        if(/^file\.(.*)$/.test(localStorage.key(i))){
            // a file - capture the file path and name and add it to the list
            result.push(localStorage.key(i));
        }
    }
    return result;
}

FileManager.prototype.saveAs = function(fileName, contents){
    localStorage.setItem("_file."+fileName,contents);
    return true;
}

FileManager.prototype.open = function(fileName){
    return localStorage.getItem("_file."+fileName);
}

FileManager.prototype.remove = function(fileName){
    // Remove key
    localStorage.removeItem(fileName);
    return true;
}

FileManager.prototype.rename = function(oldFileName, newFileName){
    // Save As, then remove
    if(this.saveAs(newFileName, this.open(oldFileName))){
        this.remove(oldFileName);
    }else{
        return false;
    }
    return true;
}

