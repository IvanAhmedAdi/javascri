class Frappe{
   
	constructor(pedido){
		this.frappe;
		this.tamanio = pedido.tamanio
		this.chips = pedido.chips
		this.crema = pedido.crema
		this.salsa = pedido.salsa

	}


	entregarFrappe(){

		if(this.tamanio.toUpperCase() == "GRANDE"){
			
			this.frappe = "Megafrappe"

		}else{
			
			this.frappe = "frappe comun"
		}


		if(this.crema != "" && this.salsa != "" ){
			
			return "Aqui tiene su " + this.frappe + " " + this.chips + " chips, sabor a " + this.crema + " y salsa de " + this.salsa
		
		}else if (this.crema != "" && this.salsa == "") {

			return "Aqui tiene su " + this.frappe + " " + this.chips + " chips, " + " sabor a " + this.crema
		
		}else{

			return "Aqui tiene su " + this.frappe + " " + this.chips + " chips" 

		}
		
	}

	
}

let frappe = new Frappe({tamanio:"",chips:"",crema:"",salsa:""})
frappe["tamanio"] = prompt("¿Qué tamaño de frappe queres?")
frappe.chips = prompt("¿Lo querés con o sin chispitas de chocolate?")
frappe.crema = prompt("¿Qué sabor de crema querrias?")
frappe.salsa = prompt("¿Que salsa le desea?")

console.log(frappe.entregarFrappe())
