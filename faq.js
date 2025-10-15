const faqItems = document.querySelectorAll(".faq-item");
const questions = document.querySelectorAll(".item-que");


questions.forEach((question) => {
    question.addEventListener("click", () => {
    const currentFaq= question.parentElement;

    faqItems.forEach((item) => {
        if(item !== currentFaq){
        item.classList.remove("active");
        }
    });

    currentFaq.classList.toggle("active")
    });
});