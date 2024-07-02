
document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let numAgents = parseInt(document.getElementById('numAgents').value);
    let agentSalary = parseFloat(document.getElementById('agentSalary').value);
    let chatInteractions = parseInt(document.getElementById('chatInteractions').value);
    let voiceInteractions = parseInt(document.getElementById('voiceInteractions').value);
    let resolutionTime = parseInt(document.getElementById('resolutionTime').value);

    let totalInteractions = chatInteractions + voiceInteractions;
    let licensingFee;
    if (numAgents<=50){
        licensingFee=24,000;
    } else{ 
        licensingFee = (((Math.floor(numAgents / 50)) * 2000) * 12);
          }
    let deliveryFee = 7000;

    let costPerInteraction;

    if (totalInteractions*.3 >= 100000) {
        costPerInteraction = 0.012;
    } else if (totalInteractions*.3 >= 50000) {
        costPerInteraction = 0.016;
    } else if (totalInteractions*.3 >= 10000) {
        costPerInteraction = 0.02;
    } else if (totalInteractions*.3 >= 0) {
        costPerInteraction = 0.024;
    } else {
        alert("Invalid interactions");
        return;
    }

    let aiCost = ((((chatInteractions + voiceInteractions) * 0.3) * 12) * costPerInteraction);
    let voiceTechnology = (((voiceInteractions * 12 * .3 * resolutionTime *.5) / 60) * 2.4);

    let totalAI = voiceTechnology + aiCost + licensingFee + deliveryFee;

    let normalCost = numAgents * agentSalary* 12;
    let newTotal = totalAI + (normalCost*.7);

    let profit = normalCost-newTotal;

    let daysSaved = Math.floor((((voiceInteractions + chatInteractions)*12*.3)*resolutionTime) / 1440);

    let ticketsResolved = Math.floor(((chatInteractions + voiceInteractions) * 12) * 0.3);

    document.getElementById('profit').textContent = profit.toFixed(2);
    document.getElementById('daysSaved').textContent = daysSaved;
    document.getElementById('ticketsResolved').textContent = ticketsResolved;
});
