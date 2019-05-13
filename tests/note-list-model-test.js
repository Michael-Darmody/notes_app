(function(exports) {
  function testNotesList() {
    var notelist = new NoteList();

    var val = ["Birthday","Shopping","Drink"];
    notelist._list = val
    if (notelist.getList() !== val ) {
      throw new Error('Cannot show list');
    }
    else {console.log('pass')}
    };
  testNotesList();
})(this);


(function(exports) {
  function testCreateNotes() {
    var notelist = new NoteList();
    var list = ["Favourite drink: seltzer"];

    notelist.createnote("Favourite drink: seltzer");
    var notes = notelist.getList()
    
    if (notes[notes.length - 1] !== list[list.length - 1] ) {
      throw new Error('Wrong list');
    }
    else {console.log('pass')}
    };
    testCreateNotes();
})(this);