
//creating sequelize model for User account
module.exports =( sequelize, DataTypes)=>{
//define name of model as Song
    const Song= sequelize.define('Song',{   //attributes attached to a model(table)
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
    })
    return Song
    }
        