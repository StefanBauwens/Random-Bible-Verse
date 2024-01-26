const books_OT = 39;
const books_NT = 27;
const chaptersPerBook_OT = [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4];
const chaptersPerBook_NT = [28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1, 22];

const chaptersPerBook = chaptersPerBook_OT.concat(chaptersPerBook_NT);

const nivTranslation = {
    translation: "NIV", // see https://bible-go-api.rkeplin.com/v1/translations
    versesPerChapter: []; // index = chapter
    verseCount: 10 //TODO
}

function test() {
    console.log("books ot: " + chaptersPerBook_OT.length + " books nt: " + chaptersPerBook_NT.length);
    
    var chapters_OT = 0;
    for(i = 0; i < chaptersPerBook_OT.length; i++) {
        chapters_OT += chaptersPerBook_OT[i];
    }
    
    var chapters_NT = 0;
    for(i = 0; i < chaptersPerBook_NT.length; i++) {
        chapters_NT += chaptersPerBook_NT[i];
    }
    
    console.log("Total chapters OT: " + chapters_OT + " Total chapters NT: " + chapters_NT);
}



function getRandomVerse(translation) {
    var absoluteVerseNr = getRandomInt(translation.verseCount);
    
    var objj = getBookChapterVerse(translation, absoluteVerseNr); //TODO
}

function getBookChapterVerse(translation, absoluteVerse) {
    var chapter = 0;
    var verse = 0;
    
    //TODO be careful with zero indexed!!
    var absoluteChapter = 0;
    var vCount = translation.versesPerChapter[absoluteChapter];
    while (vCount < absoluteVerse) { //TODO check <=
        absoluteChapter++;
        vCount += translation.versesPerChapter[absoluteChapter];
    }
    
    var book = 0; // zero indexed
    var cCount = chaptersPerBook[book];
    while (cCount < absoluteChapter) {
        book++;
        cCount += chaptersPerBook[book];
    }
    
    // get relative chapter
    var chapter = chaptersPerBook[book] - (cCount - absoluteChapter); // zero indexed
    
    var verse = translation.versesPerChapter[absoluteChapter] - (vCount - absoluteVerse); // zero indexed //TODO test this
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}