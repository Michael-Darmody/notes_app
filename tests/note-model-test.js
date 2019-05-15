(function(exports) {
  function testNotetext() {
    var text = 'My favourite language is JavaScript'
    var note = new Note(text);

    if (note.getNotetext() !== text ) {
      throw new Error('No text available');
    }
    else {console.log('pass')}
    };
    testNotetext();
})(this);
