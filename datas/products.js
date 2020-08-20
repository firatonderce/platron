const products = [
    {
      productId: 0,
      name: 'Meyve',
      img: require('./pictures/fruits.jpg'),
      items :[
      { 
        itemId: 0, 
        name: 'Muz',
        price: 3,
        img: require('./pictures/banana.png'),
      },
      { 
        itemId: 1,
        name:'Elma', 
        price: 2,
        img: require('./pictures/apple.jpg'),
      },
      {
        itemId: 2,
        name:'Karpuz',
        price: 5,
        img: require('./pictures/melon.jpg'),
      }
       ],
    },
    {
      productId: 1,
      name: 'Sebze',
      img: require('./pictures/vegetables.jpg'),
      items :[
        { 
          itemId: 0, 
          name: 'Domates',
          price: 1.5,
          img: require('./pictures/tomato.jpg'),
        },
        { 
          itemId: 1,
          name:'Biber', 
          price: 2,
          img: require('./pictures/pepper.jpg'),
        },
        {
          itemId: 2,
          name:'Patates',
          price: 2.5,
          img: require('./pictures/potato.jpg'),
        }
         ],
    },
  
    {
      productId: 2,
      name: 'Atıştır',
      img: require('./pictures/snacks.jpg'),
      items :[
        { 
          itemId: 0, 
          name: 'Çikolata',
          price: 4,
          img: require('./pictures/chocolate.jpg'),
        },
        { 
          itemId: 1,
          name:'Cips', 
          price : 3,
          img: require('./pictures/chips.jpg'),
        },
        {
          itemId: 2,
          name:'Kraker',
          price: 1.25,
          img: require('./pictures/cracker.jpg'),
        }
         ],
    },

    
  ];

  export default products;