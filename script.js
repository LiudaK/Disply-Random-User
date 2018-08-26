const user = document.getElementById('div-user');

function getUser() {
    const xhr = new XMLHttpRequest();
    //with asynchronous
    xhr.open('GET', 'https://randomuser.me/api', true);
    xhr.send();
    let loadedList = [];
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            loadedList = JSON.parse(xhr.response);
            console.log(loadedList.results[0]);
            render(loadedList.results[0]);
        }
    };
}

function render(obj) {
    user.innerHTML = '';
    let userImage = document.createElement('img');
    userImage.setAttribute('src', obj.picture.large);
    user.appendChild(userImage);
    let name = document.createElement('p');
    name.innerText =
        `Name: ${obj.name.first.charAt(0).toUpperCase()}${obj.name.first.slice(1)} ${obj.name.last.charAt(0).toUpperCase()}${obj.name.last.slice(1)}`;
    user.appendChild(name);

}


