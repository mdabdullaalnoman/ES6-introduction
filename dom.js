// add border
document.getElementById('add-border').addEventListener('click', function () {
    const friendWarper = document.getElementById('friend-warp');
    friendWarper.style.border = '2px solid green';
});


// add background
function addBackground() {
    const friends = document.getElementsByClassName('friends');
    for (const friend of friends) {
        friend.style.background = 'gray';
    }
}

// add friend 
document.getElementById('add-friend').addEventListener('click', function () {
    const div = document.createElement('div');
    div.classList.add('friends');
    div.innerHTML = `
              <h4>friend-4</h4>
              <p>lorem10</p>
            `;
    document.getElementById('friend-warp').appendChild(div);
})