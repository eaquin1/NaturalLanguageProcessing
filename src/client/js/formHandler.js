/*function handleSubmit(event) {
    event.preventDefault()

    // check what if the submitted link is a URL
    let formText = document.getElementById('url').value
    if (Client.checkURL(formText)) {
      console.log("::: Form Submitted :::")
      const posting = async(URL ='', data = {}) =>{
        const response = await fetch(URL, {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            //'Accept': 'application/json'
          },
          body: JSON.stringify(data),
      });
      
      try {
        const newData = await response.json();
        document.getElementById('results').innerHTML = `<div>Here are your results\:</div><div>label: ${newData.label}</div><div>code: ${newData.code}</div><div>confidence: ${newData.confidence}</div>`;
        console.log(newData);
        return newData;
  } catch(error) {
    console.log("error", error);
  }
};
  
  posting('/all', {url: formText})  
  }
}
export { handleSubmit }
*/
//test

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    
    if (Client.checkURL(formText)) {
        const postUrl = async (url = '', data = {}) => {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            try {
                const newData = await response.json();
                document.getElementById('results').innerHTML = `<div>These are your results\:</div><div>Polarity: ${newData.polarity}</div><div>Subjectivity: ${newData.subjectivity}</div><div>Polarity confidence: ${newData.polarity_confidence}</div><div>Subjectivity confidence: ${newData.subjectivity_confidence}`
                return newData
            } catch (error) {
                console.log("error", error);
            }
        };

        postUrl('/all', { url: formText })
    }
}

export { handleSubmit }
