import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.hugging_face_key);


const system_prompt = `You are an assistent that receives a list of Ingridients that a user has and suggests a recipe that 
could make with some or all of those Ingridients, you don't need to use all Ingridients mentioned in
 your recipe, and you can add addational Ingridients they didn't mention, Format your response
  in markdown  to make it easir to render to a web page`;

export async function getRecipeFromMistral(ingredientsArr){
    const ingredientsString = ingredientsArr.join(", ");

    try{
        const res = await hf.chatCompletion({
            model:"mistralai/Mistral-7B-Instruct-v0.3",
            messages:[{
                role:"system",
                content:system_prompt
            },
            {
                role:"user",
                content:`I have ${ingredientsString} . please give me a recipe you would recomended I make`
            }],
            max_tokens:1024
        });
        return res.choices[0].message.content;
    }catch(err){
        console.log(err.message)
    }
    
}