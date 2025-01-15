import OpenAI from "openai";
import * as dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;
const api_model = process.env.MODEL?.toString() ?? 'gpt-4o';

export class OpenAIService {
    
    static async generateText(prompt: string, fileContent: string, context: string): Promise<string> {
        const userPrompt = `Refactor this chunk of code which is part of the class MyAccountServlet.java to be compatible with AEM Cloud as a Service (AEMCaaS). This is chunk + ${context}. MyAccountServlet.java includes the following methods:
          1. @Override
            protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
          2. public boolean isvalidPassword(String pass_word)`;

        //prompt = prompt + '\n' + userPrompt;

        const openai = new OpenAI({
            apiKey: API_KEY,
            timeout: 120000,
           });
        try {
            const stream = await openai.chat.completions.create({
                model: api_model,
                messages: [
                    {
                      role: 'system',
                      name: 'AEM_expert',
                      content: prompt,
                    },
                    {
                      role: 'user',
                      name: 'AEM_developer',
                      content: userPrompt+'\n'+fileContent,
                     
                    },
                  ],
                temperature: 0,
                top_p: 1,
                stream: true,
                
              });
              
              let response = '';
              for await (const part of stream) {
                response += part.choices[0]?.delta?.content || "";
              }
            return response;
        } catch (error) {
            console.error('Error generating text from OpenAI:', error);
            throw new Error('Failed to generate text');
        }
    }
}

export async function sendToOpenAI(content: string, context: string ): Promise<string> {
    // Mock implementation: Replace with actual OpenAI API call
    const javacontent = content;
    const javacontext = context;
    const systemUserDefinition = process.env.SYSTEM_USER_DEF;
    
    //const prompt = context ? `Context: ${context}\n${content}` : content;
    const prompt = systemUserDefinition + '\n' + (javacontext ? `${javacontext}` : '');
    const response = await OpenAIService.generateText(prompt, javacontent,javacontext);
    console.log('response in sendToOpenAI ', response);
    return response;
}
