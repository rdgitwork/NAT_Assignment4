console.log('hello world')

const helloWorldBox = document.getElementById('hello-world')



$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response) {
        console.log('success', response.text)
        helloWorldBox.textContent = response.text
    },
    error: function(error) {
        console.log('error', error)
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response) {
        console.log(response)

    },
    error: function(error) {
        console.log('error', error)
    }
})
