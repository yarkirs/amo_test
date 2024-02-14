const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// по хорошему бы в .env
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJmY2VkMjllZGU2OTMyMTEwYWIyZTE4ZGJmYWFkY2IzYTQwMmYyNGMyNzY5ZGM4NmNjZjc4ODQxODk0NzFlMDAzZWQ1MDI1OWJmYzkxZDU4In0.eyJhdWQiOiIxMmU3MjkyZi0zMmNhLTQ3MmMtYjI3Mi01NjVjYmI5ZTczMzciLCJqdGkiOiJiZmNlZDI5ZWRlNjkzMjExMGFiMmUxOGRiZmFhZGNiM2E0MDJmMjRjMjc2OWRjODZjY2Y3ODg0MTg5NDcxZTAwM2VkNTAyNTliZmM5MWQ1OCIsImlhdCI6MTcwNzkxMDg0OSwibmJmIjoxNzA3OTEwODQ5LCJleHAiOjE3MDc5OTcyNDksInN1YiI6IjcxMTI2MjkiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzE1NTA5ODYsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSJdLCJoYXNoX3V1aWQiOiJjMWJkYmIxYy05YWVmLTRlYjEtODcxZC0xZjk5YmI0ZTYzYzIifQ.qYDIwm8qQU14jz9KOv4EgQW33F9Ql3mFApETgyYHLmuoONXYb3okX5PVK8K2MsPhivnKtI2kgPJmcCteQ2I7A8BuPN4x4lSGMpP_wTBT1JEfXo2uEEeBoK9LbO7cjUKdM6HPjuGMYHF0h-L9-46RZ9UlyfpghgWjXhOjRUb3SQA9nOn9Vp4CxHzurur5QGqIgOKibjwhWf5AZUn_Ea5Yl6Q9gHHteGi5Vbj-Z5H5f7hiE8Amr1FLLJ_iMVsvvclmaoR1lhuDXJFEjVETCJniGYMmtFwIC2X2zlcWr6Dh-204G72pI5rJeyeHSf604yIytTbmQh-7LQPla0-_G8HQag';
const baseURL = 'https://rmxtfurm45mw01.amocrm.ru/api/v4/';

// const authURL = 'https://test.gnzs.ru/oauth/get-token.php';

// const amoAuth = async () => {
//   try {
//     const response = await axios.get(authURL, {
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Client-Id': '31550986',
//       },
//     });
//
//     console.log(response.data);
//   } catch (error) {
//     console.error('Ошибка при запросе к amoCRM:', error.message);
//   }
// };
//
// amoAuth();

// !! ╰（‵□′）╯
const getEntity = async (entity) => {
  try {
    const response = await axios.get(`${baseURL}${entity}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка при запросе к amoCRM:', error.message);
  }
};

app.get('/api/create', async (req, res) => {
  try {
    const queryParam = req.query.entity;

    if (!['leads', 'contacts', 'companies'].includes(queryParam)) {
      return res.sendStatus(401);
    }

    const result = await getEntity(queryParam);

    // eslint-disable-next-line no-underscore-dangle
    res.json(result._embedded);
  } catch (err) {
    res.status(500).json();
  }
});

app.listen(PORT, () => {
  console.log(`Server start at http://localhost:${PORT}`);
});
