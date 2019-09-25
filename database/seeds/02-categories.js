exports.seed = function(knex) {
  return knex('categories').insert([
    
    { name: "Baseball Teams", description: "Favorite Baseball Teams", thumbnail: "https://www.incimages.com/uploaded_files/image/970x450/getty_482805043_185511.jpg", user_id: 1 },
   
    { name: "Bands", description: "Favorite Bands", thumbnail: "https://image-ticketfly.imgix.net/00/02/89/44/30-og.jpg?w=650&h=433", user_id: 2 },
    
    { name: "Celebrities", description: "Favorite Celebrities", thumbnail: "https://i1.wp.com/metro.co.uk/wp-content/uploads/2018/08/gettyimages-138345374.jpg?quality=90&strip=all&zoom=1&resize=644%2C428&ssl=1", user_id: 3 },
    
    { name: "Apps", description: "Favorite Apps", thumbnail: "https://d21tktytfo9riy.cloudfront.net/wp-content/uploads/2016/03/30123842/abcom-default-share.jpg", user_id: 4 },
    
    { name: "Colors", description: "Favorite Colors", thumbnail: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Colouring_pencils.jpg", user_id: 5 }
    
  ]);
};