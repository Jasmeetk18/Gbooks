document.getElementById('search-btn').addEventListener('click', () => {
    const text = document.getElementById('search-text').value
    console.log(text)
    const url=`https://www.googleapis.com/books/v1/volumes?key=AIzaSyCs2x3L14kr5RDEgfYcMQxQ-Zg9VOssxe8&q=${text}`
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)
            let output = ''
            for(let i=0; i < response.items.length; i++) {
                output += `
                    <div style="width: 23%; margin: 10px;">
                    <a href="${response.items[i].volumeInfo.previewLink}" target="_blank">
 
                             <div >
                                <img style="width:100% ; " src="${response.items[i].volumeInfo.imageLinks.thumbnail}" />
                                <h4>${response.items[i].volumeInfo.title}</h4>
                                <p>${response.items[i].volumeInfo.authors}</p>
                            </div>
                        </a>
                    </div>   
                `
            }
            document.getElementById('my-div').innerHTML = output                
        }
    }
    xhr.send()
})