# Random Bible Verse

Frustrated by rigged "random" Bible verse generators? Then this is the script you need. 

This script goes the extra mile to make sure every verse has an equal chance to be picked. Because I presume other random verse implementations (that are not predetermined like YouVersion), will often do something like following pseudocode:

```
var randomBook = rand(66);
var randomChapter = rand(books[randomBook].length);
var randomVerse = rand(books[randomBook].chapters[randomChapter].verses.length);

var result = books[randomBook].chapters[randomChapter].verses[randomVerse];
```

The problem with this method is that books with many more chapters and verses are just as likely to be picked as books with a single chapter. In other words it's not equally weighted at all, making certain verses much likely to be chosen than others.

My script aims to solves this issue by first choosing a random absolute verse and then working my way back to calculate what exact verse it is.

I've used Rob Keplin's Bible API: https://www.rkeplin.com/the-holy-bible-open-source-rest-api/
