// import express from 'express';
// import * as dotenv from 'dotenv';
// import cors from 'cors';
// import { Configuration,OpenAIApi } from 'openai';

// dotenv.config();

// const configuration = new Configuration({  
//   apiKey: process.env.OPEN_API_KEY
// });
// const openai = new OpenAIApi(configuration);


// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/',async(req,res) => {
//   res.status(200).send({
//     message:'Hello from Jerry'
//   })
// })

// app.post('/',async (req,res) => {
//   try{
//     const prompt = req.body.prompt;
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//   prompt: `${prompt}`,
//   temperature: 0,
//   max_tokens: 35000,
//   top_p: 0.5,
//   frequency_penalty: 0.5,
//   presence_penalty: 0,
//   diversity_penalty: 0.2

//     });
// console.log(response);
//     res.status(200).send({
//         bot: response.data.choices[0].text
//     })
//   } catch(error){
//    console.log(error);
//    res.status(500).send({error})
//   } 
// })

// app.listen(3000, () => 
//   console.log('Server is running on port 5000')
// );





  // import express from 'express';
  // import * as dotenv from 'dotenv';
  // import cors from 'cors';
  // import { Configuration, OpenAIApi } from 'openai';

  // dotenv.config();

  // const configuration = new Configuration({
  //   apiKey: process.env.OPEN_API_KEY,
  // });
  // const openai = new OpenAIApi(configuration);

  // const app = express();
  // app.use(cors());
  // app.use(express.json());

  // app.get('/', async (req, res) => {
  //   res.status(200).send({
  //     message: 'Hello from Jerry',
  //   });
  // });

  // app.post('/', async (req, res) => {
  //   try {
  //     const prompt = req.body.prompt;
  //     const response = await openai.createCompletion({
  //       model: "text-davinci-003",
  //       prompt: prompt,  // Use the provided prompt
  //       temperature: 0,
  //       max_tokens: 35000,
  //       top_p: 0.5,
  //       frequency_penalty: 0.5,
  //       presence_penalty: 0,
  //       diversity_penalty: 0.2,
  //     });

  //     console.log(response);
  //     res.status(200).send({
  //       bot: response.data.choices[0].text,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send({ error: error.message });
  //   }
  // });

  // app.listen(3000, () => console.log('Server is running on port 3000'));



  import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use process.env.PORT if available, otherwise default to 3000

app.use(cors());
app.use(express.json());

const openai = new OpenAIApi({
  apiKey: process.env.OPEN_API_KEY,
});

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from Jerry',
  });
});

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 50, // Adjust this as needed
      top_p: 1,
    });

    const botResponse = response.data.choices[0].text;
    console.log('Bot Response:', botResponse);

    res.status(200).json({ botResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
