document.addEventListener('DOMContentLoaded', function () {
    const doubtForm = document.getElementById('doubtForm');
    const doubtsSection = document.getElementById('doubtsSection');

    doubtForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const doubtText = doubtForm.querySelector('#doubtText').value;

        if (doubtText.trim() !== '') {
            // Create a new doubt card
            const doubtCard = document.createElement('div');
            doubtCard.classList.add('doubt-card');
            doubtCard.innerHTML = `<p>${doubtText}</p>`;
            
            // Append the doubt card to the doubts section
            doubtsSection.appendChild(doubtCard);

            // Clear the textarea
            doubtForm.querySelector('#doubtText').value = '';
        }
    });
});
