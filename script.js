<script>
    function showTab(tabId) {
        document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

        const targetSection = document.getElementById(tabId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });

        if (event && event.currentTarget) {
            event.currentTarget.classList.add('active');
        }
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            const notify = document.createElement('div');
            notify.innerText = "Copied: " + text;

            Object.assign(notify.style, {
                position: 'fixed',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0, 255, 255, 0.9)',
                color: '#000',
                padding: '12px 24px',
                borderRadius: '50px',
                fontWeight: 'bold',
                zIndex: '9999',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                transition: 'opacity 0.4s ease'
            });

            document.body.appendChild(notify);

            setTimeout(() => {
                notify.style.opacity = '0';
                setTimeout(() => notify.remove(), 400);
            }, 2000);

        }).catch(err => {
            alert("Copied: " + text);
        });
    }
</script>