const {Sequelize, DataTypes} = require('sequelize');
const db = {};

// db.connection = new Sequelize(process.env.JOVEN_DB,process.env.JOVEN_DB_USER,process.env.JOVEN_DB_PASS, {host: 'localhost', dialect: "mysql"})

db.connection = new Sequelize('muni','root','Fenasantma', {host: 'localhost', dialect: "mysql"})

db.Profiles = require('./models/profiles')(db.connection, DataTypes)
db.Privileges = require('./models/privileges')(db.connection, DataTypes)
db.Records = require('./models/records.js')(db.connection, DataTypes)
db.Users = require('./models/users')(db.connection, DataTypes)
db.Categories = require('./models/categories')(db.connection, DataTypes)
db.Reviews = require('./models/reviews')(db.connection, DataTypes)
db.Socialnetworks = require('./models/socialnetworks')(db.connection, DataTypes)
db.Attentions = require('./models/attentions')(db.connection, DataTypes)
db.Commerces = require('./models/commerces')(db.connection, DataTypes)
db.Requests = require('./models/requests')(db.connection, DataTypes)
db.Sites = require('./models/sites')(db.connection, DataTypes)
db.Routes= require('./models/routes')(db.connection, DataTypes)
db.Images = require('./models/images')(db.connection, DataTypes)
db.Events = require('./models/events')(db.connection, DataTypes)
db.Academicoffers = require('./models/academicoffers')(db.connection, DataTypes)
db.Laboraloffers = require('./models/laboraloffers')(db.connection, DataTypes)
db.Trainings = require('./models/trainings')(db.connection, DataTypes)


db.Profiles.belongsTo(db.Privileges)
db.Records.belongsTo(db.Profiles)
db.Reviews.belongsTo(db.Users)
db.Reviews.belongsTo(db.Profiles)
db.Attentions.belongsTo(db.Users)
db.Attentions.belongsTo(db.Profiles)
db.Commerces.belongsTo(db.Users)
db.Commerces.belongsTo(db.Categories)
db.Requests.belongsTo(db.Profiles, {as: 'viewedProfile', foreignKey: 'viewed_profile_id'})
db.Requests.belongsTo(db.Profiles, {as: 'resolvedProfile', foreignKey: 'resolved_profile_id'})


// {through: 'viewed_profile_id'}
//{as: 'viewedProfileId', foreignKey: 'viewed_profile_id'}

//db.Commerces.belongsToMany(db.Images)
//db.Images.hasMany(db.Commerces)


db.Commerces.hasMany(db.Images)
db.Sites.hasMany(db.Images)
db.Routes.hasMany(db.Images)


module.exports = db
