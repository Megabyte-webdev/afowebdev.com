 const ctxRadar = document.getElementById('skillsRadar');
        const ctxBar = document.getElementById('impactBar');

        Chart.defaults.color = '#94a3b8';
        Chart.defaults.font.family = 'Plus Jakarta Sans';

        new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['React/Next.js', 'TypeScript', 'System Design', 'UI/UX', 'Performance', 'Security'],
                datasets: [{
                    data: [98, 92, 90, 85, 95, 88],
                    backgroundColor: 'rgba(45, 212, 191, 0.1)',
                    borderColor: '#2dd4bf',
                    borderWidth: 2,
                    pointBackgroundColor: '#2dd4bf'
                }]
            },
            options: {
                scales: { r: { grid: { color: 'rgba(255,255,255,0.05)' }, angleLines: { color: 'rgba(255,255,255,0.05)' }, ticks: { display: false } } },
                plugins: { legend: { display: false } },
                maintainAspectRatio: false
            }
        });

        new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['UX Speed', 'Conversion', 'Security', 'Code Quality'],
                datasets: [{
                    label: 'Improvement %',
                    data: [45, 30, 90, 75],
                    backgroundColor: ['#2dd4bf', '#818cf8', '#fb923c', '#34d399'],
                    borderRadius: 8
                }]
            },
            options: {
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: { 
                    x: { grid: { display: false }, border: { display: false } },
                    y: { grid: { display: false }, border: { display: false } }
                },
                maintainAspectRatio: false
            }
        });
