function getList(){
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            let result = document.getElementById("video-list");
            const JSONResult = JSON.parse(this.responseText)
            let items = JSONResult.items;
            items.forEach(video => {
                // console.log(video.snippet.title);
                // result.innerHTML = video.snippet.title;

                const listItem = document.createElement('li'); // Create a new list item

                listItem.textContent = video.snippet.title; // Set the text content of the list item

                result.appendChild(listItem); // Append the list item to the results list
                
            });
            
            
            
        }
    });

    let search = document.getElementById("search");
    console.log(search.value);
    let url = "https://youtube-v31.p.rapidapi.com/search?q=";
    url = url+search.value;
    url = url + "&part=snippet%2Cid&regionCode=US&maxResults=50&order=date";
    console.log(url);


    xhr.open('GET', url);
    xhr.setRequestHeader('X-RapidAPI-Key', '011135629dmsh1a9714889029b7ep12da5djsnc9cb36f3ae86');
    xhr.setRequestHeader('X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com');

    xhr.send(data);

}