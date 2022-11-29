type quantity = 4 | 6 | 8;

type Comum = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Doce = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow'

interface pizza {
  slices: quantity,
  flavor: string
}

interface pizzaCommon extends pizza {
  slices: quantity,
  flavor: Comum,
}

interface pizzaVegetarian extends pizza {
  slices: quantity,
  flavor: Vegetariana
}

interface pizzaSweet extends pizza {
  slices: 4,
  flavor: Doce
}

const pepperoni: pizza = { flavor: "Comum", slices: 8 };
console.log(pepperoni);

const marguerita: pizza = { flavor: 'marguerita', slices: 6 };
console.log(marguerita);

const nutela: pizza = { flavor: 'nutela', slices: 4 };
console.log(nutela);

const pizzaCalabresa: pizzaCommon = { flavor: "Calabresa", slices: 4}
const pizzaFrango: pizzaCommon = { flavor: "Frango", slices: 8}
const pizzaPepperoni: pizzaCommon = { flavor: "Pepperoni", slices: 6}

const pizzaMarguerita: pizzaVegetarian = { flavor: "Marguerita", slices: 6 }
const pizzaPalmito: pizzaVegetarian = { flavor: 'Palmito', slices: 8 };

const pizzaMarshmallow: pizzaSweet = { flavor: 'Marshmallow', slices: 4 };
