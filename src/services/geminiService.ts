import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY, GEMINI_MODEL } from '../constants/config';

// Initialize the API
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

export const geminiService = {
    /**
     * Sends a message to the Gemini AI and gets a response.
     * This is used for the AI Assistant chat overlay.
     */
    async sendMessage(message: string, context?: string): Promise<string> {
        try {
            // Construct a prompt that gives the AI some persona
            const systemPrompt = `
        You are a helpful AI assistant for a restaurant booking application. 
        Your goal is to help users find restaurants, choose meals, and make reservations.
        Keep your answers concise and friendly.
        
        Current Context: ${context || 'User is browsing the app.'}
        
        User: ${message}
      `;

            const result = await model.generateContent(systemPrompt);
            const response = await result.response;
            const text = response.text();

            return text;
        } catch (error) {
            console.error('Gemini API Error:', error);
            return "I'm having trouble connecting to the server right now. Please try again later.";
        }
    },

    /**
     * Analyzes a menu or restaurant description to provide a summary
     */
    async summarizeRestaurant(
        name: string,
        description: string,
    ): Promise<string> {
        try {
            const prompt = `Summarize this restaurant description in one short, catchy sentence: ${name} - ${description}`;
            const result = await model.generateContent(prompt);
            return result.response.text();
        } catch (error) {
            return description; // Fallback
        }
    },
};
