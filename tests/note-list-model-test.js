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
    var text = "favourite drink"

    notelist.createnote(text);
    var notes = notelist.getList()

    if (notes[notes.length - 1].getNotetext() !== text ) {
      throw new Error('Wrong list');
    }
    else {console.log('pass')}
    };
    testCreateNotes();
})(this);
