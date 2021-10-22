//sequelize는 파일명은 무조건 소문자, 대문자는 구동은 되지만 데이터베이스 저장이 이상하게 됨.  sequelize = orm 이다
const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class ImgBox extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        filename: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        fileURL: {
          type: DataTypes.STRING(500),
          allowNull: false,
        },
      },
      {
        modelName: "ImgBox",
        tableName: "imgBoxs", //무조건 복수형
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }

  static associate(db) {}
};
