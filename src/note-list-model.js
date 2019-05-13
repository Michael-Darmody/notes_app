(function(exports) {
  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.getList = function () {
    return this._list
  };

  NoteList.prototype.createnote = function (text) {
    this._list.push(text);
  }


  exports.NoteList = NoteList;
})(this);
