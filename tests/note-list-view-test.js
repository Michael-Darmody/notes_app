(function(exports) {
  function testNoteListView() {
    var notelist = new NoteList();

    notelist.createnote("note1");
    notelist.createnote("note2");
    var view = new NoteListView(notelist);

    var htmlstring = "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>"

    if (view.printHTML() !== htmlstring) {
      throw new Error('Cannot print HTML');
    }
    else {console.log('pass')}
    };
    testNoteListView();
})(this); 
