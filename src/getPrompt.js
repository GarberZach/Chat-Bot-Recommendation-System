export default async function getPrompt(){
    
    const response = await fetch('http://localhost:3001/get_prompt');
    const data = await response.json();

    return data
}
