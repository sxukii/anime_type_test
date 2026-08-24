/* ========================================
   질문 데이터
======================================== */

const questions = [

    {
        question: "갑자기 눈을 떠보니 처음 보는 세계다. 가장 먼저 할 일은?",

        answers: [

            {
                text: "① 일단 직진! 직접 나서서 탐험한다.",
                description: "여기까지 왔는데 가만히 있을 순 없잖아.",
                score: {
                    hotMain: 2,
                    adventure: 1
                }
            },

            {
                text: "② 움직이기 전에 천천히 주변부터 살핀다.",
                description: "잠깐. 이 세계… 뭔가 이상한데?",
                score: {
                    explorer: 2,
                    darkStory: 1
                }
            },

            {
                text: "③ 혹시 함께 온 사람이 없는지 찾아본다.",
                description: "이런 데 혼자 떨어진 건 아니겠지?",
                score: {
                    adventure: 2,
                    relationship: 1
                }
            },

            {
                text: "④ 일단 내가 여기서 뭘 할 수 있는지 시험해본다.",
                description: "잠깐… 나도 뭔가 능력 하나쯤 생긴 거 아냐?",
                score: {
                    collector: 2,
                    dopamine: 1
                }
            }

        ]
    },


    {
        question: "어제까지만 해도 내 편이었던 동료가 적의 편에 섰다. 나는?",

        answers: [

            {
                text: "① 어떻게든 다시 데려온다.",
                description: "적이 됐든 뭐가 됐든, 다시 데려오면 그만이야.",
                score: {
                    relationship: 2,
                    hotMain: 1
                }
            },

            {
                text: "② 왜 그런 선택을 했는지부터 알아본다.",
                description: "네가 아무 이유 없이 이럴 리 없잖아.",
                score: {
                    darkStory: 2,
                    relationship: 1
                }
            },

            {
                text: "③ 일단 지켜본다. 무슨 수를 꾸미는지 궁금하다.",
                description: "좋아. 어디까지 가나 한번 보자고.",
                score: {
                    dopamine: 2,
                    explorer: 1
                }
            },

            {
                text: "④ 배신한 이유보다 한 가지가 더 신경 쓰인다.",
                description: "그래서… 너한테 나는 뭐였는데?",
                score: {
                    emotional: 2,
                    relationship: 1
                }
            }

        ]
    },


    {
        question: "함께 여행하던 동료가 적들에게 포위됐다. 나는?",

        answers: [

            {
                text: "① 고민할 시간 없다. 바로 뛰어든다.",
                description: "기다려. 이번엔 내가 지킬게.",
                score: {
                    hotMain: 2,
                    relationship: 1
                }
            },

            {
                text: "② 정면승부 대신 모두가 살아나갈 길부터 찾는다.",
                description: "이길 필요 없어. 같이 빠져나가면 돼.",
                score: {
                    adventure: 2,
                    explorer: 1
                }
            },

            {
                text: "③ 별일 아니라는 듯 앞으로 나선다.",
                description: "잠깐만 있어. 금방 끝내고 올게.",
                score: {
                    collector: 2,
                    dopamine: 1
                }
            },

            {
                text: "④ 무슨 일이 생겨도 동료 곁을 떠나지 않는다.",
                description: "혼자 두고 가는 건 선택지에 없어.",
                score: {
                    relationship: 2,
                    emotional: 1
                }
            }

        ]
    },


    {
        question: "쓰러뜨린 적이 사실 누군가를 지키기 위해 싸우고 있었다는 사실을 알게 됐다. 나는?",

        answers: [

            {
                text: "① 지금까지 봤던 장면들을 머릿속에서 다시 맞춰본다.",
                description: "잠깐… 그럼 처음부터 전부 의미가 달라지잖아?",
                score: {
                    explorer: 2,
                    darkStory: 1
                }
            },

            {
                text: "② 왜 그런 선택까지 할 수밖에 없었는지 듣는다.",
                description: "대체 뭘 지키려고 여기까지 온 건데?",
                score: {
                    darkStory: 2,
                    relationship: 1
                }
            },

            {
                text: "③ 반전보다 이제 무슨 일이 터질지가 더 궁금하다.",
                description: "그래서… 이제 더 큰 게 나온다는 거지?",
                score: {
                    dopamine: 2,
                    explorer: 1
                }
            },

            {
                text: "④ 그 사람과 함께 있던 누군가의 표정이 계속 신경 쓰인다.",
                description: "잠깐… 둘 사이에 무슨 일이 있었던 거 아냐?",
                score: {
                    emotional: 2,
                    relationship: 1
                }
            }

        ]
    },


    {
        question: "이 세계를 구하려면 지금까지 함께한 기억 중 하나를 포기해야 한다.",

        answers: [

            {
                text: "① 기억은 없어져도 다시 쌓으면 된다.",
                description: "잊어버리면 어때. 다시 만나면 되잖아.",
                score: {
                    adventure: 2,
                    hotMain: 1
                }
            },

            {
                text: "② 모두를 살릴 수 있다면 내 기억쯤은 괜찮다.",
                description: "내가 잊는 걸로 끝난다면 싼 대가지.",
                score: {
                    hotMain: 2,
                    darkStory: 1
                }
            },

            {
                text: "③ 기억이 사라지기 전에 딱 한 사람에게 말한다.",
                description: "나중에 내가 널 몰라봐도… 네가 먼저 찾아와.",
                score: {
                    emotional: 2,
                    relationship: 1
                }
            },

            {
                text: "④ 애초에 다른 방법이 없는지부터 의심한다.",
                description: "이런 세계에는 항상 숨겨진 루트가 있거든.",
                score: {
                    explorer: 2,
                    collector: 1
                }
            }

        ]
    },


    {
        question: "최종전을 앞두고 지금까지의 적과는 비교도 안 될 만큼 강한 존재가 나타났다.",

        answers: [

            {
                text: "① 오히려 웃음이 나온다.",
                description: "좋네. 이 정도는 돼야 최종보스지.",
                score: {
                    dopamine: 2,
                    collector: 1
                }
            },

            {
                text: "② 상대를 가만히 바라보다 한마디 한다.",
                description: "그래서… 나보다 강해?",
                score: {
                    collector: 2,
                    dopamine: 1
                }
            },

            {
                text: "③ 저런 존재가 왜 생겨났는지가 더 궁금하다.",
                description: "이 정도 괴물이 이유 없이 나타났을 리 없어.",
                score: {
                    darkStory: 2,
                    explorer: 1
                }
            },

            {
                text: "④ 혼자 싸우겠다는 동료를 붙잡는다.",
                description: "혼자 멋있는 척하지 마. 같이 싸우자.",
                score: {
                    relationship: 2,
                    adventure: 1
                }
            }

        ]
    },


    {
        question: "드디어 최종전. 딱 하나만 가져갈 수 있다면?",

        answers: [

            {
                text: "① 지금보다 훨씬 강해질 수 있는 힘.",
                description: "여기까지 왔는데 마지막에 질 순 없잖아.",
                score: {
                    hotMain: 2,
                    collector: 1
                }
            },

            {
                text: "② 지금까지 함께했던 모든 동료.",
                description: "혼자서는 못 해도, 우리는 할 수 있으니까.",
                score: {
                    adventure: 2,
                    relationship: 1
                }
            },

            {
                text: "③ 이 세계의 모든 비밀이 담긴 진실.",
                description: "끝까지 왔으면 전부 알고 가야지.",
                score: {
                    explorer: 2,
                    darkStory: 1
                }
            },

            {
                text: "④ 아무도 예상하지 못한 마지막 한 수.",
                description: "정석대로 이겨야 한다는 법은 없잖아?",
                score: {
                    dopamine: 2,
                    explorer: 1
                }
            }

        ]
    },


    {
        question: "모든 싸움이 끝났다. 가장 보고 싶은 마지막 장면은?",

        answers: [

            {
                text: "① 세상을 구한 주인공이 아무렇지도 않게 일상으로 돌아간다.",
                description: "그래서 오늘 저녁 뭐 먹지?",
                score: {
                    collector: 2,
                    hotMain: 1
                }
            },

            {
                text: "② 끝까지 서로 마음을 숨기던 두 사람이 조용히 마주 본다.",
                description: "이제는… 말해도 되겠지?",
                score: {
                    emotional: 2,
                    relationship: 1
                }
            },

            {
                text: "③ 많은 것을 잃었지만 마지막에는 조용히 웃는다.",
                description: "그래도… 여기까지 왔으니까.",
                score: {
                    darkStory: 2,
                    hotMain: 1
                }
            },

            {
                text: "④ 소중한 사람들이 아무 일도 없었다는 듯 함께 웃고 있다.",
                description: "전투고 세계 멸망이고 뭐고… 이제 그냥 행복해라.",
                score: {
                    relationship: 2,
                    emotional: 1
                }
            }

        ]
    }

];


