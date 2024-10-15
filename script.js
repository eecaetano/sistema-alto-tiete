document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/dados');
  const data = await response.json();
  const dadosDiv = document.getElementById('dados');
  dadosDiv.innerHTML = `
    <p>Data: ${new Date().toLocaleDateString()}</p>
    <p>Nível: ${data.Nivel}%</p>
    <p>Volume: ${data.Volume} hm³</p>
  `;
});
