const donationForm = document.querySelector(".donation-form");
let price;
const handleDonationForm = () => {
    price = document.querySelector('[name="donation-amount"]').value;
    localStorage.setItem('price', JSON.stringify(price));
}
donationForm.addEventListener('submit', handleDonationForm);