/* ========================================
   8가지 결과 데이터
======================================== */

const results = {

    /* ========================================
       1. 뜨거운 주인공형
    ======================================== */

    hotMain: {

        title: "뜨거운 주인공형",

        color: "#E5474A",

        lightColor: "#E5474A3D",

        background: "#FFF5F0",
        icons: [
            "images/icon/type1_1.png",
            "images/icon/type1_2.png",
            "images/icon/type1_3.png"
        ],

        catchphrase:
            "포기하지 않는 주인공은 못 참지!",

        detail:
            "당신은 애니 속 주인공이 성장하고<br>한계를 뛰어넘어 결국 해내는 서사에 끌리는 타입!<br><br>처음엔 약해도 괜찮아...<br>한계를 깨고 다시 일어나는 순간<br>사랑에 빠질 수 밖에... ♡",

        anime: [
            {
                title: "나의 히어로 아카데미아",
                image: "images/anime/myhero.jpg"
            },
            {
                title: "하이큐!!",
                image: "images/anime/haikyuu.jpg"
            },
            {
                title: "Free!",
                image: "images/anime/free.jpg"
            }
        ]
    },


    /* ========================================
       2. 모험 성장형
    ======================================== */

    adventure: {

        title: "모험 성장형",

        color: "#00F359",

        lightColor: "#00F3593D",

        background: "#F7FFF4",

        icons: [
            "images/icon/type2_1.png",
            "images/icon/type2_2.png",
            "images/icon/type2_3.png"
        ],

        catchphrase:
            "새로운 맵 열리면 일단 들어가야 됨",

        detail:
            "당신은 새로운 세계를 돌아다니며<br>동료 만나고 같이 성장하는 서사에 약한 타입!<br><br>처음 보는 마을, 새로운 동료, 숨겨진 장소…<br>모험 시작 브금만 깔려도<br>이미 마음속으로 짐 싸는 중.",

        anime: [
            {
                title: "원피스",
                image: "images/anime/onepiece.jpg"
            },
            {
                title: "헌터×헌터",
                image: "images/anime/hunter.jpg"
            },
            {
                title: "장송의 프리렌",
                image: "images/anime/frieren.jpg"
            }
        ]
    },


    /* ========================================
       3. 핑크빛 로맨스형
    ======================================== */

    emotional: {

        title: "핑크빛 로맨스형",

        color: "#FF88DD",

        lightColor: "#FF88DD3D",

        background: "#FFF4FE",
        
        icons: [
            "images/icon/type3_1.png",
            "images/icon/type3_2.png",
            "images/icon/type3_3.png"
        ],

        catchphrase:
            "둘이 행복하게 연애하는 거 제발 오래 보여줘.",

        detail:
            "당신은 보기만 해도 간질간질한<br>달달한 로맨스와 설레는 연애 서사에 약한 타입!<br><br>썸 타고, 고백하고, 데이트하고…<br>큰 사건 없어도 둘이 꽁냥거리는 것만 보면<br>나는 이미 결혼식 가있음",

        anime: [
            {
                title: "오늘부터 신령님",
                image: "images/anime/kamisama.jpg"
            },
            {
                title: "내세에는 남남이 좋겠어",
                image: "images/anime/raisewa.jpg"
            },
            {
                title: "그 비스크 돌은 사랑을 한다",
                image: "images/anime/bisquedoll.jpg"
            }
        ]
    },


    /* ========================================
       4. 어둠의 서사형
    ======================================== */

    darkStory: {

        title: "어둠의 서사형",

        color: "#D9A0FF",

        lightColor: "#D9A0FF3D",

        background: "#FEFBFF",

        icons: [
            "images/icon/type4_1.png",
            "images/icon/type4_2.png",
            "images/icon/type4_3.png"
        ],

        catchphrase:
            "행복했으면 좋겠는데… 더 굴려주세요.",

        detail:
            "당신은 비극, 희생, 상처 뒤에 숨겨진<br>묵직한 서사에 제대로 꽂히는 타입!<br><br>캐릭터가 무너지면 같이 힘든데<br>그만 보냐고?<br>아뇨. 일단 과거부터 더 주세요.",

        anime: [
            {
                title: "진격의 거인",
                image: "images/anime/aot.jpg"
            },
            {
                title: "약속의 네버랜드",
                image: "images/anime/neverland.jpg"
            },
            {
                title: "신세기 에반게리온",
                image: "images/anime/evangelion.jpg"
            }
        ]
    },


    /* ========================================
       5. 세계관 최강자형
    ======================================== */

    collector: {

        title: "세계관 최강자형",

        color: "#7AEEDF",

        lightColor: "#7AEEDF3D",

        background: "#F3FCFF",

        icons: [
            "images/icon/type5_1.png",
            "images/icon/type5_2.png",
            "images/icon/type5_3.png"
        ],

        catchphrase:
            "얘는 그냥 설정값이 사기임.",

        detail:
            "당신은 압도적인 능력이나 존재감을 가진 캐릭터가<br>세계의 판도를 흔드는 이야기에 끌리는 타입!<br><br>다들 목숨 걸고 싸우고 있는데<br>혼자 너무 평온하다?<br>네. 그 사람 때문에 보는 겁니다.",

        anime: [
            {
                title: "원펀맨",
                image: "images/anime/onepunchman.jpg"
            },
            {
                title: "사이키 쿠스오의 재난",
                image: "images/anime/saiki.jpg"
            },
            {
                title: "마슐",
                image: "images/anime/mashle.jpg"
            }
        ]
    },


    /* ========================================
       6. 세계관 탐험가형
    ======================================== */

    explorer: {

        title: "세계관 탐험가형",

        color: "#87CBFF",

        lightColor: "#87CBFF3D",

        background: "#F5F8FF",

        icons: [
            "images/icon/type6_1.png",
            "images/icon/type6_2.png",
            "images/icon/type6_3.png"
        ],

        catchphrase:
            "잠깐. 이거 1화에 나온 그거 아니야?",

        detail:
            "당신은 스쳐 지나간 떡밥 하나도<br>절대 그냥 넘기지 못하는 타입!<br><br>정신 차려보면 세계관 연표 보고 있음.<br>본편보다 나무위키 보는 시간이 더 길 수도...",

        anime: [
            {
                title: "강철의 연금술사",
                image: "images/anime/fma.jpg"
            },
            {
                title: "마기",
                image: "images/anime/magi.jpg"
            },
            {
                title: "아픈 건 싫으니까 방어력에 올인합니다",
                image: "images/anime/defense.jpg"
            }
        ]
    },


    /* ========================================
       7. 관계성 과몰입형
    ======================================== */

    relationship: {

        title: "관계성 과몰입형",

        color: "#FFB7B8",

        lightColor: "#FFB7B83D",

        background: "#FFFAF9",

        icons: [
            "images/icon/type7_1.png",
            "images/icon/type7_2.png",
            "images/icon/type7_3.png"
        ],

        catchphrase:
            "그래서 둘이 무슨 사이인데. 정확히 말해.",

        detail:
            "당신은 사건보다 캐릭터 둘 사이에 흐르는<br>이상한 기류를 기가 막히게 잡아내는 타입!<br><br>호칭 하나 바뀜 → 긴장<br>눈 한번 마주침 → 난리<br>공식이 한 숟갈 주면 혼자 한 솥 끓여먹음.",

        anime: [
            {
                title: "은혼",
                image: "images/anime/gintama.jpg"
            },
            {
                title: "지박소년 하나코군",
                image: "images/anime/hanakokun.jpg"
            },
            {
                title: "암살교실",
                image: "images/anime/ansatsu.jpg"
            }
        ]
    },


    /* ========================================
       8. 짜릿한 도파민형
    ======================================== */

    dopamine: {

        title: "짜릿한 도파민형",

        color: "#F2FF38",

        lightColor: "#F2FF383D",

        background: "#FFFFF9",

        icons: [
            "images/icon/type8_1.png",
            "images/icon/type8_2.png",
            "images/icon/type8_3.png"
        ],

        catchphrase:
            "아니 지금 여기서 끊는다고???",

        detail:
            "당신은 반전, 전투, 충격 전개처럼<br>한 방 세게 오는 작품에 약한 타입!<br><br>마지막 30초에 미친 떡밥 하나 던진다?<br>다음 화 버튼 이미 누르고 있음.",

        anime: [
            {
                title: "데스노트",
                image: "images/anime/deathnote.jpg"
            },
            {
                title: "카케구루이",
                image: "images/anime/kakegurui.jpg"
            },
            {
                title: "괴수 8호",
                image: "images/anime/kaiju8.jpg"
            }
        ]
    }

};


