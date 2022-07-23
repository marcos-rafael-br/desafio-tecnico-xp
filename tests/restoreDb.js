import Importer from 'mysql-import';
import dotenv from 'dotenv';
import modules from 'module';

dotenv.config();

const restoreDb = async () => {
  const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST } = process.env;

  const importer = new Importer({
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    host: MYSQL_HOST,
  });

  await importer.import('./databaseV2.sql');

  await importer.disconnect();
};

export default restoreDb;

if (!modules.children) {
  restoreDb();
}
