(function(exports) {
  function testNotetext() {
    var note = new Note();
  
    if (note.getNotetext() !== "My favourite language is JavaScript" ) {
      throw new Error('Wrong Text');
    }
    else {console.log('pass')}
    };
    testNotetext();
})(this);


