function buildList(list) {
  //due to variable hoisting, all var (i, item, list) are considered as global var
  // and are retained in tle closure scope of function buildList
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var item = 'item' + i;
        result.push( function() {console.log(item + ' ' + list[i])} );
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    // Using j only to help prevent confusion -- could use i.
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

 window.onLoad = console.log(testList()) //logs "item2 undefined" 3 times
