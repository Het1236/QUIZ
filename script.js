   const handleclick = () => {
        // Check if all questions have been answered
        for (let i = 1; i <= 5; i++) {
            const options = document.getElementsByName(`question${i}`);
            let isAnswered = false;
    
            // Check if any option is selected
            for (let option of options) {
                if (option.checked) {
                    isAnswered = true;
                    break;
                }
            }
    
            if (!isAnswered) {
                alert("Please select an option for each question.");
                return;
            }
        }
    
        // Correct answers
        const correctAnswers = [1, 1, 1, 1, 4];
        let score = 0;
    
        // Calculate the score
        for (let i = 1; i <= 5; i++) {
            const options = document.getElementsByName(`question${i}`);
            for (let option of options) {
                if (option.checked && parseInt(option.value) === correctAnswers[i - 1]) {
                    score++;
                    break;
                }
            }
        }
    
        // Display the result
        alert(`You scored ${score} out of ${correctAnswers.length}!`);
    };
    
    

