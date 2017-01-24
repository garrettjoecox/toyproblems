var should = require('should');
var vm = require('vm');
var fs = require('fs');

// if this test is being run on a server it should be ONLY to test the
// provided solutions
if(typeof window === 'undefined'){
  // looks for a file with the same name as this one but with
  // `.test.js` replaced with `.js`
  var filename = __filename.replace(/\.test\.js$/, '.js');
  vm.runInThisContext(fs.readFileSync(filename), filename);
}

describe('makeHashTable', function(){
  it('should exist', function(){
    should.exist(makeHashTable);
  });
  it('should be a function', function(){
    makeHashTable.should.be.a.Function;
  });
  it('should return a hash table', function(){
    var hashTable = makeHashTable();
    should.exist(hashTable);
    hashTable.should.be.an.Object;
  });
  it('should return different instances of hash tables each time', function(){
    var hashTable1 = makeHashTable();
    should.exist(hashTable1);

    var hashTable2 = makeHashTable();
    should.exist(hashTable2);
    hashTable1.should.not.be.equal(hashTable2);
    // `makehashTable()` should create a new hash table object instance
    // everytime but it's not!
  });
});

describe('hashTable', function(){
  describe('#insert', function(){
    it('should exist as a method of hashtable instances', function(){
      var hashTable = makeHashTable();
      should.exist(hashTable.insert);
    });
    it('should take exactly two arguments. a key and a value', function(){
      var hashTable = makeHashTable();
      hashTable.insert.length.should.equal(2);
      /**
        a hashtable gets its awesomeness from associating data. it wouldn't be
        very useful if you just gave it data without any association.

        ie, bad hash table:
        you: hey hashtable, can you please remember "sarah" (key)?
        hashtable: um... okay?
        ... sometime later...
        you: hey hastable, when's "sarah"'s (key) birthday?
        hashtable: "sarah"
        you: Um.. this is awkward...

        ie, good hashtable:
        you: hey hashtable, please remember that "sarah"s (key) birthday is
        "January 23rd" (value)
        hashtable: okay, friend. you got it!
        ... sometime later ...
        you: hey hashtable, when's "sarah"'s (key) birthday?
        hashtable: "January 23rd"
        you: thanks hashtable, you're awesome!
        hashtable: i know
      */
    });
    it('should not throw an error with valid input', function(){
      (function(){
        var hashTable = makeHashTable();
        hashTable.insert('keanu reeves best movie', 'The Matrix');
        // calling insert should not throw an error
      }).should.not.throw();
    });
    it('should allow keys to be reinserted with new values', function(){
      var hashTable = makeHashTable();
      (function(){
        hashTable.insert('keanu reeves best movie', 'Bill & Ted\'s Excellent Adventure');
        hashTable.insert('keanu reeves best movie', 'The Matrix');
      }).should.not.throw();
    });
  });

  describe('#retrieve', function(){
    it('should be a method of hashTable instances', function(){
      var hashTable = makeHashTable();
      should.exist(hashTable.retrieve);
    })
    it('should be a function', function(){
      var hashTable = makeHashTable();
      hashTable.retrieve.should.be.a.Function;
    });
    it('should take exactly one argument', function(){
      var hashTable = makeHashTable();
      // the retrieve function should only take a single `key` argument
      hashTable.retrieve.length.should.equal(1);
    })
    it('should return values previously inserted', function(){
      var hashTable = makeHashTable();
      hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
      var value = hashTable.retrieve('William Shatner\'s most well known role');
      should.exist(value);
      value.should.be.equal('Captain Kirk');
    });
    it('should return undefined for unknown keys', function(){
      var hashTable = makeHashTable();
      should.not.exist(hashTable.retrieve('echo?'));
    });
  });

  describe('#insert', function(){
    it('should allow values to be updated', function(){
      var hashTable = makeHashTable();
      hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
      hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
      var value = hashTable.retrieve('Tarantino\'s best movie');
      should.exist(value);
      value.should.be.equal('Pulp Fiction');
    });
  });

  describe('#remove', function(){
    it('should exist as a method of the hashTable instance', function(){
      var hashTable = makeHashTable();
      should.exist(hashTable.remove);
    });
    it('should be a function', function(){
      var hashTable = makeHashTable();
      hashTable.remove.should.be.a.Function;
    });
    it('should take exactly one argument', function(){
      var hashTable = makeHashTable();
      // the remove function should only take a single `key` argument
      hashTable.remove.length.should.equal(1);
    });
    it('should allow values to be removed', function(){
      var hashTable = makeHashTable();
      hashTable.insert('Spielberg\'s best movie', 'Jaws');
      hashTable.remove('Spielberg\'s best movie');
      var value = hashTable.retrieve('Spielberg\'s best movie');
      should.not.exist(value);
    });
  });

  describe('#insert', function(){
    it('should handle collisions', function(){
      var hashTable = makeHashTable();
      (function(){
        var n = 1000;
        for(var i = 0; i < n; i++){
          hashTable.insert('userid:' + (i++), 'Jamie Hyneman');
        }
      }).should.not.throw();
    });
  });
});
