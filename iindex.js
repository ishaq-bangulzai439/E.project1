AOS.init();


//contact section
const form = document.getElementById('contactForm');
 const nameInput = document.getElementById('name');
 const emailInput = document.getElementById('email');
 const messegeInput = document.getElementById('message');
 const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const nameGroup = document.getElementById('nameGroup');
const emailGroup = document.getElementById('emailGroup');
const messageGroup = document.getElementById('messageGroup');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Regular Expressions for Validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const messRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Name
    if (!nameRegex.test(nameInput.value.trim())) {
        nameGroup.classList.add('error');
        nameError.textContent = 'Please enter a valid name (letters and spaces only).';
    } else {
        nameGroup.classList.remove('error');
        nameError.textContent = '';
    }

    // Validate Email
    if (!emailRegex.test(emailInput.value.trim())) {
        emailGroup.classList.add('error');
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailGroup.classList.remove('error');
        emailError.textContent = '';
    }


    if (!messRegex.test(messegeInput.value.trim())) {
        messageGroup.classList.add('error');
        messageError.textContent = 'Please enter a valid message.';
    } else {
        messageGroup.classList.remove('error');
        messageError.textContent = '';
    }

    // Check for valid inputs before proceeding
    if (!nameGroup.classList.contains('error') && !emailGroup.classList.contains('error')) {
        alert('Form submitted successfully!');
        nameInput.value = '';
        emailInput.value = '';
        messegeInput.value = '';
    }
   });
// contact section end





// card section start
(function() {
    var rotate, timeline;

    rotate = function() {
        return $('.card:first-child').fadeOut(400, 'swing', function() {
            return $('.card:first-child').appendTo('.container215').hide();
        }).fadeIn(400, 'swing');
    };

    $('.next').click(function() {
        return rotate();
    });
}).call(this);
// card section end





let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

