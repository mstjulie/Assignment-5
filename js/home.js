
let allIssues = [];

const loadCard = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            allIssues = data.data;
            displyCard(allIssues);
        });
};

const displyCard = (cards) => {

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    const issueCount = document.getElementById("issue-count");
    issueCount.innerText = cards.length + " Issues";

    cards.forEach((card) => {

        const postCard = document.createElement("div");

        postCard.innerHTML = `<div class="post-card">

            <div class="flex justify-between p-5">
                <img class="size-10" src="assets/Open-Status.png" alt="">
                <button class="btn btn-soft btn-error px-6 rounded-full">
                    ${card.priority}
                </button>
            </div>

            <h1 class="text-xl font-bold">
                ${card.title}
            </h1>

            <p class="text-[#64748B] pt-3 pb-3">
                ${card.description}
            </p>

            <div class="flex gap-3 pt-3">
                <p class="bg-red-200 px-4 rounded-full text-red-500">
                    ${card.category}
                </p>
            </div>

            <div class="pt-4">
                <h5>#${card.id} by ${card.author}</h5>
                <p>${card.date}</p>
            </div>

        </div>
        
        `;

        cardContainer.appendChild(postCard);
    });
};

document.getElementById("all-btn").addEventListener("click", () => {
    displyCard(allIssues);
});

document.getElementById("open-btn").addEventListener("click", () => {

    const openIssues = allIssues.filter(issue => issue.status === "open");
    displyCard(openIssues);

});

document.getElementById("closed-btn").addEventListener("click", () => {

    const closedIssues = allIssues.filter(issue => issue.status === "closed");
    displyCard(closedIssues);

});

loadCard();
