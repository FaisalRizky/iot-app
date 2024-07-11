import app from './index';

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App Started on ${port}`);
});

export default app