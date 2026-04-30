

function remove_item(btn) {
    const block_remove = btn.closest('.list-content')
    block_remove.remove()
}

function add_item(btn) {
    event.preventDefault()

    //Take the element input
    const title = document.getElementById('title-add')
    const description = document.getElementById('description-add')


    //Receive the value
    const title_value = title.value 
    const desc_value = description.value

    if (title_value === '' || desc_value === '') return alert ('Some filed it\' empty')

    // create the <li></li>
    const novo_item = document.createElement('li')

    //Add a class css to <li></li>
    novo_item.classList.add('list-content')
    //add the HTML code inside the <li></li>
    novo_item.innerHTML = `
            <!--  <input type="checkbox" id="checkbox-card"/> -->
                    <div class="box-card-text">
                        <span class="title-card">${title_value}</span>
                        <span class="text-card">${desc_value}</span>
                    </div>
                    <span>
                        <button id="remove-button" onclick="remove_item(this)">
                            <img src="https://img.icons8.com/ios-glyphs/30/ff0000/trash--v1.png" alt="trash--v1" />
                        </button>
                    </span>
        `

    //take the element <ul></ul>
    const container = document.getElementById('list-section')

    //put the <li></li> into the <ul></ul>
    container.appendChild(novo_item)

    //Clear all fields
    title.value = ''
    description.value = ''
}