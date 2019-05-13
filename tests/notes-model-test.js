(function(exports) {
  function testNotesList() {
    var note = new Notes();

    var val = ["Birthday","Shopping","Drink"];
    note._list = val
    if (note.getList() !== val ) {
      throw new Error('Cannot show list');
    }
    else {console.log('pass')}
    };
  testNotesList();
})(this);

(function(exports) {
  function testNotetext() {
    var note = new Notes();
  
    if (note.getNotetext() !== "My favourite language is JavaScript" ) {
      throw new Error('Wrong Text');
    }
    else {console.log('pass')}
    };
    testNotetext();
})(this);


