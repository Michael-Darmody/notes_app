(function(exports) {
  function testNotesList() {
    var note = new Note();
    var val = ['Birthday', 'Shopping', 'Drink'];
    note._list = val
    if (note.getList() !== val ) {
      throw new Error('Cannot  list');
    }
    else {console.log('pass')}
    };
  testNotesList();
})(this);
