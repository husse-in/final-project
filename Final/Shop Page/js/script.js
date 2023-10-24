let preveiwFirst = document.querySelector('.product-preview');


document.querySelectorAll('.product-container .product').forEach(product=>{
    product.onclick = () =>{
        preveiwFirst.computedStyleMap.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
            preview.classList.add('active');
        }
    })
    };
});