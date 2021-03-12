const db = require('./db')
const { Item } = db.models;

  (async () => {
    await db.sequelize.sync({ force: true });
        try {
            
                const item = await Item.create({
                
                SKU: 1,
                name: "Nuggs Hat",
                description: "A hat for you",
                Image: `path`
              });
              

                const item2 = await Item.create({
                SKU: 2,
                name: "North Face",
                description: "A jacket for you",
                Image: `path`
              });
           
              const products = await Item.findAll();
              console.log( products.map(Item => Item.toJSON()) );

        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                const errors = error.errors.map(err => err.message);
                console.error('Validation errors: ', errors);
              } else {
                throw error;
              }
        }
})();



