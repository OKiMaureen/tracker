
//creating sequelize model for Bookmark account
module.exports =( sequelize, DataTypes)=>{
  //define name of model as Bookmark
  const Bookmark= sequelize.define('Bookmark',{})
  // associate Bookmark to other models
  Bookmark.associate= function (models) {
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Song) 
  }
  return Bookmark
}
            