/* ========================================
   점수
======================================== */

let scores = {};

const resultKeys = [
    "hotMain",
    "adventure",
    "emotional",
    "darkStory",
    "collector",
    "explorer",
    "relationship",
    "dopamine"
];


function resetScores() {

    scores = {};

    resultKeys.forEach(key => {
        scores[key] = 0;
    });

}


/* ========================================
   현재 질문
======================================== */

let currentQuestion = 0;


/* ========================================
   DOM
======================================== */

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const resultCard =
    document.getElementById("result-card");

const startBtn =
    document.getElementById("start-btn");

const restartBtn =
    document.getElementById("restart-btn");

const saveBtn =
    document.getElementById("save-btn");

const questionNumber =
    document.getElementById("question-number");

const progressText =
    document.getElementById("progress-text");

const progress =
    document.getElementById("progress");

const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const resultTitle =
    document.getElementById("result-title");

const resultCatchphrase =
    document.getElementById("result-catchphrase");

const resultDetail =
    document.getElementById("result-detail");

const animeList =
    document.getElementById("anime-list");

const resultIcon1 =
    document.getElementById("result-icon-1");

const resultIcon2 =
    document.getElementById("result-icon-2");

const resultIcon3 =
    document.getElementById("result-icon-3");


/* ========================================
   화면 전환
======================================== */

