(function(exports) {
  function Note() {
    this._list = [];
  };

  Note.prototype.getList = function () {
    return this._list
  };
  exports.Note = Note;
})(this);
