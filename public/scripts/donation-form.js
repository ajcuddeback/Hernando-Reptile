const donationForm = document.querySelector(".donation-form");
let price;
const handleDonationForm = event => {
    if (!document.querySelector('[name="donation-amount"]').value) {
        alert("Donation must not be empty!");
        event.preventDefault();
        return;
    }
    price = document.querySelector('[name="donation-amount"]').value;
    localStorage.setItem('price', JSON.stringify(price));
}

donationForm.addEventListener('submit', handleDonationForm);