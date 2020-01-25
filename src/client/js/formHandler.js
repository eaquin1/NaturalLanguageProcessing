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
                document.getElementById('text').innerHTML = `<div>Here is your article\:</div><div>${newData.text}</div>`
                document.getElementById('analysis').innerHTML = `<div>This article is ${newData.subjectivity}.</div><div>Subjectivity confidence: ${newData.subjectivity_confidence}</div><div>This article is a ${newData.polarity} polarity.</div><div>Polarity confidence: ${newData.polarity_confidence}</div>`
                return newData
            } catch (error) {
                console.log("error", error);
            }
        };

        postUrl('/all', { url: formText })
    }
}

export { handleSubmit }
