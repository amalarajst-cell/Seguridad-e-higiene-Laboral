// --- COURSE PROGRESS STATE ---
const courseState = {
    student: {
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        curso: ""
    },
    progress: {
        cap1: false,
        cap2: false,
        cap3: false,
        cap4: false,
        cap5: false,
        cap6: false,
        act1: false,
        act2: false,
        act3: false,
        act4: false
    },
    // Activity 1 (Acción vs Condición) State
    act1Game: {
        currentIndex: 0,
        score: 0,
        completed: false,
        items: [
            {
                text: "Cruzar un semáforo con luz roja para acelerar la entrega",
                icon: "🚦",
                type: "accion",
                explanation: "Es una ACCIÓN INSEGURA. Es un comportamiento humano temerario que viola las leyes de tránsito y arriesga la vida."
            },
            {
                text: "Transitar sobre asfalto con pozos y grietas profundas",
                icon: "🕳️",
                type: "condicion",
                explanation: "Es una CONDICIÓN INSEGURA. Depende del estado de la calzada, ajeno a la conducta directa del conductor, pero exige reducir la velocidad."
            },
            {
                text: "Manejar la motocicleta usando el teléfono celular",
                icon: "📱",
                type: "accion",
                explanation: "Es una ACCIÓN INSEGURA. Manipular pantallas desvía la vista y la atención del tránsito, multiplicando la probabilidad de choque."
            },
            {
                text: "Lluvia torrencial que genera acumulación de agua y aceite",
                icon: "🌧️",
                type: "condicion",
                explanation: "Es una CONDICIÓN INSEGURA. Las inclemencias climáticas reducen severamente la tracción física de las cubiertas y la visibilidad."
            },
            {
                text: "Circular con los espejos retrovisores sueltos u rotos",
                icon: "🪞",
                type: "condicion",
                explanation: "Es una CONDICIÓN INSEGURA. Es una falla física y de mantenimiento en la máquina de trabajo (motocicleta)."
            },
            {
                text: "Conducir cansado y con pocas horas de sueño",
                icon: "🥱",
                type: "accion",
                explanation: "Es una ACCIÓN INSEGURA. Subirse a un vehículo sin estar en condiciones psicofísicas adecuadas disminuye los reflejos y el tiempo de reacción."
            }
        ]
    },
    // Activity 2 (Inspección Moto) State
    act2Game: {
        inspected: {
            ruedas: null, // 'correct' or 'incorrect'
            luces: null,
            espejos: null,
            cadena: null,
            frenos: null
        },
        data: {
            ruedas: {
                title: "Inspección de Ruedas y Neumáticos",
                desc: "Al revisar el neumático trasero, notas que el dibujo en el centro está completamente liso y gastado, además de estar bajo de presión.",
                isApto: false,
                explanation: "Un neumático sin dibujo ni presión óptima pierde todo el agarre, especialmente en asfalto húmedo, aumentando el riesgo de patinadas."
            },
            luces: {
                title: "Inspección del Sistema Lumínico",
                desc: "Verificas la luz de posición, la luz alta/baja delantera y la luz de stop trasera al presionar las manijas de freno. Todas encienden correctamente.",
                isApto: true,
                explanation: "Las luces en buen estado aseguran que puedas ver el camino y, lo más importante, ser visto por el resto de los conductores."
            },
            espejos: {
                title: "Inspección de Espejos Retrovisores",
                desc: "El espejo derecho está bien sujeto, pero el espejo izquierdo está flojo, descentrado y apunta directamente hacia abajo, impidiendo ver el carril lateral.",
                isApto: false,
                explanation: "Los espejos deben estar fijos y regulados antes de arrancar. Circular con puntos ciegos laterales por espejos flojos es extremadamente peligroso."
            },
            cadena: {
                title: "Inspección de Transmisión (Cadena)",
                desc: "La cadena presenta una tensión correcta (holgura de 2 a 3 cm), no tiene eslabones flojos y se encuentra correctamente lubricada.",
                isApto: true,
                explanation: "Una cadena bien mantenida evita que se corte o se salga en plena marcha, lo cual bloquearía la rueda trasera provocando una caída segura."
            },
            frenos: {
                title: "Inspección del Sistema de Frenos",
                desc: "Al presionar la manija del freno delantero, esta se desplaza por completo hasta tocar el manillar sin ejercer resistencia, lo que indica falta de presión o líquido.",
                isApto: false,
                explanation: "No contar con freno delantero en condiciones aptas anula el 70% de tu capacidad de frenado. Requiere reparación urgente."
            }
        },
        currentInspectPart: null
    },
    // Activity 3 (Viste al Motociclista) State
    act3Game: {
        equipped: {
            casco: false,
            gorra: false,
            campera: false,
            remera: false,
            guantes: false,
            ojotas: false,
            calzado: false,
            reflectivo: false
        }
    },
    // Quiz data
    quiz: {
        questions: [
            {
                question: "1. ¿Cuál de las siguientes situaciones representa una CONDICIÓN insegura en la vía pública?",
                options: [
                    "A. Exceder el límite de velocidad por apuro en la entrega.",
                    "B. Conducir realizando zigzagueos peligrosos entre carriles.",
                    "C. Un tramo de asfalto con pozos profundos y derrame de aceite."
                ],
                correct: 2,
                explanation: "Los pozos y derrames de aceite son fallas del entorno (Condiciones Inseguras), las otras opciones son conductas humanas (Acciones Inseguras)."
            },
            {
                question: "2. Ante un siniestro vial con un motociclista caído, la regla fundamental de primeros auxilios es:",
                options: [
                    "A. Quitarle el casco de inmediato para permitirle respirar libremente.",
                    "B. Aplicar el protocolo P.A.S. (Proteger, Avisar, Socorrer) y NUNCA quitarle el casco.",
                    "C. Sentar al herido y ofrecerle un vaso de agua para calmarlo."
                ],
                correct: 1,
                explanation: "El casco NUNCA debe retirarse a menos que sea por personal de emergencia, ya que puede agravar lesiones cervicales severas. Se aplica el P.A.S."
            },
            {
                question: "3. ¿Cuándo se debe realizar la rutina de inspección (checklist) de seguridad de la motocicleta?",
                options: [
                    "A. Únicamente cuando la moto empiece a fallar o haga ruidos extraños.",
                    "B. Todos los días antes de encender el motor e iniciar la jornada laboral.",
                    "C. Una vez al mes o cuando se deba realizar el cambio de aceite."
                ],
                correct: 1,
                explanation: "La inspección diaria preventiva asegura que detectes fallas fatales (como falta de frenos o neumáticos dañados) antes de estar en peligro en el tránsito."
            },
            {
                question: "4. ¿Por qué se desaconseja el uso de zapatillas de tela liviana o sandalias para trabajar en moto?",
                options: [
                    "A. Porque se dañan rápidamente con los cambios de marcha de la moto.",
                    "B. Porque no protegen el pie de quemaduras graves con el caño de escape, golpes e raspaduras en caídas.",
                    "C. Solo por una cuestión de higiene y presentación personal."
                ],
                correct: 1,
                explanation: "El calzado cerrado y resistente actúa como EPP vital, evitando que la fricción del asfalto o la alta temperatura del escape provoquen lesiones de gravedad."
            },
            {
                question: "5. ¿Cuál es la forma más segura de transportar la mochila de delivery o cargas pesadas en la moto?",
                options: [
                    "A. Sujeta firmemente al portaequipajes trasero o bien ajustada al cuerpo, manteniendo el peso centrado y lo más bajo posible.",
                    "B. Suelta sobre un solo hombro para poder quitársela rápidamente al entregar.",
                    "C. Colgada en el manillar o espejos para equilibrar el peso delantero."
                ],
                correct: 0,
                explanation: "Llevar la carga fija y centrada mantiene la estabilidad y el centro de gravedad del vehículo. Colgarla del manillar o llevarla floja genera desequilibrio y peligro de caída."
            }
        ]
    }
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Setup Navigation / Login Controls
    const loginModal = document.getElementById("loginModal");
    const openLoginBtn = document.getElementById("nav-login-btn");
    const closeLoginBtn = document.getElementById("closeLoginBtn");
    const heroStartBtn = document.getElementById("hero-start-btn");
    const loginForm = document.getElementById("loginForm");

    const openModal = () => {
        loginModal.classList.add("active");
    };

    const closeModal = () => {
        loginModal.classList.remove("active");
    };

    if (openLoginBtn) openLoginBtn.addEventListener("click", openModal);
    if (closeLoginBtn) closeLoginBtn.addEventListener("click", closeModal);
    if (heroStartBtn) heroStartBtn.addEventListener("click", openModal);

    // Form submission
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Set student data
            courseState.student.nombre = document.getElementById("loginNombre").value.trim();
            courseState.student.apellido = document.getElementById("loginApellido").value.trim();
            courseState.student.dni = document.getElementById("loginDni").value.trim();
            courseState.student.email = document.getElementById("loginEmail").value.trim();
            courseState.student.curso = document.getElementById("loginCurso").value;

            // Update UI with student details
            document.getElementById("nav-student-name").innerText = `${courseState.student.nombre} ${courseState.student.apellido}`;
            document.getElementById("nav-student-display").style.display = "block";
            document.getElementById("nav-login-btn").style.display = "none";
            
            // Fill sidebar details
            document.getElementById("user-display-name").innerText = `${courseState.student.nombre} ${courseState.student.apellido}`.toUpperCase();
            document.getElementById("user-display-dni").innerText = formatDni(courseState.student.dni);
            document.getElementById("user-display-email").innerText = courseState.student.email;
            document.getElementById("sidebar-user-info").style.display = "block";

            // Prefill certificate DNI and Name
            document.getElementById("student-name-input").value = `${courseState.student.nombre} ${courseState.student.apellido}`;

            // Hide Hero, Show Main Course Dashboard
            document.getElementById("app-hero").style.display = "none";
            document.getElementById("main-course-container").style.display = "block";
            
            closeModal();
            updateProgressUI();
            
            // Alert welcome toast
            showToast(`¡Bienvenido al curso, ${courseState.student.nombre}!`, true);
        });
    }

    // Load quiz questions
    initQuiz();
    updateProgressUI();
});

