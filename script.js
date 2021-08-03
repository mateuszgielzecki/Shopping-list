const categoryField = document.getElementById('category');
const submitBtn = document.querySelector('.submit-btn');
const listOfProducts = document.querySelector('.list-of-products');
const errorContainer = document.querySelector('.error-container');

const item = [...document.querySelectorAll('.item')];
const deletedItem = [...document.querySelectorAll('.fa-times')];

const inputs = [...document.querySelectorAll('.list-of-products li ul li input')]

item.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('mark')


    })
})

deletedItem.forEach(item => {
    item.addEventListener('click', () => {
        item.closest('li').remove();

        const productCategory = [...document.querySelectorAll('.product-category')];

    })
})


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

inputs.forEach(input => {
    input.addEventListener('click', () => {
        if (input.checked === true) input.closest('li').classList.add('active');
        if (input.checked === false) input.closest('li').classList.remove('active')
    })
})


categoryField.addEventListener('keydown', () => errorContainer.classList.remove('active'))
submitBtn.addEventListener('click', clickBtn);

