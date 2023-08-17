import './style.css'

const openNav = document.getElementById('open-nav') as HTMLButtonElement
const closeNav = document.getElementById('close-nav') as HTMLButtonElement
const navDOM = document.getElementById('nav') as HTMLElement
const navItems = document.getElementById('nav-items') as HTMLDivElement

openNav.addEventListener('click', ()=>{
  navDOM.classList.remove('hidden')
  navDOM.classList.add('block')
  
  navItems.classList.remove('translate-x-full')
  navItems.classList.add('translate-x-0')
})

closeNav.addEventListener('click', ()=>{
  navDOM.classList.remove('block')
  navDOM.classList.add('hidden')
  
  navItems.classList.remove('translate-x-0')
  navItems.classList.add('translate-x-full')
})
