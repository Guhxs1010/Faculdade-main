function toggleTheme() {
    const body = document.querySelector('body')
    const container = document.querySelector('.container')
    const toggleBtn = document.querySelector('.toggle-btn')

    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme')
        container.style.backgroundColor = '#fff'
        container.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
        toggleBtn.style.backgroundColor = '#007bff'
        toggleBtn.style.color = '#fff'
    } else {
        body.classList.add('dark-theme')
        container.style.backgroundColor = '#333'
        container.style.boxShadow = 'none'
        toggleBtn.style.backgroundColor = '#333'
        toggleBtn.style.color = '#fff'
    }
}