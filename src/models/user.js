module.exports = (sequelize, Sequelize) => {
  
    const Article = sequelize.define("user", {
      
        userId: {
            field: "user_id",
            type: Sequelize.INTEGER
          },
        userName: {
            field: "user_name",
            type: Sequelize.STRING
          },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        firstName: {
            field: "first_name",
            type: Sequelize.STRING
        },
        lastName: {
            field: "last_name",
            type: Sequelize.STRING
        }  });  

        return Article;
  };