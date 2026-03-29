        function switchTab(version) {
            document.querySelectorAll('.tab-panel').forEach(panel => {
                if (panel.id === 'panel-' + version) {
                    panel.removeAttribute('hidden');
                    panel.classList.add('active');
                } else {
                    panel.setAttribute('hidden', '');
                    panel.classList.remove('active');
                }
            });
            document.querySelectorAll('.tab-btn').forEach(btn => {
                const isActive = btn.id === 'tab-' + version;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });
        }