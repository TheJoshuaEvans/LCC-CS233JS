import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathRelativeToLabs = (relativePath) => {
  return path.resolve(__dirname, `../../docs/labs/${relativePath}`);
};

export default pathRelativeToLabs;
