document.getElementById("teste-vocacional").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Coletando as respostas das questões
    const questao1 = document.querySelector('input[name="questao1"]:checked');
    const questao2 = document.querySelector('input[name="questao2"]:checked');
    const questao3 = document.querySelector('input[name="questao3"]:checked');
    const questao4 = document.querySelector('input[name="questao4"]:checked');

    // Verificando se todas as perguntas foram respondidas
    if (!questao1 || !questao2 || !questao3 || !questao4) {
        alert("Por favor, responda todas as perguntas.");
        return;
    }

    let resultado = "";

    // Resultados detalhados por área
    if (questao1.value === "Tecnologia" && questao3.value === "Inovação") {
        resultado = "Você parece ter grande interesse em Tecnologia, com foco em inovação. Áreas como **Desenvolvimento de Software**, **Inteligência Artificial** ou **Segurança da Informação** podem ser ideais para você, onde sua criatividade e capacidade analítica serão bem aproveitadas.";
    } else if (questao1.value === "Engenharia" && questao3.value === "Desafios" && questao4.value === "Indústria") {
        resultado = "A Engenharia, especialmente em setores como **Engenharia Mecânica**, **Engenharia Elétrica** ou **Engenharia de Produção**, parece ser o melhor caminho. Você terá a oportunidade de enfrentar desafios e otimizar processos industriais.";
    } else if (questao1.value === "Ciências Humanas" && questao2.value === "Comunicativa" && questao4.value === "Locais criativos") {
        resultado = "Você pode explorar carreiras nas **Ciências Humanas**, como **Jornalismo**, **Publicidade e Propaganda** ou **Relações Públicas**, onde sua habilidade de comunicação será essencial em ambientes dinâmicos e criativos.";
    } else if (questao1.value === "Saúde" && questao2.value === "Organizada" && questao3.value === "Trabalhar com pessoas") {
        resultado = "Uma carreira na área da **Saúde**, como **Medicina**, **Enfermagem** ou **Fisioterapia**, pode ser ideal para você. Trabalhar com pessoas e ajudar diretamente no bem-estar delas será uma forte motivação para você.";
    } else if (questao1.value === "Artes" && questao2.value === "Criativa" && questao4.value === "Locais criativos") {
        resultado = "Você parece ter aptidão para as **Artes**, como **Design Gráfico**, **Artes Visuais** ou **Música**. Seu talento criativo poderá florescer em ambientes que incentivam a expressão artística e a inovação.";
    } else if (questao1.value === "Administração" && questao2.value === "Líder" && questao3.value === "Alta remuneração") {
        resultado = "Carreiras em **Administração**, como **Gestão de Empresas**, **Empreendedorismo** ou **Recursos Humanos**, podem ser uma excelente escolha para você. Suas habilidades de liderança e foco em resultados serão fundamentais para alcançar o sucesso financeiro.";
    } else if (questao1.value === "Tecnologia" && questao2.value === "Analítica" && questao3.value === "Desafios") {
        resultado = "A área de **Engenharia de Software**, **Ciência de Dados** ou **Análise de Sistemas** parece ideal para você. Seu foco em desafios e habilidades analíticas farão de você um especialista em resolver problemas complexos.";
    } else {
        resultado = "Você tem aptidões variadas! Considere explorar múltiplas áreas até encontrar a que mais lhe interessa, como **Educação**, **Marketing**, **Finanças** ou **Direito**.";
    }

    // Exibindo o resultado
    document.getElementById("mensagem-resultado").innerText = resultado;
    document.getElementById("resultado").style.display = "block";
});
