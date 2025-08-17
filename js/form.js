//Get a Quote
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("quoteModal");
    const openButtons = ["openQuoteBtn", "getQuoteBtn"];
    const closeButton = document.getElementById("closeModal") || modal.querySelector(".close");

    // Open modal (any button)
    openButtons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener("click", () => {
                modal.classList.add("active");
                modal.style.display = "block"; // fallback
                document.body.style.overflow = "hidden"; // still blocks background
                modal.style.overflowY = "auto";          // but allow modal content to scroll
            });
        }
    });

    // Close modal (X button)
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            modal.classList.remove("active");
            modal.style.display = "none";
            document.body.style.overflow = ""; // restore scroll
        });
    }

    // Close when clicking backdrop
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
            modal.style.display = "none";
            document.body.style.overflow = "";
        }
    });
});


// Show urgent level only if Laptop Repair is selected
document.getElementById("service").addEventListener("change", function() {
    let urgentWrapper = document.getElementById("urgent-wrapper");
    if (this.value === "laptop-repair") {
        urgentWrapper.style.display = "block";
    } else {
        urgentWrapper.style.display = "none";
        document.getElementById("urgent-level").value = ""; // reset selection
    }
});

// Handle form submission
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading state
    const btn = document.querySelector('.submit-btn');
    btn.textContent = "Submitting...";
    btn.disabled = true;

    // Simulate async submission (replace with fetch/axios)
    setTimeout(() => {
        // Random success/fail for demo
        const success = Math.random() > 0.2;

        if (success) {
            document.getElementById('formSuccess').style.display = "block";
            document.getElementById('formError').style.display = "none";
            this.reset();
            // Hide success after 3 seconds
            setTimeout(() => {
                document.getElementById('formSuccess').style.display = "none";
            }, 3000);
        } else {
            document.getElementById('formSuccess').style.display = "none";
            document.getElementById('formError').style.display = "block";
            // Hide error after 3 seconds
            setTimeout(() => {
                document.getElementById('formError').style.display = "none";
            }, 3000);
        }

        // Reset button
        btn.textContent = "Get Quote";
        btn.disabled = false;
    }, 1500);
});



