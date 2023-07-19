export default async function apiManager(){
    
    const response = await fetch('/prompt');
    const data = await response.json();

    return data
}