// --- HELPER DNI FORMATTER ---
function formatDni(numString) {
    if (!numString) return "-";
    const cleaned = ('' + numString).replace(/\D/g, '');
    return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// --- CHAPTER ACCORDION TOGGLER ---
function toggleChapter(chapterId) {
    const chapterElement = document.getElementById(chapterId);
    if (!chapterElement) return;

    const isActive = chapterElement.classList.contains("active");
    
    // Close other chapters (accordion behavior)
    document.querySelectorAll(".chapter").forEach(cap => {
        cap.classList.remove("active");
    });

    if (!isActive) {
        chapterElement.classList.add("active");
        
        // Mark chapter as read/completed
        courseState.progress[chapterId] = true;
        updateProgressUI();
        
        // Smooth scroll to chapter header
        setTimeout(() => {
            chapterElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 150);
    }
}

// --- UPDATE PROGRESS UI ---
function updateProgressUI() {
    let completedCount = 0;
    const totalItems = Object.keys(courseState.progress).length; // 10 items (6 caps + 4 activities)

    // Loop through progress states
    for (const key in courseState.progress) {
        const isCompleted = courseState.progress[key];
        const statusItem = document.getElementById(`chk-${key}`);
        
        if (statusItem) {
            if (isCompleted) {
                statusItem.className = "completed";
            } else {
                statusItem.className = "pending";
            }
        }

        if (isCompleted) {
            completedCount++;
        }
    }

    // Calculate percentage
    const percentage = Math.round((completedCount / totalItems) * 100);
    
    // Update progress bars & text
    const progressBar = document.getElementById("main-progress-bar");
    const progressText = document.getElementById("progress-percentage-text");
    
    if (progressBar && progressText) {
        progressBar.style.width = `${percentage}%`;
        progressText.innerText = `${percentage}%`;
    }
}

// --- TOAST FEEDBACK WIDGET ---
function showToast(message, isCorrect) {
    const toast = document.getElementById("sort-feedback");
    if (!toast) return;

    toast.innerText = message;
    toast.className = `feedback-toast show ${isCorrect ? 'correct' : 'incorrect'}`;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
}

// --- ACTIVIDAD 1: CARD SORTING GAME ---
function loadSortCard() {
    const game = courseState.act1Game;
    
    if (game.currentIndex >= game.items.length) {
        // Game Finished
        document.getElementById("sort-card").innerHTML = `
            <div class="card-content-inner">
                <span class="sort-icon">🏆</span>
                <h3 style="color: var(--gcba-yellow);">¡Actividad Completada!</h3>
                <p>Has clasificado los riesgos correctamente. Lograste un puntaje de ${game.score} / ${game.items.length}.</p>
            </div>
        `;
        markActivityCompleted("act1");
        return;
    }

    const currentCard = game.items[game.currentIndex];
    
    // Update card displays
    document.getElementById("sort-card-icon").innerText = currentCard.icon;
    document.getElementById("sort-card-text").innerText = currentCard.text;
    
    // Update progress displays
    document.getElementById("sort-progress").innerText = `${game.currentIndex + 1} / ${game.items.length}`;
    document.getElementById("sort-score").innerText = game.score;
}

function checkSortSelection(selectedType) {
    const game = courseState.act1Game;
    if (game.currentIndex >= game.items.length) return;

    const currentCard = game.items[game.currentIndex];
    const isCorrect = selectedType === currentCard.type;

    if (isCorrect) {
        game.score++;
        showToast(`¡Correcto! ${currentCard.explanation}`, true);
    } else {
        showToast(`Incorrecto. ${currentCard.explanation}`, false);
    }

    // Advance cards
    game.currentIndex++;
    
    setTimeout(() => {
        loadSortCard();
    }, 1500);
}

// --- ACTIVIDAD 2: MOTO INSPECTION CHECKLIST ---
function openInspectionModal(partKey) {
    const game = courseState.act2Game;
    const partData = game.data[partKey];
    if (!partData) return;
    
    game.currentInspectPart = partKey;
    
    document.getElementById("modal-part-title").innerText = partData.title;
    document.getElementById("modal-part-desc").innerText = partData.desc;
    
    const modal = document.getElementById("inspection-modal");
    modal.classList.add("active");
}

function resolveInspection(selectedApto) {
    const game = courseState.act2Game;
    const partKey = game.currentInspectPart;
    const partData = game.data[partKey];
    const modal = document.getElementById("inspection-modal");
    
    if (!partKey || !partData) return;

    const isCorrect = selectedApto === partData.isApto;
    
    const targetDot = document.getElementById(`dot-${partKey}`);
    const listElement = document.getElementById(`list-ins-${partKey}`);
    
    if (partData.isApto) {
        if (selectedApto) {
            targetDot.className = "moto-target-dot checked";
            listElement.className = "ok";
            listElement.querySelector("span").innerText = "Apto";
            showToast("¡Correcto! Esta parte está apta para circular.", true);
            game.inspected[partKey] = "ok";
        } else {
            showToast("Incorrecto. Esta parte no tiene fallas de riesgo.", false);
            game.inspected[partKey] = "pending";
        }
    } else {
        if (!selectedApto) {
            targetDot.className = "moto-target-dot issue-found";
            listElement.className = "reparado";
            listElement.querySelector("span").innerText = "No Apto";
            showToast(`¡Correcto! ${partData.explanation}`, true);
            game.inspected[partKey] = "reparado";
        } else {
            showToast(`Incorrecto. ¡Riesgo detectado! ${partData.explanation}`, false);
            game.inspected[partKey] = "pending";
        }
    }

    modal.classList.remove("active");
    game.currentInspectPart = null;

    checkInspectionGameCompletion();
}

function checkInspectionGameCompletion() {
    const game = courseState.act2Game;
    let completedCount = 0;
    const totalCount = Object.keys(game.inspected).length;

    for (const key in game.inspected) {
        if (game.inspected[key] !== null && game.inspected[key] !== "pending") {
            completedCount++;
        }
    }

    document.getElementById("ins-completed-count").innerText = `${completedCount} / ${totalCount}`;

    if (completedCount === totalCount) {
        markActivityCompleted("act2");
        showToast("¡Inspección completa! Moto revisada profesionalmente antes del reparto.", true);
    }
}

// --- ACTIVIDAD 3: EPP WARDROBE AVATAR ---
function toggleEPPEquipment(itemKey) {
    const game = courseState.act3Game;
    const itemButton = document.getElementById(`item-${itemKey}`);
    const feedbackText = document.getElementById("avatar-feedback-text");
    
    game.equipped[itemKey] = !game.equipped[itemKey];

    if (game.equipped[itemKey]) {
        itemButton.classList.add("equipped");
        
        // Handle unsafe EPP selections
        if (itemKey === "gorra") {
            feedbackText.innerHTML = "<span class='text-danger'>❌ ¡Gorra incorrecta! No protege cráneo ante impactos. Requiere casco integral homologado.</span>";
            setTimeout(() => {
                game.equipped[itemKey] = false;
                itemButton.classList.remove("equipped");
            }, 2000);
            return;
        }
        if (itemKey === "remera") {
            feedbackText.innerHTML = "<span class='text-danger'>❌ ¡Remera manga corta peligrosa! Brazos expuestos a quemaduras extremas por fricción.</span>";
            setTimeout(() => {
                game.equipped[itemKey] = false;
                itemButton.classList.remove("equipped");
            }, 2000);
            return;
        }
        if (itemKey === "ojotas") {
            feedbackText.innerHTML = "<span class='text-danger'>❌ ¡Ojotas prohibidas! Riesgo extremo de quemaduras graves con caño de escape caliente y descalce.</span>";
            setTimeout(() => {
                game.equipped[itemKey] = false;
                itemButton.classList.remove("equipped");
            }, 2000);
            return;
        }

        // Show SVG overlays for safe EPP items
        if (itemKey === "casco") {
            document.getElementById("eq-casco").style.display = "block";
            feedbackText.innerHTML = "<span class='text-success'>✅ Casco colocado. Protege mandíbula y cráneo. ¡Debe ir abrochado!</span>";
        }
        if (itemKey === "campera") {
            document.getElementById("eq-campera").style.display = "block";
            feedbackText.innerHTML = "<span class='text-success'>✅ Campera protectora colocada. Refuerza codos y espina.</span>";
        }
        if (itemKey === "guantes") {
            document.getElementById("eq-guantes").style.display = "block";
            feedbackText.innerHTML = "<span class='text-success'>✅ Guantes colocados. Evitan raspaduras y protegen nudillos en caídas.</span>";
        }
        if (itemKey === "calzado") {
            document.getElementById("eq-calzado").style.display = "block";
            feedbackText.innerHTML = "<span class='text-success'>✅ Calzado cerrado colocado. Evita esguinces y quemaduras con escape.</span>";
        }
        if (itemKey === "reflectivo") {
            document.getElementById("eq-reflective-vest").style.display = "block";
            feedbackText.innerHTML = "<span class='text-success'>✅ Chaleco reflectivo colocado. Aumenta tu visibilidad.</span>";
        }
    } else {
        itemButton.classList.remove("equipped");
        
        if (itemKey === "casco") document.getElementById("eq-casco").style.display = "none";
        if (itemKey === "campera") document.getElementById("eq-campera").style.display = "none";
        if (itemKey === "guantes") document.getElementById("eq-guantes").style.display = "none";
        if (itemKey === "calzado") document.getElementById("eq-calzado").style.display = "none";
        if (itemKey === "reflectivo") document.getElementById("eq-reflective-vest").style.display = "none";
        
        feedbackText.innerText = "Prenda removida.";
    }

    checkEPPGameCompletion();
}

function checkEPPGameCompletion() {
    const game = courseState.act3Game;
    const required = ["casco", "campera", "guantes", "calzado", "reflectivo"];
    const hasRequired = required.every(key => game.equipped[key]);
    const hasUnsafe = game.equipped.gorra || game.equipped.remera || game.equipped.ojotas;
    
    if (hasRequired && !hasUnsafe) {
        markActivityCompleted("act3");
        document.getElementById("avatar-feedback-text").innerHTML = "<strong class='text-success'>🎉 ¡Excelente! Motociclista 100% equipado y seguro para circular en calle.</strong>";
    }
}

// --- EVALUACION: QUIZ LOGIC ---
function initQuiz() {
    const quizQuestionsBox = document.getElementById("quiz-questions-box");
    if (!quizQuestionsBox) return;

    quizQuestionsBox.innerHTML = "";
    
    courseState.quiz.questions.forEach((q, qIndex) => {
        const item = document.createElement("div");
        item.className = "quiz-question-item";
        
        const title = document.createElement("h4");
        title.className = "quiz-question-text";
        title.innerText = q.question;
        item.appendChild(title);
        
        const optionsList = document.createElement("div");
        optionsList.className = "quiz-options-list";
        
        q.options.forEach((opt, optIndex) => {
            const label = document.createElement("label");
            label.className = "quiz-option-label";
            label.id = `q${qIndex}-opt${optIndex}-label`;
            
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question-${qIndex}`;
            radio.className = "quiz-option-input";
            radio.value = optIndex;
            radio.onclick = () => selectOption(qIndex, optIndex);
            
            label.appendChild(radio);
            
            const span = document.createElement("span");
            span.innerText = opt;
            label.appendChild(span);
            
            optionsList.appendChild(label);
        });
        
        item.appendChild(optionsList);
        quizQuestionsBox.appendChild(item);
    });
}

function selectOption(qIndex, optIndex) {
    const question = courseState.quiz.questions[qIndex];
    question.options.forEach((_, idx) => {
        const lbl = document.getElementById(`q${qIndex}-opt${idx}-label`);
        if (lbl) lbl.classList.remove("selected");
    });

    const selectedLabel = document.getElementById(`q${qIndex}-opt${optIndex}-label`);
    if (selectedLabel) selectedLabel.classList.add("selected");
}

function submitQuiz() {
    const questions = courseState.quiz.questions;
    let score = 0;
    let unanswered = false;

    questions.forEach((q, qIndex) => {
        const checkedInput = document.querySelector(`input[name="question-${qIndex}"]:checked`);
        if (!checkedInput) {
            unanswered = true;
            return;
        }

        const selectedIndex = parseInt(checkedInput.value);
        const correctIndex = q.correct;
        
        // Clear old states
        q.options.forEach((_, optIndex) => {
            const lbl = document.getElementById(`q${qIndex}-opt${optIndex}-label`);
            if (lbl) lbl.classList.remove("correct-ans", "wrong-ans");
        });

        const selectedLabel = document.getElementById(`q${qIndex}-opt${selectedIndex}-label`);
        const correctLabel = document.getElementById(`q${qIndex}-opt${correctIndex}-label`);

        if (selectedIndex === correctIndex) {
            score++;
            if (selectedLabel) selectedLabel.classList.add("correct-ans");
        } else {
            if (selectedLabel) selectedLabel.classList.add("wrong-ans");
            if (correctLabel) correctLabel.classList.add("correct-ans");
        }
    });

    if (unanswered) {
        alert("Por favor, contesta todas las preguntas de la evaluación para calificar.");
        return;
    }

    // Hide Quiz box, Show Results
    document.getElementById("quiz-container").style.display = "none";
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.style.display = "block";

    document.getElementById("results-score").innerText = `${score}/5`;
    
    const title = document.getElementById("results-title");
    const desc = document.getElementById("results-desc");
    const formBox = document.getElementById("cert-form-box");
    const retryBox = document.getElementById("results-retry-btn-box");

    if (score >= 4) {
        title.innerText = "¡EXAMEN APROBADO!";
        title.style.color = "var(--color-success)";
        desc.innerText = `Obtuviste una calificación de ${score} respuestas correctas sobre 5. Eres apto para la certificación.`;
        formBox.style.display = "block";
        retryBox.style.display = "none";
        markActivityCompleted("act4");
    } else {
        title.innerText = "EXAMEN NO APROBADO";
        title.style.color = "var(--gcba-orange)";
        desc.innerText = `Respondiste correctamente ${score} de 5 preguntas. Necesitas 4 aciertos mínimos para aprobar.`;
        formBox.style.display = "none";
        retryBox.style.display = "block";
    }
}

function resetQuiz() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("results-container").style.display = "none";
    initQuiz();
}

// --- DIPLOMA CREATION ---
function generateCertificate() {
    const studentName = document.getElementById("student-name-input").value.trim();
    if (!studentName) {
        alert("Por favor, introduce tu nombre completo para imprimir en el certificado.");
        return;
    }

    // Hide evaluation results panel
    document.getElementById("results-container").style.display = "none";

    // Set Certificate details
    document.getElementById("cert-student-name").innerText = studentName.toUpperCase();
    document.getElementById("cert-dni").innerText = formatDni(courseState.student.dni);
    
    // Set Date
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    document.getElementById("cert-date").innerText = `${day}/${month}/${year}`;

    // Registration hash
    const randomHash = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("cert-hash").innerText = `CFL412-FP-${randomHash}`;

    // Display Printable certificate
    document.getElementById("certificate-print-view").style.display = "block";
}

// --- RESET COMPLETE COURSE ---
function resetAllCourse() {
    // Reset progress
    for (const key in courseState.progress) {
        courseState.progress[key] = false;
    }

    // Reset games
    courseState.act1Game.currentIndex = 0;
    courseState.act1Game.score = 0;
    courseState.act1Game.completed = false;

    for (const key in courseState.act2Game.inspected) {
        courseState.act2Game.inspected[key] = null;
        const targetDot = document.getElementById(`dot-${key}`);
        const listElement = document.getElementById(`list-ins-${key}`);
        if (targetDot) targetDot.className = "moto-target-dot";
        if (listElement) {
            listElement.className = "pending";
            listElement.querySelector("span").innerText = "Pendiente";
        }
    }
    document.getElementById("ins-completed-count").innerText = "0 / 5";

    for (const key in courseState.act3Game.equipped) {
        courseState.act3Game.equipped[key] = false;
        const button = document.getElementById(`item-${key}`);
        if (button) button.classList.remove("equipped");
    }
    document.getElementById("eq-casco").style.display = "none";
    document.getElementById("eq-campera").style.display = "none";
    document.getElementById("eq-reflective-vest").style.display = "none";
    document.getElementById("eq-guantes").style.display = "none";
    document.getElementById("eq-calzado").style.display = "none";
    document.getElementById("avatar-feedback-text").innerText = "Comienza a colocar el equipo sobre el conductor.";

    // Hide certificate print and reset quiz displays
    document.getElementById("certificate-print-view").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("results-container").style.display = "none";
    
    // Collapse all chapters
    document.querySelectorAll(".chapter").forEach(cap => {
        cap.classList.remove("active");
    });

    updateProgressUI();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
}
