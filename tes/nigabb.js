const questions = [
    {
        question: "Manakah faktor yang TIDAK memengaruhi laju reaksi?",
        options: ["Suhu", "Konsentrasi", "Warna zat", "Luas permukaan"],
        correct: 2,
        explanation: "Warna zat tidak memengaruhi laju reaksi. Faktor utama: konsentrasi, suhu, katalis, dan luas permukaan."
    },
    {
        question: "Serbuk kayu lebih cepat terbakar karena...",
        options: ["Meningkatkan suhu", "Memperbesar luas permukaan", "Menambah konsentrasi", "Mengurangi energi aktivasi"],
        correct: 1,
        explanation: "Luas permukaan besar meningkatkan frekuensi tumbukan partikel."
    },
     {
                question: "Jika konsentrasi dinaikkan 2x dan laju reaksi menjadi 4x, orde reaksi terhadap zat tersebut adalah...",
                options: ["0", "1", "2", "3"],
                correct: 2,
                explanation: "Hubungan laju (r) dan konsentrasi: r = k[A]^n. Jika [A] 2x → r 4x, maka n = 2."
            },
            {
                question: "Satuan laju reaksi yang benar adalah...",
                options: ["mol/L", "mol/s", "mol.L/s", "mol/(L.s)"],
                correct: 3,
                explanation: "Laju reaksi = perubahan konsentrasi per satuan waktu → mol/(L.s)"
            },
            {
                question: "Pengaruh suhu terhadap laju reaksi disebabkan oleh...",
                options: ["Meningkatkan energi aktivasi", "Meningkatkan energi kinetik partikel", "Mengubah orde reaksi", "Memperbesar tekanan"],
                correct: 1,
                explanation: "Suhu meningkatkan energi kinetik partikel sehingga tumbukan lebih efektif."
            },
            {
                question: "Enzim dalam tubuh berfungsi sebagai...",
                options: ["Inhibitor", "Katalis", "Pereaksi", "Produk"],
                correct: 1,
                explanation: "Enzim adalah katalis biologis yang mempercepat reaksi metabolisme."
            },
            {
                question: "Pada reaksi 2A + B → C, jika [A] dinaikkan 2x dan [B] tetap, laju reaksi menjadi 2x. Orde reaksi terhadap A adalah...",
                options: ["0", "1", "2", "3"],
                correct: 0,
                explanation: "r ~ [A]^0 karena perubahan [A] tidak mempengaruhi laju reaksi."
            },
            {
                question: "Faktor yang mempengaruhi frekuensi tumbukan efektif adalah...",
                options: ["Wadah reaksi", "Warna zat", "Konsentrasi", "Jenis katalis"],
                correct: 2,
                explanation: "Konsentrasi yang lebih tinggi meningkatkan frekuensi tumbukan partikel."
            },
            {
                question: "Graﬁk hubungan suhu dengan laju reaksi berbentuk...",
                options: ["Linear", "Eksponensial", "Logaritmik", "Sinusoidal"],
                correct: 1,
                explanation: "Kenaikan suhu meningkatkan laju reaksi secara eksponensial (persamaan Arrhenius)."
            },
            {
                question: "Pada sistem kesetimbangan, penambahan katalis akan...",
                options: ["Menggeser kesetimbangan", "Mempercepat kedua arah reaksi", "Mengubah nilai Kc", "Meningkatkan produk"],
                correct: 1,
                explanation: "Katalis mempercepat tercapainya kesetimbangan dengan mempercepat reaksi maju dan mundur."
            },
            {
                question: "Zat yang memperlambat laju reaksi disebut...",
                options: ["Katalis", "Inhibitor", "Enzim", "Aktivator"],
                correct: 1,
                explanation: "Inhibitor adalah zat yang memperlambat laju reaksi dengan meningkatkan energi aktivasi."
            },
            {
                question: "Persamaan laju reaksi untuk reaksi A + B → C adalah r = k[A]. Orde reaksi total adalah...",
                options: ["0", "1", "2", "3"],
                correct: 1,
                explanation: "Orde total = jumlah orde semua pereaksi = 1 (hanya orde A)"
            },
            {
                question: "Efek kenaikan tekanan pada reaksi gas adalah...",
                options: ["Mengurangi tumbukan", "Meningkatkan konsentrasi", "Menurunkan suhu", "Mengubah orde reaksi"],
                correct: 1,
                explanation: "Tekanan tinggi = volume kecil → konsentrasi meningkat → laju reaksi meningkat."
            },
            {
                question: "Energi aktivasi adalah...",
                options: ["Energi yang dibebaskan", "Energi minimum untuk memulai reaksi", "Energi hasil reaksi", "Energi termal lingkungan"],
                correct: 1,
                explanation: "Energi aktivasi adalah energi minimum yang diperlukan partikel untuk memulai reaksi."
            }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').innerHTML = `<h3>Soal ${currentQuestion+1}: ${q.question}</h3>`;
    
    let optionsHTML = '';
    q.options.forEach((opt, index) => {
        optionsHTML += `<button onclick="checkAnswer(${index})">${opt}</button>`;
    });
    document.getElementById('options').innerHTML = optionsHTML;
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    if (selected === q.correct) {
        score++;
        document.getElementById('feedback').innerHTML = "✅ Jawaban Benar, keren banget!";
        document.getElementById('feedback').classList.add('correct');
    } else {
        document.getElementById('feedback').innerHTML = "❌ Jawaban Salah awokawokawokawoawok!";
        document.getElementById('feedback').classList.add('wrong');
    }
    
    document.getElementById('explanation').innerHTML = `<p><strong>Penjelasan:</strong> ${q.explanation}</p>`;
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showFinalScore();
        }
    }, 2000);
}

function showFinalScore() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('score-screen').classList.remove('hidden');
    document.getElementById('score-screen').innerHTML = `
        <h2>Skor Akhir: ${score}/${questions.length}</h2>
        <button onclick="location.reload()">Ulangi Kuis</button>
    `;
}