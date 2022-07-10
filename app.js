
Vue.component("mi-tabla", {
    props: {
        titulos: {
            type: Array,
            required: true
        },


        products: {
            type: Array,
        },

        estilo : {
            type: Object,
        }

    },
      template: `
    <div>
              
    <h1 class="text-center">Cerveza artesanal</h1>
         <table class=" table table-success">
           <thead class= "thead-light">
              <tr >
                 <th :style="estilo"  v-for= "(item, i) in titulos" :key="i"> {{ item }}    </th>
                 
              </tr>
           </thead>
           <tbody>
           <tr  v-for="(product, i) in products" :key="product.id">
             <td>{{ product.id}}</td>
             <td>{{ product.nombre }}</td>
             <td>{{ product.sabor }}</td>
             <td> $ {{ product.precio }}</td>
           <tr/>
         </tbody>
         </table>
    </div>
    
    `

});


var app = new Vue({
    el: "#app",
    data: {

        titulos: ["ID", "Nombre", "Sabor", "Precio"],





        products: [



            {
                id: 1,
                nombre: "Honey",
                sabor: "Dulce",
                precio: 350,

            },

            {
                id: 2,
                nombre: "Blonde",
                sabor: "Amarga",
                precio: 400,
            },
           

            {
                id: 3,
                nombre: "Ipa",
                sabor: "Amarga",
                precio: 400,

            },

        ],

        miEstilo: {"background": "yellow"},


    }
});