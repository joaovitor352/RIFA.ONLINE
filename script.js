document.getElementById('purchase-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let quantity = parseInt(document.getElementById('ticket-quantity').value);
    let total = quantity * 5.00;
    document.getElementById('ticket-count').textContent = quantity;
    document.getElementById('total-amount').textContent = total.toFixed(2);

    // Exemplo de log para verificar o nome e e-mail (pode ser removido depois)
    console.log(`Nome: ${name}, E-mail: ${email}`);
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('purchase-form');
    const ticketQuantityInput = document.getElementById('ticket-quantity');
    const ticketCountSpan = document.getElementById('ticket-count');
    const totalAmountSpan = document.getElementById('total-amount');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const quantity = parseInt(ticketQuantityInput.value, 10);
        const pricePerTicket = 5; // Preço por bilhete em R$
        const totalAmount = quantity * pricePerTicket;

        ticketCountSpan.textContent = quantity;
        totalAmountSpan.textContent = totalAmount.toFixed(2);

        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
        // Por exemplo, usando fetch API ou XMLHttpRequest
        alert(`Você comprou ${quantity} bilhete(s) no valor total de R$ ${totalAmount.toFixed(2)}`);

        // Se o envio do formulário for necessário, remova o event.preventDefault()
        // form.submit();
    });
});
