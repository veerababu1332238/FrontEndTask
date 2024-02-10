const radioButtons = document.querySelectorAll('input[type="radio"]');
const boxContainers = document.querySelectorAll('.box-container');
const dropdowns = document.querySelectorAll('.dropdown-row');

radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('change', () => {
        if (radioButton.checked) {
            boxContainers.forEach((container, i) => {
                if (i === index) {
                    container.classList.add('checked'); // Add checked class to the container
                    dropdowns[i].style.display = 'grid'; // Show the corresponding dropdowns
                } else {
                    container.classList.remove('checked'); // Remove checked class from other containers
                    dropdowns[i].style.display = 'none'; // Hide other dropdowns
                }
            });
        }
    });
});

document.querySelectorAll('input[name="unit"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        if (this.checked) {
            var price = parseFloat(this.parentNode.querySelector('.price').textContent.replace('$', ''));
            document.getElementById('totalPrice').textContent = price.toFixed(2);
        }
    });
});

function addCart(){
    let n = 0
    for(i =0; i<radioButtons.length;i++) {
        if(radioButtons[i].checked) {
            alert('successfully added to cart');
            n = n+1
            break;
        }
    }
    if(n === 0) {
        alert('please select a product');
    }
    
}