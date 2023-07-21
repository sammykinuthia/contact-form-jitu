class Person {
    first_name
    last_name
    phone
    email
    title
    profession
    image
    constructor(first_name, last_name, phone, email, title, profession, country, image) {
        this.first_name = first_name
        this.last_name = last_name
        this.phone = phone
        this.title = title
        this.profession = profession
        this.email = email
        this.country = country
        this.image = image
    }

}
let contactList = []
updateStorage()

const p1 = new Person("samuel", "mwaniki", "0790360980", "samuelmwaniki17@gmail.com", "Mr.", "Web dev", "kenya", "")


// functions

function updateStorage() {
    if (!localStorage.getItem('contacts')) {
        localStorage.setItem('contacts', JSON.stringify(contactList))
    }
    else{
        todos = JSON.parse(localStorage.getItem('contacts'))
    }
}

const addContactBtn = document.getElementById("add-contact")
const allContacts = document.getElementById("all-contacts")
const favoritesBtn = document.getElementById("favorites")
const mainSection = document.getElementById("main-section")
const addContactTemplate = document.getElementById("add-contact-template")
const contactsectionTemplate = document.getElementById("contact-section-template")
const userTemplate = document.getElementById("user-template")
const contactForm = document.getElementById("form-contact")






addContactBtn.addEventListener("click",()=>{
    clearMain()
    let addContact = addContactTemplate.content.cloneNode(true)
    mainSection.appendChild(addContact)
    contactForm.addEventListener('submit',e=>{

        e.preventDefault()
        let first_name = document.getElementById("input-first-name")
        let last_name = document.getElementById("input-last-name")
        let email = document.getElementById("input-user-email")
        let title = document.getElementById("input-user-title")
        let phone = document.getElementById("input-user-phone")
        let jobTitle = document.getElementById("input-user-job-title")
        let image = document.getElementById("input-user-img")
        let newContact = new Person(first_name,last_name,phone,email,title,jobTitle,"kenya",image)
        contactList.push(newContact)
    
    })

})
allContacts.addEventListener('click',()=>{
    clearMain()
    let contactSection = contactsectionTemplate.content.cloneNode(true)
    contactList.forEach(item=>{
        let userItem = userTemplate.content.cloneNode(true)
        userItem.querySelector(".img").setAttribute("url",item.image)
        userItem.querySelector(".user-name").textContet = item.name
        userItem.querySelector(".user-contact").textContet = item.phone
        userItem.querySelector(".job-desc").textContet = item.profession
        userItem.querySelector(".user-email").textContet = item.email
        contactSection.appendChild(userItem)
    })
    mainSection.appendChild(contactSection)
})
 
function clearMain(){
    while(mainSection.firstChild){
        mainSection.firstChild.remove()
    }
}