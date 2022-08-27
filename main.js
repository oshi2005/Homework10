
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

//  bài 1Tìm và trả về object có author là 'Steve Jobs'.
//  const getLibrary = library.find(library => library.author === 'Steve Jobs');

//  console.log(getLibrary);

// 3. Trả về mảng chỉ chứa title các object.

// for (var key in library) {
//     console.log(library[key]);
// }

// Bài 4 Filter những object mà title chứa chuỗi 'the'.





// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);







// console.log(library.replace(true, false));

// Bài 6 : Thêm một object mới vào mảng trên.
// const user1 = library.push( {
//     author: 'Huyen Chip', 
//     title: 'Xach ba lo len va di', 
//     readingStatus: false, 
//     price: 110000
//     }
// );
// console.log(library);


 