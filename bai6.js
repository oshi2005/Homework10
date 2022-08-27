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

 const user1 = library.push( {
        author: 'Huyen Chip', 
        title: 'Xach ba lo len va di', 
        readingStatus: false, 
        price: 110000
        }
    );
    console.log(library);