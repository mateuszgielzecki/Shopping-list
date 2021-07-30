const categoryField = document.getElementById('category');
const submitBtn = document.querySelector('.submit-btn');
const listOfProducts = document.querySelector('.list-of-products');
const errorContainer = document.querySelector('.error-container');


const item = [...document.querySelectorAll('.item')];
const deletedItem = [...document.querySelectorAll('.fa-times')];



// productCategory.forEach(cat => {
//     if (cat.childNodes.length === 1) cat.remove();
//     // console.log(cat.childNodes[1]);

// })

item.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('mark')


    })
})

deletedItem.forEach(item => {
    item.addEventListener('click', () => {
        // item.remove()
        item.closest('li').remove();

        const productCategory = [...document.querySelectorAll('.product-category')];

        productCategory.forEach(cat => {
            if (cat.childElementCount === 0) cat.remove();
            console.dir(cat.childElementCount);

        })

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




categoryField.addEventListener('keydown', () => errorContainer.classList.remove('active'))
submitBtn.addEventListener('click', clickBtn);

