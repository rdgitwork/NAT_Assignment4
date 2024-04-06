console.log('hello world')

const postBox = document.getElementById('post-box')
const backBtn = document.getElementById('back-btn')
const updateBtn = document.getElementById('update-btn')
const deleteBtn = document.getElementById('delete-btn')
const url = window.location.href + "data/"
const updateUrl = window.location.href + "update/"
const deleteUrl = window.location.href + "delete/"
const alertbox = document.getElementById('alert-box')

const updateForm = document.getElementById('update-form')
const deleteForm = document.getElementById('delete-form')
const spinnerBox = document.getElementById('spinner-box')
const titleInput = document.getElementById('id_title')
const bodyInput = document.getElementById('id_body')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

//backBtn.addEventListener('click', () => {
//   history.back()
//})

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
        titileEl.setAttribute('id', 'title')

        const bodyEl = document.createElement('p')
        bodyEl.setAttribute('class', 'mt-1')
        bodyEl.setAttribute('id', 'body')

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

updateForm.addEventListener('submit', e => {
    e.preventDefault()

    const title = document.getElementById('title')
    const body = document.getElementById('body')

    $.ajax({
        type: 'POST',
        url: updateUrl,
        data: {
            'csrfmiddlewaretoken': csrf[0].value,
            'title': titleInput.value,
            'body': bodyInput.value,
        },
        success: function(response) {
            console.log(response)
            handleAlerts('success', 'Post updated...')
            title.textContent = response.title
            body.textContent = response.body
        },
        error: function(error) {
            console.log(error)
        }
    })

})

deleteForm.addEventListener('submit', e => {
    e.preventDefault()

    $.ajax({
        type: 'POST',
        url: deleteUrl,
        data: {
            'csrfmiddlewaretoken': csrf[0].value,
        },
        success: function(response) {
            window.location.href = window.location.origin
            localStorage.setItem('title', titleInput.value)
                //console.log(response)
                //handleAlerts('danger', 'Post deleted...')
        },
        error: function(error) {
            console.log(error)
        }
    })

})
