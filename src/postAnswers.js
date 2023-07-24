export default async function postAnswers(input){

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
    }
    
    const response = await fetch('http://localhost:3001/input', settings);
    const data = await response.json();

    return data
}
