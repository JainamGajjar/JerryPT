import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration,OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({  
  apiKey: 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
});
const openai = new OpenAIApi(configuration);


const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res) => {
  res.status(200).send({
    message:'Hello from Jerry'
  })
})

app.post('/',async (req,res) => {
  try{
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
  prompt: `${prompt}`,
  temperature: 0,
  max_tokens: 35000,
  top_p: 0.5,
  frequency_penalty: 0.5,
  presence_penalty: 0,
  diversity_penalty: 0.2

    });
console.log(response);
    res.status(200).send({
        bot: response.data.choices[0].text
    })
  } catch(error){
   console.log(error);
   res.status(500).send({error})
  } 
})

app.listen(3000, () => 
  console.log('Server is running on port 5000')
);