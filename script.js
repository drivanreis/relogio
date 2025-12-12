function atualizar() {
    const now = new Date();

    // Hora HH:MM:SS
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('hora').textContent = `${h}:${m}:${s}`;

    // Dia da semana (3 letras, maiúsculas)
    const semanas = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
    const diaSemana = semanas[now.getDay()];
    document.getElementById('semana').textContent = diaSemana;

    // Dia / Mês / Ano
    const dia = String(now.getDate()).padStart(2, '0');
    const mes = String(now.getMonth() + 1).padStart(2, '0');
    const ano = String(now.getFullYear());

    document.getElementById('dia').textContent = dia;
    document.getElementById('mes').textContent = mes;
    document.getElementById('ano').textContent = ano;

    // Temperatura (por enquanto fixa)
    const temperatura = 27;
    document.getElementById('temp').textContent = `${temperatura}°C`;
}

setInterval(atualizar, 1000);
atualizar();
