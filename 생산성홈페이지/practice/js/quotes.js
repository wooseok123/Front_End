const quotes = [
    {
        quote : "당신이 원하는 것이 당신이 그럴 것이라고 꿈꾸었던 것과 같지 않음을 알게 되면 상처받게 된다.",
        author : "Randy K. Milholland",
    },
    {
        quote : "우리는 항상 젊음을 위해 미래를 개발할 수는 없지만, 미래를 위해 우리의 젊음을 개발할 수는 있다.",
        author : "Franklin D. Roosevelt",
    },
    {
        quote : "이 삶에서 우리가 자만심이 없다면 살아야할 충분한 이유가 없다.",
        author : "Leo Tolstoy",
    },
    {
        quote : "때로는 살아있는 것조차도 용기가 될 때가 있다.",
        author : "Seneca",
    },
    {
        quote : "변화는 한결같고 재탄생의 신호이자 불사조의 알이다.",
        author : "Christina Baldwin",
    },
    {
        quote : "화는 내는 순간 사라진다. 화는 참을 때 더 커진다.",
        author : "Emily Dickinson",
    },
    {
        quote : "타인들의 비현실적 기준에 당신 자신을 끼워맞출 수도 있겠지만, 이를 무시하고 당신 그대로의 모습으로 행복하게 사는 데 집중할 수도 있다.",
        author : "Jeph Jacques",
    },
    {
        quote : "이 세상에서 영예롭게 사는 가장 위대한 길은 우리가 표방하는 모습이 되는 것이다.",
        author : "Socrates",
    },
    {
        quote : "가능해 보이는 것 혹은 타당해 보이는 것만 선택한다면 스스로가 진정 원하는 것을 알 수 없고 타협만이 남게 된다.",
        author : "Robert Fritz",
    },
    {
        quote : "사실이란 것은 없고, 해석만 있다.",
        author : "Friedrich Nietzsche",
    },
];

const showQuote = document.querySelector("#quote span:first-child");
const showAuthor = document.querySelector("#quote span:last-child");

const quotesAuthor = quotes[1];
console.log(quotesAuthor);

function getRandomQuotes () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    showQuote.innerText = randomQuote.quote;
    showAuthor.innerText = randomQuote.author;
}

getRandomQuotes();