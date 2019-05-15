(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  };

  NoteListView.prototype.printHTML = function() {
    var html = "<ul>"
    this.notelist.getList().forEach(function(note) {
    html += "<li><div>" + note.getNotetext() + "</div></li>"
  })

    html += "</ul>"
    return html
  };
  exports.NoteListView = NoteListView
})(this);
