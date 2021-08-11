const categoryField = document.getElementById('category');
const submitBtn = document.querySelector('.submit-btn');
const listOfProducts = document.querySelector('.list-of-products');
const errorContainer = document.querySelector('.error-container');

const inputs = [...document.querySelectorAll('.list-of-products li ul li input')];
const mainLi = [...document.querySelectorAll('.list-of-products li ul li')];

let dataNumber = 1
mainLi.forEach(li => li.setAttribute('data-number', `${dataNumber++}`))

const mainList = document.querySelector('.main-list')

inputs.forEach(input => {

    input.addEventListener('click', () => {

        if (input.checked === true) {
            const inputClosest = input.closest('li')
            inputClosest.classList.add('active');
            console.dir(inputClosest.attributes[0].value);
            const itemValue = input.closest('li').textContent;
            mainList.insertAdjacentHTML('beforeend', `<li class='item' data-number="${inputClosest.attributes[0].value}"><i class="fas fa-times"></i>${itemValue}</li>`)
            markAndDelete()
        } else {
            input.closest('li').classList.remove('active')
        }
    });

})

const markAndDelete = function () {

    let deletedItem = [...document.querySelectorAll('.fa-times')];
    let item = [...document.querySelectorAll('.item')];

    item.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.add('mark');
        });
    });

    deletedItem.forEach(item => {
        item.addEventListener('click', () => {
            item.closest('li').remove();

            // const productCategory = [...document.querySelectorAll('.product-category')];
        });
    });
};

// Add new category
let newLiCategory
const addNewCategory = function () {
    const newCategory = categoryField.value;

    if (newCategory) {

        newLiCategory = document.createElement('li');
        listOfProducts.appendChild(newLiCategory)
        newLiCategory.insertAdjacentHTML('beforeend', `<ul>
        <i class="fas fa-puzzle-piece"></i> ${newCategory}:
        </ul>`);
        categoryField.value = '';
    } else {
        errorContainer.classList.add('active');

        setTimeout(() => {
            errorContainer.classList.remove('active');
        }, 7000);
    };
};

const clickBtn = function (e) {
    e.preventDefault();
    addNewCategory();
};

categoryField.addEventListener('keydown', () => errorContainer.classList.remove('active'))
submitBtn.addEventListener('click', clickBtn);