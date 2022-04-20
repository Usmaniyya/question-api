async function getQuestion() {
    const req = await fetch('https://jservice.io/api/random');
    const res = await req.json();

    document.getElementById('question').textContent = `Question : ${res[0].question}`;
    document.getElementById('answer').textContent = `Answer : ${res[0].answer}`;

}

getQuestion();

window.onload = function() {
    document.querySelector('.btn').addEventListener('click', () => {
        document.querySelector('.btn').style.display = 'none';
        document.getElementById('answer').style.display = 'block';
    })
}