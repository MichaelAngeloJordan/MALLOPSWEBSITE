let totalPoints = 0;
const dailyClaimLimit = 10; // Batas klaim harian

const claimDailyButton = document.getElementById("claim-daily-button");
const subClaimButtons = document.querySelectorAll(".sub-claim-button");
const totalPointsDisplay = document.getElementById("total-points");

claimDailyButton.addEventListener("click", function() {
    if (totalPoints < dailyClaimLimit) {
        totalPoints += 10;
        totalPointsDisplay.textContent = totalPoints;
    } else {
        alert("Anda telah mencapai batas harian koin yang dapat diklaim (10 koin per hari). Silakan kembali besok!");
    }
});

subClaimButtons.forEach(button => {
    button.addEventListener("click", function() {
        const requiredCoins = parseInt(button.dataset.coins);
        if (totalPoints >= requiredCoins) {
            totalPoints -= requiredCoins;
            totalPointsDisplay.textContent = totalPoints;

            const messageDiv = document.createElement("div");
            messageDiv.textContent = `Anda berhasil menukarkan ${requiredCoins} koin.`;
            messageDiv.style.color = "green";
            messageDiv.classList.add("message");
            const container = document.querySelector(".container");
            container.appendChild(messageDiv);
        } else {
            const messageDiv = document.createElement("div");
            messageDiv.textContent = "Maaf, koin Anda tidak cukup untuk menukarkan voucher.";
            messageDiv.style.color = "red";
            messageDiv.classList.add("message");
            const container = document.querySelector(".container");
            container.appendChild(messageDiv);
        }
    });
});