console.log('hello world')

const postBox = document.getElementById('post-box')
const backBtn = document.getElementById('back-btn')
const updateBtn = document.getElementById('update-btn')
const deleteBtn = document.getElementById('delete-btn')
const url = window.location.href + "data/"
const spinnerBox = document.getElementById('spinner-box')
const titleInput = document.getElementById('id_title')
const bodyInput = document.getElementById('id_body')

backBtn.addEventListener('click', () => {
    history.back()
})

$.ajax({
    type: 'GET',
    url: url,
    success: function(response) {
        console.log(response)
        const data = response.data

        if (data.logged_in !== data.author) {
            console.log('different')
        } else {
            console.log('the same')

            updateBtn.classList.remove('not-visible')
            deleteBtn.classList.remove('not-visible')

        }

        const titileEl = document.createElement('h3')
        titileEl.setAttribute('class', 'mt-3')

        const bodyEl = document.createElement('p')
        bodyEl.setAttribute('class', 'mt-1')

        titileEl.textContent = data.title
        bodyEl.textContent = data.body

        postBox.appendChild(titileEl)
        postBox.appendChild(bodyEl)

        titleInput.value = data.title
        bodyInput.value = data.body

        spinnerBox.classList.add('not-visible')
    },
    error: function(error) {
        console.log(error)
    }
})
