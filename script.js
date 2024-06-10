document.addEventListener('DOMContentLoaded', function() {
    const addToSpecificBtn = document.querySelector('.btn-add-specific');
    const addToGeneralBtn = document.querySelector('.btn-add-general');
    const searchBtn = document.querySelector('.btn-search');
    const textInput = document.querySelector('#exampleInputEmail1');
    const fruitsRadio = document.querySelector('#exampleRadios1');
    const legumesRadio = document.querySelector('#exampleRadios2');
    const fruitsCard = document.querySelector('.c1');
    const legumesCard = document.querySelector('.c3');
    const generalCard = document.querySelector('.c2');

    const deleteBtn = document.querySelector('.btn-delete');

    function createCardItem(value, type) {
        const newItem = document.createElement('div');
        if (type === 'fruits') {
            newItem.textContent = `Fruits! - ${value}`;
        } else if (type === 'legumes') {
            newItem.textContent = `Legumes! - ${value}`;
        } else {
            newItem.textContent = `${value}`;
        }
        newItem.classList.add('card-item', type);
        return newItem;
    }

    const staticFruits = ['Apple', 'Mango'];
    const staticLegumes = ['Broccoli', 'Green Beans'];
    const staticGeneral = ['Pineapple', 'Banana', 'Potato', 'Lentils'];

    staticFruits.forEach(fruit => fruitsCard.appendChild(createCardItem(fruit, 'fruits')));
    staticLegumes.forEach(legume => legumesCard.appendChild(createCardItem(legume, 'legumes')));
    staticGeneral.forEach((item, index) => {
        if (index < 2) {
            generalCard.appendChild(createCardItem(`Fruits! - ${item}`, 'general'));
        } else {
            generalCard.appendChild(createCardItem(`Legumes! - ${item}`, 'general'));
        }
    });

    addToSpecificBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const inputValue = textInput.value.trim();

        if (!inputValue) {
            alert('Please enter a value.');
            return;
        }

        if (fruitsRadio.checked) {
            fruitsCard.appendChild(createCardItem(inputValue, 'fruits'));
        } else if (legumesRadio.checked) {
            legumesCard.appendChild(createCardItem(inputValue, 'legumes'));
        }

        textInput.value = '';
    });

    addToGeneralBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const inputValue = textInput.value.trim();

        if (!inputValue) {
            alert('Please enter a value.');
            return;
        }

        if (fruitsRadio.checked) {
            generalCard.appendChild(createCardItem(`Fruits! - ${inputValue}`, 'general'));
        } else if (legumesRadio.checked) {
            generalCard.appendChild(createCardItem(`Legumes! - ${inputValue}`, 'general'));
        }

        textInput.value = '';
    });

    searchBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();

        const allItems = document.querySelectorAll('.card-item');
        allItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm)) {
                item.style.backgroundColor = '#ff2f00';
                item.style.color = '#ffff';
            } else {
                item.style.backgroundColor = ''; 
            }
        });

        searchInput.value = ''; 
    });


    deleteBtn.addEventListener('click', function(event) {
        event.preventDefault();
    
        const selectedItems = document.querySelectorAll('.card-item');
        selectedItems.forEach(item => {
            if (item.style.backgroundColor === 'rgb(255, 47, 0)' && item.style.color === 'rgb(255, 255, 255)') {
                item.remove();
            }
        });
    });
    

});


