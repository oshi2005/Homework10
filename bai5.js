const  library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
 ];

function isResult(library) {
    return {
        author: library.author,
        title: library.title,
        readingStatus: library.readingStatus,
        price: `10000`
         }   
};
    const newResult = library.map(isResult);

 const newresult = library.map(isResult);

 console.log(newresult);

 