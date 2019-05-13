(function(exports) {
  function Notes() {
    this._list = [];
    this._text = "My favourite language is JavaScript";
  
  };

  Notes.prototype.getList = function () {
    return this._list
  };

Notes.prototype.getNotetext = function (){
    return this._text;
}


  exports.Notes = Notes;
})(this);
