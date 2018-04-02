export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
});
  Channel.associate = (models) => {
    // 1:m
    Channel.belongsTo(models.Team, {
      foreignKey: 'teamId',
    });
  };
  return Channel;
};
