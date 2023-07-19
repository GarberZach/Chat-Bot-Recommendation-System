export default async function postAnswers(inputs){

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs)
    }
    
    const response = await fetch('/answers', settings);
    const data = await response.json();

    return data
}
