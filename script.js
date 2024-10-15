document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/api/dados');
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados');
    }
    const data = await response.json();
    const dadosDiv = document.getElementById('dados');
    dadosDiv.innerHTML = `
      <p>Data: ${new Date().toLocaleDateString()}</p>
      <p>Nível: ${data.Nivel}%</p>
      <p>Volume: ${data.Volume} hm³</p>
    `;
  } catch (error) {
    console.error('Erro:', error);
    const dadosDiv = document.getElementById('dados');
    dadosDiv.innerHTML = '<p>Erro ao carregar os dados.</p>';
  }
});
