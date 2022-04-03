const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

// 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.

const customerInfo = (order) => {


    let endereco = Object.values(order.address);
    console.log(endereco);

    let deliverMessage = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone ${order.phoneNumber}, `;

    for (const value of endereco) {
        deliverMessage += `${value}, `;
    }
    return deliverMessage
}

console.log(customerInfo(order));


// 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.


const orderModifier = (order) => {

    // Modificações no objeto
    order.name = 'Luiz Silva';
    order.order.drinks.price = 5;

    const bebida = order.order.drinks.coke.type;
    const total = order.order.drinks.price + order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price;


    let orderInfo = `Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e ${bebida} é $RS${total}`;


    return orderInfo
}

console.log(orderModifier(order));