import express from 'express';

import 'dotenv/config';

const app = express();

app.listen(3000, () => {
  console.log('🎆 OrganizeMe server has started.');
});
