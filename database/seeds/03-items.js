exports.seed = function(knex) {
  return knex('items').insert([
    
    { name: "Yankees", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwak_f20TbifAq5F4Aqwa2Hrl-Cb_EvuOZmcCsWSBIcKYKzLIC5g", category_id: 1 },
   
    { name: "U2", thumbnail: "https://townsquare.media/site/295/files/2014/10/U21.jpg?w=980&q=75", category_id: 2 },

    { name: "Justin Bieber", thumbnail: "https://pmcdeadline2.files.wordpress.com/2019/05/bieber-e1556817070154.jpg?w=681&h=383&crop=1", category_id: 3 },

    { name: "Facebook", thumbnail: "https://www.facebook.com/images/fb_icon_325x325.png", category_id: 4 },
    
    { name: "Red", thumbnail: "https://cdn11.bigcommerce.com/s-hfhomm5/images/stencil/1280x1280/products/180/451/Solid_Red_Sized__25214.1507754519.jpg?c=2&imbypass=on", category_id: 5 }
  
  ]);
};