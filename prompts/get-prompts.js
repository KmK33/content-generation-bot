exports.sendZenprompt = async (openAi) => {

    try {
        const prompt = `Assume you are a storyteller and a zen meditation trainer.
            Your goal is to onboard more people into trying zen meditation with the help of spreading out its benefits and advantages using stories regarding peace mindfulness calmness concentration etc.
            Create a unique short story and a quote at the end   which would inspire people to try zen meditation.  `

        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": `${prompt}` }],
            max_tokens: 500


        });

        console.log(response.data.choices[0].message.content);

        return response.data.choices[0].message.content;



    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

    }

}

exports.sendPrompt = async (openAi, prompt) => {
    try {

        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "system", "content": `${prompt}` }]


        });

        // const response = await openAi.createCompletion({
        //     model: "text-davinci-003",
        //     prompt: `${prompt}`,
        //     max_tokens: 500

        // });

        return response.data.choices[0].message.content;
    } catch (err) {
        console.log(`error in sendprompt function`);
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }


}

exports.sendImagePrompt = async (openAi, prompt) => {
    try {
        const response = await openAi.createImage({
            prompt: `${prompt}`,
            n: 1,
            size: "1024x1024",
        });
        image_url = response.data.data[0].url;
        return image_url;

    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

    }

}