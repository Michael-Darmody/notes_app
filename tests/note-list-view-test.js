(function(exports) {
  function testNoteListView() {
    var view = new NoteListView();
    view.notelist.createnote("note1");
    view.notelist.createnote("note2");
    var htmlstring = "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>"

    if (view.printHTML() !== htmlstring) {
      throw new Error('Cannot print HTML');
    }
    else {console.log('pass')}
    };
    testNoteListView();
})(this);