function showScreen(screen) {

    document.querySelectorAll(".screen")
        .forEach(item => {

            item.classList.remove("active");

        });


    screen.classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ========================================
   테스트 시작
======================================== */

startBtn.addEventListener("click", () => {

    currentQuestion = 0;

    resetScores();

    showScreen(quizScreen);

    showQuestion();

});


/* ========================================
   질문 출력
======================================== */

function showQuestion() {

    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `Q${currentQuestion + 1}`;


    progressText.textContent =
        `${currentQuestion + 1} / ${questions.length}`;


    progress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    question.innerHTML = 
        current.question;


    answers.innerHTML = "";


    current.answers.forEach(answer => {

    const button =
        document.createElement("button");


    button.className =
        "answer-btn";


    button.type =
        "button";


    button.innerHTML = `
        <span class="answer-text">
            ${answer.text}
        </span>

        <span class="answer-description">
            "${answer.description}"
        </span>
    `;


    button.addEventListener("click", () => {

        selectAnswer(answer);

    });


    answers.appendChild(button);

});

}


/* ========================================
   답변 선택
======================================== */

function selectAnswer(answer) {

    Object.keys(answer.score)
        .forEach(key => {

            scores[key] += answer.score[key];

        });


    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

}


/* ========================================
   결과 계산
======================================== */

function calculateResult() {

    let winner =
        resultKeys[0];


    resultKeys.forEach(key => {

        if (scores[key] > scores[winner]) {

            winner = key;

        }

    });


    return results[winner];

}


/* ========================================
   결과 화면 출력
======================================== */

function showResult() {

    const result =
        calculateResult();


    /* =========================
       기존 유형 클래스 제거
    ========================== */

    resultCard.classList.remove(
        "hot-main",
        "adventure",
        "romance",
        "dark-story",
        "collector",
        "explorer",
        "relationship",
        "dopamine"
    );


    /* =========================
       결과 유형 클래스
    ========================== */

    const resultClassMap = {

        "뜨거운 주인공형": "hot-main",

        "모험 성장형": "adventure",

        "핑크빛 로맨스형": "romance",

        "어둠의 서사형": "dark-story",

        "세계관 최강자형": "collector",

        "세계관 탐험가형": "explorer",

        "관계성 과몰입형": "relationship",

        "짜릿한 도파민형": "dopamine"

    };


    resultCard.classList.add(
        resultClassMap[result.title]
    );


    /* =========================
       CSS 변수
    ========================== */

    resultCard.style.setProperty(
        "--main-color",
        result.color
    );


    resultCard.style.setProperty(
        "--light-color",
        result.lightColor
    );


    resultCard.style.setProperty(
        "--very-light-color",
        result.background
    );


    resultCard.style.setProperty(
        "--border-color",
        result.color
    );


    /* =========================
       결과 텍스트
    ========================== */

    resultTitle.textContent =
        result.title;


    resultCatchphrase.textContent =
        `"${result.catchphrase}"`;


    resultDetail.innerHTML =
        result.detail;

    /* =========================
    결과 장식 아이콘
    ========================= */

    resultIcon1.src = result.icons[0];
    resultIcon2.src = result.icons[1];
    resultIcon3.src = result.icons[2];

    /* =========================
       추천 애니
    ========================== */

    animeList.innerHTML = "";


    result.anime.forEach(anime => {

        const card =
            document.createElement("div");


        card.className =
            "anime-card";


        card.innerHTML = `

            <img
                src="${anime.image}"
                alt="${anime.title}"
            >

            <div class="anime-info">

                <h3>${anime.title}</h3>

            </div>

        `;


        animeList.appendChild(card);

    });


    /* =========================
       결과 화면 표시
    ========================== */

    showScreen(resultScreen);

}


/* ========================================
   이미지 저장
======================================== */

saveBtn.addEventListener("click", async () => {

    if (typeof html2canvas === "undefined") {

        alert(
            "이미지 저장 기능을 불러오지 못했습니다."
        );

        return;

    }


    saveBtn.classList.add("saving");

    saveBtn.textContent =
        "이미지 저장 중...";


    const resultActions =
        document.querySelector(".result-actions");


    /*
        버튼 숨기기
    */

    resultActions.style.display =
        "none";


    resultScreen.classList.add(
        "capturing"
    );


    try {

        const canvas =
            await html2canvas(
                resultCard,
                {
                    backgroundColor: null,

                    scale: 2,

                    useCORS: true,

                    logging: false
                }
            );


        const image =
            canvas.toDataURL("image/png");


        const link =
            document.createElement("a");


        const title =
            resultTitle.textContent.trim();


        link.download =
            `애니유형_${title}.png`;


        link.href =
            image;


        link.click();


    } catch (error) {

        console.error(
            "이미지 저장 오류:",
            error
        );


        alert(
            "이미지를 저장하는 중 문제가 발생했습니다."
        );

    }


    resultActions.style.display =
        "";


    resultScreen.classList.remove(
        "capturing"
    );


    saveBtn.classList.remove(
        "saving"
    );


    saveBtn.textContent =
        "이미지 저장하기";

});


/* ========================================
   다시 테스트
======================================== */

restartBtn.addEventListener("click", () => {

    currentQuestion = 0;

    resetScores();

    showScreen(startScreen);

});


/* ========================================
   초기화
======================================== */

resetScores();