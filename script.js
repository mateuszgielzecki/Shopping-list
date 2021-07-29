const categoryField = document.getElementById('category');
const submitBtn = document.querySelector('.submit-btn');
const listOfProducts = document.querySelector('.list-of-products');
const errorContainer = document.querySelector('.error-container');

// Add new category


const errorVisible = setTimeout(() => {
    errorContainer.classList.remove('active')


}, 7000);

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
        errorContainer.classList.add('active')
        errorVisible();
    }

}


const clickBtn = function (e) {
    e.preventDefault();

    addNewCategory();

}

categoryField.addEventListener('keydown', () => errorContainer.classList.remove('active'))
submitBtn.addEventListener('click', clickBtn);

