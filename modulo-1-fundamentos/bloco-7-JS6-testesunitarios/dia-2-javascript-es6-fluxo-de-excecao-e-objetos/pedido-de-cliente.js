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
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const name = order.name;
    const phone = order.phoneNumber;
    const address = order.address.street;
    const number = order.address.number;
    const apartment = order.address.apartment;


  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phone}, R. ${address} ,Num: ${number},AP ${apartment}.`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newBuyer = order.name = 'Luiz Silva';
    const pizzaType = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    const newPrice = order.payment = "R$ 50,00"


    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzaType} e ${drinks} é ${newPrice}.`)
  }
  
  orderModifier(order);