// $('.portfolio-button').mousedown(function(){
//     timeout = setInterval(function(){
//         window.scrollBy(0,-1); // May need to be -1 to go down
//     }, 0); // Play around with this number. May go too fast

//     return false;
// });

document.addEventListener('DOMContentLoaded', function() {

    // =========================================================
    // 1. Skill Card Toggle Functionality (Your existing code)
    // =========================================================
    const toggleSkillsButton = document.getElementById('toggleSkillsButton');
    const moreSkillsContainer = document.getElementById('more-skills-container');

    if (toggleSkillsButton && moreSkillsContainer) {
        toggleSkillsButton.addEventListener('click', function() {
            moreSkillsContainer.classList.toggle('is-hidden');
            if (moreSkillsContainer.classList.contains('is-hidden')) {
                toggleSkillsButton.textContent = 'Show More Skills';
            } else {
                toggleSkillsButton.textContent = 'Show Less Skills';
            }
        });
    }

    // =========================================================
    // 2. Portfolio Card Toggle Functionality (NEW CODE HERE)
    // =========================================================
    const togglePortfolioButton = document.getElementById('togglePortfolioButton'); // Get the new button
    const morePortfolioCards = document.getElementById('more-portfolio-cards'); // Get the new container

    if (togglePortfolioButton && morePortfolioCards) { // Check if both elements exist
        togglePortfolioButton.addEventListener('click', function() {
            morePortfolioCards.classList.toggle('is-hidden'); // Toggle the 'is-hidden' class

            // Update the button text
            if (morePortfolioCards.classList.contains('is-hidden')) {
                togglePortfolioButton.textContent = 'Show More';
            } else {
                togglePortfolioButton.textContent = 'Show Less';
            }
        });
    }

    // =========================================================
    // 3. Anti-Copying Measures (Your existing code)
    // =========================================================
    // ... (Keep the rest of your anti-copying code here) ...
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });

    document.addEventListener('selectstart', function(event) {
        event.preventDefault();
    });

    function checkDevToolsSize() {
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold ||
            window.outerHeight - window.innerHeight > threshold) {
            console.warn("Developer tools are open! Content protection activated.");
            document.body.style.userSelect = 'none';
            document.body.style.pointerEvents = 'none';
            document.body.style.opacity = '0.5';
        } else {
            document.body.style.userSelect = '';
            document.body.style.pointerEvents = '';
            document.body.style.opacity = '1';
        }
    }

    checkDevToolsSize();
    window.addEventListener('resize', checkDevToolsSize);

    document.onkeydown = function(e) {
        if (e.keyCode == 123 ||
            (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) ||
            (e.ctrlKey && e.keyCode == 85)) {
            console.warn("Developer tools keybind detected! Action prevented.");
            e.preventDefault();
            return false;
        }
    };
});